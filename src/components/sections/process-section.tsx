"use client";

import React from "react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Entendimento",
      desc: "Imersão profunda na operação, regras de negócio e gargalos que precisam de tecnologia para serem superados."
    },
    {
      number: "02",
      title: "Arquitetura",
      desc: "Definição do modelo de banco de dados, estrutura técnica, padrões de segurança e fluxos de navegação."
    },
    {
      number: "03",
      title: "Desenvolvimento",
      desc: "Construção com código limpo, testes automatizados e entregas incrementais para validação contínua."
    },
    {
      number: "04",
      title: "Validação",
      desc: "Homologação rigorosa de fluxos, validação de regras de cálculo e testes de usabilidade com os usuários."
    },
    {
      number: "05",
      title: "Produção",
      desc: "Deploy seguro em infraestrutura em nuvem, migração de dados e acompanhamento assistido no lançamento."
    },
    {
      number: "06",
      title: "Evolução",
      desc: "Monitoramento de performance, suporte técnico contínuo e desenvolvimento de novas melhorias operacionais."
    }
  ];

  return (
    <section id="processo" className="relative py-24 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Metodologia de Entrega
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Da ideia à produção.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Processo estruturado de engenharia para garantir previsibilidade, estabilidade e aderência total ao seu negócio.
          </p>
        </div>

        {/* 6 Steps Grid Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#111726] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <span className="text-2xl font-bold font-mono text-sky-400 block mb-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
