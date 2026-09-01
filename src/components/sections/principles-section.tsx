"use client";

import React from "react";
import { Sparkles, Compass, ShieldCheck, RefreshCw } from "lucide-react";

export const PrinciplesSection = () => {
  const principles = [
    {
      title: "Simplicidade",
      desc: "Software bom não exige manuais gigantes. As telas e fluxos devem refletir a rotina natural de quem está operando.",
      icon: <Sparkles className="w-5 h-5 text-sky-400" />
    },
    {
      title: "Engenharia",
      desc: "Modelagem de dados rigorosa, código tipado e arquitetura modular que permite a expansão sem retrabalho.",
      icon: <Compass className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Foco no Negócio",
      desc: "Tecnologia não é um fim em si mesma. Cada linha de código deve servir para economizar tempo, reduzir erros ou aumentar faturamento.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Evolução Contínua",
      desc: "O desenvolvimento não acaba no deploy. Acompanhamos a operação real para iterar e refinar com base no uso diário.",
      icon: <RefreshCw className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section className="relative py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            <span>// FILOSOFIA & CRITÉRIOS DE PROJETO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Como pensamos software.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Princípios práticos que guiam cada decisão de arquitetura, interface e desenvolvimento na Vision Solutions.
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0e1422] border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit group-hover:border-slate-700 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
