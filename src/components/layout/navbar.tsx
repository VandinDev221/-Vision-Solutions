"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Menu, X, ArrowUpRight, Radio, Shield, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    { label: "Produtos", href: "/produtos" },
    { label: "Soluções", href: "/servicos" },
    { label: "Tecnologia", href: "/tecnologia" },
    { label: "Empresa", href: "/sobre" },
    { label: "Contato", href: "/contato" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#040711]/90 backdrop-blur-2xl border-b border-cyan-500/25 py-3 shadow-2xl shadow-cyan-950/40"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      {/* Top Hologram Laser Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Sci-Fi Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#080e1c]/80 p-1 rounded-xl border border-cyan-500/25 backdrop-blur-md shadow-lg shadow-cyan-950/20">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-medium font-mono rounded-lg transition-all duration-150 ${
                    isActive
                      ? "text-cyan-300 bg-cyan-950/80 border border-cyan-500/50 shadow-sm font-semibold"
                      : "text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary Tactical CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contato"
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold transition-all duration-200 border border-cyan-300/40 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
            >
              <span>Falar com a equipe</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-cyan-400 hover:text-white rounded-lg bg-[#080e1c] border border-cyan-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Sci-Fi Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-x-0 top-[57px] bottom-0 bg-[#040711]/98 backdrop-blur-2xl border-t border-cyan-500/30 px-6 py-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-cyan-400 border-b border-cyan-500/20 pb-2">
                <span>// HUD_NAVIGATION</span>
                <span className="text-emerald-400">ONLINE</span>
              </div>
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-3.5 rounded-xl bg-[#080e1c] border border-cyan-500/20 hover:border-cyan-400 flex items-center justify-between text-base font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      <span className="font-mono">{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-cyan-500/20 space-y-3">
              <Link
                href="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-center font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
              >
                <span>Falar com a equipe</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-center text-xs text-cyan-500/60 font-mono">
                Vision Solutions // Quantum Architecture © {new Date().getFullYear()}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
