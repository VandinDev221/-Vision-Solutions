"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Wrench, Stethoscope, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"torqueos" | "syndent">("torqueos");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#090d16]">
      {/* Subtle Structural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Subtle Identification Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Software House & Studio de Desenvolvimento
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            Construímos software para operações que precisam de <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">controle, automação e escala</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Desenvolvemos plataformas SaaS, ERPs, CRMs e arquiteturas digitais sob medida — da estratégia e modelagem técnica ao deploy em produção.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <Link href="/contato" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Solicitar projeto
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="/produtos" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Conhecer produtos
              </Button>
            </Link>
          </motion.div>

          {/* Identifiers Line */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xs font-mono tracking-wider text-slate-400 uppercase"
          >
            SaaS • ERP • CRM • APIs • Automação • Sistemas sob medida
          </motion.p>
        </motion.div>

        {/* Real Product Interactive Showcase Preview (Hero Interface Proof) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-14 max-w-5xl mx-auto rounded-xl bg-[#111726] border border-slate-800 p-2.5 shadow-2xl backdrop-blur-xl"
        >
          {/* Top Window Bar & Product Selector Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 py-3 border-b border-slate-800 bg-slate-950/80 rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="text-[11px] font-mono text-slate-400 ml-2">vision-ecosystem / product-preview</span>
            </div>

            {/* Interactive Switcher between Flagship Systems */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-md border border-slate-800">
              <button
                onClick={() => setActiveTab("torqueos")}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "torqueos"
                    ? "bg-slate-800 text-sky-400 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                TorqueOS ERP
              </button>
              <button
                onClick={() => setActiveTab("syndent")}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "syndent"
                    ? "bg-slate-800 text-cyan-400 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                SynDent SaaS
              </button>
            </div>
          </div>

          {/* Active Product Real UI Representation */}
          <div className="p-6 bg-slate-950 rounded-b-lg text-left">
            {activeTab === "torqueos" ? (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">TorqueOS — ERP para Oficinas Automotivas</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">Produção</span>
                    </div>
                    <span className="text-xs text-slate-400 mt-0.5 block">Gestão de Ordens de Serviço, Estoque de Peças e Balcão</span>
                  </div>
                  <Link href="/produtos">
                    <span className="text-xs text-sky-400 hover:underline flex items-center gap-1 font-medium">
                      Ver detalhes do ERP <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>

                {/* Dashboard Grid Mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Ordens de Serviço em Aberto</span>
                    <span className="text-lg font-extrabold text-white font-mono mt-1 block">18 O.S.</span>
                    <span className="text-[11px] text-emerald-400 mt-1 block flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Fluxo de Balcão Ativo
                    </span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Catálogo de Peças</span>
                    <span className="text-lg font-extrabold text-sky-400 font-mono mt-1 block">+50.000 Itens</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Busca Rápida por Código</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Plataforma</span>
                    <span className="text-lg font-extrabold text-white font-mono mt-1 block">Web & Desktop</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">App Nativo Electron para Balcão</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">SynDent — SaaS Odontológico Clean Architecture</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">Piloto Fechado</span>
                    </div>
                    <span className="text-xs text-slate-400 mt-0.5 block">Prontuário Odontológico, Odontogramas 2D/3D e Agendamento</span>
                  </div>
                  <Link href="/produtos">
                    <span className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-medium">
                      Ver detalhes do SynDent <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>

                {/* Dashboard Grid Mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Prontuário Odontológico</span>
                    <span className="text-lg font-extrabold text-white font-mono mt-1 block">Eletrônico</span>
                    <span className="text-[11px] text-emerald-400 mt-1 block flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Anamnese & Radiografias
                    </span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Odontograma Interativo</span>
                    <span className="text-lg font-extrabold text-cyan-400 font-mono mt-1 block">Gráfico 2D/3D</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Status por dente em tempo real</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Arquitetura</span>
                    <span className="text-lg font-extrabold text-white font-mono mt-1 block">Multi-Tenant</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Isolamento com Fastify & Next.js</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
