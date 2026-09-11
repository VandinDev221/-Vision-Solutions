"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Wrench, Stethoscope, Zap, Sparkles, Brain } from "lucide-react";

const Hero3DStage = dynamic(
  () => import("../3d/Hero3DStage").then((m) => ({ default: m.Hero3DStage })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[460px] sm:h-[520px] rounded-xl bg-[#070b14] border border-white/[0.06] animate-pulse" />
    ),
  }
);

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"torqueos" | "syndent">("torqueos");
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-[#0B0E14] border-b border-white/[0.06] overflow-hidden">
      {/* Multi-color ambient halos matching reference */}
      <div className="absolute top-0 right-0 w-[650px] h-[550px] bg-gradient-to-br from-cyan-600/[0.08] via-purple-600/[0.07] to-pink-600/[0.06] blur-[140px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[350px] bg-blue-700/[0.06] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Grade assimétrica: texto curto e preciso à esquerda, canvas 3D à direita ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-16 lg:gap-12 items-start">

          {/* ── Col esquerda: Copy & Hierarquia da Referência "Unlock Collective Wisdom" ── */}
          <div className="space-y-8 lg:pt-2">

            {/* Micro-badge de tecnologia */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827] border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>AI-POWERED PLATFORMS & SAAS STUDIO</span>
            </div>

            {/* Title / Headline: Unlock Collective Wisdom Theme */}
            <div className="space-y-4">
              <h1 className="text-[2.6rem] sm:text-[3.2rem] font-extrabold text-white tracking-[-0.02em] leading-[1.08]">
                Desbloqueie a<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                  inteligência coletiva
                </span><br />
                da sua empresa.
              </h1>

              <p className="text-base text-slate-300 leading-[1.75] max-w-[400px]">
                Gestão de conhecimento, automação sináptica e engenharia de software verticais para transformar processos operacionais complexos em plataformas de alto rendimento.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 active:scale-[0.98]"
              >
                <span>Explorar Produtos SaaS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#111622] hover:bg-[#161D2B] text-slate-200 border border-white/10 font-semibold text-sm transition-all"
              >
                <span>Construir Plataforma</span>
              </Link>
            </div>

            {/* Proof metrics */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4">
              <div>
                <span className="block text-xl font-bold font-mono text-white">100%</span>
                <span className="text-[11px] text-slate-400 mt-0.5 block leading-tight">Código Autoral</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-white">Multi-Tenant</span>
                <span className="text-[11px] text-slate-400 mt-0.5 block leading-tight">Isolamento Seguro</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-white">Sub-18ms</span>
                <span className="text-[11px] text-slate-400 mt-0.5 block leading-tight">Latência Média</span>
              </div>
            </div>
          </div>

          {/* ── Col direita: WebGL 3D Geometric Brain Stage + Controles ── */}
          <div className="space-y-3">
            {/* Controles do produto */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setActiveTab("torqueos"); setSelectedCard(0); }}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "torqueos"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 bg-[#0b1120] border border-white/5"
                  }`}
                >
                  <Wrench className="w-3.5 h-3.5" />
                  TorqueOS [ERP]
                </button>
                <button
                  onClick={() => { setActiveTab("syndent"); setSelectedCard(0); }}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "syndent"
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 bg-[#0b1120] border border-white/5"
                  }`}
                >
                  <Stethoscope className="w-3.5 h-3.5" />
                  SynDent [SaaS]
                </button>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <Brain className="w-3.5 h-3.5 text-cyan-400" />
                <span>NÚCLEO NEURAL 3D INTERATIVO</span>
              </div>
            </div>

            {/* Canvas 3D */}
            {mounted && (
              <Hero3DStage
                activeTab={activeTab}
                selectedCard={selectedCard}
                onSelectCard={setSelectedCard}
              />
            )}

            {/* Context bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Next.js 15
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  Fastify
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  PostgreSQL 16
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                60 FPS WebGL Engine
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
