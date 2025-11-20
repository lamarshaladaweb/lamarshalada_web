"use client";

import { colaboradores } from "@/data/colaboradores";

export default function About() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          ¿Quién es Marshall?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={encodeURI("/Recursos/Colaboradores/Marshall-Director-de-orquesta.jpg")}
                alt="Marshall"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Text */}
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Marshall es un apasionado de las apuestas deportivas, el análisis de partidos y la creación de contenido en Twitch.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Con un toque de humor y un equipo de colaboradores, lleva las apuestas a otro nivel, combinando estrategia, análisis y entretenimiento.
            </p>
            <p className="text-lg text-gray-600">
              Su comunidad confía en su criterio y experiencia para tomar decisiones informadas en el mundo de las apuestas deportivas.
            </p>
          </div>
        </div>

        {/* Collaborators Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Colaboradores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {colaboradores.map((colaborador) => (
              <div
                key={colaborador.nombre}
                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => window.open(colaborador.X, "_blank")}
              >
                <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={encodeURI(colaborador.img)}
                    alt={colaborador.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Tooltip overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 flex items-center justify-center transition-all duration-300">
                    <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold text-sm">{colaborador.info}</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-center font-semibold text-gray-900 text-sm truncate">
                    {colaborador.nombre}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
