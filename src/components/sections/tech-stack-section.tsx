"use client";

import React from "react";
import { companyFacts } from "@/data/company-stats";

export const TechStackSection = () => {
  const techBadges = [
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "Docker",
    "NATS",
    "BullMQ"
  ];

  return (
    <section id="tecnologia" className="relative py-24 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
            Base Tecnológica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engenharia preparada para crescer
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Construímos softwares focados em arquitetura limpa, segurança de dados, alta performance, escalabilidade e facilidade de manutenção a longo prazo.
          </p>
        </div>

        {/* Verifiable Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companyFacts.map((fact, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 text-center flex flex-col justify-between"
            >
              <span className="text-2xl sm:text-3xl font-black text-white font-mono block mb-1">
                {fact.value}
              </span>
              <span className="text-xs font-bold text-slate-200 block mb-1">{fact.label}</span>
              <span className="text-[11px] text-slate-400 leading-tight">{fact.description}</span>
            </div>
          ))}
        </div>

        {/* Tech Badges Container */}
        <div className="p-8 rounded-2xl bg-slate-950/90 border border-slate-800 text-center">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-6">
            Tecnologias Utilizadas na Construção dos Nossos Sistemas
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techBadges.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 font-semibold shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
