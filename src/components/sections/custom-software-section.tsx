"use client";

import React from "react";
import { customSoftwareTypes } from "@/data/services";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const CustomSoftwareSection = () => {
  return (
    <section id="sob-medida" className="relative py-24 bg-[#090d16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider block">
              Desenvolvimento Sob Medida
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              O que sua empresa precisa construir?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Desenvolvemos sistemas sob medida para substituir processos manuais, planilhas e sistemas fragmentados por softwares centralizados e escaláveis.
            </p>
            <div className="pt-2">
              <Link href="/contato">
                <Button variant="primary" size="lg" className="font-semibold">
                  Falar sobre meu projeto
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Solution Blocks */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {customSoftwareTypes.map((item, idx) => (
                <Card
                  key={idx}
                  className="p-5 bg-[#111726] border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
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
