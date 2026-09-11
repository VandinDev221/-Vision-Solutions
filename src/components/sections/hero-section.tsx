"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Activity, Layers } from "lucide-react";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Obrigado! Entraremos em contato via: ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#050811] text-white overflow-hidden">
      {/* ── Anamorphic Vertical Light Beam & Lens Flare Background Effect ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none z-0">
        {/* Core Vertical Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[550px] bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent blur-[1px] opacity-90" />
        {/* Intense Horizontal Flare Burst */}
        <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[4px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[2px] opacity-80" />
        {/* Radial Ambient Glow */}
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-gradient-to-b from-blue-600/30 via-cyan-500/15 to-transparent blur-[110px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* ── Top Pill Badge ── */}
        <div className="inline-flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d1527]/80 border border-blue-500/30 text-cyan-300 text-xs font-mono font-medium shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Desenvolvimento &amp; SaaS de Alta Performance</span>
          </div>
        </div>

        {/* ── Headline ── */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            O Futuro da Sua Operação<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
              Começa com Software Sob Medida
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Planeje menos, execute mais. Sua empresa com plataformas verticais, automação com IA e ecossistemas reimaginados para alta performance.
          </p>
        </div>

        {/* ── Email Input Pill Box ── */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative flex items-center">
          <div className="relative w-full flex items-center p-1.5 rounded-full bg-[#0d1528]/90 border border-blue-500/40 shadow-2xl backdrop-blur-xl group focus-within:border-cyan-400 transition-all">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu e-mail profissional..."
              className="w-full px-5 py-2.5 bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-sans"
              required
            />
            <button
              type="submit"
              className="shrink-0 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-600/40 active:scale-95 cursor-pointer"
            >
              Solicitar Demo
            </button>
          </div>
        </form>

        {/* ── Central Agex-Style Glassmorphic Dashboard Mockup ── */}
        <div className="pt-8 max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-[#090e1c]/90 border border-blue-500/30 shadow-[0_0_80px_rgba(37,99,235,0.25)] p-4 sm:p-6 backdrop-blur-xl overflow-hidden text-left space-y-6">
            
            {/* Top Bar Mockup */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-white font-bold tracking-wider ml-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" /> Vision Studio Engine
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-[#050811] border border-white/10 text-cyan-300">
                  ● Sistema Online
                </span>
                <span>v2.4.0</span>
              </div>
            </div>

            {/* Metric Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#10192e] to-[#0a1020] border border-blue-500/20 shadow-md space-y-1">
                <span className="text-xs text-slate-400 font-mono block">Ordens em Execução</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-extrabold font-mono text-white">42</span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-0.5">
                    <TrendingUp className="w-3.5 h-3.5" /> +14%
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-[#10192e] to-[#0a1020] border border-blue-500/20 shadow-md space-y-1">
                <span className="text-xs text-slate-400 font-mono block">Consultas Odonto / Dia</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-extrabold font-mono text-white">21</span>
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-0.5">
                    <Activity className="w-3.5 h-3.5" /> Ativo
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-[#10192e] to-[#0a1020] border border-blue-500/20 shadow-md space-y-1">
                <span className="text-xs text-slate-400 font-mono block">Processamentos IA</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-extrabold font-mono text-white">68</span>
                  <span className="text-xs font-mono text-emerald-400">100% Ok</span>
                </div>
              </div>
            </div>

            {/* Chart & History Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2">
              {/* Bar Chart Mockup */}
              <div className="lg:col-span-7 p-4 rounded-xl bg-[#060a16] border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300 font-bold">Histórico Operacional</span>
                  <span className="text-cyan-400 text-[11px]">Tempo Real</span>
                </div>
                <div className="h-36 flex items-end justify-between gap-2 pt-4 px-2">
                  {[40, 65, 30, 85, 55, 90, 75, 95].map((h, i) => (
                    <div key={i} className="w-full flex flex-col items-center gap-1">
                      <div
                        style={{ height: `${h}%` }}
                        className={`w-full rounded-t-md transition-all duration-500 ${
                          i === 5 || i === 7
                            ? "bg-gradient-to-t from-blue-600 via-cyan-400 to-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                            : "bg-blue-950/80 hover:bg-blue-800/80"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Feed Mockup */}
              <div className="lg:col-span-5 p-4 rounded-xl bg-[#060a16] border border-white/10 space-y-3">
                <span className="text-xs font-mono text-slate-300 font-bold block">Atividades Recentes</span>
                <div className="space-y-2.5 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-[#0d1424] border border-white/5">
                    <span className="text-slate-200">TorqueOS: Ordem #849 finalizada</span>
                    <span className="text-[10px] font-mono text-emerald-400">Agora</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#0d1424] border border-white/5">
                    <span className="text-slate-200">SynDent: Odontograma 3D atualizado</span>
                    <span className="text-[10px] font-mono text-slate-400">Há 5m</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#0d1424] border border-white/5">
                    <span className="text-slate-200">DisparoFlow: Campanha disparada</span>
                    <span className="text-[10px] font-mono text-slate-400">Há 12m</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Brand Logos Bar ── */}
        <div className="pt-16 pb-4 border-t border-white/10 space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
            Tecnologia confiavel para operações e SaaS em escala
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 text-slate-400 text-sm font-mono font-bold">
            <span>TORQUEOS</span>
            <span>SYNDENT</span>
            <span>BARBERCRM</span>
            <span>DISPAROFLOW</span>
            <span>ADV CARGO</span>
          </div>
        </div>

      </div>
    </section>
  );
};
