"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";

export const ComplexityTransformationSection = () => {
  const [activeStage, setActiveStage] = useState<0 | 1 | 2>(0);

  const stages = [
    {
      id: "chaos",
      label: "01. Fragmentação Operacional",
      title: "O cenário antes do software estruturado",
      description: "Informações espalhadas em planilhas desatualizadas, ordens de serviço em papel e negociações perdidas em conversas soltas no WhatsApp.",
      items: [
        "Planilhas com versões conflitantes",
        "Retrabalho manual de digitação de pedidos",
        "Falta de visibilidade de estoque e faturamento",
        "Perda de prazos e orçamentos esquecidos"
      ],
      tag: "Gargalo e Ineficiência",
      tagColor: "text-amber-400 bg-amber-950/60 border-amber-800"
    },
    {
      id: "architecture",
      label: "02. Engenharia de Integração",
      title: "Modelagem rigorosa de dados e regras",
      description: "Mapeamento das entidades do seu negócio, definição de esquemas relacionais no PostgreSQL e criação de contratos de API consistentes.",
      items: [
        "Banco de dados relacional com integridade referencial",
        "Autenticação e permissões granulares por função",
        "APIs com validação estrita de entrada e saída",
        "Filas assíncronas para processamentos pesados"
      ],
      tag: "Estruturação Técnica",
      tagColor: "text-blue-400 bg-blue-950/60 border-blue-800"
    },
    {
      id: "operation",
      label: "03. Software em Produção",
      title: "Operação digital unificada e previsível",
      description: "Sistema rápido e intuitivo, operando em nuvem com alta disponibilidade, conciliação financeira automatizada e relatórios em tempo real.",
      items: [
        "Interface rápida desenhada para o operador",
        "Emissão instantânea de ordens e faturamentos",
        "Notificações e confirmações automáticas",
        "Controle total dos indicadores da empresa"
      ],
      tag: "Operação Estável",
      tagColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800"
    }
  ];

  const current = stages[activeStage];

  return (
    <section className="py-20 sm:py-28 bg-[#080B10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            Transformação de Processos
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Como transformamos complexidade em software funcional.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A maioria dos gargalos operacionais não é falta de esforço da equipe, mas a ausência de um sistema que reflita as regras reais do negócio.
          </p>
        </div>

        {/* 3-Stage Interactive Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stage Buttons */}
          <div className="lg:col-span-4 space-y-2">
            {stages.map((st, idx) => {
              const isSelected = activeStage === idx;

              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStage(idx as 0 | 1 | 2)}
                  className={`w-full text-left p-4 rounded border transition-colors cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-[#111622] border-blue-500/50 text-white"
                      : "bg-[#0B0E14] border-white/5 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono font-semibold block text-slate-400">
                      {st.label}
                    </span>
                    <span className={`text-sm font-bold block mt-0.5 ${isSelected ? "text-white" : "text-slate-300"}`}>
                      {st.tag}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 ${isSelected ? "text-blue-400" : "text-slate-600"}`} />
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail */}
          <div className="lg:col-span-8 rounded-lg bg-[#111622] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
              <span className={`text-xs font-mono px-2.5 py-1 rounded border self-start sm:self-auto ${current.tagColor}`}>
                {current.label}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Fase {activeStage + 1} de 3
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Características da Fase:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded bg-[#0B0E14] border border-white/5 text-xs text-slate-300">
                    {activeStage === 0 ? (
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Resultado: Arquitetura sob medida para sua equipe
              </span>
              <Link
                href="/contato"
                className="text-xs font-mono font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
              >
                <span>Solicitar diagnóstico da sua operação</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
