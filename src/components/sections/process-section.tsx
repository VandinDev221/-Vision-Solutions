"use client";

import React from "react";
import { processSteps } from "@/data/company-stats";

export const ProcessSection = () => {
  return (
    <section id="processo" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider block mb-2">
            Metodologia de Trabalho
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Do problema à produção
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Um processo estruturado de engenharia de software focado em clareza, prazos e resultados mensuráveis.
          </p>
        </div>

        {/* 5 Steps Grid Composition */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <span className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 block mb-4">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
