"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  MessageSquare,
  FileWarning,
  Coins,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Network
} from "lucide-react";

export const ComplexityTransformationSection = () => {
  const [activeStage, setActiveStage] = useState<0 | 1 | 2>(0);

  const stages = [
    {
      id: 0,
      badge: "Cenário 01",
      title: "Fragmentação & Gargalos",
      subtitle: "Planilhas desconectadas, retrabalho manual e mensagens perdidas",
      desc: "Quando o volume da operação aumenta, controlar processos em ferramentas genéricas cria silos de informação, erros de cálculo e atrasos no atendimento."
    },
    {
      id: 1,
      badge: "Cenário 02",
      title: "Modelagem & Conexão",
      subtitle: "Mapeamento das regras de negócio e arquitetura relacional",
      desc: "A Vision Solutions isola cada entidade operacional, define modelos no PostgreSQL e constrói pipelines com tipagem estrita para unificar os fluxos."
    },
    {
      id: 2,
      badge: "Cenário 03",
      title: "Motor Unificado em Produção",
      subtitle: "Software fluido, automatizado e com controle total em tempo real",
      desc: "A equipe opera com rapidez, as notificações disparam automaticamente, os dados são seguros e a empresa ganha previsibilidade para escalar."
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#090d16] border-b border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            <span>// TRANSFORMAÇÃO OPERACIONAL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Como transformamos complexidade em software funcional.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Veja como processos fragmentados se conectam e se encaixam em uma arquitetura de alta produtividade.
          </p>
        </div>

        {/* Interactive Transformation Stage Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Stage Selector */}
          <div className="lg:col-span-5 space-y-3">
            {stages.map((stage) => {
              const isSelected = activeStage === stage.id;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id as any)}
                  className={`p-4 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#0e1422] border-sky-500/50 shadow-xl shadow-sky-500/5"
                      : "bg-[#0e1422]/50 hover:bg-[#0e1422] border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded border ${
                      isSelected
                        ? "bg-sky-950/80 text-sky-300 border-sky-800/60"
                        : "bg-slate-900 text-slate-400 border-slate-800"
                    }`}>
                      {stage.badge}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Visualizando
                      </span>
                    )}
                  </div>

                  <h3 className={`text-base sm:text-lg font-bold mb-1 ${isSelected ? "text-white" : "text-slate-300"}`}>
                    {stage.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mb-1.5">{stage.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Transformation Diagram */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#0e1422] border border-slate-800/90 shadow-2xl min-h-[340px] sm:min-h-[380px] flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Circuit Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b15_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800/80">
                <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase font-semibold">
                  Diagrama Estrutural do Sistema
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-sky-400 font-bold">
                  Etapa {activeStage + 1} de 3
                </span>
              </div>

              {/* Dynamic Animated Nodes Display */}
              <AnimatePresence mode="wait">
                {activeStage === 0 && (
                  <motion.div
                    key="stage0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                  >
                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#090d16] border border-rose-900/40 text-slate-300 space-y-1.5">
                      <div className="flex items-center gap-2 text-rose-400">
                        <FileSpreadsheet className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span className="text-xs font-bold font-mono">Planilhas Desconectadas</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">Versões conflitantes, digitação manual duplicada e risco de perda de fórmulas.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#090d16] border border-rose-900/40 text-slate-300 space-y-1.5">
                      <div className="flex items-center gap-2 text-amber-400">
                        <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span className="text-xs font-bold font-mono">WhatsApp Manual</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">Atendentes respondendo um a um sem histórico centralizado ou confirmação no sistema.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#090d16] border border-rose-900/40 text-slate-300 space-y-1.5">
                      <div className="flex items-center gap-2 text-rose-400">
                        <FileWarning className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span className="text-xs font-bold font-mono">Papel & Blocos</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">Checklists físicos no balcão que não atualizam o estoque nem geram relatórios.</p>
                    </div>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-[#090d16] border border-rose-900/40 text-slate-300 space-y-1.5">
                      <div className="flex items-center gap-2 text-amber-400">
                        <Coins className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        <span className="text-xs font-bold font-mono">Caixa Sem Conciliação</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">Falta de sincronia entre serviços prestados, peças usadas e faturamento real.</p>
                    </div>
                  </motion.div>
                )}

                {activeStage === 1 && (
                  <motion.div
                    key="stage1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="p-4 rounded-xl bg-[#090d16] border border-sky-500/40 text-slate-300 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="flex items-center gap-2 text-sky-400">
                          <Network className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                          <span className="text-xs font-bold font-mono">Conexão de Entidades & Banco de Dados</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400">PostgreSQL Schema Ready</span>
                      </div>

                      {/* Visual Pathway */}
                      <div className="p-3 rounded-lg bg-[#0e1422] border border-slate-800 space-y-2 font-mono text-xs overflow-x-auto">
                        <div className="flex items-center justify-between text-[11px] text-slate-300 min-w-[280px]">
                          <span>[Clientes] ── (JWT) ──&gt; [Acesso]</span>
                          <span className="text-emerald-400">Mapeado</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-300 min-w-[280px]">
                          <span>[Ordens] ── (Triggers) ──&gt; [Estoque]</span>
                          <span className="text-emerald-400">Mapeado</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-300 min-w-[280px]">
                          <span>[Financeiro] ── (Webhooks) ──&gt; [Caixa]</span>
                          <span className="text-emerald-400">Mapeado</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStage === 2 && (
                  <motion.div
                    key="stage2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div className="p-4 sm:p-5 rounded-xl bg-[#090d16] border border-emerald-500/50 space-y-3 sm:space-y-4 shadow-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-emerald-400">
                          <Cpu className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                          <span className="text-xs sm:text-sm font-bold font-mono">Motor Vision Solutions Ativo</span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 w-fit">
                          60 FPS • Produção
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                        <div className="p-2 sm:p-3 rounded-lg bg-[#0e1422] border border-slate-800">
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400 block">Latência</span>
                          <span className="text-xs sm:text-base font-bold font-mono text-sky-400 block mt-0.5">&lt; 20ms</span>
                        </div>
                        <div className="p-2 sm:p-3 rounded-lg bg-[#0e1422] border border-slate-800">
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400 block">Retrabalho</span>
                          <span className="text-xs sm:text-base font-bold font-mono text-emerald-400 block mt-0.5">Zero</span>
                        </div>
                        <div className="p-2 sm:p-3 rounded-lg bg-[#0e1422] border border-slate-800">
                          <span className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400 block">Sincronia</span>
                          <span className="text-xs sm:text-base font-bold font-mono text-white block mt-0.5">Tempo Real</span>
                        </div>
                      </div>

                      <div className="p-2.5 sm:p-3 rounded-lg bg-[#0e1422] border border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="text-slate-200 text-[11px] sm:text-xs">Operação integrada de ponta a ponta</span>
                        </div>
                        <span className="text-emerald-400 font-mono text-[10px] sm:text-[11px]">Estável</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Progress Controls */}
            <div className="relative z-10 pt-4 sm:pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                Clean Architecture & TypeScript
              </span>

              <button
                onClick={() => setActiveStage(((activeStage + 1) % 3) as any)}
                className="w-full sm:w-auto justify-center px-3.5 py-2 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Avançar Etapa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
