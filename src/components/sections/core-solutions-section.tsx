"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Layers, Cpu, CheckCircle2, Server, Shield, Sparkles } from "lucide-react";

export const CoreSolutionsSection = () => {
  return (
    <section className="relative py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Editorial Monospace Eyebrow */}
        <div className="max-w-3xl mb-16 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            <span>// ATUAÇÃO & MODELO DE ENGENHARIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Duas frentes complementares. Uma única disciplina de engenharia.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Construímos produtos digitais sob demanda e mantemos nosso próprio ecossistema de software em produção.
          </p>
        </div>

        {/* Asymmetrical 2-Pillar Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Pillar 1: Produtos SaaS */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-[#0e1422] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-sky-400 group-hover:border-sky-500/40 transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-sky-950/60 text-sky-300 border border-sky-800/50">
                  Produtos Próprios
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                  Ecossistema Multi-SaaS
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Criamos, operamos e evoluímos plataformas SaaS verticais desenhadas para solucionar dores operacionais profundas em setores como oficinas automotivas, clínicas odontológicas e empresas de serviços.
                </p>
              </div>

              {/* Concrete Product Badges */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#090d16] border border-slate-800/80 text-xs">
                  <span className="font-bold text-white">TorqueOS</span>
                  <span className="text-slate-400 font-mono">Oficinas mecânicas & Autocenters</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#090d16] border border-slate-800/80 text-xs">
                  <span className="font-bold text-white">SynDent</span>
                  <span className="text-slate-400 font-mono">Prontuário & Clínicas Odontológicas</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#090d16] border border-slate-800/80 text-xs">
                  <span className="font-bold text-white">BarberCRM</span>
                  <span className="text-slate-400 font-mono">Agendamento online & Fidelização VIP</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Plataformas em produção</span>
              <Link
                href="/produtos"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>Explorar todos os produtos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Software Sob Medida */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-[#0e1422] border border-slate-800/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-8 relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/50">
                  Engenharia Sob Demanda
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
                  Desenvolvimento Sob Medida
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Quando sua operação exige processos, regras e fluxos de dados que softwares de prateleira não conseguem atender, nós desenhamos e construímos o sistema sob medida — com código 100% autoral.
                </p>
              </div>

              {/* Concrete Capability Badges */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#090d16] border border-slate-800/80 text-xs">
                  <span className="font-bold text-white">Sistemas ERP & CRM Customizados</span>
                  <span className="text-slate-400 font-mono">Regras de negócio proprietárias</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#090d16] border border-slate-800/80 text-xs">
                  <span className="font-bold text-white">Automação de Processos & Filas</span>
                  <span className="text-slate-400 font-mono">Assíncrono via Redis / BullMQ</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#090d16] border border-slate-800/80 text-xs">
                  <span className="font-bold text-white">APIs & Integrações de Dados</span>
                  <span className="text-slate-400 font-mono">Gateways, webhooks e legados</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Propriedade total do cliente</span>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Ver escopo de engenharia</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
