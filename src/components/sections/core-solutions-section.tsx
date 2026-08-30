"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, CheckCircle2 } from "lucide-react";

export const CoreSolutionsSection = () => {
  return (
    <section className="relative py-24 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Statement & Vision */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Construímos software para operações reais.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              A Vision Solutions cria produtos digitais e sistemas sob medida para empresas que precisam organizar processos, automatizar tarefas e ganhar mais controle sobre suas operações.
            </p>
            <div className="pt-2">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
              >
                Conheça nossa atuação e princípios <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: The Two Core Pillars in Editorial Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Pillar 1: Produtos SaaS */}
            <div className="p-7 rounded-xl bg-[#111726] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 text-sky-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">
                  Produtos SaaS
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Produtos próprios desenvolvidos para resolver problemas específicos de negócios, com foco em estabilidade, usabilidade e rápida implantação.
                </p>
                <div className="space-y-2 border-t border-slate-800/80 pt-4 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>TorqueOS (Oficinas & Peças)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>SynDent (Clínicas Odontológicas)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>BarberCRM (Agendamento & Clientes)</span>
                  </div>
                </div>
              </div>
              <Link
                href="/produtos"
                className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5"
              >
                Explorar produtos SaaS <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Pillar 2: Software Sob Medida */}
            <div className="p-7 rounded-xl bg-[#111726] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">
                  Software sob medida
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Sistemas desenvolvidos de acordo com processos, regras e necessidades específicas de cada operação, quando softwares prontos não resolvem.
                </p>
                <div className="space-y-2 border-t border-slate-800/80 pt-4 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Sistemas empresariais e ERPs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Automações de processos e rotinas</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Integrações de APIs e fluxos de dados</span>
                  </div>
                </div>
              </div>
              <Link
                href="/servicos"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5"
              >
                Ver desenvolvimento sob medida <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
