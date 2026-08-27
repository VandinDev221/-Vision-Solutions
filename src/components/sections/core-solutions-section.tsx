"use client";

import React from "react";
import { coreSolutions } from "@/data/services";
import { Card } from "@/components/ui/card";
import { Rocket, Building2, Code2, Workflow, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-5 h-5 text-indigo-400" />,
  Building2: <Building2 className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-purple-400" />,
  Workflow: <Workflow className="w-5 h-5 text-emerald-400" />
};

export const CoreSolutionsSection = () => {
  return (
    <section id="solucoes" className="relative py-20 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider block mb-2">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Soluções digitais para operações reais
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Desenvolvemos a camada tecnológica que sua empresa precisa para organizar processos, automatizar rotinas e crescer.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreSolutions.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 flex flex-col justify-between bg-slate-950/80 border-slate-800 hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs text-slate-400 group-hover:text-indigo-400 font-medium transition-colors">
                <span>Saiba mais</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
