"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Wrench, Stethoscope, Zap } from "lucide-react";

const Hero3DStage = dynamic(
  () => import("../3d/Hero3DStage").then((m) => ({ default: m.Hero3DStage })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[460px] sm:h-[520px] rounded-xl bg-[#080d1a] border border-white/[0.06] animate-pulse" />
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
      {/* Glow sutil — posicionado assimetricamente */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-blue-700/[0.06] blur-[120px] pointer-events-none rounded-full translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-indigo-700/[0.05] blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Grade assimétrica: texto estreito à esquerda, canvas largo à direita ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 lg:gap-12 items-start">

          {/* ── Col esquerda: Conteúdo editorial ancorado no topo ── */}
          <div className="space-y-10 lg:pt-4">

            {/* Eyebrow label — minimalista */}
            <div>
              <span className="text-[11px] font-mono font-semibold text-blue-400 uppercase tracking-[0.18em] block mb-6">
                Software House &amp; SaaS Studio
              </span>
              <h1 className="text-[2.6rem] sm:text-[3.2rem] font-extrabold text-white tracking-[-0.02em] leading-[1.08]">
                Software para<br />
                operações que<br />
                não cabem em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  genérico.
                </span>
              </h1>
            </div>

            <p className="text-base text-slate-400 leading-[1.75] max-w-[360px]">
              SaaS verticais e sistemas sob medida para empresas que precisam transformar processos complexos em operação digital estruturada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Link
                href="/produtos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-150 shadow-lg shadow-blue-600/20 active:scale-[0.98]"
              >
                Nossos Produtos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/[0.10] text-slate-300 hover:text-white hover:border-white/20 font-medium text-sm transition-all"
              >
                Construir um sistema
              </Link>
            </div>

            {/* Micro-proof points — sem centralização */}
            <div className="pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-6">
              <div>
                <span className="block text-lg font-bold font-mono text-white">100%</span>
                <span className="text-[11px] text-slate-500 mt-0.5 block leading-tight">Código Autoral</span>
              </div>
              <div>
                <span className="block text-lg font-bold font-mono text-white">5+</span>
                <span className="text-[11px] text-slate-500 mt-0.5 block leading-tight">Produtos SaaS</span>
              </div>
              <div>
                <span className="block text-lg font-bold font-mono text-white">TS</span>
                <span className="text-[11px] text-slate-500 mt-0.5 block leading-tight">Tipagem Estrita</span>
              </div>
            </div>
          </div>

          {/* ── Col direita: WebGL Canvas + controles integrados ── */}
          <div className="space-y-3">
            {/* Controles do produto — acima do canvas, alinhados à esquerda */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => { setActiveTab("torqueos"); setSelectedCard(0); }}
                  className={`px-3 py-1.5 rounded-md text-[11px] font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "torqueos"
                      ? "bg-white/[0.08] text-white border border-white/15"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <Wrench className="w-3 h-3" />
                  TorqueOS
                </button>
                <button
                  onClick={() => { setActiveTab("syndent"); setSelectedCard(0); }}
                  className={`px-3 py-1.5 rounded-md text-[11px] font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeTab === "syndent"
                      ? "bg-white/[0.08] text-white border border-white/15"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <Stethoscope className="w-3 h-3" />
                  SynDent
                </button>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                {activeTab === "torqueos" ? "ERP Automotivo" : "SaaS Odontológico"}
              </span>
            </div>

            {/* Canvas 3D */}
            {mounted && (
              <Hero3DStage
                activeTab={activeTab}
                selectedCard={selectedCard}
                onSelectCard={setSelectedCard}
              />
            )}

            {/* Rodapé de contexto — discreto */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-3 text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Next.js 15
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  Fastify
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  PostgreSQL
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-500 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Sub-18ms
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
