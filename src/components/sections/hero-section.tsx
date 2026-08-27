"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, BarChart2, Shield, Activity, Database } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-slate-950">
      {/* Subtle Glow Orbs Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtle Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300 mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Software House & Studio de Desenvolvimento
          </motion.div>

          {/* Main Headline — Profissional, Autoritário & Focado em Resultado */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            Engenharia de software sob medida para <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">operações de alto desempenho</span>
          </motion.h1>

          {/* Subheadline — Clareza e Solidez Comercial */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Desenvolvemos plataformas SaaS, sistemas empresariais e arquiteturas digitais sob medida — do diagnóstico estratégico à entrega em produção.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contato" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto font-semibold">
                Solicitar orçamento
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <a href="#produtos" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Conhecer nossos produtos
              </Button>
            </a>
          </motion.div>

          {/* Sub-text line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-xs font-mono tracking-wider text-slate-400 uppercase"
          >
            SaaS • ERP • CRM • APIs • Automação • Sistemas sob medida
          </motion.p>
        </div>

        {/* Sophisticated UI Dashboard Composition Mockup (Vercel/Linear style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto rounded-2xl bg-slate-900/80 border border-slate-800 p-2 shadow-2xl backdrop-blur-xl"
        >
          {/* Window Bar Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 bg-slate-950/60 rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-slate-800" />
              <div className="w-3 h-3 rounded-full bg-slate-800" />
              <span className="text-[11px] font-mono text-slate-400 ml-2">vision-platform.internal / dashboard</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Sistemas em Produção
              </span>
            </div>
          </div>

          {/* UI Body Mockup */}
          <div className="p-6 bg-slate-950/90 rounded-b-xl grid grid-cols-1 md:grid-cols-12 gap-4 text-left">
            {/* Sidebar Mock */}
            <div className="hidden md:block md:col-span-3 border-r border-slate-800/80 pr-4 space-y-3 text-xs text-slate-400">
              <div className="p-2.5 rounded-lg bg-indigo-950/40 text-indigo-300 font-medium flex items-center justify-between">
                <span>Operações Globais</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
              <div className="p-2 rounded-lg hover:bg-slate-900 text-slate-300 flex items-center gap-2">
                <BarChart2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Gestão & ERP</span>
              </div>
              <div className="p-2 rounded-lg hover:bg-slate-900 text-slate-300 flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-purple-400" />
                <span>Bancos Multi-Tenant</span>
              </div>
              <div className="p-2 rounded-lg hover:bg-slate-900 text-slate-300 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>APIs & Automações</span>
              </div>
            </div>

            {/* Dashboard Content Mock */}
            <div className="md:col-span-9 space-y-4">
              {/* Stat Cards Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Visão da Operação</span>
                  <span className="text-sm font-bold text-white mt-1 block">Centralizada</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Tempo de Resposta</span>
                  <span className="text-sm font-bold text-emerald-400 mt-1 block">&lt; 100ms</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Disponibilidade</span>
                  <span className="text-sm font-bold text-cyan-400 mt-1 block">Alta Resiliência</span>
                </div>
              </div>

              {/* Activity Rows Mock */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-indigo-400" />
                    <span>TorqueOS ERP • Ordem de Serviço #2084 emitida</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Agora</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span>SynDent • Odontograma sincronizado</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">Há 2m</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
