"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Mail, Phone, MapPin, Instagram, Github, ArrowUpRight } from "lucide-react";
import { saasProducts } from "@/data/saas-products";
import { SITE_CONTACT } from "@/data/contact";

export const Footer = () => {
  return (
    <footer className="bg-[#080B10] border-t border-white/10 text-slate-400 text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Software House & SaaS Studio. Desenvolvemos produtos proprietários e arquiteturas sob medida para operações que exigem controle, estabilidade e código autoral.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram Oficial"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/VandinDev221/-Vision-Solutions.git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Produtos SaaS (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Produtos
            </h4>
            <ul className="space-y-2 text-xs">
              {saasProducts.map((p) => (
                <li key={p.id}>
                  <Link href="/produtos" className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group">
                    <span>{p.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono group-hover:text-slate-400">{p.categoryLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Empresa & Soluções (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Empresa
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/servicos" className="hover:text-white transition-colors">
                  Sistemas Sob Medida
                </Link>
              </li>
              <li>
                <Link href="/tecnologia" className="hover:text-white transition-colors">
                  Engenharia & Stack
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre a Vision
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Atendimento
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-white transition-colors">
                  Privacidade LGPD
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Contato
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`mailto:${SITE_CONTACT.displayEmail}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{SITE_CONTACT.displayEmail}</span>
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
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{SITE_CONTACT.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Vision Solutions. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacidade" className="hover:text-slate-300 transition-colors">Privacidade</Link>
            <span>•</span>
            <Link href="/termos" className="hover:text-slate-300 transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
