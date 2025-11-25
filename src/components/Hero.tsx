"use client";
 
import { useEffect, useState } from "react";

export default function Hero() {
  const [loading, setLoading] = useState(true);
  const [lastStreamText, setLastStreamText] = useState("Último directo: información no disponible");
  const [nextStreamText, setNextStreamText] = useState("Próximo directo: información no disponible");

  useEffect(() => {
    const formatDateTime = (iso: string) =>
      new Date(iso).toLocaleString("es-ES", {
        day: "2-digit",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
      });

    const fetchData = async () => {
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
        } else {
          setNextStreamText("Próximo directo: sin horario programado");
        }
      } catch (error) {
        console.error("Error fetching Twitch info for Hero:", error);
        setLastStreamText("Último directo: información no disponible");
        setNextStreamText("Próximo directo: información no disponible");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://ik.imagekit.io/sqk5tlsdk/Nov_19__1535_24s_202511191626_smpdc.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            APUESTAS, HUMOR,<br />
            ANÁLISIS PROFESIONAL
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-light">
            Convierte en el ganador con la marshalada,los locos que lo cambiaron todo.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="https://www.twitch.tv/marshalada"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7FFF00] hover:bg-[#6FDF00] text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 inline-block"
            >
              VER CANAL AHORA
            </a>
          </div>

          {/* Last Broadcast Info */}
          <div className="text-base sm:text-lg font-light">
            {loading ? (
              <>Cargando información de los directos...</>
            ) : (
              <>
                <div>{lastStreamText}</div>
                <div>{nextStreamText}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
