"use client";

import React from "react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Entendimento & Requisitos",
      desc: "Imersão nos gargalos da operação, regras de negócio e mapeamento dos fluxos críticos que geram valor imediato.",
      deliverable: "Documento de Escopo & Arquitetura"
    },
    {
      number: "02",
      title: "Modelagem & Protótipo",
      desc: "Estruturação do banco de dados relacional, definição das camadas técnicas, contratos de API e fluxos de tela.",
      deliverable: "Modelo de Dados & Wireframes"
    },
    {
      number: "03",
      title: "Desenvolvimento Incremental",
      desc: "Construção com TypeScript estrito, testes automatizados e validações frequentes com o cliente.",
      deliverable: "Entregas Semanais em Staging"
    },
    {
      number: "04",
      title: "Homologação & Testes",
      desc: "Validação dos fluxos de trabalho com os operadores reais da empresa e testes de carga em ambiente espelho.",
      deliverable: "Checklist de Homologação Aprovado"
    },
    {
      number: "05",
      title: "Deploy em Produção",
      desc: "Publicação segura em nuvem, configuração de pipelines CI/CD, migração de dados e acompanhamento assistido no lançamento.",
      deliverable: "Software em Nuvem Ativo"
    },
    {
      number: "06",
      title: "Suporte & Evolução",
      desc: "Monitoramento de erros e latência, suporte técnico direto com o time de engenharia e desenvolvimento de novos módulos.",
      deliverable: "SLA & Suporte Contínuo"
    }
  ];

  return (
    <section id="processo" className="py-20 sm:py-28 bg-[#080B10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            Metodologia de Entrega
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Da concepção à produção. Sem surpresas.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Processo estruturado em etapas previsíveis para que você acompanhe o progresso técnico com clareza, transparência e controle.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[#111622] border border-white/10 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-2.5">
                <span className="text-2xl font-bold font-mono text-blue-400 block">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Entrega:</span>
                <span className="text-emerald-400 font-semibold">{step.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
