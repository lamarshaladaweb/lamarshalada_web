"use client";

import { useState, useEffect } from "react";
import { bettingSites, countries } from "@/data/bettingSites";

export default function BettingSites() {
  const [selectedCountry, setSelectedCountry] = useState("es");
  const [filteredBanners, setFilteredBanners] = useState(bettingSites);

  useEffect(() => {
    if (selectedCountry === "all") {
      setFilteredBanners(bettingSites);
    } else {
      setFilteredBanners(
        bettingSites.filter((banner) => banner.paises.includes(selectedCountry))
      );
    }
  }, [selectedCountry]);

  const currentCountryName =
    countries.find((c) => c.code === selectedCountry)?.name || "España";

  return (
    <section className="py-12 bg-[#040012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div className="w-full md:flex-1">
            <h2
              className="text-4xl font-bold text-left md:text-left"
              style={{
                color: "#f2e6ff",
                textShadow: "0 0 8px #9B30FF, 0 0 20px rgba(155,48,255,0.35)",
              }}
            >
              ¿Dónde apostar?
            </h2>
            <div className="flex md:justify-start justify-center mt-4">
              <div
                style={{
                  width: 140,
                  height: 6,
                  borderRadius: 6,
                  background: "linear-gradient(90deg, #9B30FF, #7B61FF)",
                  boxShadow: "0 0 14px #9B30FF, 0 0 28px rgba(155,48,255,0.25)",
                }}
              />
            </div>
          </div>

          <div className="w-full md:w-64">
            <select
              id="countryFilter"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-2 border border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-[#0b0620] text-[#e8ddff] font-medium"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredBanners.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredBanners.map((banner) => (
              <a
                key={banner.alt}
                href={banner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#0b0620] rounded-lg shadow-md transition-all duration-300 overflow-hidden flex items-center justify-center p-4 min-h-[150px]"
                style={{ border: "1px solid rgba(255,255,255,0.03)" }}
              >
                <img
                  src={banner.img}
                  alt={banner.alt}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {banner.bono && (
                  <div className="absolute inset-0 bg-[#2a003d]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[#f0e6ff] text-sm font-semibold text-center px-2">
                      {banner.bono}
                    </p>
                  </div>
                )}
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#cbbcff] text-lg">
              No hay casas de apuestas disponibles para {currentCountryName}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
