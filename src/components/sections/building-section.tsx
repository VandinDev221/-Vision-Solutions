"use client";

import React from "react";
import { saasProducts } from "@/data/saas-products";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, ArrowRight } from "lucide-react";

export const BuildingSection = () => {
  return (
    <section className="relative py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider block mb-2">
            Portfólio Ativo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que estamos construindo
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Conheça a abrangência das soluções digitais desenvolvidas e mantidas pela Vision Solutions.
          </p>
        </div>

        {/* Real Products Summary Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saasProducts.map((p) => (
            <Card key={p.id} className="p-5 bg-slate-900/60 border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-[10px] font-mono">
                    {p.categoryLabel}
                  </Badge>
                  <span className="text-[10px] text-emerald-400 font-mono font-semibold">{p.status}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{p.name}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{p.tagline}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-500">{p.badge}</span>
                <a href="#produtos" className="hover:text-indigo-400 transition-colors flex items-center gap-1 font-medium">
                  <span>Ver</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
