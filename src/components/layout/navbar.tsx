"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Produtos", href: "/produtos" },
    { label: "Soluções", href: "/servicos" },
    { label: "Engenharia", href: "/tecnologia" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Logo size="md" />

        {/* Center: Agex Glassmorphic Pill Nav Container */}
        <nav
          className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0d1424]/80 border border-blue-500/25 shadow-lg backdrop-blur-xl"
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-blue-600/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Pill CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contato"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all duration-200 shadow-md shadow-blue-600/30 active:scale-95 cursor-pointer"
          >
            <span>Falar com a Vision</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-full bg-[#0d1424] border border-blue-500/30 shadow-md backdrop-blur-md transition-colors"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#050811]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto z-50">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "bg-blue-600/30 text-cyan-300 border border-cyan-400/40"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10">
            <Link
              href="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-blue-600/30"
            >
              <span>Falar com a Vision Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
