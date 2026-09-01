"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Github, Instagram, Mail, MapPin, Phone, ArrowUpRight, Radio, Shield, Terminal } from "lucide-react";
import { saasProducts } from "@/data/saas-products";
import { SITE_CONTACT } from "@/data/contact";

export const Footer = () => {
  return (
    <footer className="bg-[#03060d] border-t border-cyan-500/20 text-slate-400 text-sm py-12 sm:py-16 relative overflow-hidden cyber-grid-bg">
      {/* Top Hologram Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 mb-10 sm:mb-14">
          {/* Col 1: Brand & Quantum Status (5 cols) */}
          <div className="sm:col-span-2 md:col-span-4 space-y-4 sm:space-y-5">
            <Logo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Quantum Software House & Studio Multi-SaaS especializado no desenvolvimento de plataformas proprietárias e sistemas empresariais sob medida.
            </p>

            {/* Tactical System Status Node */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#080e1c] border border-cyan-500/30 text-[11px] font-mono text-cyan-300 shadow-md shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ORBITAL_CORE // TODOS OS SISTEMAS ONLINE</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={SITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#080e1c] hover:bg-[#0f172a] border border-cyan-500/25 text-slate-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram Oficial"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/VandinDev221/-Vision-Solutions.git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#080e1c] hover:bg-[#0f172a] border border-cyan-500/25 text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Repositório GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Produtos SaaS (3 cols) */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              // ECOSSISTEMA SAAS
            </h4>
            <ul className="space-y-2 text-xs">
              {saasProducts.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link href="/produtos" className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 font-mono">
                    <span>{p.name}</span>
                    <span className="text-[10px] text-cyan-500/60 font-mono">[{p.categoryLabel}]</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/produtos" className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 pt-1 font-mono">
                  <span>Ver todos os produtos</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Empresa & Soluções (2 cols) */}
          <div className="md:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              // NAVEGAÇÃO
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/servicos" className="hover:text-cyan-300 transition-colors">
                  Soluções Sob Medida
                </Link>
              </li>
              <li>
                <Link href="/tecnologia" className="hover:text-cyan-300 transition-colors">
                  Engenharia & Stack
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-cyan-300 transition-colors">
                  Sobre a Empresa
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-cyan-300 transition-colors">
                  Atendimento & Orçamento
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-cyan-300 transition-colors">
                  Privacidade LGPD
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-cyan-300 transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato Direto (3 cols) */}
          <div className="sm:col-span-2 md:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
              // PROTOCOLO DIRETO
            </h4>
            <div className="space-y-2.5 text-xs font-mono">
              <a
                href={`mailto:${SITE_CONTACT.displayEmail}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{SITE_CONTACT.displayEmail}</span>
              </a>
              <a
                href={SITE_CONTACT.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SITE_CONTACT.displayWhatsapp}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{SITE_CONTACT.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-6 sm:pt-8 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Vision Solutions // Quantum Digital Universe. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacidade" className="hover:text-cyan-300 transition-colors">Privacidade</Link>
            <span className="text-cyan-800">•</span>
            <Link href="/termos" className="hover:text-cyan-300 transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
