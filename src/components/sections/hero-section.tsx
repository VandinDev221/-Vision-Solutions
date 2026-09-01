"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Wrench,
  Stethoscope,
  CheckCircle2,
  Activity,
  Layers,
  Cpu,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  const [activeSystem, setActiveSystem] = useState<"torqueos" | "syndent">("torqueos");

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 bg-[#090d16] overflow-hidden border-b border-slate-800/80">
      {/* Background Ambience: Subtle structural line pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Messaging */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* System Status Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0f172a] border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SOFTWARE HOUSE & STUDIO MULTI-SAAS</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12]">
              Construímos software para operações que já{" "}
              <span className="text-sky-400">superaram planilhas.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Desenvolvemos produtos SaaS proprietários e arquiteturas sob medida para negócios que precisam de controle rigoroso, automação de rotinas e software estável em produção.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/produtos"
                className="group px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-sky-500/10 active:scale-[0.98]"
              >
                <span>Conhecer nossos produtos</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contato"
                className="group px-5 py-3 rounded-lg bg-[#0f172a] hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-slate-200 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Solicitar software sob medida</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </Link>
            </div>

            {/* Credibility Badges & Architecture Facts */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-white">8+</span>
                <span className="text-[11px] text-slate-400 font-medium">Produtos no ecossistema</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-emerald-400">100%</span>
                <span className="text-[11px] text-slate-400 font-medium">Código próprio autoral</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-sky-400">Multi-tenant</span>
                <span className="text-[11px] text-slate-400 font-medium">Isolamento rigoroso</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Real Software Showcase */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0e1422] border border-slate-800/90 shadow-2xl p-4 sm:p-6 space-y-5 backdrop-blur-xl relative">
              {/* Top System Switcher Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-slate-300 font-semibold">
                    live-ecosystem / runtime-preview
                  </span>
                </div>

                {/* Tab Switcher */}
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
                    TorqueOS ERP
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
                    SynDent SaaS
                  </button>
                </div>
              </div>

              {/* Dynamic Animated UI Surface */}
              <AnimatePresence mode="wait">
                {activeSystem === "torqueos" ? (
                  <motion.div
                    key="torqueos"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Header Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-white">TorqueOS</h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                            Ambiente Produção
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          ERP para oficinas mecânicas, autocenters e autopeças
                        </p>
                      </div>
                      <Link
                        href="/produtos"
                        className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                      >
                        <span>Ver detalhes</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Operational KPI Grid */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">O.S. em Aberto</span>
                        <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">18 O.S.</span>
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                          <Activity className="w-2.5 h-2.5" /> 6 na oficina
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Catálogo Peças</span>
                        <span className="text-base sm:text-lg font-bold font-mono text-sky-400 mt-0.5 block">+50.000</span>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">Busca indexada</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Plataformas</span>
                        <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">Web & Desk</span>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">Nativo Electron</span>
                      </div>
                    </div>

                    {/* Active Work Orders Table Simulator */}
                    <div className="p-3.5 rounded-lg bg-[#090d16] border border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1.5 border-b border-slate-800/80">
                        <span>Fluxo de Atendimento em Tempo Real</span>
                        <span className="text-emerald-400">Operação Ativa</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-2 rounded bg-[#0f172a] border border-slate-800/80 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-white">OS #4892</span>
                            <span className="text-slate-300">Toyota Corolla • Revisão 60k km</span>
                          </div>
                          <span className="font-mono text-emerald-400 text-[11px] font-semibold">R$ 1.840,00</span>
                        </div>

                        <div className="p-2 rounded bg-[#0f172a] border border-slate-800/80 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-white">OS #4891</span>
                            <span className="text-slate-300">Honda Civic • Troca Pastilhas + Disco</span>
                          </div>
                          <span className="font-mono text-sky-400 text-[11px] font-semibold">Aguardando Peça</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="syndent"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* Header Info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-white">SynDent</h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                            Piloto Fechado
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          SaaS para clínicas odontológicas com Clean Architecture
                        </p>
                      </div>
                      <Link
                        href="/produtos"
                        className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                      >
                        <span>Ver detalhes</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Operational KPI Grid */}
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Prontuário</span>
                        <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">Eletrônico</span>
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Anamnese & Raio-X
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Odontograma</span>
                        <span className="text-base sm:text-lg font-bold font-mono text-cyan-400 mt-0.5 block">2D / 3D</span>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">Mapeamento dinâmico</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#090d16] border border-slate-800">
                        <span className="text-[10px] font-mono uppercase text-slate-400 block">Isolamento</span>
                        <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">Multi-Tenant</span>
                        <span className="text-[10px] text-slate-400 mt-0.5 block">Fastify + Prisma</span>
                      </div>
                    </div>

                    {/* Clinical Queue Simulator */}
                    <div className="p-3.5 rounded-lg bg-[#090d16] border border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1.5 border-b border-slate-800/80">
                        <span>Agenda Clínica & Confirmações</span>
                        <span className="text-cyan-400">WhatsApp Sync Ativo</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-2 rounded bg-[#0f172a] border border-slate-800/80 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-white">09:30</span>
                            <span className="text-slate-300">Mariana Costa • Endodontia elemento 16</span>
                          </div>
                          <span className="text-[11px] text-emerald-400 font-mono font-semibold">Confirmado</span>
                        </div>

                        <div className="p-2 rounded bg-[#0f172a] border border-slate-800/80 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-white">10:30</span>
                            <span className="text-slate-300">Rafael Lima • Avaliação Ortodôntica</span>
                          </div>
                          <span className="text-[11px] text-sky-400 font-mono font-semibold">Na Recepção</span>
                        </div>
                      </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};
