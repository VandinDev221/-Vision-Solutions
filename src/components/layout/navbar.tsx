"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 py-3.5 shadow-md shadow-slate-950/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Component */}
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/produtos" className="hover:text-white transition-colors">
            Produtos
          </Link>
          <Link href="/servicos" className="hover:text-white transition-colors">
            Serviços
          </Link>
          <Link href="/tecnologia" className="hover:text-white transition-colors">
            Tecnologia
          </Link>
          <Link href="/sobre" className="hover:text-white transition-colors">
            Sobre
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contato">
            <Button variant="glow" size="sm" className="font-semibold">
              Solicitar orçamento
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 mt-2 space-y-4">
          <nav className="flex flex-col gap-2 font-medium text-slate-200 text-base">
            <Link
              href="/produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Produtos</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
            <Link
              href="/servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Serviços</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
            <Link
              href="/tecnologia"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Tecnologia</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
            <Link
              href="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Sobre</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
          </nav>
          <div className="pt-2">
            <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="glow" className="w-full justify-center">
                Solicitar orçamento
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
