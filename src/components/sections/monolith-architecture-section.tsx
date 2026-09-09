"use client";

import React, { useState } from "react";
import {
  Wrench,
  Stethoscope,
  Scissors,
  Bot,
  Scale,
  Cog,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Server,
  Database,
  Workflow,
  Cloud
} from "lucide-react";
import Link from "next/link";

export const MonolithArchitectureSection = () => {
  const [activeSide, setActiveSide] = useState<"produtos" | "engenharia">("produtos");
  const [selectedProduct, setSelectedProduct] = useState<string>("torqueos");
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const productsList = [
    {
      id: "torqueos",
      name: "TORQUEOS [ERP]",
      desc: "Oficinas & Autocenters",
      icon: <Wrench className="w-4 h-4 text-cyan-400" />,
      color: "border-cyan-500/40 text-cyan-300"
    },
    {
      id: "syndent",
      name: "SYNDENT [SaaS]",
      desc: "Prontuário & Clínicas",
      icon: <Stethoscope className="w-4 h-4 text-blue-400" />,
      color: "border-blue-500/40 text-blue-300"
    },
    {
      id: "barbercrm",
      name: "BARBERCRM",
      desc: "Agendamento & Fidelização",
      icon: <Scissors className="w-4 h-4 text-amber-400" />,
      color: "border-amber-500/40 text-amber-300"
    },
    {
      id: "disparoflow",
      name: "DISPAROFLOW",
      desc: "Mensageria WhatsApp",
      icon: <Bot className="w-4 h-4 text-emerald-400" />,
      color: "border-emerald-500/40 text-emerald-300"
    },
    {
      id: "advcargo",
      name: "ADVCARGO",
      desc: "Setor Jurídico",
      icon: <Scale className="w-4 h-4 text-purple-400" />,
      color: "border-purple-500/40 text-purple-300"
    }
  ];

  const methodologySteps = [
    { num: "01", title: "Entendimento & Requisitos" },
    { num: "02", title: "Modelagem & Protótipo" },
    { num: "03", title: "Desenvolvimento Incremental" },
    { num: "04", title: "Homologação & Testes" },
    { num: "05", title: "Deploy em Produção" },
    { num: "06", title: "Suporte & Evolução" }
  ];

  const architectureLayers = [
    {
      name: "Camada 1: Frontend & Aplicação",
      tech: "Next.js 15, React 19, TypeScript",
      icon: <Layers className="w-4 h-4 text-cyan-400" />
    },
    {
      name: "Camada 2: API & Regras de Negócio",
      tech: "NestJS, Fastify, Docker, TS",
      icon: <Server className="w-4 h-4 text-blue-400" />
    },
    {
      name: "Camada 3: Banco de Dados Relacional",
      tech: "PostgreSQL 16, Prisma, Redis",
      icon: <Database className="w-4 h-4 text-emerald-400" />
    },
    {
      name: "Camada 4: Filas & Processamento",
      tech: "BullMQ, Redis, Webhooks",
      icon: <Workflow className="w-4 h-4 text-purple-400" />
    },
    {
      name: "Camada 5: Infraestrutura & Nuvem",
      tech: "Docker, Cloud CI/CD, Linux",
      icon: <Cloud className="w-4 h-4 text-indigo-400" />
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#080B10] border-b border-white/10 relative overflow-hidden">
      {/* Radial Depth Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-purple-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center space-y-3">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-2">
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111622] border border-white/10 text-slate-300">
              Código Autoral
            </span>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111622] border border-white/10 text-slate-300">
              Multi-Tenant
            </span>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111622] border border-white/10 text-slate-300">
              Isolamento Seguro
            </span>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111622] border border-white/10 text-slate-300">
              TypeScript
            </span>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111622] border border-white/10 text-slate-300">
              Simplicidade Operacional
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ecossistema Espacial de Engenharia
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A convergência entre produtos SaaS proprietários e desenvolvimento sob demanda, operando em uma única infraestrutura unificada.
          </p>
        </div>

        {/* 3D Master Monolith Studio Centerpiece Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Wing: PRODUTOS PRÓPRIOS (Cyan Track) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-3 rounded-lg bg-[#111622] border border-cyan-500/30 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                PRODUTOS PRÓPRIOS
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                5 Plataformas
              </span>
            </div>

            <div className="space-y-2.5">
              {productsList.map((prod) => {
                const isSelected = selectedProduct === prod.id;

                return (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod.id)}
                    className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-[#161D2B] border-cyan-400 shadow-lg shadow-cyan-500/10 translate-x-1"
                        : "bg-[#0B0E14] border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-[#0B0E14] border border-white/10">
                        {prod.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold font-mono text-white block">
                          {prod.name}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {prod.desc}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? "text-cyan-400" : "text-slate-600"}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Monolith Tower: VS VISION SOLUTIONS Master Core */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-gradient-to-b from-[#161D2B] to-[#0B0E14] border-2 border-blue-500/40 shadow-2xl text-center space-y-6 relative group">
            {/* Top Monolith Cap */}
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 mx-auto flex flex-col items-center justify-center text-white font-mono shadow-xl border border-white/20">
              <span className="text-2xl font-black tracking-tight leading-none">VS</span>
              <span className="text-[8px] font-bold tracking-widest uppercase mt-0.5">CORE</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-white font-mono tracking-tight">
                VISION SOLUTIONS
              </h3>
              <p className="text-xs font-mono text-blue-400">
                Software House & SaaS Studio
              </p>
            </div>

            {/* Glowing Dual Channel Wings Selector */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-2.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono font-bold text-cyan-300">
                PRODUTOS PRÓPRIOS
              </div>
              <div className="p-2.5 rounded bg-purple-950/40 border border-purple-500/30 text-[11px] font-mono font-bold text-purple-300">
                ENGENHARIA SOB DEMANDA
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/contato"
                className="w-full py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors block"
              >
                Falar com a Vision
              </Link>
              <Link
                href="/produtos"
                className="w-full py-2.5 rounded bg-[#111622] hover:bg-slate-800 text-slate-300 border border-white/10 font-semibold text-xs transition-colors block"
              >
                Ver Portfólio de Produtos
              </Link>
            </div>
          </div>

          {/* Right Wing: ENGENHARIA SOB DEMANDA (Purple/Indigo Track) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-3 rounded-lg bg-[#111622] border border-purple-500/30 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-purple-300 flex items-center gap-2">
                <Cog className="w-4 h-4 text-purple-400" />
                ENGENHARIA SOB DEMANDA
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800">
                6 Etapas
              </span>
            </div>

            {/* Methodology Blueprint Steps */}
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              {methodologySteps.map((step, idx) => (
                <div key={idx} className="p-2.5 rounded bg-[#0B0E14] border border-white/5 flex items-center gap-2">
                  <span className="font-bold text-purple-400">{step.num}</span>
                  <span className="text-slate-300 text-[11px] leading-tight">{step.title}</span>
                </div>
              ))}
            </div>

            {/* 5 Architecture Layers Dock */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                Camadas Técnicas em Produção:
              </span>
              {architectureLayers.slice(0, 3).map((layer, idx) => (
                <div key={idx} className="p-2.5 rounded bg-[#0B0E14] border border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    {layer.icon}
                    <span className="text-white font-mono text-[11px]">{layer.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{layer.tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
