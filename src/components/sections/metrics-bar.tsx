"use client";

import React from "react";
import { companyStats } from "@/data/company-stats";
import { Layers, Zap, ShieldCheck, Users } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-6 h-6 text-indigo-400" />,
  Zap: <Zap className="w-6 h-6 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  Users: <Users className="w-6 h-6 text-purple-400" />
};

export const MetricsBar = () => {
  return (
    <section className="relative py-12 bg-slate-900/80 border-y border-slate-800/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {iconMap[stat.iconName]}
              </div>
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-1">{stat.label}</span>
              <span className="text-xs text-slate-400 max-w-[200px] mt-1">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
