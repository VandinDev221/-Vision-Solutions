"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Produtos", href: "/produtos" },
    { label: "Soluções", href: "/servicos" },
    { label: "Engenharia", href: "/tecnologia" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 sm:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left Placeholder for symmetry */}
        <div className="w-16 hidden sm:block" />

        {/* Center: Monogram Square Logo (Matching 'H' Badge in Video 1080p.mp4) */}
        <Link href="/" className="inline-flex items-center justify-center">
          <div className="w-10 h-10 rounded-sm bg-white text-black font-extrabold font-mono text-base flex items-center justify-center shadow-2xl tracking-tighter hover:scale-105 transition-transform cursor-pointer">
            VS
          </div>
        </Link>

        {/* Right: Minimalist 'menu' trigger (Matching Video Header) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-xs font-mono text-cyan-400 hover:text-white uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-colors"
          aria-label="Abrir Menu"
        >
          <span>menu</span>
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-0 bg-[#05080e]/96 backdrop-blur-2xl z-50 flex flex-col justify-between p-8 sm:p-16">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-10 h-10 rounded-sm bg-white text-black font-extrabold font-mono text-base flex items-center justify-center">
                VS
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 cursor-pointer"
            >
              <span>fechar</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 max-w-xl mx-auto text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl sm:text-4xl font-bold font-sans tracking-tight transition-colors ${
                  pathname === link.href ? "text-cyan-400" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-center font-mono text-xs text-slate-500">
            © VISION SOLUTIONS — SOFTWARE HOUSE &amp; SAAS STUDIO
          </div>
        </div>
      )}
    </header>
  );
};
