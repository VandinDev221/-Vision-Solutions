"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Github, Instagram, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { saasProducts } from "@/data/saas-products";
import { SITE_CONTACT } from "@/data/contact";

export const Footer = () => {
  return (
    <footer className="bg-[#060910] border-t border-slate-800/80 text-slate-400 text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Col 1: Brand & Operational Status (5 cols) */}
          <div className="md:col-span-4 space-y-5">
            <Logo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Software House & Studio Multi-SaaS especializado no desenvolvimento de plataformas proprietárias e sistemas empresariais sob medida.
            </p>

            {/* System Status Node */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0e1422] border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Todos os sistemas operacionais</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={SITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0e1422] hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram Oficial"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/VandinDev221/-Vision-Solutions.git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#0e1422] hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Repositório GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Produtos SaaS (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Produtos & SaaS
            </h4>
            <ul className="space-y-2.5 text-xs">
              {saasProducts.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link href="/produtos" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                    <span>{p.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">({p.categoryLabel})</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/produtos" className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1 pt-1">
                  <span>Ver todos os produtos</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Empresa & Soluções (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/servicos" className="hover:text-slate-200 transition-colors">
                  Soluções Sob Medida
                </Link>
              </li>
              <li>
                <Link href="/tecnologia" className="hover:text-slate-200 transition-colors">
                  Engenharia & Stack
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-slate-200 transition-colors">
                  Sobre a Empresa
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-slate-200 transition-colors">
                  Atendimento & Orçamentos
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-slate-200 transition-colors">
                  Privacidade LGPD
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-slate-200 transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato Direto (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Contato Direto
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${SITE_CONTACT.displayEmail}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-mono">{SITE_CONTACT.displayEmail}</span>
              </a>
              <a
                href={SITE_CONTACT.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono">{SITE_CONTACT.displayWhatsapp}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{SITE_CONTACT.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Vision Solutions. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacidade" className="hover:text-slate-300 transition-colors">Privacidade</Link>
            <span className="text-slate-700">•</span>
            <Link href="/termos" className="hover:text-slate-300 transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
