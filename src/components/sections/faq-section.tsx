"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, ChevronDown } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona o licenciamento ou contratação dos SaaS do ecossistema?",
      answer: "Oferecemos modelos flexíveis: aluguel/assinatura mensal (SaaS), licenciamento de instância exclusiva (single-tenant em nuvem própria) e aquisição de licença enterprise. Cada plano inclui atualizações contínuas de segurança e suporte técnico especializado."
    },
    {
      question: "Posso solicitar o desenvolvimento de um SaaS novo ou projeto sob medida?",
      answer: "Sim! Somos uma Software House e Studio de Inovação completo. Analisamos os requisitos do seu projeto, desenhamos a arquitetura Clean Architecture em Next.js 15 / Fastify / PostgreSQL e entregamos o produto pronto para produção em tempo recorde."
    },
    {
      question: "Como é garantida a segurança e isolamento dos dados dos clientes (Multi-tenant)?",
      answer: "Utilizamos arquitetura multi-tenant com isolamento rígido em nível de banco de dados (schemas dedicados ou tabelas com controle de tenant estrito), HTTPS/HSTS obrigatório, autenticação via JWT com refresh HTTPOnly e backups diários automatizados."
    },
    {
      question: "Os sistemas possuem integração com WhatsApp?",
      answer: "Sim! Vários dos nossos SaaS (como SynDent, BarberCRM e DisparoFlow) já contam com automação de WhatsApp nativa para confirmação de agendamentos, avisos de aniversário, lembretes de retorno e réguas de cobrança financeira."
    },
    {
      question: "Vocês disponibilizam período de teste (trial) ou demonstração ao vivo?",
      answer: "Com certeza. Basta preencher o formulário de contato abaixo ou clicar no botão 'Solicitar Software / Demo'. A nossa equipe agendará uma demonstração guiada e disponibilizará credenciais de teste para você experimentar na prática."
    }
  ];

  return (
    <section id="faq" className="relative py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="indigo" className="mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Respostas diretas sobre nosso ecossistema SaaS, desenvolvimento sob medida e licenciamento.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/80 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg hover:text-indigo-400 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-800/50 pt-4 bg-slate-950/40">
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
