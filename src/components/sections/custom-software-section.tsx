"use client";

import React from "react";
import { customSoftwareTypes } from "@/data/services";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const CustomSoftwareSection = () => {
  return (
    <section id="sob-medida" className="relative py-24 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider block">
              Desenvolvimento Sob Medida
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tem uma operação que precisa de software?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Desenvolvemos sistemas sob medida para transformar processos manuais, planilhas e operações fragmentadas em soluções digitais centralizadas.
            </p>
            <div className="pt-2">
              <a href="#contato">
                <Button variant="glow" size="lg" className="font-semibold">
                  Falar sobre meu projeto
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Examples Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {customSoftwareTypes.map((item, idx) => (
                <Card
                  key={idx}
                  className="p-5 bg-slate-950/80 border-slate-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
