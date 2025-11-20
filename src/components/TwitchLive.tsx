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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Último directo
        </h2>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {loading ? (
              <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center animate-pulse">
                <p className="text-gray-600">Cargando estado del directo...</p>
              </div>
            ) : isLive ? (
              <iframe
                src="https://player.twitch.tv/?channel=marshalada&parent=lamarshalada.com"
                frameBorder="0"
                allowFullScreen
                className="w-full aspect-video rounded-lg shadow-xl"
              ></iframe>
            ) : (
              <img
                src="/Recursos/off.jpg"
                alt="El canal no está en directo"
                className="w-full rounded-lg shadow-xl"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
