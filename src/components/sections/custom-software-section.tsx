"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building,
  Laptop,
  BarChart2,
  Network,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Database
} from "lucide-react";

export const CustomSoftwareSection = () => {
  const capabilities = [
    {
      title: "ERPs & Sistemas de Gestão Operacional",
      desc: "Sistemas desenhados rigorosamente para as regras do seu negócio: estoque, orçamentos, ordem de serviço, faturamento e permissões granulares.",
      icon: <Building className="w-5 h-5 text-sky-400" />,
      tag: "Backoffices & Balcão"
    },
    {
      title: "Plataformas SaaS Multi-Tenant",
      desc: "Arquitetura com isolamento de dados por cliente, autenticação JWT/OAuth, faturamento recorrente automatizado e painel administrativo master.",
      icon: <Laptop className="w-5 h-5 text-cyan-400" />,
      tag: "Recorrência & Escala"
    },
    {
      title: "APIs & Integrações de Sistemas",
      desc: "Comunicação contínua entre softwares legados, bancos relacionais, plataformas de e-commerce e gateways de pagamento.",
      icon: <Network className="w-5 h-5 text-emerald-400" />,
      tag: "REST & Webhooks"
    },
    {
      title: "Filas Assíncronas & Processamento em Lote",
      desc: "Execução distribuída em segundo plano para envio em massa de mensagens, processamento de relatórios pesados e sincronizações periódicas.",
      icon: <Workflow className="w-5 h-5 text-purple-400" />,
      tag: "Redis & BullMQ"
    }
  ];

  return (
    <section id="sob-medida" className="relative py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Scope & Contract Guarantees */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                <span>// ENGENHARIA SOB DEMANDA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Software sob medida para o seu processo.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Quando a sua operação possui regras que ferramentas genéricas não comportam, nós construímos a solução de ponta a ponta.
              </p>
            </div>

            {/* Architecture Code Snippet Visual */}
            <div className="p-5 rounded-xl bg-[#0e1422] border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800/80">
                <span className="flex items-center gap-1.5 text-[11px] text-slate-300">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  architecture_manifest.ts
                </span>
                <span className="text-[10px] text-emerald-400">clean_arch: true</span>
              </div>
              <div className="space-y-1 text-slate-300 text-[11px]">
                <p><span className="text-purple-400">export const</span> <span className="text-sky-300">ProjectSpec</span> = &#123;</p>
                <p className="pl-4">ownership: <span className="text-emerald-300">"100% Client Owned"</span>,</p>
                <p className="pl-4">database: <span className="text-emerald-300">"PostgreSQL Strict Schemas"</span>,</p>
                <p className="pl-4">typeSafety: <span className="text-emerald-300">"End-to-End TypeScript"</span>,</p>
                <p className="pl-4">deploy: <span className="text-emerald-300">"Dockerized Cloud CI/CD"</span></p>
                <p>&#125;;</p>
              </div>
            </div>

            <div>
              <Link
                href="/contato"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-emerald-500/10 active:scale-[0.98]"
              >
                <span>Solicitar diagnóstico do seu projeto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Core Capability Cards */}
          <div className="lg:col-span-7 space-y-4">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0e1422] border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col sm:flex-row items-start gap-5 group"
              >
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shrink-0 group-hover:border-slate-700 transition-colors">
                  {cap.icon}
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {cap.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {cap.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
