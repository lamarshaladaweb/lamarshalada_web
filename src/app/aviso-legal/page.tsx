export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#060b14] to-black">
      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-200">

        {/* Título */}
        <h1 className="text-4xl font-extrabold mb-10 text-center tracking-wide">
          <span className="bg-gradient-to-r text-white-400 bg-clip-text">
            Aviso Legal
          </span>
        </h1>

        {/* Contenedor */}
        <div className="space-y-8 bg-[#0b1220]/80 backdrop-blur rounded-2xl p-8 shadow-lg border border-white/5">

          <section>
            <h2 className="text-xl font-semibold text-white-400 mb-2">
              1. Titular del sitio
            </h2>
            <p className="leading-relaxed text-gray-300">
              <strong>Marca comercial:</strong> La Marshalada<br />
              <strong>Responsable:</strong> Marçal Gomez Biosca<br />
              <strong>Contacto:</strong> info@lamarshalada.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white-400 mb-2">
              2. Finalidad
            </h2>
            <p className="leading-relaxed text-gray-300">
              Este sitio web tiene como finalidad la promoción de casas de apuestas a
              través de enlaces de afiliados. No gestionamos apuestas ni fondos de
              usuarios directamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white-400 mb-2">
              3. Protección de datos
            </h2>
            <p className="leading-relaxed text-gray-300">
              No recopilamos datos personales de los usuarios. Los enlaces externos
              redirigen a plataformas de terceros, las cuales disponen de sus propias
              políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white-400 mb-2">
              4. Cookies
            </h2>
            <p className="leading-relaxed text-gray-300">
              Este sitio utiliza únicamente cookies técnicas necesarias para su
              correcto funcionamiento. No se emplean cookies de seguimiento ni
              publicitarias.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white-400 mb-2">
              5. Propiedad intelectual
            </h2>
            <p className="leading-relaxed text-gray-300">
              Todos los contenidos del sitio (textos, diseño, logotipos e identidad
              visual) son propiedad de Marçal Gomez Biosca, salvo aquellos pertenecientes
              a terceros, los cuales se utilizan con fines informativos o
              identificativos.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}