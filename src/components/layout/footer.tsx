"use client";

import React from "react";
import Link from "next/link";
import { Rocket, ShieldCheck, Heart, Github, Linkedin, Twitter } from "lucide-react";
import { saasProducts } from "@/data/saas-products";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Vision <span className="text-cyan-400">Solutions</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Vision Solutions — Software House & Studio de Engenharia de Software especializado na criação, escalabilidade e licenciamento de produtos SaaS em Clean Architecture.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" aria-label="Github">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" aria-label="Linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: SaaS Suite */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Ecossistema SaaS ({saasProducts.length})
            </h4>
            <ul className="space-y-2 text-xs">
              {saasProducts.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <a href="#saas" className="hover:text-indigo-400 transition-colors">
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
                <a href="#sob-medida" className="hover:text-indigo-400 transition-colors">
                  Criação de novos SaaS Multi-Tenant
                </a>
              </li>
              <li>
                <a href="#sob-medida" className="hover:text-indigo-400 transition-colors">
                  Desenvolvimento Enterprise Sob Medida
                </a>
              </li>
              <li>
                <a href="#sob-medida" className="hover:text-indigo-400 transition-colors">
                  APIs de Alta Vazão & Microsserviços
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-indigo-400 transition-colors">
                  Apps Desktop Nativo (Electron)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Conformidade & Uptime */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 font-mono">
              Segurança & Infraestrutura
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>99.98% Uptime Global Garantido</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Infraestrutura em nuvem isolada com backups automáticos, criptografia TLS 1.3 e conformidade com a LGPD.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vision Solutions Software House & Multi-SaaS Studio. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com alta performance e</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>em Next.js 15</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
