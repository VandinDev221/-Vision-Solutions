"use client";

import React from "react";
import { motion } from "framer-motion";

export const ProcessSection = () => {
  const steps = [
    { number: "01", title: "Descoberta", desc: "Entendimento do negócio, requisitos e mapeamento dos objetivos operacionais." },
    { number: "02", title: "Arquitetura", desc: "Definição do modelo de dados, estrutura técnica e prototipação dos fluxos de tela." },
    { number: "03", title: "Desenvolvimento", desc: "Construção incremental com entregas validadas continuadamente." },
    { number: "04", title: "Validação", desc: "Testes de carga, validação de regras de negócio e refinamento." },
    { number: "05", title: "Produção", desc: "Deploy seguro em infraestrutura de nuvem e preparação operacional." },
    { number: "06", title: "Evolução", desc: "Manutenção técnica, suporte contínuo e desenvolvimento de novas funcionalidades." }
  ];

  return (
    <section id="processo" className="relative py-24 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider block mb-2">
            Metodologia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Do diagnóstico à produção
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Processo transparente de engenharia de software estruturado em entregas previsíveis.
          </p>
        </motion.div>

        {/* 6 Steps Grid Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
              className="p-6 rounded-lg bg-[#111726] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <span className="text-2xl font-bold font-mono text-sky-400 block mb-3">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
