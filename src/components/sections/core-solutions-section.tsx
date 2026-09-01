"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, CheckCircle2 } from "lucide-react";
import { FloatingModule } from "@/components/motion/FloatingModule";

export const CoreSolutionsSection = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#070B12] border-b border-slate-800/80 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Editorial Monospace Eyebrow */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            <span>// ATUAÇÃO & MODELO DE ENGENHARIA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Duas frentes complementares. Uma única disciplina de engenharia.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Construímos produtos digitais sob demanda e mantemos nosso próprio ecossistema de software em produção.
          </p>
        </div>

        {/* Asymmetrical 2-Pillar Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Pillar 1: Produtos SaaS */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0A101A] border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 sm:space-y-8 group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#0E1622] border border-slate-800 text-sky-400 group-hover:border-sky-500/40 transition-colors">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-[#0E1622] text-sky-300 border border-slate-800">
                  Produtos Próprios
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mb-2 group-hover:text-sky-300 transition-colors">
                  Ecossistema Multi-SaaS
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Criamos, operamos e evoluímos plataformas SaaS verticais desenhadas para solucionar dores operacionais profundas em setores como oficinas automotivas, clínicas odontológicas e empresas de serviços.
                </p>
              </div>

              {/* Concrete Product Badges */}
              <div className="space-y-2 pt-3 border-t border-slate-800/80 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#070B12] border border-slate-800">
                  <span className="font-bold text-white">TorqueOS</span>
                  <span className="text-slate-400 text-[11px]">Oficinas & Autocenters</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#070B12] border border-slate-800">
                  <span className="font-bold text-white">SynDent</span>
                  <span className="text-slate-400 text-[11px]">Prontuário & Clínicas</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#070B12] border border-slate-800">
                  <span className="font-bold text-white">BarberCRM</span>
                  <span className="text-slate-400 text-[11px]">Agendamento & Fidelização</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">Plataformas em produção</span>
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
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#0A101A] border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-6 sm:space-y-8 group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-[#0E1622] border border-slate-800 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-[#0E1622] text-emerald-300 border border-slate-800">
                  Engenharia Sob Demanda
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  Desenvolvimento Sob Medida
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Quando sua operação exige processos, regras e fluxos de dados que softwares de prateleira não conseguem atender, nós desenhamos e construímos o sistema sob medida — com código 100% autoral.
                </p>
              </div>

              {/* Concrete Capability Badges */}
              <div className="space-y-2 pt-3 border-t border-slate-800/80 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#070B12] border border-slate-800">
                  <span className="font-bold text-white">ERPs & CRMs Customizados</span>
                  <span className="text-slate-400 text-[11px]">Regras proprietárias</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#070B12] border border-slate-800">
                  <span className="font-bold text-white">Automação de Filas</span>
                  <span className="text-slate-400 text-[11px]">Redis & BullMQ</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#070B12] border border-slate-800">
                  <span className="font-bold text-white">APIs & Integrações</span>
                  <span className="text-slate-400 text-[11px]">Gateways & Webhooks</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">Propriedade total do cliente</span>
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
