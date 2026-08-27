"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Code2 } from "lucide-react";

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
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1px] shadow-sm group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1">
              Vision <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Solutions</span>
            </span>
          </div>
        </Link>

        {/* Desktop Links: Produtos, Soluções, Tecnologia, Sobre */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#produtos" className="hover:text-white transition-colors">
            Produtos
          </a>
          <a href="#solucoes" className="hover:text-white transition-colors">
            Soluções
          </a>
          <a href="#tecnologia" className="hover:text-white transition-colors">
            Tecnologia
          </a>
          <a href="#processo" className="hover:text-white transition-colors">
            Sobre
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contato">
            <Button variant="glow" size="sm" className="font-semibold">
              Solicitar orçamento
            </Button>
          </a>
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
            <a
              href="#produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Produtos</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a
              href="#solucoes"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Soluções</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a
              href="#tecnologia"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Tecnologia</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
            <a
              href="#processo"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Sobre</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
          </nav>
          <div className="pt-2">
            <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="glow" className="w-full justify-center">
                Solicitar orçamento
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
