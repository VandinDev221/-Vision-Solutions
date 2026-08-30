"use client";

import React from "react";
import { Sparkles, Compass, ShieldCheck, RefreshCw } from "lucide-react";

export const PrinciplesSection = () => {
  const principles = [
    {
      title: "Simplicidade",
      desc: "Interfaces e sistemas fáceis de entender para que a equipe opere com rapidez e sem atritos desnecessários.",
      icon: <Sparkles className="w-5 h-5 text-sky-400" />
    },
    {
      title: "Engenharia",
      desc: "Arquitetura pensada para crescer, com modelagem de dados sólida, código limpo e padrões testáveis.",
      icon: <Compass className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Produto",
      desc: "Tecnologia deve resolver problemas reais de negócio. Não desenvolvemos complexidade sem utilidade prática.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Evolução",
      desc: "Software não termina no lançamento. Acompanhamos a operação de perto para iterar e aprimorar continuamente.",
      icon: <RefreshCw className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section className="relative py-24 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Nossa Filosofia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Como pensamos software.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Princípios claros que orientam cada decisão de produto, código e arquitetura na Vision Solutions.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#111726] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 w-fit mb-5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
