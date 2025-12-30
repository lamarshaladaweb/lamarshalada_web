export default function Terminos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#060b14] to-black">
      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-200">

        {/* Título */}
        <h1 className="text-4xl font-extrabold mb-10 text-center tracking-wide">
          <span className="bg-gradient-to-r text-white-400 bg-clip-text">
            Términos y Condiciones
          </span>
        </h1>

        {/* Contenedor */}
        <div className="space-y-8 bg-[#0b1220]/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-white/5">

          <section>
            <h2 className="text-xl font-semibold text-white-400 mb-2">
              1. Finalidad del sitio
            </h2>
            <p className="leading-relaxed text-gray-300">
              La Marshalada es un sitio web de carácter informativo y divulgativo sobre
              deportes, apuestas y entretenimiento. No somos una casa de apuestas ni
              gestionamos dinero de los usuarios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white-400 mb-2">
              2. Enlaces de afiliados
            </h2>
            <p className="leading-relaxed text-gray-300">
              Este sitio contiene enlaces de afiliación. Podemos recibir una comisión
              sin coste adicional para el usuario. No controlamos los términos ni
              promociones de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white-400 mb-2">
              3. Edad mínima y juego responsable
            </h2>
            <p className="leading-relaxed text-gray-300">
              Contenido exclusivo para mayores de 18 años. Recomendamos establecer
              límites, no perseguir pérdidas y apostar solo como entretenimiento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white-400 mb-2">
              4. Exención de responsabilidad
            </h2>
            <p className="leading-relaxed text-gray-300">
              No garantizamos la exactitud de cuotas o promociones. Las apuestas se
              realizan bajo la responsabilidad del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white-400 mb-2">
              5. Modificaciones
            </h2>
            <p className="leading-relaxed text-gray-300">
              Nos reservamos el derecho de modificar estos términos en cualquier momento.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}