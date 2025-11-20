"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SocialIcon, socialLinksData } from "./SocialIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img 
              src="/Recursos/Logos_Banners/LAMARSHALADA_LOGO2.png" 
              alt="Logo de La Marshalada" 
              className="h-24 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-white">La Marshalada</h1>
              <p className="text-xs text-white/70">Deportes, apuestas y humor.</p>
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-5">
            {socialLinksData.map((link) => (
              <SocialIcon 
                key={link.icon}
                icon={link.icon} 
                url={link.url} 
                label={link.label} 
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Social Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="flex justify-center space-x-5 pt-4">
              {socialLinksData.map((link) => (
                <SocialIcon 
                  key={link.icon}
                  icon={link.icon} 
                  url={link.url} 
                  label={link.label} 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
