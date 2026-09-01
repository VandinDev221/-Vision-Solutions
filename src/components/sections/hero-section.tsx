"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Disc3,
  Binary,
  Layers,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { OrbitSystem } from "@/components/motion/OrbitSystem";
import { FloatingModule } from "@/components/motion/FloatingModule";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-[#070B12] overflow-hidden border-b border-slate-800/80 tech-grid-bg">
      {/* Background Ambience: Subtle Radial Depth Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Messaging */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* System Status Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E1622] border border-slate-800 text-[11px] font-mono text-slate-300 shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SOFTWARE HOUSE & STUDIO MULTI-SAAS</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Construímos software para operações que já{" "}
              <span className="text-sky-400">superaram planilhas.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              Desenvolvemos produtos SaaS proprietários e arquiteturas sob medida para negócios que precisam de controle rigoroso, automação de rotinas e software estável em produção.
            </motion.p>

            {/* Magnetic Actions */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <Link href="/produtos">
                <MagneticButton
                  variant="primary"
                  className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold border border-sky-400/30 shadow-lg shadow-sky-500/10"
                >
                  <span>Conhecer nossos produtos</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
              <Link href="/contato">
                <MagneticButton
                  variant="secondary"
                  className="w-full sm:w-auto bg-[#0E1622] hover:bg-[#152033] text-slate-200 border border-slate-800 hover:border-slate-700"
                >
                  <span>Solicitar software sob medida</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Credibility Architecture Nodes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80"
            >
              <div className="p-3 rounded-xl bg-[#0A101A] border border-slate-800">
                <div className="flex items-center gap-1.5 text-sky-400 text-xs font-mono">
                  <Disc3 className="w-3.5 h-3.5 animate-spin" />
                  <span>ECOSSISTEMA</span>
                </div>
                <span className="block text-base sm:text-lg font-bold font-mono text-white mt-1">Multi-SaaS</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0A101A] border border-slate-800">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>AUTORAL</span>
                </div>
                <span className="block text-base sm:text-lg font-bold font-mono text-emerald-400 mt-1">100% Puro</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0A101A] border border-slate-800">
                <div className="flex items-center gap-1.5 text-purple-400 text-xs font-mono">
                  <Binary className="w-3.5 h-3.5" />
                  <span>LATÊNCIA</span>
                </div>
                <span className="block text-base sm:text-lg font-bold font-mono text-purple-300 mt-1">&lt; 18ms</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Autonomous Vision Core Orbital Living Ecosystem */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Floating Software OS Modules in Midground */}
            <div className="absolute -top-4 -left-2 z-30 hidden sm:block">
              <FloatingModule type="api" delay={0.2} />
            </div>
            <div className="absolute -bottom-4 -right-2 z-30 hidden sm:block">
              <FloatingModule type="db" delay={1.2} />
            </div>

            {/* Central Orbital System Component */}
            <div className="w-full relative z-10 py-6">
              <OrbitSystem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
