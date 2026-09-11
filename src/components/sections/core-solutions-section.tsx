"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Target, Cpu, CheckCircle2 } from "lucide-react";

export const CoreSolutionsSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#050811] border-b border-white/10 text-white relative overflow-hidden">
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading — Agex Style Centered Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1424] border border-blue-500/30 text-cyan-300 text-xs font-mono font-medium shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Recursos de Alta Performance</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Planeje menos.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              Execute muito mais.
            </span>
          </h2>

          <p className="text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
            Processos operacionais organizados por inteligência, automação de tarefas críticas e fluxos sem ruído.
          </p>
        </div>

        {/* 4-Card Agex Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Prompt to Task / Requisitos para Código */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1c]/90 border border-blue-500/30 shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-cyan-400/50 transition-all duration-300 group">
            <div className="space-y-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                Prompt para Task Operacional
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Transforme ideias em sistemas
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Escreva os requisitos da sua empresa. Transformamos cada regra em código estruturado de alta performance.
              </p>
            </div>

            {/* Embedded Mini-Widget Mockup */}
            <div className="p-4 rounded-xl bg-[#050811] border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Requisito: "Automação de Ordens de Serviço"</span>
              </div>
              <div className="p-2.5 rounded bg-[#0e1628] text-cyan-300 border border-cyan-500/20 text-[11px] flex items-center justify-between">
                <span>✔ API Fastify + Schema PostgreSQL gerado</span>
                <span className="text-emerald-400 text-[10px]">Pronto</span>
              </div>
            </div>
          </div>

          {/* Card 2: AI Content & Process Generation */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1c]/90 border border-blue-500/30 shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-cyan-400/50 transition-all duration-300 group">
            <div className="space-y-3">
              <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider block">
                Geração Inteligente de Conteúdo
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                IA Aplicada ao Seu Negócio
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Relatórios preditivos, sincronização com gateways e comunicação automática sem esforço manual.
              </p>
            </div>

            {/* Embedded Mini-Widget Mockup */}
            <div className="p-4 rounded-xl bg-[#050811] border border-white/10 space-y-2.5 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Modo Zen Ativo</span>
                <span className="text-emerald-400 text-[10px]">Disponível</span>
              </div>
              <div className="h-1.5 w-full bg-blue-950 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-4/5" />
              </div>
            </div>
          </div>

          {/* Card 3: Vision Focus Mode */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1c]/90 border border-blue-500/30 shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-cyan-400/50 transition-all duration-300 group">
            <div className="space-y-3">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                Modo Foco Operacional
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Foco Total no Trabalho Profundo
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Zero sobrecarga de informação. Interfaces desenhadas para velocidade, clareza e produtividade contínua.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#0e1628] border border-white/10 text-xs font-mono text-slate-300">
                TorqueOS ERP
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#0e1628] border border-white/10 text-xs font-mono text-slate-300">
                SynDent SaaS
              </span>
            </div>
          </div>

          {/* Card 4: Automated Pipelines */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090e1c]/90 border border-blue-500/30 shadow-xl backdrop-blur-xl flex flex-col justify-between space-y-6 hover:border-cyan-400/50 transition-all duration-300 group">
            <div className="space-y-3">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider block">
                Pipelines Automatizados
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Infraestrutura Distribuída
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Filas com Redis e BullMQ executando tarefas pesadas em background com latência inferior a 18ms.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Conhecer nossos SaaS verticais</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
