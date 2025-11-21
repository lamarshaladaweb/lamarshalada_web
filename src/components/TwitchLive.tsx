"use client";

import { useEffect, useState } from "react";

export default function TwitchLive() {
  const [isLive, setIsLive] = useState<boolean | null>(null);
  const [statusLoading, setStatusLoading] = useState(true);
  const [lastStreamText, setLastStreamText] = useState(
    "Último directo: información no disponible"
  );
  const [nextStreamText, setNextStreamText] = useState(
    "Próximo directo: información no disponible"
  );
  const [infoLoading, setInfoLoading] = useState(true);
  const [nextStreamStart, setNextStreamStart] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    const fetchStreamStatus = async () => {
      try {
        const response = await fetch("https://api.lamarshalada.com/api/stream-status");
        const data = await response.json();
        setIsLive(data.isLive);
      } catch (error) {
        console.error("Error fetching stream status:", error);
        setIsLive(false);
      } finally {
        setStatusLoading(false);
      }
    };

    fetchStreamStatus();
    const interval = setInterval(fetchStreamStatus, 30000); // Actualizar cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const formatDateTime = (iso: string) =>
      new Date(iso).toLocaleString("es-ES", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      });

    const fetchStreamInfo = async () => {
      try {
        const [lastRes, nextRes] = await Promise.all([
          fetch("https://api.lamarshalada.com/api/twitch-last-stream"),
          fetch("https://api.lamarshalada.com/api/twitch-next-stream"),
        ]);

        const lastData = await lastRes.json();
        const nextData = await nextRes.json();

        if (lastData && lastData.found && lastData.createdAt) {
          setLastStreamText(`Último directo: ${formatDateTime(lastData.createdAt)}`);
        } else {
          setLastStreamText("Último directo: sin VOD disponible");
        }

        if (nextData && nextData.found && nextData.startTime) {
          setNextStreamText(`Próximo directo: ${formatDateTime(nextData.startTime)}`);
          setNextStreamStart(nextData.startTime);
          setCountdownFinished(false);
        } else {
          setNextStreamText("Próximo directo: sin horario programado");
          setNextStreamStart(null);
          setCountdownFinished(false);
        }
      } catch (error) {
        console.error("Error fetching Twitch info for TwitchLive:", error);
        setLastStreamText("Último directo: información no disponible");
        setNextStreamText("Próximo directo: información no disponible");
        setNextStreamStart(null);
        setCountdownFinished(false);
      } finally {
        setInfoLoading(false);
      }
    };

    fetchStreamInfo();
  }, []);

  useEffect(() => {
    if (!nextStreamStart) {
      setTimeLeft(null);
      setCountdownFinished(false);
      return;
    }

    let intervalId: number;

    const updateCountdown = () => {
      const target = new Date(nextStreamStart).getTime();
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft(null);
        setCountdownFinished(true);
        setNextStreamText("¡Estamos en directo! Entra al canal y únete a la Marshalada.");
        if (intervalId) {
          clearInterval(intervalId);
        }
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    intervalId = window.setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [nextStreamStart]);

  return (
    <section className="py-12 bg-[#040012] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left column: title, text, info, countdown */}
          <div className="w-full lg:w-1/2">
            <h2
              className="text-4xl font-bold mb-6 text-center lg:text-left"
              style={{
                color: "#f2e6ff",
                textShadow: "0 0 8px #9B30FF, 0 0 20px rgba(155,48,255,0.35)",
              }}
            >
              Último directo
            </h2>

            {/* Neon decorative line under the title (purple) */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div
                style={{
                  width: 160,
                  height: 6,
                  borderRadius: 6,
                  background: "linear-gradient(90deg, #9B30FF, #7B61FF)",
                  boxShadow: "0 0 14px #9B30FF, 0 0 28px rgba(155,48,255,0.25)",
                }}
              />
            </div>

            <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left text-[#e9ddff] space-y-4 mb-6">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                La Marshalada en directo
              </h3>
              <p className="text-base sm:text-lg">
                Cada stream es una mezcla de
                <span className="font-semibold text-[#7FFF00]"> apuestas en vivo</span>,
                <span className="font-semibold text-[#7FFF00]"> humor</span> y
                <span className="font-semibold text-[#7FFF00]"> análisis profesional</span>
                {" "}
                para que disfrutes y mejores tu juego junto a la comunidad.
              </p>
              <div className="text-sm sm:text-base font-medium">
                {infoLoading ? (
                  <>Cargando información de los directos...</>
                ) : (
                  <>
                    <div>{lastStreamText}</div>
                    <div>{nextStreamText}</div>
                  </>
                )}
              </div>
              {countdownFinished && (
                <div className="text-sm sm:text-base font-semibold text-[#7FFF00]">
                  ¡Estamos en directo! Haz clic en el reproductor para unirte al canal.
                </div>
              )}
            </div>

            {nextStreamStart && timeLeft && (
              <div className="mb-8">
                <div className="relative max-w-xl mx-auto lg:mx-0 rounded-2xl border border-[#9B30FF]/60 bg-gradient-to-br from-[#190033] via-[#080016] to-[#020006] px-5 py-4 sm:px-6 sm:py-5 shadow-[0_0_40px_rgba(155,48,255,0.55)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#9B30FF] text-[0.6rem] sm:text-xs font-semibold tracking-[0.25em] uppercase text-black shadow-[0_0_18px_rgba(155,48,255,0.95)]">
                    Próximo directo en
                  </div>
                  <div className="mt-4 flex justify-center lg:justify-start gap-3 sm:gap-4">
                    <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-black/40 border border-[#9B30FF]/50 shadow-[0_0_24px_rgba(155,48,255,0.7)]">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#f2e6ff] tabular-nums">
                        {String(timeLeft.days).padStart(2, "0")}
                      </div>
                      <div className="text-[0.6rem] sm:text-xs uppercase tracking-wide text-[#b9a8ff]">
                        Días
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-black/40 border border-[#9B30FF]/50 shadow-[0_0_24px_rgba(155,48,255,0.7)]">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#f2e6ff] tabular-nums">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </div>
                      <div className="text-[0.6rem] sm:text-xs uppercase tracking-wide text-[#b9a8ff]">
                        Horas
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-black/40 border border-[#9B30FF]/50 shadow-[0_0_24px_rgba(155,48,255,0.7)]">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#f2e6ff] tabular-nums">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </div>
                      <div className="text-[0.6rem] sm:text-xs uppercase tracking-wide text-[#b9a8ff]">
                        Min
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-black/40 border border-[#9B30FF]/50 shadow-[0_0_24px_rgba(155,48,255,0.7)]">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#f2e6ff] tabular-nums">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </div>
                      <div className="text-[0.6rem] sm:text-xs uppercase tracking-wide text-[#b9a8ff]">
                        Seg
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right column: live player / off image */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="w-full max-w-4xl">
              {statusLoading ? (
                <div
                  className="rounded-lg aspect-video flex items-center justify-center animate-pulse"
                  style={{ background: "linear-gradient(180deg,#0b0216,#060013)" }}
                >
                  <p className="text-[#d9cfff]">Cargando estado del directo...</p>
                </div>
              ) : isLive ? (
                <iframe
                  src="https://player.twitch.tv/?channel=marshalada&parent=www.lamarshalada.com&parent=localhost"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full aspect-video rounded-lg"
                  style={{ boxShadow: "0 0 30px rgba(155,48,255,0.25)" }}
                ></iframe>
              ) : (
                <img
                  src="/Recursos/off.png"
                  alt="El canal no está en directo"
                  className="w-full rounded-lg"
                  style={{ boxShadow: "0 0 45px rgba(155,48,255,0.45)" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
