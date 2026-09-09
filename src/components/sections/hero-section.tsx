"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  Stethoscope,
  Car,
  Activity,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Cog
} from "lucide-react";

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"torqueos" | "syndent">("torqueos");
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const vehicleCards = [
    {
      car: "Toyota Corolla",
      client: "Carlos M.",
      service: "Revisão 60k + Freios",
      status: "Em Execução",
      statusColor: "text-blue-400 bg-blue-950/80 border-blue-800",
      price: "R$ 1.840,00",
      progress: "75%",
      icon: "🚗"
    },
    {
      car: "Honda Civic",
      client: "Amanda R.",
      service: "Troca Amortecedores",
      status: "Aguardando Peça",
      statusColor: "text-amber-400 bg-amber-950/80 border-amber-800",
      price: "R$ 2.450,00",
      progress: "30%",
      icon: "🏎️"
    },
    {
      car: "Jeep Compass",
      client: "Eduardo S.",
      service: "Diagnóstico Injeção",
      status: "Finalizado",
      statusColor: "text-emerald-400 bg-emerald-950/80 border-emerald-800",
      price: "R$ 720,00",
      progress: "100%",
      icon: "🚙"
    }
  ];

  const clinicalCards = [
    {
      car: "Mariana Costa",
      client: "Dra. Beatriz",
      service: "Endodontia Dente 16",
      status: "Em Atendimento",
      statusColor: "text-blue-400 bg-blue-950/80 border-blue-800",
      price: "R$ 1.200,00",
      progress: "80%",
      icon: "🦷"
    },
    {
      car: "Rafael Lima",
      client: "Dr. Henrique",
      service: "Alinhador Invisível",
      status: "Moldagem 3D",
      statusColor: "text-purple-400 bg-purple-950/80 border-purple-800",
      price: "R$ 4.500,00",
      progress: "45%",
      icon: "✨"
    },
    {
      car: "Juliana Santos",
      client: "Dra. Camila",
      service: "Profilaxia & Clareamento",
      status: "Finalizado",
      statusColor: "text-emerald-400 bg-emerald-950/80 border-emerald-800",
      price: "R$ 850,00",
      progress: "100%",
      icon: "🩺"
    }
  ];

  const currentCards = activeTab === "torqueos" ? vehicleCards : clinicalCards;

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#0B0E14] border-b border-white/10 overflow-hidden">
      {/* 3D Ambient Depth Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Positioning */}
          <div className="lg:col-span-5 space-y-8 text-left">
            {/* 3D Monogram Tag */}
            <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-lg bg-[#111622] border border-blue-500/30 shadow-lg shadow-blue-950/40">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md">
                VS
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-xs font-bold font-mono text-white tracking-wider uppercase">
                  VISION SOLUTIONS
                </span>
                <span className="text-[10px] text-blue-400 font-mono mt-0.5">
                  SOFTWARE HOUSE & SAAS STUDIO
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Software para operações que não cabem em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  software genérico.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Construímos SaaS verticais e sistemas sob medida para empresas que precisam transformar processos complexos em operação digital estruturada, rápida e estável.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 active:scale-[0.98]"
              >
                <span>Conhecer nossos produtos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#111622] hover:bg-[#161D2B] text-slate-200 border border-white/10 font-semibold text-sm transition-all"
              >
                <span>Construir um sistema</span>
              </Link>
            </div>

            {/* Verifiable Engineering Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-left">
              <div>
                <span className="block text-xl font-bold font-mono text-white">100%</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Código Autoral</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-white">Multi-Tenant</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Isolamento Seguro</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-white">TypeScript</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Tipagem Estrita</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Spatial Engine + Interactive Floating Breakout Cards */}
          <div className="lg:col-span-7 relative">
            <div className="p-6 sm:p-8 rounded-xl bg-[#111622] border border-blue-500/20 shadow-2xl space-y-6 relative overflow-hidden">
              {/* Top Engine Control Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("torqueos")}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === "torqueos"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                        : "bg-[#0B0E14] text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    TorqueOS [ERP]
                  </button>
                  <button
                    onClick={() => setActiveTab("syndent")}
                    className={`px-3 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      activeTab === "syndent"
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                        : "bg-[#0B0E14] text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    <Stethoscope className="w-3.5 h-3.5" />
                    SynDent [SaaS]
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Ambiente de Produção Ativo</span>
                </div>
              </div>

              {/* Central 3D Engine Columns + Breakout Fiber Conduits */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                {/* 3D Physical Server / Engine Block */}
                <div className="md:col-span-5 p-5 rounded-lg bg-[#0B0E14] border border-blue-500/30 shadow-xl space-y-4 text-center relative group">
                  {/* Top Animated Mechanical Pistons/Gears Indicator */}
                  <div className="flex items-center justify-center gap-3 pb-2 border-b border-white/5 text-blue-400">
                    <Cog className="w-5 h-5 animate-spin" style={{ animationDuration: "8s" }} />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200">
                      {activeTab === "torqueos" ? "Motor Operacional" : "Núcleo Clínico"}
                    </span>
                    <Cog className="w-4 h-4 animate-spin" style={{ animationDuration: "6s", animationDirection: "reverse" }} />
                  </div>

                  {/* 3 Modular Server Tower Pillars with illuminated status LEDs */}
                  <div className="grid grid-cols-3 gap-2 py-2">
                    <div className="p-2 rounded bg-[#111622] border border-blue-500/30 flex flex-col items-center gap-1">
                      <span className="text-[9px] font-mono uppercase text-slate-400">
                        {activeTab === "torqueos" ? "O.S." : "Prontuário"}
                      </span>
                      <div className="w-full h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="text-xs font-bold font-mono text-white">18</span>
                    </div>
                    <div className="p-2 rounded bg-[#111622] border border-cyan-500/30 flex flex-col items-center gap-1">
                      <span className="text-[9px] font-mono uppercase text-slate-400">
                        {activeTab === "torqueos" ? "Pátio" : "Odonto 3D"}
                      </span>
                      <div className="w-full h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-xs font-bold font-mono text-cyan-300">Ativo</span>
                    </div>
                    <div className="p-2 rounded bg-[#111622] border border-emerald-500/30 flex flex-col items-center gap-1">
                      <span className="text-[9px] font-mono uppercase text-slate-400">
                        {activeTab === "torqueos" ? "Caixa" : "Agenda"}
                      </span>
                      <div className="w-full h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-bold font-mono text-emerald-400">100%</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-tight">
                    {activeTab === "torqueos"
                      ? "Processamento em tempo real de ordens, catálogo de peças e fluxo de caixa."
                      : "Sincronização imediata de anamnese, odontograma 2D/3D e repasses clínicos."}
                  </p>
                </div>

                {/* Right: Floating Interactive Breakout Product Cards */}
                <div className="md:col-span-7 space-y-2.5">
                  {currentCards.map((card, idx) => {
                    const isSelected = selectedCard === idx;

                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedCard(idx)}
                        className={`p-3.5 rounded-lg border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-[#161D2B] border-blue-500 shadow-lg shadow-blue-500/10 translate-x-1"
                            : "bg-[#0B0E14] border-white/5 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-xl shrink-0">{card.icon}</div>
                          <div className="text-left">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold font-mono text-white">
                                {card.car}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">
                                ({card.client})
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-300 block mt-0.5">
                              {card.service}
                            </span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border block mb-1 ${card.statusColor}`}>
                            {card.status}
                          </span>
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            {card.price}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Conduits Connected Stack Dock */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500">Conexões Ativas:</span>
                  <span className="px-2.5 py-1 rounded bg-[#0B0E14] border border-white/5 text-white font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Next.js 15
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#0B0E14] border border-white/5 text-white font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Fastify
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#0B0E14] border border-white/5 text-white font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    PostgreSQL 16
                  </span>
                </div>

                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Latência Sub-18ms
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
