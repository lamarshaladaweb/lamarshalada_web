"use client";

import { useEffect, useState } from "react";

export default function TwitchLive() {
  const [isLive, setIsLive] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }
    };

    fetchStreamStatus();
    const interval = setInterval(fetchStreamStatus, 30000); // Actualizar cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-[#040012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold mb-6 text-center"
          style={{
            color: "#f2e6ff",
            textShadow: "0 0 8px #9B30FF, 0 0 20px rgba(155,48,255,0.35)",
          }}
        >
          Último directo
        </h2>

        {/* Neon decorative line under the title (purple) */}
        <div className="flex justify-center mb-10">
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

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {loading ? (
              <div className="rounded-lg aspect-video flex items-center justify-center animate-pulse" style={{ background: "linear-gradient(180deg,#0b0216,#060013)" }}>
                <p className="text-[#d9cfff]">Cargando estado del directo...</p>
              </div>
            ) : isLive ? (
              <iframe
                src="https://player.twitch.tv/?channel=marshalada&parent=lamarshalada.com"
                frameBorder="0"
                allowFullScreen
                className="w-full aspect-video rounded-lg"
                style={{ boxShadow: "0 0 30px rgba(155,48,255,0.25)" }}
              ></iframe>
            ) : (
              <img
                src="/Recursos/off.jpg"
                alt="El canal no está en directo"
                className="w-full rounded-lg"
                style={{ boxShadow: "0 0 24px rgba(155,48,255,0.14)" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
