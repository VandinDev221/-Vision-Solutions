"use client";

import React from "react";
import { BuildSequence } from "@/components/motion/BuildSequence";
import { CircuitPath } from "@/components/motion/CircuitPath";
import { Layers, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ComplexityTransformationSection = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#070B12] border-b border-slate-800/80 tech-grid-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            <span>// ENGENHARIA DE TRANSFORMAÇÃO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Como transformamos complexidade em software vivo.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Módulos independentes conectam-se através de contratos estritos de dados, formando uma aplicação unificada que opera em tempo real.
          </p>
        </div>

        {/* Dynamic Dual Interactive Motion Canvas: Build Sequence + Circuit Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: WOW #2 Autonomous Software Assembly Component */}
          <div className="lg:col-span-6">
            <BuildSequence />
          </div>

          {/* Right Column: WOW #3 Circuit Execution Pipeline Component */}
          <div className="lg:col-span-6 space-y-6">
            <CircuitPath />

            <div className="p-6 rounded-2xl bg-[#0A101A] border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Arquitetura Sem Gargalos
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cada componente do ecossistema Vision Solutions possui responsabilidade isolada: o frontend em Next.js 15 consome APIs rápidas em Fastify, os trabalhos pesados rodam em segundo plano via Redis/BullMQ e os dados residem em esquemas protegidos no PostgreSQL 16.
              </p>
              <div className="pt-2">
                <Link
                  href="/servicos"
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Conhecer detalhes do processo de engenharia</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
