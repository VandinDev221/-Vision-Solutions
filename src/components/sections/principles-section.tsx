"use client";

import React from "react";
import { Sparkles, Compass, ShieldCheck, RefreshCw } from "lucide-react";

export const PrinciplesSection = () => {
  const principles = [
    {
      title: "Simplicidade Operacional",
      desc: "Software bom não exige manuais gigantes. As telas e fluxos devem refletir a rotina natural de quem está operando no dia a dia.",
      icon: <Sparkles className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Rigor de Engenharia",
      desc: "Modelagem de dados estrita, código tipado e arquitetura modular que permite expansão sem retrabalho ou débito técnico precoce.",
      icon: <Compass className="w-5 h-5 text-sky-400" />
    },
    {
      title: "Foco no Negócio",
      desc: "Tecnologia é meio, não fim. Cada linha de código deve servir para economizar tempo, reduzir erros ou aumentar a receita da empresa.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Evolução Contínua",
      desc: "O projeto não termina no deploy. Acompanhamos a operação real para iterar e refinar funcionalidades com base no uso prático.",
      icon: <RefreshCw className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0B0E14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            Filosofia de Engenharia
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Como pensamos e construímos software.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Princípios práticos que guiam cada decisão de arquitetura, interface e desenvolvimento na Vision Solutions.
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#111622] border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="p-2.5 rounded bg-[#0B0E14] border border-white/5 w-fit">
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
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
