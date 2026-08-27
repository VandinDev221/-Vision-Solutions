"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Code2, CheckCircle2 } from "lucide-react";
import { saasProducts } from "@/data/saas-products";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-slate-950">
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <Badge variant="emerald" className="py-1.5 px-4 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Ecossistema Ativo — {saasProducts.length} SaaS Proprietários em Produção
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]"
        >
          Construímos os <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">Softwares & SaaS</span> que Impulsionam Negócios
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Do mercado odontológico ao jurídico, automotivo e mensageria de alta volumetria.
          Criamos produtos digitais escaláveis em <strong className="text-white font-medium">Clean Architecture</strong>, prontos para produção e licenciamento.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#saas" className="w-full sm:w-auto">
            <Button variant="glow" size="lg" className="w-full sm:w-auto">
              Explorar Todos os SaaS
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <a href="#sob-medida" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <Code2 className="w-5 h-5 text-indigo-400" />
              Criar Seu Software Sob Medida
            </Button>
          </a>
        </motion.div>

        {/* Highlights Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-slate-800/60 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-400 text-xs sm:text-sm font-medium"
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Next.js 15 & React 19</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Isolamento Multi-Tenant</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-400" />
            <span>Filas NATS & BullMQ</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Clean Architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
