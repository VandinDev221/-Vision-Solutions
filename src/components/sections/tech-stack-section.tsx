"use client";

import React from "react";
import { Code2, Server, Database, Cloud } from "lucide-react";

export const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend & Interfaces",
      icon: <Code2 className="w-4 h-4 text-sky-400" />,
      desc: "Aplicações rápidas, acessíveis e responsivas para alta produtividade.",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-4 h-4 text-cyan-400" />,
      desc: "Serviços escaláveis, modularidade e regras de negócio com alta tipagem.",
      items: ["Node.js", "NestJS", "Fastify", "REST & Webhooks"]
    },
    {
      title: "Dados & Cache",
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      desc: "Modelagem relacional sólida, queries otimizadas e cache em memória.",
      items: ["PostgreSQL", "Redis", "Prisma ORM", "Modelagem SQL"]
    },
    {
      title: "Infraestrutura & DevOps",
      icon: <Cloud className="w-4 h-4 text-purple-400" />,
      desc: "Isolamento em contêineres, pipelines de deploy e observabilidade.",
      items: ["Docker", "Linux Cloud", "CI/CD", "NATS JetStream"]
    }
  ];

  return (
    <section id="tecnologia" className="relative py-24 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
            Base Técnica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engenharia por trás do produto.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Utilizamos tecnologias consolidadas para garantir que os sistemas desenvolvidos sejam rápidos, seguros e fáceis de manter no longo prazo.
          </p>
        </div>

        {/* Categorized Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-[#111726] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-md bg-slate-900 border border-slate-800">
                    {cat.icon}
                  </div>
                  <span className="text-sm font-bold text-white">{cat.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">{cat.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {cat.items.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-[#090d16] text-slate-300 border border-slate-800"
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
