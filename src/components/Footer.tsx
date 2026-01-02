"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <Link
            href="/terminos"
            className="text-gray-400 hover:text-white transition-colors font-semibold"
          >
            Términos y Condiciones
          </Link>
          <Link
            href="/aviso-legal"
            className="text-gray-400 hover:text-white transition-colors font-semibold"
          >
            Aviso legal
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center mb-12 py-6 border-y border-gray-700">
          <p className="text-gray-400 text-sm">
            © {currentYear} La Marshalada. Todos los derechos reservados.
          </p>
        </div>

        {/* Juego Seguro Banner */}
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="relative">
            <img
              src="/Recursos/Logos_Banners/Banner_Juego_Seguro.png"
              alt="Banner Juego Seguro"
              className="w-full h-auto"
              useMap="#bannerMap"
            />
            <map name="bannerMap">
              <area
                shape="rect"
                coords="0,5,175,40%"
                href="https://datos.gob.es/es/aplicaciones/jugar-bien"
                target="_blank"
                rel="noopener noreferrer"
                title="Juega con responsabilidad"
              />
              <area
                shape="rect"
                coords="485,15,566,30%"
                href="https://www.ordenacionjuego.es/participantes-juego/juego-seguro"
                target="_blank"
                rel="noopener noreferrer"
                title="Juego seguro"
              />
              <area
                shape="rect"
                coords="576,15,691,30%"
                href="https://www.ordenacionjuego.es/participantes-juego/juego-seguro/rgiaj"
                target="_blank"
                rel="noopener noreferrer"
                title="Juego autorizado"
              />
            </map>
          </div>
        </div>
      </div>
    </footer>
  );
}
