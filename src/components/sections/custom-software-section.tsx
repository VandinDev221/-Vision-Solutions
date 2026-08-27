"use client";

import React from "react";
import { customServices } from "@/data/services";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Rocket, Building2, Server, CheckCircle2, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6 text-indigo-400" />,
  Building2: <Building2 className="w-6 h-6 text-cyan-400" />,
  Server: <Server className="w-6 h-6 text-emerald-400" />
};

export const CustomSoftwareSection = () => {
  return (
    <section id="sob-medida" className="relative py-24 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" className="mb-4">
            <Code2 className="w-3.5 h-3.5" />
            Software House & Studio de Inovação
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Desenvolvimento de Software Sob Medida
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Além do nosso portfólio de produtos próprios, criamos novos SaaS, plataformas corporativas e arquiteturas de alta vazão para a sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customServices.map((service, idx) => (
            <Card key={idx} className="p-8 flex flex-col justify-between bg-slate-950/80 border-slate-800">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                    {iconMap[service.iconName]}
                  </div>
                  <Badge variant="outline">{service.badge}</Badge>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                <p className="text-xs font-semibold text-cyan-400 mb-4 font-mono">{service.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{service.description}</p>

                <div className="space-y-2.5 pt-4 border-t border-slate-800">
                  <span className="text-xs uppercase font-mono text-slate-400 block mb-2">Entregáveis Incluídos:</span>
                  {service.deliverables.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a href="#contato">
                  <Button variant="outline" className="w-full justify-between text-xs">
                    <span>Solicitar Proposta Sob Medida</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
