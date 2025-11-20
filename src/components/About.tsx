"use client";

import { colaboradores } from "@/data/colaboradores";

export default function About() {
  return (
    <section
      className="relative py-16 px-4 sm:px-6 lg:px-8 md:min-h-screen"
      style={{
        backgroundImage:
          'linear-gradient(180deg, #000000 0%, #07110a 50%, #000000 100%), radial-gradient(ellipse at 20% 10%, rgba(127,255,0,0.03), transparent 40%)',
        color: "#e6f7e6",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Titles are shown inside the cards below (avoid duplicate heading) */}

          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
            {/* Card: Quién es Marshall */}
            <div
              className="rounded-xl p-6 bg-[#071025] mx-2 h-full"
              style={{
                border: "1px solid rgba(255,255,255,0.04)",
                boxShadow: "0 0 30px rgba(127,255,0,0.18), 0 0 60px rgba(127,255,0,0.08)",
              }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 h-full">
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-56 rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={encodeURI("/Recursos/Colaboradores/Marshall-Director-de-orquesta.jpg")}
                      alt="Marshall"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h4 className="text-2xl font-bold" style={{ color: "#e6f7e6" }}>
                    ¿Quién es Marshall?
                  </h4>
                  <div className="mt-2 mb-4 flex justify-start">
                    <div
                      style={{
                        width: 120,
                        height: 6,
                        borderRadius: 6,
                        background: "linear-gradient(90deg, #7FFF00, #6FDF00)",
                        boxShadow: "0 0 12px #7FFF00, 0 0 24px rgba(127,255,0,0.2)",
                      }}
                    />
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: "#d1e9d1" }}>
                    Marshall es un humano, hasta que no se demuestre lo contrario, padre de 3 mosqueteros/as, ilerdense, apasionado de las inversiones, veo mucho deporte, pero no practico ninguno.
                  </p>

                  <p className="text-lg leading-relaxed" style={{ color: "#d1e9d1" }}>
                    Hace más de 15 años empecé a juguetear con las apuestas deportivas, con el tiempo fui incrementando dicha actividad hasta que varias casas de apuestas me dijeron que no era bienvenido. Una vez expulsado de las más grandes tenía varias opciones; querellarme, emigrar o tomármelo todo más lúdico y gambler.
                  </p>

                  <p className="text-base" style={{ color: "#b8dcb8" }}>
                    Si vives en España no es posible vivir de las apuestas, que no te digan lo contrario. A veces nos ponemos serios pero apuesto por recreación y por gamblerismo.
                  </p>
                </div>
              </div>
            </div>

            {/* Card: Qué es la Marshalada */}
            <div
              className="rounded-xl p-6 bg-[#071025] mx-2 h-full"
              style={{
                border: "1px solid rgba(255,255,255,0.04)",
                boxShadow: "0 0 30px rgba(0,191,255,0.16), 0 0 60px rgba(0,191,255,0.06)",
              }}
            >
              <h4 className="text-2xl font-bold mb-3 text-center md:text-left" style={{ color: "#dff7ff" }}>
                ¿Qué es la Marshalada?
              </h4>
              <div className="mb-4 flex justify-center md:justify-start">
                <div
                  style={{
                    width: 120,
                    height: 6,
                    borderRadius: 6,
                    background: "linear-gradient(90deg, #00BFFF, #1E90FF)",
                    boxShadow: "0 0 12px #00BFFF, 0 0 24px rgba(0,191,255,0.18)",
                  }}
                />
              </div>

              <div className="space-y-3">
                <p className="text-lg leading-relaxed" style={{ color: "#d1e9d1" }}>
                  Marshall es La Marshalada, pero la Marshalada no es Marshall, o no solo.
                </p>

                <p className="text-lg leading-relaxed" style={{ color: "#d1e9d1" }}>
                  La Marshalada es un canal abierto para que todos los que nos puedan aportar cosas positivas se pasen a charlar con nosotros. Todos nos hacen crecer; des de los primeros que se pasaron, nuestros colaboradores más habituales y los que se han pasado solo vez para una charlita.
                </p>

                <p className="text-lg leading-relaxed" style={{ color: "#d1e9d1" }}>
                  La idea base es tratar todos los temas siempre de forma distendida, ya sean inversiones, apuestas... Y que el gran chat siempre aporte, sin él no podemos hacerlo.
                </p>
              </div>
            </div>
          </div>

        {/* Collaborators Section */}
        <div className="mt-20">
          <h3
            className="text-3xl font-bold mb-6 text-center"
            style={{
              color: "#dff7ff",
              textShadow: "0 0 8px #00BFFF, 0 0 16px rgba(0,191,255,0.35)",
            }}
          >
            Colaboradores
          </h3>

          {/* Neon decorative line under the title (blue) */}
          <div className="flex justify-center mb-10">
            <div
              style={{
                width: 160,
                height: 6,
                borderRadius: 6,
                background: "linear-gradient(90deg, #00BFFF, #1E90FF)",
                boxShadow: "0 0 14px #00BFFF, 0 0 28px rgba(0,191,255,0.25)",
              }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {colaboradores.map((colaborador) => (
              <div
                key={colaborador.nombre}
                className="group relative bg-[#071025] rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.04)" }}
                onClick={() => window.open(colaborador.X, "_blank")}
              >
                <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={encodeURI(colaborador.img)}
                    alt={colaborador.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Tooltip overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-[#002233]/70 flex items-center justify-center transition-all duration-300">
                      <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3">
                        <p className="text-[#e6f7ff] font-semibold text-sm">{colaborador.info}</p>
                      </div>
                    </div>
                </div>
                  <div className="p-3 bg-transparent">
                    <p className="text-center font-semibold text-[#bfe9ff] text-sm truncate">
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
