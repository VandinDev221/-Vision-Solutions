"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Cpu } from "lucide-react";

export const CoreSolutionsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B0E14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            Modelo de Atuação
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Duas frentes complementares. Uma única disciplina de engenharia.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Mantemos nosso próprio ecossistema de produtos em produção e construímos sistemas sob demanda para operações complexas.
          </p>
        </div>

        {/* Asymmetrical 2-Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Pillar 1: Produtos SaaS */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-lg bg-[#111622] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded bg-[#0B0E14] border border-white/5 text-blue-400">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#0B0E14] text-blue-400 border border-white/5">
                  Produtos Próprios
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Ecossistema Multi-SaaS
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Criamos, operamos e evoluímos plataformas SaaS verticais desenhadas para resolver dores operacionais profundas em setores como oficinas automotivas, clínicas odontológicas e empresas de serviços.
                </p>
              </div>

              {/* Product Badges */}
              <div className="space-y-2 pt-3 border-t border-white/5 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded bg-[#0B0E14] border border-white/5">
                  <span className="font-bold text-white">TorqueOS</span>
                  <span className="text-slate-400 text-[11px]">Oficinas & Autocenters</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-[#0B0E14] border border-white/5">
                  <span className="font-bold text-white">SynDent</span>
                  <span className="text-slate-400 text-[11px]">Prontuário & Clínicas</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-[#0B0E14] border border-white/5">
                  <span className="font-bold text-white">BarberCRM</span>
                  <span className="text-slate-400 text-[11px]">Agendamento & Fidelização</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">Plataformas ativas</span>
              <Link
                href="/produtos"
                className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Explorar todos os produtos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Software Sob Medida */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-lg bg-[#111622] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded bg-[#0B0E14] border border-white/5 text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#0B0E14] text-emerald-400 border border-white/5">
                  Engenharia Sob Demanda
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Desenvolvimento Sob Medida
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Quando sua operação exige processos, regras e fluxos de dados que softwares de prateleira não conseguem atender, nós desenhamos e construímos o sistema sob medida — com código 100% autoral.
                </p>
              </div>

              {/* Concrete Capability Badges */}
              <div className="space-y-2 pt-3 border-t border-white/5 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded bg-[#0B0E14] border border-white/5">
                  <span className="font-bold text-white">ERPs & Backoffices</span>
                  <span className="text-slate-400 text-[11px]">Regras proprietárias</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-[#0B0E14] border border-white/5">
                  <span className="font-bold text-white">Automação de Filas</span>
                  <span className="text-slate-400 text-[11px]">Redis & BullMQ</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-[#0B0E14] border border-white/5">
                  <span className="font-bold text-white">APIs & Integrações</span>
                  <span className="text-slate-400 text-[11px]">Gateways & Webhooks</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400">Propriedade total do cliente</span>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Ver escopo de engenharia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
