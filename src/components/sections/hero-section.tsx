"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Wrench,
  Stethoscope,
  Activity,
  Cpu,
  Zap,
  Play,
  Pause,
  Terminal,
  Radio,
  Disc3,
  ShieldCheck,
  Binary
} from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { HolographicCard } from "@/components/ui/holographic-card";

export const HeroSection = () => {
  const [activeSystem, setActiveSystem] = useState<"torqueos" | "syndent">("torqueos");
  const [torqueTab, setTorqueTab] = useState<"os" | "estoque" | "financeiro">("os");
  const [syndentTab, setSyndentTab] = useState<"prontuario" | "odontograma" | "agenda">("prontuario");

  const [isPlaying, setIsPlaying] = useState(true);
  const [timeCounter, setTimeCounter] = useState("00:00:01");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeCounter(
        `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-[#040711] overflow-hidden border-b border-cyan-500/20 cyber-grid-bg">
      {/* Sci-Fi Atmospheric Quantum Nebula Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-purple-600/10 to-blue-500/15 blur-[140px] rounded-full pointer-events-none" />

      {/* Futuristic Coordinate Grid Lines */}
      <div className="absolute left-8 top-1/3 hidden lg:flex flex-col gap-1 text-[9px] font-mono text-cyan-500/40 select-none">
        <span>LAT: -02.5307° S</span>
        <span>LON: -44.3068° W</span>
        <span>SYS: NEURAL_CORE_V4</span>
        <span className="text-cyan-400">STATUS: QUANTUM_ONLINE</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Sci-Fi Command Deck */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Holographic Tactical Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#080e1c] border border-cyan-500/30 text-[11px] font-mono text-cyan-300 shadow-lg shadow-cyan-500/10"
            >
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>QUANTUM SOFTWARE HOUSE & MULTI-SAAS UNIVERSE</span>
            </motion.div>

            {/* Headline with Sci-Fi Neon Treatment */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Construímos software para operações que já{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 neon-glow-cyan">
                superaram o ordinário.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              Arquitetura de software de próxima geração: plataformas SaaS verticais e ecossistemas sob medida desenhados com isolamento multi-tenant, código 100% autoral e desempenho em tempo real.
            </motion.p>

            {/* Glowing Magnetic Actions */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <Link href="/produtos">
                <MagneticButton
                  variant="primary"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold border border-cyan-300/40 shadow-xl shadow-cyan-500/20"
                >
                  <span>Explorar Ecossistema SaaS</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
              <Link href="/contato">
                <MagneticButton
                  variant="secondary"
                  className="w-full sm:w-auto bg-[#080e1c] hover:bg-[#0f172a] text-cyan-300 border border-cyan-500/30 hover:border-cyan-400"
                >
                  <span>Iniciar Projeto Sob Medida</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Sci-Fi Live Telemetry Matrix */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-cyan-500/20"
            >
              <div className="p-3 rounded-xl bg-[#080e1c]/60 border border-cyan-500/20">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-mono">
                  <Disc3 className="w-3.5 h-3.5 animate-spin" />
                  <span>ECOSSISTEMA</span>
                </div>
                <span className="block text-lg sm:text-xl font-bold font-mono text-white mt-1">Multi-SaaS</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080e1c]/60 border border-cyan-500/20">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>AUTORAL</span>
                </div>
                <span className="block text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-1">100% Puro</span>
              </div>
              <div className="p-3 rounded-xl bg-[#080e1c]/60 border border-cyan-500/20">
                <div className="flex items-center gap-1.5 text-purple-400 text-xs font-mono">
                  <Binary className="w-3.5 h-3.5" />
                  <span>LATÊNCIA</span>
                </div>
                <span className="block text-lg sm:text-xl font-bold font-mono text-purple-300 mt-1">&lt; 18ms</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Holographic 3D Floating Interface Deck */}
          <div className="lg:col-span-6">
            <HolographicCard maxTilt={8} glowTheme="cyan">
              <div className="space-y-5">
                {/* Top Sci-Fi Hologram Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 rounded-md bg-[#040711] hover:bg-slate-900 border border-cyan-500/30 text-cyan-400 transition-colors cursor-pointer"
                      title={isPlaying ? "Pausar simulação" : "Reproduzir simulação"}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span>HOLO_DECK // T_{timeCounter}</span>
                    </div>
                  </div>

                  {/* System Core Switcher */}
                  <div className="flex items-center gap-1 bg-[#040711] p-1 rounded-lg border border-cyan-500/30">
                    <button
                      onClick={() => setActiveSystem("torqueos")}
                      className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                        activeSystem === "torqueos"
                          ? "bg-cyan-950/80 text-cyan-300 shadow-sm border border-cyan-500/50"
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
                          ? "bg-purple-950/80 text-purple-300 shadow-sm border border-purple-500/50"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Stethoscope className="w-3.5 h-3.5" />
                      SynDent
                    </button>
                  </div>
                </div>

                {/* Dynamic Holographic Sub-Tab Simulation */}
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
                      {/* Sub-Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                              TorqueOS <span className="text-cyan-400 font-mono text-xs">[ERP]</span>
                            </h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                              PRODUÇÃO ONLINE
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Gestão de oficinas mecânicas, autocenters e autopeças
                          </p>
                        </div>

                        {/* Interactive Sub-tabs */}
                        <div className="flex items-center gap-1 bg-[#040711] p-1 rounded-md border border-cyan-500/30 text-[11px] font-mono">
                          <button
                            onClick={() => setTorqueTab("os")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              torqueTab === "os" ? "bg-cyan-950 text-cyan-300 font-bold border border-cyan-800/60" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            O.S.
                          </button>
                          <button
                            onClick={() => setTorqueTab("estoque")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              torqueTab === "estoque" ? "bg-cyan-950 text-cyan-300 font-bold border border-cyan-800/60" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            Estoque
                          </button>
                          <button
                            onClick={() => setTorqueTab("financeiro")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              torqueTab === "financeiro" ? "bg-cyan-950 text-cyan-300 font-bold border border-cyan-800/60" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            Caixa
                          </button>
                        </div>
                      </div>

                      {/* Quantum KPI Grid */}
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="p-3 rounded-lg bg-[#040711]/90 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-cyan-400/80 block">O.S. em Aberto</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">18 O.S.</span>
                          <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                            <Activity className="w-2.5 h-2.5" /> 6 na oficina
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#040711]/90 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-cyan-400/80 block">Peças Indexadas</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-cyan-400 mt-0.5 block">+50.000</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">Busca direta</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#040711]/90 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-cyan-400/80 block">Faturamento Dia</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-emerald-400 mt-0.5 block">R$ 14.820</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">Liquidado</span>
                        </div>
                      </div>

                      {/* Holographic Pipeline Simulator */}
                      <div className="p-3.5 rounded-lg bg-[#040711] border border-cyan-500/20 space-y-2.5 min-h-[135px] flex flex-col justify-center">
                        {torqueTab === "os" && (
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400/70 pb-1 border-b border-cyan-500/20">
                              <span>Fluxo de Atendimento em Tempo Real</span>
                              <span className="text-emerald-400 font-semibold">2 na esteira</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-cyan-500/20 flex items-center justify-between hover:border-cyan-400/40 transition-colors">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">OS #4892</span>
                                <span className="text-slate-300">Toyota Corolla • Revisão 60k km</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">R$ 1.840,00</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-cyan-500/20 flex items-center justify-between hover:border-cyan-400/40 transition-colors">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">OS #4891</span>
                                <span className="text-slate-300">Honda Civic • Pastilhas + Disco</span>
                              </div>
                              <span className="font-mono text-cyan-400 text-[11px] font-semibold">Aguardando Peça</span>
                            </div>
                          </div>
                        )}

                        {torqueTab === "estoque" && (
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400/70 pb-1 border-b border-cyan-500/20">
                              <span>Catálogo Indexado com Busca Instantânea</span>
                              <span className="text-cyan-400 font-semibold">Catálogo Ativo</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-cyan-500/20 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">COD-8821</span>
                                <span className="text-slate-300">Filtro Óleo Motor 1.8 Flex</span>
                              </div>
                              <span className="font-mono text-slate-300 text-[11px]">24 em estoque</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-cyan-500/20 flex items-center justify-between">
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
                            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400/70 pb-1 border-b border-cyan-500/20">
                              <span>Conciliação Financeira com Webhooks Pix</span>
                              <span className="text-emerald-400 font-semibold">100% Conciliado</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-cyan-500/20 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">PIX-901</span>
                                <span className="text-slate-300">Recebimento O.S. #4889</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">+ R$ 680,00</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-cyan-500/20 flex items-center justify-between">
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
                      {/* Sub-Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                              SynDent <span className="text-purple-400 font-mono text-xs">[SAAS]</span>
                            </h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/60">
                              PILOTO ATIVO
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">
                            SaaS odontológico com Clean Architecture
                          </p>
                        </div>

                        {/* Interactive Sub-tabs */}
                        <div className="flex items-center gap-1 bg-[#040711] p-1 rounded-md border border-purple-500/30 text-[11px] font-mono">
                          <button
                            onClick={() => setSyndentTab("prontuario")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              syndentTab === "prontuario" ? "bg-purple-950 text-purple-300 font-bold border border-purple-800/60" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            Prontuário
                          </button>
                          <button
                            onClick={() => setSyndentTab("odontograma")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              syndentTab === "odontograma" ? "bg-purple-950 text-purple-300 font-bold border border-purple-800/60" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            2D/3D
                          </button>
                          <button
                            onClick={() => setSyndentTab("agenda")}
                            className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                              syndentTab === "agenda" ? "bg-purple-950 text-purple-300 font-bold border border-purple-800/60" : "text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            Agenda
                          </button>
                        </div>
                      </div>

                      {/* Quantum KPI Grid */}
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="p-3 rounded-lg bg-[#040711]/90 border border-purple-500/20 hover:border-purple-400/50 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-purple-400/80 block">Prontuário</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">Eletrônico</span>
                          <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                            Anamnese & Raio-X
                          </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#040711]/90 border border-purple-500/20 hover:border-purple-400/50 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-purple-400/80 block">Odontograma</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-cyan-400 mt-0.5 block">2D / 3D</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">Dinâmico</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#040711]/90 border border-purple-500/20 hover:border-purple-400/50 transition-colors">
                          <span className="text-[10px] font-mono uppercase text-purple-400/80 block">Isolamento</span>
                          <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">Multi-Tenant</span>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">Fastify Engine</span>
                        </div>
                      </div>

                      {/* Holographic Pipeline Simulator */}
                      <div className="p-3.5 rounded-lg bg-[#040711] border border-purple-500/20 space-y-2.5 min-h-[135px] flex flex-col justify-center">
                        {syndentTab === "prontuario" && (
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-purple-400/70 pb-1 border-b border-purple-500/20">
                              <span>Prontuário Clínico & Evolução</span>
                              <span className="text-cyan-400 font-semibold">Sincronizado</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-purple-500/20 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">PAC-104</span>
                                <span className="text-slate-300">Mariana Costa • Endodontia elemento 16</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">Anestesia Aplicada</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-purple-500/20 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">PAC-105</span>
                                <span className="text-slate-300">Rafael Lima • Moldagem Alinhadores</span>
                              </div>
                              <span className="font-mono text-cyan-400 text-[11px] font-semibold">Fotos Anexadas</span>
                            </div>
                          </div>
                        )}

                        {syndentTab === "odontograma" && (
                          <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between text-[11px] font-mono text-purple-400/70 pb-1 border-b border-purple-500/20">
                              <span>Mapeamento Interativo de Arcada Dentária</span>
                              <span className="text-emerald-400 font-semibold">32 Dentes Mapeados</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-purple-500/20 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">DENTE 16</span>
                                <span className="text-slate-300">Tratamento de Canal em Andamento</span>
                              </div>
                              <span className="font-mono text-purple-400 text-[11px] font-semibold">Face Oclusal</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-purple-500/20 flex items-center justify-between">
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
                            <div className="flex items-center justify-between text-[11px] font-mono text-purple-400/70 pb-1 border-b border-purple-500/20">
                              <span>Agenda Clínica com Confirmação WhatsApp</span>
                              <span className="text-emerald-400 font-semibold">Zero Faltas Hoje</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-purple-500/20 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">09:30</span>
                                <span className="text-slate-300">Mariana Costa • Dra. Beatriz</span>
                              </div>
                              <span className="font-mono text-emerald-400 text-[11px] font-semibold">Confirmado Zap</span>
                            </div>
                            <div className="p-2 rounded bg-[#080e1c] border border-purple-500/20 flex items-center justify-between">
                              <div>
                                <span className="font-mono font-bold text-white mr-2">10:30</span>
                                <span className="text-slate-300">Rafael Lima • Dr. Henrique</span>
                              </div>
                              <span className="font-mono text-cyan-400 text-[11px] font-semibold">Na Recepção</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Holographic HUD Bar */}
                <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-cyan-400/80 border-t border-cyan-500/20">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>ENGINE: TS • Fastify • NestJS • PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <Zap className="w-3 h-3" />
                    <span>Sub-18ms Core</span>
                  </div>
                </div>
              </div>
            </HolographicCard>
          </div>
        </div>
      </div>
    </section>
  );
};
