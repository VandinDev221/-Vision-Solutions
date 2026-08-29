"use client";

import React from "react";
import { companyFacts } from "@/data/company-stats";

export const TechStackSection = () => {
  const techCategories = [
    { title: "Frontend", items: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript"] },
    { title: "Backend & APIs", items: ["Fastify", "NestJS", "Node.js", "Express"] },
    { title: "Banco de Dados", items: ["PostgreSQL 16", "Prisma ORM", "Redis"] },
    { title: "Infraestrutura", items: ["Docker", "NATS JetStream", "BullMQ"] }
  ];

  return (
    <section id="tecnologia" className="relative py-24 bg-[#090d16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
            Arquitetura Técnica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engenharia preparada para crescer
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Desenvolvemos soluções com arquitetura limpa, segurança rigorosa de dados, alta resiliência e facilidade de manutenção.
          </p>
        </div>

        {/* Verifiable Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {companyFacts.map((fact, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#111726] border border-slate-800 text-center flex flex-col justify-between"
            >
              <span className="text-2xl font-bold text-white font-mono block mb-1">
                {fact.value}
              </span>
              <span className="text-xs font-bold text-slate-200 block mb-1">{fact.label}</span>
              <span className="text-[11px] text-slate-400 leading-tight">{fact.description}</span>
            </div>
          ))}
        </div>

        {/* Categorized Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, idx) => (
            <div key={idx} className="p-5 rounded-lg bg-[#111726] border border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase block mb-3 font-semibold">{cat.title}</span>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
