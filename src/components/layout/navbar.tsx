"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Menu, X, ArrowUpRight } from "lucide-react";
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

  // Lock body scroll when mobile menu is open
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
          ? "bg-[#090d16]/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-black/40"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0f172a]/60 p-1 rounded-lg border border-slate-800/60 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all duration-150 ${
                    isActive
                      ? "text-white bg-slate-800/90 shadow-sm font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contato"
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all duration-200 shadow-md shadow-sky-500/10 active:scale-[0.98]"
            >
              <span>Falar com a equipe</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500/50 cursor-pointer"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Animated Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-x-0 top-[57px] bottom-0 bg-[#090d16]/98 backdrop-blur-2xl border-t border-slate-800/80 px-6 py-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
                Navegação
              </span>
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
                      className="p-3 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800 flex items-center justify-between text-base font-semibold text-slate-200 hover:text-white transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-800/80 space-y-3">
              <Link
                href="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-center font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 active:scale-[0.98]"
              >
                <span>Falar com a equipe</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <p className="text-center text-xs text-slate-400 font-mono">
                Vision Solutions © {new Date().getFullYear()}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
