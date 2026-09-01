"use client";

import React from "react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Entendimento",
      desc: "Imersão nos gargalos da operação, regras de negócio e mapeamento dos requisitos que geram valor imediato.",
      deliverable: "Documento de Requisitos & Escopo"
    },
    {
      number: "02",
      title: "Arquitetura",
      desc: "Modelagem do banco de dados relacional, definição das camadas técnicas, contratos de API e fluxos de tela.",
      deliverable: "Modelo de Dados & Wireframes"
    },
    {
      number: "03",
      title: "Desenvolvimento",
      desc: "Construção com TypeScript estrito, testes automatizados e ciclos incrementais com validação frequente.",
      deliverable: "Sprints com Entregas Semanais"
    },
    {
      number: "04",
      title: "Validação",
      desc: "Homologação dos fluxos de trabalho com os usuários reais da empresa e testes de carga em ambiente espelho.",
      deliverable: "Checklist de Homologação"
    },
    {
      number: "05",
      title: "Produção",
      desc: "Deploy seguro em nuvem, configuração de pipelines CI/CD, migração de dados e acompanhamento assistido no lançamento.",
      deliverable: "Software em Nuvem Ativo"
    },
    {
      number: "06",
      title: "Evolução",
      desc: "Monitoramento contínuo de erros e latência, suporte técnico direto e desenvolvimento de novos módulos operacionais.",
      deliverable: "SLA & Suporte Contínuo"
    }
  ];

  return (
    <section id="processo" className="relative py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            <span>// METODOLOGIA DE ENGENHARIA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Da ideia à produção. Sem surpresas.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Processo estruturado em etapas previsíveis para que você acompanhe o progresso técnico com clareza e controle.
          </p>
        </div>

        {/* 6 Steps Grid with Deliverable Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0e1422] border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-3">
                <span className="text-3xl font-extrabold font-mono text-sky-400 block group-hover:translate-x-1 transition-transform">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
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
