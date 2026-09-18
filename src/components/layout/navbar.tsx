"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070A12]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 flex items-center justify-center text-white font-extrabold text-sm shadow-[0_0_20px_rgba(0,102,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all">
            VS
          </div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-sm font-extrabold tracking-wider text-white font-mono">VISION</span>
            <span className="text-[10px] tracking-widest text-slate-400 font-mono">SOLUTIONS</span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
          <Link href="/" className="text-white hover:text-cyan-400 transition-colors">VS</Link>
          <Link href="#vision" className="hover:text-white transition-colors">Vision</Link>
          <Link href="#produtos" className="hover:text-white transition-colors">Produtos</Link>
          <Link href="#solucoes" className="hover:text-white transition-colors">Soluções</Link>
          <Link href="#engenharia" className="hover:text-white transition-colors">Engenharia</Link>
          <Link href="#empresa" className="hover:text-white transition-colors">Empresa</Link>
          <Link href="#contato" className="hover:text-white transition-colors">Contato</Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contato"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0E1528] border border-blue-500/40 text-cyan-300 hover:text-white text-xs font-semibold shadow-[0_0_15px_rgba(0,102,255,0.2)] hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:border-cyan-400 transition-all duration-200"
          >
            <span>Falar com a Vision</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900/60 border border-white/10 transition-colors"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#070A12]/95 border-b border-white/10 px-6 py-6 flex flex-col gap-4 backdrop-blur-2xl">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-sm text-white hover:text-cyan-400">VS</Link>
          <Link href="#vision" onClick={() => setMobileOpen(false)} className="text-sm text-slate-300 hover:text-cyan-400">Vision</Link>
          <Link href="#produtos" onClick={() => setMobileOpen(false)} className="text-sm text-slate-300 hover:text-cyan-400">Produtos</Link>
          <Link href="#solucoes" onClick={() => setMobileOpen(false)} className="text-sm text-slate-300 hover:text-cyan-400">Soluções</Link>
          <Link href="#engenharia" onClick={() => setMobileOpen(false)} className="text-sm text-slate-300 hover:text-cyan-400">Engenharia</Link>
          <Link href="#empresa" onClick={() => setMobileOpen(false)} className="text-sm text-slate-300 hover:text-cyan-400">Empresa</Link>
          <Link href="#contato" onClick={() => setMobileOpen(false)} className="text-sm text-slate-300 hover:text-cyan-400">Contato</Link>
          <Link
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30"
          >
            Falar com a Vision →
          </Link>
        </div>
      )}
    </header>
  );
}
