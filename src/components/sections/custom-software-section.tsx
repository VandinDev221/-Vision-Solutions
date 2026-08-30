"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Laptop, BarChart2, Network, Workflow, CheckCircle2 } from "lucide-react";

export const CustomSoftwareSection = () => {
  const capabilities = [
    {
      title: "Sistemas Empresariais & ERPs",
      desc: "Sistemas desenhados exatamente para as regras de negócio, estoque, vendas e fluxo operacional da sua empresa.",
      icon: <Building className="w-5 h-5 text-sky-400" />
    },
    {
      title: "Plataformas SaaS Sob Medida",
      desc: "Arquitetura multi-tenant completa com faturamento recorrente, painéis de gestão e isolamento de dados.",
      icon: <Laptop className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Dashboards & Painéis Operacionais",
      desc: "Visualização clara de métricas críticas, indicadores de desempenho e relatórios operacionais em tempo real.",
      icon: <BarChart2 className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "APIs & Integrações de Sistemas",
      desc: "Comunicação contínua entre softwares legados, gateways de pagamento, plataformas externas e bancos de dados.",
      icon: <Network className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Automação de Processos & Rotinas",
      desc: "Eliminação de tarefas manuais repetitivas através de fluxos automatizados com mensageria e webhooks.",
      icon: <Workflow className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="sob-medida" className="relative py-24 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial intro */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider block">
              Desenvolvimento Sob Medida
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Também construímos software sob medida.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Quando uma operação precisa de algo que um software pronto não resolve, desenvolvemos a solução de acordo com seus processos, regras e rotinas.
            </p>

            <div className="p-5 rounded-xl bg-[#111726] border border-slate-800 space-y-3">
              <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider block">
                Por que sob medida?
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Você não precisa adaptar sua equipe a ferramentas engessadas. O sistema é modelado para refletir a sua rotina real.
              </p>
            </div>

            <div>
              <Link href="/contato">
                <Button variant="primary" size="lg" className="font-semibold">
                  Solicitar análise do seu projeto
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Key Capabilities */}
          <div className="lg:col-span-7 space-y-4">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
