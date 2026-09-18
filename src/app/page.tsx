"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Layers,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Network,
  Activity,
  Boxes,
  Lock,
  Workflow,
  Sparkles,
  ChevronRight
} from "lucide-react";

export default function VisionSolutionsLanding() {
  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      
      {/* ── Background Grid & Ambient Glows ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Subtle Isometric Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
            backgroundSize: "48px 48px"
          }}
        />
        {/* Deep Blue Glows */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[550px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-indigo-600/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-[800px] h-[600px] bg-blue-500/10 blur-[170px] rounded-full" />
      </div>

      <div className="relative z-10">

        {/* ═══════════════════════════════════════════════════════════
            1. HERO SECTION
        ═══════════════════════════════════════════════════════════ */}
        <section className="pt-16 pb-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-6 space-y-8 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D152A] border border-blue-500/30 text-xs font-mono font-medium">
                <span className="text-slate-300">Software House &</span>
                <span className="text-cyan-400">SaaS Studio</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Software para operações que não cabem em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 drop-shadow-[0_0_35px_rgba(0,102,255,0.4)]">
                  software genérico.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                Construímos SaaS verticais e sistemas sob medida para empresas que precisam transformar processos complexos em operação digital estruturada, rápida e estável.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="#produtos"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(0,102,255,0.45)] active:scale-95 transition-all"
                >
                  <span>Conhecer nossos produtos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#090E1A] hover:bg-[#10172A] text-slate-300 hover:text-white border border-white/10 font-semibold text-sm transition-all"
                >
                  <span>Construir um sistema</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Isometric 3D Mockup & Technical Layers Track */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              
              {/* 3D Isometric Screen Display Container */}
              <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
                
                {/* Blue Base Hologram Pedestal */}
                <div className="absolute inset-x-8 bottom-6 h-36 bg-gradient-to-t from-blue-600/25 via-blue-500/10 to-transparent rounded-[40px] blur-xl" />
                
                {/* Main Isometric Plate: VS Vision Solutions Centerpiece */}
                <div className="relative w-72 h-44 rounded-2xl bg-gradient-to-br from-[#0E162B] to-[#080D1A] border border-blue-500/50 shadow-[0_0_50px_rgba(0,102,255,0.35)] p-5 flex flex-col justify-between backdrop-blur-2xl transform -rotate-6 skew-y-3 hover:rotate-0 transition-transform duration-500 z-20">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                      VS
                    </div>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-base font-extrabold font-mono tracking-wider text-white">VISION</div>
                    <div className="text-[10px] tracking-widest text-blue-400 font-mono">SOLUTIONS</div>
                  </div>
                </div>

                {/* Floating Layer 1: Code Editor Screen (Top-Left) */}
                <div className="absolute -top-4 left-0 w-52 rounded-xl bg-[#080E1C]/90 border border-blue-400/30 p-3 shadow-2xl backdrop-blur-md transform -rotate-12 z-10">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="pt-2 font-mono text-[9px] text-cyan-300 space-y-1">
                    <div><span className="text-pink-400">const</span> engine = <span className="text-amber-300">createSaaS</span>();</div>
                    <div className="text-slate-500">{"// Multi-Tenant Core"}</div>
                    <div>engine.<span className="text-blue-400">deploy</span>(<span className="text-emerald-400">&apos;production&apos;</span>);</div>
                  </div>
                </div>

                {/* Floating Layer 2: Metric Graph Screen (Right) */}
                <div className="absolute -bottom-2 right-4 w-48 rounded-xl bg-[#091022]/90 border border-indigo-400/30 p-3 shadow-2xl backdrop-blur-md transform rotate-6 z-30">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-2 border-b border-white/5">
                    <span>Performance</span>
                    <span className="text-emerald-400">99.98%</span>
                  </div>
                  <div className="h-14 flex items-end justify-between gap-1.5 pt-2 px-1">
                    {[35, 55, 40, 75, 60, 90, 85].map((val, idx) => (
                      <div
                        key={idx}
                        style={{ height: `${val}%` }}
                        className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Security Shield Badge (Far Right) */}
                <div className="absolute top-12 right-2 p-3 rounded-xl bg-[#0C152B]/90 border border-cyan-400/40 shadow-lg shadow-cyan-500/20 z-20">
                  <Lock className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              {/* Sidebar List Mapping Technical Layers (Far Right) */}
              <div className="hidden sm:flex flex-col gap-3 font-mono text-[10px] tracking-widest text-slate-400 pl-4 border-l border-white/10">
                {[
                  "FRONTEND",
                  "API",
                  "RULES",
                  "DATA",
                  "QUEUES",
                  "INFRA"
                ].map((layer, idx) => (
                  <div key={idx} className="flex items-center gap-2 group cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#00F0FF] transition-all" />
                    <span className="group-hover:text-white transition-colors">{layer}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            2. FEATURE GRID (3 HORIZONTAL CARDS)
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-12 border-y border-white/[0.06] bg-[#080D19]/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-[#0B1120]/80 border border-blue-500/20 hover:border-blue-500/40 shadow-lg transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.4)] transition-all">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="text-base font-bold text-white">100% Código Autoral</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Soluções desenvolvidas do zero, sem dependências de terceiros.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-[#0B1120]/80 border border-blue-500/20 hover:border-blue-500/40 shadow-lg transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.4)] transition-all">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="text-base font-bold text-white">Multi-Tenant / Isolamento Seguro</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Cada cliente, seu ambiente. Segurança e performance garantidas.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-2xl bg-[#0B1120]/80 border border-blue-500/20 hover:border-blue-500/40 shadow-lg transition-all flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:shadow-[0_0_15px_rgba(0,102,255,0.4)] transition-all">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="text-base font-bold text-white">TypeScript / Tipagem Estrita</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Código mais confiável, escalável e sustentável a longo prazo.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            3. PRODUCTS SECTION ("NOSSOS PRODUTOS")
        ═══════════════════════════════════════════════════════════ */}
        <section id="produtos" className="py-28 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Nossos <span className="text-blue-400">Produtos</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Soluções que impulsionam negócios.
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Plataformas SaaS verticais e sistemas empresariais com foco em performance, segurança e usabilidade.
              </p>
              <div className="pt-4">
                <Link
                  href="/produtos"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Ver todos os produtos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: 2 Large Product Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Product 1: TorqueOS */}
              <div className="p-6 rounded-2xl bg-[#090E1B] border border-blue-500/20 hover:border-blue-500/50 shadow-xl flex flex-col justify-between space-y-5 group transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
                      TorqueOS <span className="text-xs font-mono text-blue-400 font-normal">[ERP]</span>
                    </h3>
                    <span className="p-1.5 rounded-full bg-slate-800/60 text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Gestão completa para oficinas e centros automotivos.
                  </p>
                </div>

                {/* Dark Mockup Container */}
                <div className="rounded-xl bg-[#050811] border border-white/10 p-3.5 space-y-2.5 font-mono text-[10px]">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5 text-slate-400">
                    <span className="text-cyan-400 font-bold">TorqueOS Dashboard</span>
                    <span className="text-emerald-400">● 18 O.S. Ativas</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between p-1.5 rounded bg-[#0D1424] text-slate-300">
                      <span>#00128 João Silva</span>
                      <span className="text-emerald-400">R$ 480,00</span>
                    </div>
                    <div className="flex justify-between p-1.5 rounded bg-[#0D1424] text-slate-300">
                      <span>#00127 Maria Souza</span>
                      <span className="text-amber-400">R$ 120,00</span>
                    </div>
                    <div className="flex justify-between p-1.5 rounded bg-[#0D1424] text-slate-300">
                      <span>#00126 Carlos Lima</span>
                      <span className="text-blue-400">R$ 260,00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product 2: SynDent */}
              <div className="p-6 rounded-2xl bg-[#090E1B] border border-blue-500/20 hover:border-blue-500/50 shadow-xl flex flex-col justify-between space-y-5 group transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
                      SynDent <span className="text-xs font-mono text-purple-400 font-normal">[SaaS]</span>
                    </h3>
                    <span className="p-1.5 rounded-full bg-slate-800/60 text-slate-400 group-hover:text-purple-400 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Gestão inteligente para clínicas odontológicas.
                  </p>
                </div>

                {/* Dark Mockup Container */}
                <div className="rounded-xl bg-[#050811] border border-white/10 p-3.5 space-y-2.5 font-mono text-[10px]">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5 text-slate-400">
                    <span className="text-purple-400 font-bold">SynDent Cloud</span>
                    <span className="text-emerald-400">● 21 Pacientes Hoje</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between p-1.5 rounded bg-[#0D1424] text-slate-300">
                      <span>Mariana Costa (Dra. Beatriz)</span>
                      <span className="text-purple-400">Endodontia</span>
                    </div>
                    <div className="flex justify-between p-1.5 rounded bg-[#0D1424] text-slate-300">
                      <span>Rafael Lima (Dr. Henrique)</span>
                      <span className="text-cyan-400">Alinhadores 3D</span>
                    </div>
                    <div className="flex justify-between p-1.5 rounded bg-[#0D1424] text-slate-300">
                      <span>Juliana Santos (Dra. Camila)</span>
                      <span className="text-emerald-400">Finalizado</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            4. INTERACTIVE DEMO SECTION (SPLIT LAYOUT)
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="rounded-3xl bg-[#080D1A]/90 border border-blue-500/25 p-8 sm:p-12 shadow-[0_0_80px_rgba(0,102,255,0.15)] backdrop-blur-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Realistic Dark SaaS Dashboard Panel */}
              <div className="lg:col-span-7 rounded-2xl bg-[#050810] border border-white/10 p-5 sm:p-6 shadow-2xl space-y-6 text-left">
                
                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                      VS
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white flex items-center gap-2">
                        TorqueOS AutoCenter
                        <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[9px] border border-emerald-800/80">
                          ● Ativo
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">Oficina Principal • 18 O.S. no pátio hoje</div>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    Ambiente de Produção
                  </div>
                </div>

                {/* Metrics 3-Col Bar */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-[#0A1020] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400">O.S. Hoje</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xl font-mono font-bold text-white">18</span>
                      <span className="text-[10px] font-mono text-emerald-400">↑ 12%</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0A1020] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400">Peças em Estoque</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xl font-mono font-bold text-white">247</span>
                      <span className="text-[10px] font-mono text-emerald-400">↑ 8%</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0A1020] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400">Financeiro (mês)</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-mono font-bold text-white">R$ 42.380</span>
                      <span className="text-[10px] font-mono text-emerald-400">↑ 15%</span>
                    </div>
                  </div>
                </div>

                {/* Data Table: Últimas O.S. */}
                <div className="space-y-3 font-mono">
                  <div className="text-xs font-bold text-slate-300">Últimas O.S.</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px] text-left">
                      <thead>
                        <tr className="text-slate-500 border-b border-white/5 pb-2">
                          <th className="pb-2">O.S.</th>
                          <th className="pb-2">Cliente</th>
                          <th className="pb-2">Veículo</th>
                          <th className="pb-2">Status</th>
                          <th className="pb-2 text-right">Valor</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-300">
                        <tr>
                          <td className="py-2 text-cyan-400 font-bold">#00128</td>
                          <td className="py-2">João Silva</td>
                          <td className="py-2 text-slate-400">Honda Civic</td>
                          <td className="py-2"><span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800 text-[10px]">Em andamento</span></td>
                          <td className="py-2 text-right font-bold text-white">R$ 480,00</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-cyan-400 font-bold">#00127</td>
                          <td className="py-2">Maria Souza</td>
                          <td className="py-2 text-slate-400">Fiat Uno</td>
                          <td className="py-2"><span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-800 text-[10px]">Aguardando peça</span></td>
                          <td className="py-2 text-right font-bold text-white">R$ 120,00</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-cyan-400 font-bold">#00126</td>
                          <td className="py-2">Carlos Lima</td>
                          <td className="py-2 text-slate-400">VW Gol</td>
                          <td className="py-2"><span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[10px]">Finalizado</span></td>
                          <td className="py-2 text-right font-bold text-white">R$ 260,00</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-cyan-400 font-bold">#00125</td>
                          <td className="py-2">Ana Costa</td>
                          <td className="py-2 text-slate-400">Toyota Corolla</td>
                          <td className="py-2"><span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800 text-[10px]">Em andamento</span></td>
                          <td className="py-2 text-right font-bold text-white">R$ 670,00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              {/* Right Side: Copy & Bullet Features */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                  Demonstração
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Veja a plataforma em ação.
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Um ambiente completo, intuitivo e poderoso para gestão de operações reais.
                </p>

                <div>
                  <Link
                    href="#contato"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all"
                  >
                    <span>Conhecer o TorqueOS</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Feature Bullet List */}
                <div className="pt-4 space-y-3.5 border-t border-white/10">
                  {[
                    "Gestão de O.S.",
                    "Estoque inteligente",
                    "Financeiro integrado",
                    "Relatórios e indicadores"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-medium text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            5. SERVICES & ENGINEERING ("DA IDEIA À OPERAÇÃO")
        ═══════════════════════════════════════════════════════════ */}
        <section id="solucoes" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text & CTA */}
            <div className="lg:col-span-4 space-y-5 text-left">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                Soluções e Engenharia
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Da ideia à operação.
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Desenvolvemos soluções sob medida, com foco em escalabilidade, performance e crescimento do seu negócio.
              </p>
              <div className="pt-2">
                <Link
                  href="/servicos"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#090F1E] border border-blue-500/40 text-cyan-300 hover:text-white text-xs font-semibold shadow-[0_0_15px_rgba(0,102,255,0.25)] transition-all"
                >
                  <span>Nossas soluções</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </Link>
              </div>
            </div>

            {/* Center: Glowing 3D Isometric Block with </> Symbol */}
            <div className="lg:col-span-4 flex items-center justify-center relative">
              {/* Radial Base Glow */}
              <div className="absolute w-56 h-56 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="relative w-48 h-48 rounded-3xl bg-gradient-to-br from-[#101B33] via-[#091124] to-[#050914] border border-blue-400/50 shadow-[0_0_50px_rgba(0,102,255,0.4)] flex items-center justify-center transform -rotate-12 skew-y-6 hover:rotate-0 transition-transform duration-500 group">
                <div className="text-4xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]">
                  &lt;/&gt;
                </div>
                {/* Circuit Grid Footprint */}
                <div className="absolute -bottom-4 inset-x-4 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm opacity-70" />
              </div>
            </div>

            {/* Right: List of 4 Services */}
            <div className="lg:col-span-4 space-y-4">
              {[
                {
                  title: "Desenvolvimento de SaaS",
                  desc: "Plataformas completas e escaláveis.",
                  icon: <Boxes className="w-4 h-4 text-cyan-400" />
                },
                {
                  title: "Sistemas Sob Medida",
                  desc: "Do planejamento à implantação.",
                  icon: <Cpu className="w-4 h-4 text-blue-400" />
                },
                {
                  title: "Integrações e APIs",
                  desc: "Conecte seus sistemas e automatize processos.",
                  icon: <Network className="w-4 h-4 text-sky-400" />
                },
                {
                  title: "Consultoria em Tecnologia",
                  desc: "Estratégia e arquitetura para o seu negócio.",
                  icon: <Workflow className="w-4 h-4 text-indigo-400" />
                }
              ].map((svc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#090E1B]/80 border border-white/5 hover:border-blue-500/30 transition-all flex items-start gap-4 text-left group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:border-cyan-400/50 transition-all">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            6. FINAL CTA SECTION
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center relative">
          {/* Cybernetic Wireframe Grid Horizon Glow */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-600/15 via-transparent to-transparent pointer-events-none rounded-b-3xl" />
          
          <div className="space-y-6 relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
              VAMOS CONSTRUIR ALGO GRANDE?
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Sua operação merece uma solução desenvolvida para o seu cenário.
            </h2>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Fale com a Vision e descubra como podemos transformar seus processos em resultados.
            </p>

            <div className="pt-4">
              <Link
                href="#contato"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-[0_0_35px_rgba(0,102,255,0.6)] active:scale-95 transition-all duration-200"
              >
                <span>Falar com a Vision</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
