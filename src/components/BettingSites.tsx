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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <h2 className="text-4xl font-bold text-gray-900">¿Dónde apostar?</h2>
          <div className="w-full md:w-64">
            <select
              id="countryFilter"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900 font-medium"
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
                className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex items-center justify-center p-4 min-h-[150px]"
              >
                <img
                  src={banner.img}
                  alt={banner.alt}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                {banner.bono && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-semibold text-center px-2">
                      {banner.bono}
                    </p>
                  </div>
                )}
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay casas de apuestas disponibles para {currentCountryName}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
