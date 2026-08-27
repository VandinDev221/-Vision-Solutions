"use client";

import React from "react";
import { Logo } from "@/components/ui/logo";
import { ShieldCheck, Github, Mail, MapPin, Phone } from "lucide-react";
import { saasProducts } from "@/data/saas-products";
import { SITE_CONTACT } from "@/data/contact";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed">
              Vision Solutions — Software House & Studio de Engenharia de Software especializado na criação, manutenção e licenciamento de produtos digitais e plataformas SaaS.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/VandinDev221/-Vision-Solutions.git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Repositório GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: SaaS Suite */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Produtos & SaaS ({saasProducts.length})
            </h4>
            <ul className="space-y-2 text-xs">
              {saasProducts.map((p) => (
                <li key={p.id}>
                  <a href="#produtos" className="hover:text-indigo-400 transition-colors">
                    {p.name} — {p.categoryLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Soluções & Serviços */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Serviços & Soluções
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solucoes" className="hover:text-indigo-400 transition-colors">
                  Criação de novos SaaS Multi-Tenant
                </a>
              </li>
              <li>
                <a href="#sob-medida" className="hover:text-indigo-400 transition-colors">
                  Desenvolvimento Sob Medida
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-indigo-400 transition-colors">
                  Sistemas Empresariais (ERP/CRM)
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-indigo-400 transition-colors">
                  APIs & Integrações de Sistemas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Localização */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Contato & Atendimento
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={SITE_CONTACT.getGmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vision Solutions Software House. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido em Next.js 15 & React 19</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
