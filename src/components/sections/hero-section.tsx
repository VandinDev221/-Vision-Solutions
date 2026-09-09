"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Wrench, Stethoscope, Zap } from "lucide-react";

// Dynamic import — SSR-safe, carregado somente no client
const Hero3DStage = dynamic(
  () => import("../3d/Hero3DStage").then((m) => ({ default: m.Hero3DStage })),
  { ssr: false, loading: () => <div className="w-full h-[460px] sm:h-[520px] rounded-2xl bg-[#080d1a] border border-blue-500/20 animate-pulse" /> }
);

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"torqueos" | "syndent">("torqueos");
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B0E14] border-b border-white/[0.06] overflow-hidden">
      {/* Ambient depth glow — sutil, não sci-fi */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-r from-blue-700/8 via-indigo-600/10 to-blue-700/8 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left Column: Posicionamento Editorial ── */}
          <div className="lg:col-span-5 space-y-8 text-left">

            {/* Identity tag */}
            <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-lg bg-[#111622] border border-blue-500/25 shadow-lg">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-mono font-bold text-xs shadow-md select-none">
                VS
              </div>
              <div className="flex flex-col text-left leading-none">
                <span className="text-xs font-bold font-mono text-white tracking-wider uppercase">
                  VISION SOLUTIONS
                </span>
                <span className="text-[10px] text-blue-400 font-mono mt-0.5">
                  SOFTWARE HOUSE &amp; SAAS STUDIO
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Software para operações que não cabem em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  software genérico.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-md">
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

            {/* Engineering proof points */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] text-left">
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

          {/* ── Right Column: WebGL 3D Engine + Floating Product Cards ── */}
          <div className="lg:col-span-7 relative">
            {/* Tab switcher acima do canvas */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setActiveTab("torqueos"); setSelectedCard(0); }}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "torqueos"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "bg-[#111622] text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  <Wrench className="w-3.5 h-3.5" />
                  TorqueOS [ERP]
                </button>
                <button
                  onClick={() => { setActiveTab("syndent"); setSelectedCard(0); }}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "syndent"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "bg-[#111622] text-slate-400 hover:text-white border border-white/5"
                  }`}
                >
                  <Stethoscope className="w-3.5 h-3.5" />
                  SynDent [SaaS]
                </button>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Produção Ativa</span>
              </div>
            </div>

            {/* WebGL Canvas — Hero3DStage */}
            {mounted && (
              <Hero3DStage
                activeTab={activeTab}
                selectedCard={selectedCard}
                onSelectCard={setSelectedCard}
              />
            )}

            {/* Bottom context bar */}
            <div className="mt-3 px-4 py-2.5 rounded-lg bg-[#111622]/80 border border-white/[0.06] backdrop-blur-sm flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <span className="text-slate-500">Stack:</span>
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Next.js 15
                </span>
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Fastify
                </span>
                <span className="flex items-center gap-1.5 text-white font-semibold">
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
    </section>
  );
};
