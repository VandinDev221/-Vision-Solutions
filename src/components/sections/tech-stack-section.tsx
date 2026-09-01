"use client";

import React from "react";
import { Code2, Server, Database, Cloud, ShieldCheck, Zap, Lock, Terminal } from "lucide-react";

export const TechStackSection = () => {
  const stack = [
    {
      category: "Frontend & Interfaces",
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      tagline: "Aplicações web rápidas, sem layout shift e acessíveis",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Electron"]
    },
    {
      category: "Backend & Microsserviços",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      tagline: "APIs modulares com alta tipagem e baixa latência de execução",
      technologies: ["Node.js", "Fastify", "NestJS", "REST & Webhooks", "OAuth 2.0"]
    },
    {
      category: "Dados & Cache em Memória",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      tagline: "Modelagem relacional sólida com integridade transacional",
      technologies: ["PostgreSQL 16", "Redis Cache", "Prisma ORM", "SQL Indexing"]
    },
    {
      category: "Infraestrutura & Filas",
      icon: <Cloud className="w-5 h-5 text-purple-400" />,
      tagline: "Isolamento em contêineres e processamento assíncrono",
      technologies: ["Docker", "Linux Cloud", "NATS JetStream", "BullMQ Queues", "CI/CD"]
    }
  ];

  const architecturalPillars = [
    {
      title: "Isolamento Multi-Tenant",
      desc: "Segregação estrita de dados por organização para segurança total.",
      icon: <Lock className="w-4 h-4 text-sky-400" />
    },
    {
      title: "Tipagem Estrita de Ponta a Ponta",
      desc: "TypeScript compartilhado entre banco, API e telas para zero erros em runtime.",
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />
    },
    {
      title: "Filas com Retry Automático",
      desc: "Mensageria e webhooks resilientes a quedas com reprocessamento assíncrono.",
      icon: <Zap className="w-4 h-4 text-amber-400" />
    }
  ];

  return (
    <section id="tecnologia" className="relative py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            <span>// BASE TECNOLÓGICA & INFRAESTRUTURA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engenharia por trás do produto.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Utilizamos uma stack moderna e consolidada para garantir que qualquer software construído pela Vision Solutions seja seguro, rápido e simples de manter no longo prazo.
          </p>
        </div>

        {/* 4 Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stack.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0e1422] border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">{cat.category}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{cat.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                {cat.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#090d16] text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Guarantees Footer Bar */}
        <div className="p-8 rounded-2xl bg-[#0e1422] border border-slate-800/90">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {architecturalPillars.map((pillar, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5">
                  {pillar.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
