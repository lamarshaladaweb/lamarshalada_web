"use client";

import React, { useEffect, useState } from "react";

const CONSENT_KEY = "lm_cookie_consent";

export default function CookieBar() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      setConsent(stored);
    } catch (e) {
      // ignore
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch (e) {}
    setConsent("accepted");
  };

  const reject = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "rejected");
    } catch (e) {}
    setConsent("rejected");
  };

  if (consent) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 max-w-3xl w-[92%] bg-black/90 backdrop-blur-md border border-green-700 rounded-lg shadow-2xl p-4 flex flex-col md:flex-row items-center gap-3"
      style={{ color: "#d1e9d1" }}
    >
      <div className="flex-1 text-sm">
        <p
          className="font-semibold text-lg"
          style={{ color: "#e6f7e6", textShadow: "0 0 8px #7FFF00" }}
        >
          Usamos cookies
        </p>
        <p className="mt-1">
          Utilizamos cookies para mejorar la experiencia, analizar tráfico y
          personalizar contenido. Puedes aceptar o rechazar su uso.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={accept}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold shadow"
          style={{ boxShadow: "0 0 8px #7FFF00" }}
        >
          Aceptar
        </button>

        <button
          onClick={reject}
          className="px-4 py-2 bg-transparent border border-gray-400 text-[#d1e9d1] rounded-md hover:bg-white/5"
        >
          Rechazar
        </button>

        <a
          href="/Aviso-legal/aviso-legal.html"
          target="_blank"
          rel="noreferrer"
          className="ml-2 text-sm text-green-300 underline"
        >
          Más info
        </a>
      </div>
    </div>
  );
}
