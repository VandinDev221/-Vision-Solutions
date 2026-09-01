"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Wrench,
  Stethoscope,
  CheckCircle2,
  Activity,
  Cpu,
  Zap,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Layers,
  Terminal
} from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TiltCard } from "@/components/ui/tilt-card";

export const HeroSection = () => {
  const [activeSystem, setActiveSystem] = useState<"torqueos" | "syndent">("torqueos");
  const [torqueTab, setTorqueTab] = useState<"os" | "estoque" | "financeiro">("os");
  const [syndentTab, setSyndentTab] = useState<"prontuario" | "odontograma" | "agenda">("prontuario");

  // Interactive Live Auto-Play Engine Simulator
  const [isPlaying, setIsPlaying] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-[#090d16] overflow-hidden border-b border-slate-800/80">
      {/* Background Ambience Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Dynamic Laser Beam Center Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Messaging with Progressive Reveal */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* System Status Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0f172a] border border-slate-800 text-[11px] font-mono text-slate-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SOFTWARE HOUSE & STUDIO MULTI-SAAS</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Construímos software para operações que já{" "}
              <span className="text-sky-400">superaram planilhas.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              Desenvolvemos produtos SaaS proprietários e arquiteturas sob medida para negócios que precisam de controle rigoroso, automação de rotinas e software estável em produção.
            </motion.p>

            {/* Magnetic Actions */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <Link href="/produtos">
                <MagneticButton variant="primary" className="w-full sm:w-auto">
                  <span>Conhecer nossos produtos</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
              <Link href="/contato">
                <MagneticButton variant="secondary" className="w-full sm:w-auto">
                  <span>Solicitar software sob medida</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Credibility Architecture Nodes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80"
            >
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-white">Multi-SaaS</span>
                <span className="text-[11px] text-slate-400 font-medium">Soluções proprietárias</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-emerald-400">100%</span>
                <span className="text-[11px] text-slate-400 font-medium">Código próprio autoral</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-sky-400">Multi-tenant</span>
                <span className="text-[11px] text-slate-400 font-medium">Isolamento rigoroso</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Tilt Card Simulator */}
          <div className="lg:col-span-6">
            <TiltCard maxTilt={8} className="shadow-2xl">
              <div className="rounded-2xl bg-[#0e1422] border border-slate-800/90 p-5 sm:p-6 space-y-5 backdrop-blur-xl relative overflow-hidden">
                {/* Top Interactive Switcher & Play/Pause Controller */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-800 text-sky-400 transition-colors cursor-pointer"
                      title={isPlaying ? "Pausar simulação" : "Reproduzir simulação"}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-xs font-mono text-slate-300 font-semibold">
                      simulador-ao-vivo // {isPlaying ? "executando" : "pausado"}
                    </span>
                  </div>

                  {/* System Tab Switcher */}
                  <div className="flex items-center gap-1 bg-[#090d16] p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setActiveSystem("torqueos")}
                      className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                        activeSystem === "torqueos"
                          ? "bg-slate-800 text-sky-400 shadow-sm border border-slate-700"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Wrench className="w-3.5 h-3.5" />
                      TorqueOS
                    </button>
                    <button
                      onClick={() => setActiveSystem("syndent")}
                      className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                        activeSystem === "syndent"
                          ? "bg-slate-800 text-cyan-400 shadow-sm border border-slate-700"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Stethoscope className="w-3.5 h-3.5" />
                      SynDent
                    </button>
                  </div>
                </div>

                {/* Dynamic Animated UI Surface */}
                <AnimatePresence mode="wait">
                  {activeSystem === "torqueos" ? (
                    <motion.div
                      key="torqueos"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Header Info & Sub-tab Bar */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-white">TorqueOS ERP</h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                              Produção
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Oficinas mecânicas, autocenters e autopeças
                          </p>
                        </div>

                        {/* Interactive Sub-tabs for TorqueOS */}
                        <div className="flex items-center gap-1 bg-[#090d16] p-1 rounded-md border border-slate-800 text-[11px] font-mono">
                          <button
                            onClick={() => setTorqueTab("os")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              torqueTab === "os" ? "bg-slate-800 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            O.S.
                          </button>
                          <button
                            onClick={() => setTorqueTab("estoque")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              torqueTab === "estoque" ? "bg-slate-800 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            Estoque
                          </button>
                          <button
                            onClick={() => setTorqueTab("financeiro")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              torqueTab === "financeiro" ? "bg-slate-800 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            Caixa
                          </button>
                        </div>
                      </div>

                      {/* Operational KPI Grid with Live Reactive Values */}
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800 hover:border-sky-500/40 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-slate-400 block">O.S. Abertas</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">18 O.S.</span>
                          <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                            <Activity className="w-2.5 h-2.5" /> 6 no pátio
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800 hover:border-sky-500/40 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-slate-400 block">Peças Indexadas</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-sky-400 mt-0.5 block">+50.000</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">Busca direta</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800 hover:border-emerald-500/40 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-slate-400 block">Faturamento Dia</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-emerald-400 mt-0.5 block">R$ 14.820</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">Liquidado</span>
                        </div>
                      </div>

                      {/* Dynamic Sub-tab Content Simulator */}
                      <div className="p-3.5 rounded-lg bg-[#090d16] border border-slate-800 space-y-2.5 min-h-[135px] flex flex-col justify-center">
                        {torqueTab === "os" && (
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1 border-b border-slate-800/80">
                              <span>Fluxo de Atendimento em Tempo Real</span>
                              <span className="text-emerald-400 font-semibold">2 na esteira</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">OS #4892</span>
                                <span className="text-slate-300">Toyota Corolla • Revisão 60k km</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">R$ 1.840,00</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between hover:border-slate-700 transition-colors">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">OS #4891</span>
                                <span className="text-slate-300">Honda Civic • Troca Pastilhas + Disco</span>
                              </div>
                              <span className="font-mono text-sky-400 text-[11px] font-semibold">Aguardando Peça</span>
                            </div>
                          </div>
                        )}

                        {torqueTab === "estoque" && (
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1 border-b border-slate-800/80">
                              <span>Consulta Rápida de Peças (Balcão)</span>
                              <span className="text-sky-400 font-semibold">Catálogo Ativo</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">COD-8821</span>
                                <span className="text-slate-300">Filtro Óleo Motor 1.8 Flex</span>
                              </div>
                              <span className="font-mono text-slate-300 text-[11px]">24 em estoque</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">COD-1904</span>
                                <span className="text-slate-300">Jogo Velas Iridium NGK</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">Pronta Entrega</span>
                            </div>
                          </div>
                        )}

                        {torqueTab === "financeiro" && (
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1 border-b border-slate-800/80">
                              <span>Fluxo de Caixa & Liquidação Pix/Cartão</span>
                              <span className="text-emerald-400 font-semibold">100% Conciliado</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">PIX-901</span>
                                <span className="text-slate-300">Recebimento O.S. #4889</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">+ R$ 680,00</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">CARD-412</span>
                                <span className="text-slate-300">Venda Balcão Peças</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">+ R$ 340,00</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="syndent"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Header Info & Sub-tab Bar */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-white">SynDent SaaS</h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                              Piloto Fechado
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            SaaS odontológico com Clean Architecture
                          </p>
                        </div>

                        {/* Interactive Sub-tabs for SynDent */}
                        <div className="flex items-center gap-1 bg-[#090d16] p-1 rounded-md border border-slate-800 text-[11px] font-mono">
                          <button
                            onClick={() => setSyndentTab("prontuario")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              syndentTab === "prontuario" ? "bg-slate-800 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            Prontuário
                          </button>
                          <button
                            onClick={() => setSyndentTab("odontograma")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              syndentTab === "odontograma" ? "bg-slate-800 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            2D/3D
                          </button>
                          <button
                            onClick={() => setSyndentTab("agenda")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              syndentTab === "agenda" ? "bg-slate-800 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            Agenda
                          </button>
                        </div>
                      </div>

                      {/* Operational KPI Grid */}
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-slate-400 block">Prontuário</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">Eletrônico</span>
                          <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                            <CheckCircle2 className="w-2.5 h-2.5" /> Anamnese & Raio-X
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-slate-400 block">Odontograma</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-cyan-400 mt-0.5 block">2D / 3D</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">Mapeamento dinâmico</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800 hover:border-indigo-500/40 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-slate-400 block">Isolamento</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">Multi-Tenant</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">Fastify + Prisma</span>
                        </div>
                      </div>

                      {/* Dynamic Sub-tab Content Simulator */}
                      <div className="p-3.5 rounded-lg bg-[#090d16] border border-slate-800 space-y-2.5 min-h-[135px] flex flex-col justify-center">
                        {syndentTab === "prontuario" && (
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1 border-b border-slate-800/80">
                              <span>Prontuário Clínico & Evolução</span>
                              <span className="text-cyan-400 font-semibold">Sincronizado</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">PAC-104</span>
                                <span className="text-slate-300">Mariana Costa • Endodontia elemento 16</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">Anestesia Aplicada</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">PAC-105</span>
                                <span className="text-slate-300">Rafael Lima • Moldagem Alinhadores</span>
                              </div>
                              <span className="font-mono text-sky-400 text-[11px] font-semibold">Fotos Anexadas</span>
                            </div>
                          </div>
                        )}

                        {syndentTab === "odontograma" && (
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1 border-b border-slate-800/80">
                              <span>Mapeamento Interativo de Arcada Dentária</span>
                              <span className="text-emerald-400 font-semibold">32 Dentes Mapeados</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">DENTE 16</span>
                                <span className="text-slate-300">Tratamento de Canal em Andamento</span>
                              </div>
                              <span className="font-mono text-cyan-400 text-[11px] font-semibold">Face Oclusal</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">DENTE 24</span>
                                <span className="text-slate-300">Restauração Resina Concluída</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">Finalizado</span>
                            </div>
                          </div>
                        )}

                        {syndentTab === "agenda" && (
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1 border-b border-slate-800/80">
                              <span>Agenda Clínica com Confirmação WhatsApp</span>
                              <span className="text-emerald-400 font-semibold">Zero Faltas Hoje</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">09:30</span>
                                <span className="text-slate-300">Mariana Costa • Dra. Beatriz</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">Confirmado via Zap</span>
                            </div>
                            <div className="p-2 rounded bg-[#0f172a] border border-slate-800 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">10:30</span>
                                <span className="text-slate-300">Rafael Lima • Dr. Henrique</span>
                              </div>
                              <span className="font-mono text-sky-400 text-[11px] font-semibold">Na Recepção</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Micro-Bar: Tech Proof */}
                <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    <span>Stack: TypeScript • Fastify • NestJS • PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <Zap className="w-3 h-3" />
                    <span>Sub-20ms latency</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};
