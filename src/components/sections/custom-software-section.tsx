"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Building2, Layers, Network, Workflow, ShieldCheck } from "lucide-react";

export const CustomSoftwareSection = () => {
  const capabilities = [
    {
      title: "ERPs & Backoffices Operacionais",
      desc: "Sistemas desenhados rigorosamente para as regras do seu negócio: estoque, orçamentos, ordens de serviço, faturamento e permissões granulares.",
      icon: <Building2 className="w-5 h-5 text-blue-400" />,
      tag: "Gestão Interna"
    },
    {
      title: "Plataformas SaaS Multi-Tenant",
      desc: "Arquitetura com isolamento de dados por cliente, autenticação segura, faturamento recorrente automatizado e painel administrativo central.",
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      tag: "Escalabilidade"
    },
    {
      title: "APIs & Integrações de Sistemas",
      desc: "Comunicação contínua entre softwares legados, bancos relacionais, plataformas de e-commerce e gateways de pagamento.",
      icon: <Network className="w-5 h-5 text-emerald-400" />,
      tag: "REST & Webhooks"
    },
    {
      title: "Filas & Automação de Processos",
      desc: "Execução distribuída em segundo plano para envio de notificações, relatórios pesados e sincronizações periódicas sem travar o usuário.",
      icon: <Workflow className="w-5 h-5 text-purple-400" />,
      tag: "Redis & BullMQ"
    }
  ];

  return (
    <section id="sob-medida" className="py-20 sm:py-28 bg-[#080B10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Guarantees & Positioning */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                Engenharia Sob Demanda
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Software sob medida para o seu processo.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Quando a sua operação possui regras que ferramentas genéricas não comportam, nós construímos a solução de ponta a ponta — com código 100% autoral e propriedade total do cliente.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#111622] border border-white/10 space-y-3 font-mono text-xs">
              <span className="text-slate-400 font-semibold uppercase block text-[11px]">
                Garantias Contratuais do Projeto:
              </span>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Código-fonte 100% de propriedade do cliente</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sem dependência de plataformas proprietárias terceiras</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Documentação técnica de arquitetura e endpoints</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
              >
                <span>Solicitar diagnóstico do seu projeto</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Core Capability Tiles */}
          <div className="lg:col-span-7 space-y-3">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-lg bg-[#111622] border border-white/10 hover:border-white/20 transition-colors flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="p-2.5 rounded bg-[#0B0E14] border border-white/5 shrink-0">
                  {cap.icon}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-white">
                      {cap.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {cap.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
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
