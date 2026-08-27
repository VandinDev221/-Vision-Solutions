"use client";

import React from "react";
import { techPillars } from "@/data/company-stats";
import { Badge } from "@/components/ui/badge";
import { Code2, Lock, Cpu, Monitor, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-indigo-400" />,
  Lock: <Lock className="w-6 h-6 text-emerald-400" />,
  Cpu: <Cpu className="w-6 h-6 text-cyan-400" />,
  MonitorAndMobile: <Monitor className="w-6 h-6 text-purple-400" />
};

export const TechStackSection = () => {
  const stackTechnologies = [
    { name: "Next.js 15 (App Router)", type: "Frontend & SSR" },
    { name: "React 19", type: "UI Framework" },
    { name: "Fastify / NestJS", type: "APIs de Alta Vazão" },
    { name: "PostgreSQL 16 & Prisma", type: "Banco de Dados & ORM" },
    { name: "NATS JetStream & Redis", type: "Filas de Alta Frequência" },
    { name: "BullMQ Distributed Workers", type: "Processamento Assíncrono" },
    { name: "Electron Desktop", type: "Apps Nativos de Balcão" },
    { name: "Docker & Kubernetes", type: "Containerização Enterprise" }
  ];

  return (
    <section id="tecnologia" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="emerald" className="mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Engenharia de Software de Alto Desempenho
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Arquitetura & Pilares Tecnológicos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Seguimos os mais rigorosos padrões de desenvolvimento para entregar softwares ultra-rápidos, seguros e prontos para escalar sem fricção.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {techPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                {iconMap[pillar.iconName]}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5">{pillar.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Badges Grid */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900/60 border border-slate-800 backdrop-blur-xl">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 text-center mb-6 font-mono">
            Stack Principal Utilizada no Ecossistema
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stackTechnologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2.5"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-slate-100">{tech.name}</span>
                  <span className="block text-[10px] text-slate-400">{tech.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
