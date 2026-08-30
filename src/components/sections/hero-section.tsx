"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Stethoscope, CheckCircle2, ChevronRight, Laptop, Server } from "lucide-react";
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
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Subtle Identification Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111726] border border-slate-800 text-xs font-mono text-slate-300 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Software House & Studio SaaS
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
          >
            Software para negócios que precisam evoluir.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Desenvolvemos produtos SaaS, sistemas empresariais e soluções digitais sob medida para transformar processos complexos em software simples de operar.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <Link href="/produtos" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto font-semibold">
                Conhecer nossas soluções
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/contato" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-medium text-slate-200 border-slate-700 hover:border-slate-500">
                Falar com a Vision Solutions
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Real Product Interface Showcase Preview */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mt-14 max-w-5xl mx-auto rounded-xl bg-[#111726] border border-slate-800 shadow-2xl overflow-hidden"
        >
          {/* Top Window Bar & Product Selector Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 py-3 border-b border-slate-800 bg-[#0c111d]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span className="text-[11px] font-mono text-slate-400 ml-2">vision-ecosystem / product-preview</span>
            </div>

            {/* Interactive Switcher between Flagship Systems */}
            <div className="flex items-center gap-1 bg-[#111726] p-1 rounded-md border border-slate-800">
              <button
                onClick={() => setActiveTab("torqueos")}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === "torqueos"
                    ? "bg-slate-800 text-sky-400 font-semibold"
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
                    ? "bg-slate-800 text-cyan-400 font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                SynDent SaaS
              </button>
            </div>
          </div>

          {/* Active Product Real UI Representation */}
          <div className="p-6 bg-[#090d16] text-left">
            {activeTab === "torqueos" ? (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">TorqueOS — ERP para Oficinas Automotivas</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">Produção</span>
                    </div>
                    <span className="text-xs text-slate-400 mt-0.5 block">Gestão de Ordens de Serviço, Estoque de Peças e Vendas de Balcão</span>
                  </div>
                  <Link href="/produtos">
                    <span className="text-xs text-sky-400 hover:underline flex items-center gap-1 font-medium">
                      Ver detalhes do produto <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>

                {/* Dashboard Grid Mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Ordens de Serviço</span>
                    <span className="text-lg font-extrabold text-white font-mono mt-1 block">Fluxo em Tempo Real</span>
                    <span className="text-[11px] text-emerald-400 mt-1 block flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Abertura, peças e aprovação
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Catálogo de Peças</span>
                    <span className="text-lg font-extrabold text-sky-400 font-mono mt-1 block">Busca Indexada</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Controle de estoque e preço</span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Ambiente</span>
                    <span className="text-lg font-extrabold text-white font-mono mt-1 block">Web & Desktop</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Operação local e em nuvem</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">SynDent — SaaS Odontológico Clean Architecture</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800/80">Piloto Fechado</span>
                    </div>
                    <span className="text-xs text-slate-400 mt-0.5 block">Prontuário Odontológico Eletrônico, Odontogramas 2D/3D e Agendamentos</span>
                  </div>
                  <Link href="/produtos">
                    <span className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-medium">
                      Ver detalhes do produto <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>

                {/* Dashboard Grid Mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Prontuário Eletrônico</span>
                    <span className="text-lg font-extrabold text-white font-mono mt-1 block">Anamnese & Raio-X</span>
                    <span className="text-[11px] text-emerald-400 mt-1 block flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Histórico completo por paciente
                    </span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Odontograma Interativo</span>
                    <span className="text-lg font-extrabold text-cyan-400 font-mono mt-1 block">Mapeamento 2D/3D</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Procedimentos e status por dente</span>
                  </div>
                  <div className="p-4 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Arquitetura</span>
                    <span className="text-lg font-extrabold text-white font-mono mt-1 block">Multi-Tenant</span>
                    <span className="text-[11px] text-slate-400 mt-1 block">Isolamento rigoroso por clínica</span>
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
