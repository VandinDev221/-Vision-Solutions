"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X, Rocket, ChevronRight, Layers } from "lucide-react";
import { saasProducts } from "@/data/saas-products";

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
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-indigo-950/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Rocket className="w-5 h-5 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Vision <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Solutions</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400 -mt-1">
              Software House & Multi-SaaS Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#saas" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <Layers className="w-4 h-4 text-indigo-400" />
            Nossos SaaS ({saasProducts.length})
          </a>
          <a href="#sob-medida" className="hover:text-cyan-400 transition-colors">
            Software Sob Medida
          </a>
          <a href="#tecnologia" className="hover:text-cyan-400 transition-colors">
            Engenharia & Stack
          </a>
          <a href="#depoimentos" className="hover:text-cyan-400 transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="hover:text-cyan-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contato">
            <Button variant="glow" size="sm">
              <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
              Solicitar Software / Demo
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-6 mt-2 space-y-4">
          <nav className="flex flex-col gap-3 font-medium text-slate-200 text-base">
            <a
              href="#saas"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between text-indigo-300"
            >
              <span>Nossos SaaS ({saasProducts.length} Produtos)</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#sob-medida"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Software Sob Medida</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#tecnologia"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Engenharia & Stack</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Depoimentos</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl hover:bg-slate-900 flex items-center justify-between"
            >
              <span>FAQ</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </nav>
          <div className="pt-2">
            <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="glow" className="w-full justify-center">
                <Sparkles className="w-4 h-4 text-cyan-200" />
                Solicitar Software / Demo
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
