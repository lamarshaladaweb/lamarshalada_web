"use client";

export default function Hero() {
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
            Conviértete en gananror con Marshall, el tipster que cambió todo.
          </p>

          {/* CTA Button */}
          <div>
            <button className="bg-[#7FFF00] hover:bg-[#6FDF00] text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
              VER CANAL AHORA
            </button>
          </div>

          {/* Last Broadcast Info */}
          <div className="text-base sm:text-lg font-light">
            Último Directo: Hace 5 horas
          </div>
        </div>
      </div>
    </section>
  );
}
