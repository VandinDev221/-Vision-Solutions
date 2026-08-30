"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona a contratação ou licenciamento dos produtos SaaS?",
      answer: "Oferecemos modelos flexíveis: assinatura mensal como serviço (SaaS), licenciamento de instância exclusiva e planos customizados para empresas. Cada modelo inclui atualizações de segurança e suporte técnico."
    },
    {
      question: "Como funciona o desenvolvimento de software sob medida?",
      answer: "Analisamos detalhadamente os gargalos operacionais da sua empresa, desenhamos a arquitetura técnica e o modelo de dados, e desenvolvemos o sistema em ciclos incrementais com código 100% autoral."
    },
    {
      question: "Como é garantida a segurança e o isolamento dos dados dos clientes?",
      answer: "Utilizamos arquitetura multi-tenant com isolamento rígido em nível de banco de dados, comunicação HTTPS obrigatória, autenticação segura e rotinas automatizadas de backup."
    },
    {
      question: "Os sistemas possuem integração com WhatsApp e APIs de terceiros?",
      answer: "Sim. Nossos produtos e sistemas sob medida são construídos para integrar facilmente com gateways de pagamento, APIs de mensageria, sistemas legados e webhooks."
    },
    {
      question: "Como posso solicitar uma demonstração ou orçamento?",
      answer: "Basta preencher o formulário na página de contato ou falar diretamente pelo nosso WhatsApp comercial (+55 98 98919-8146). Entenderemos seu cenário e apresentaremos a melhor solução."
    }
  ];

  return (
    <section id="faq" className="relative py-24 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Perguntas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dúvidas Comuns
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Respostas diretas sobre nossos produtos SaaS, desenvolvimento sob medida e atendimento.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#111726] border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base hover:text-sky-300 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-sky-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 pt-4 bg-[#090d16]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
