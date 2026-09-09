"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Building2, Layers, Network, Workflow, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicosPage() {
  const services = [
    {
      title: "ERPs & Backoffices Operacionais",
      desc: "Sistemas desenhados rigorosamente para as regras do seu negócio: estoque, orçamentos, ordem de serviço, faturamento e permissões granulares.",
      icon: <Building2 className="w-5 h-5 text-blue-400" />,
      features: [
        "Fluxos operacionais adaptados à realidade da equipe",
        "Controle rigoroso de estoque e movimentações",
        "Emissão rápida de ordens de serviço e orçamentos",
        "Permissões e trilha de auditoria por perfil de usuário"
      ]
    },
    {
      title: "Plataformas SaaS Multi-Tenant",
      desc: "Arquitetura com isolamento de dados por cliente, autenticação segura, faturamento recorrente automatizado e painel administrativo master.",
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      features: [
        "Isolamento estrito de banco de dados por Tenant",
        "Integração com gateways de pagamento (Pix/Cartão/Boleto)",
        "Painel master para gestão de assinaturas e planos",
        "Onboarding automatizado de novos clientes"
      ]
    },
    {
      title: "APIs & Integrações de Sistemas",
      desc: "Comunicação contínua entre softwares legados, bancos relacionais, plataformas de e-commerce e gateways de pagamento.",
      icon: <Network className="w-5 h-5 text-emerald-400" />,
      features: [
        "Construção de APIs REST com contratos tipados",
        "Sincronização bidirecional via Webhooks com idempotência",
        "Conexão com bancos de dados relacionais existentes",
        "Documentação clara com OpenAPI / Swagger"
      ]
    },
    {
      title: "Filas & Automação de Processos",
      desc: "Execução distribuída em segundo plano para envio de notificações, processamento de relatórios pesados e sincronizações periódicas.",
      icon: <Workflow className="w-5 h-5 text-purple-400" />,
      features: [
        "Filas com Redis e BullMQ para alta concorrência",
        "Régua de mensagens e notificações automáticas",
        "Processamento assíncrono sem bloqueio da UI",
        "Monitoramento contínuo de jobs e erros"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#0B0E14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-36 pb-16 bg-[#0B0E14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-left">
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-2">
            Engenharia Sob Demanda
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Desenvolvimento de Software Sob Medida
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Construímos sistemas empresariais sob medida para negócios que possuem regras e fluxos de dados que ferramentas genéricas de prateleira não conseguem atender.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0B0E14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-[#111622] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="p-3 rounded bg-[#0B0E14] border border-white/5 w-fit">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{service.title}</h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Entregas Típicas do Escopo:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Solicitar proposta para este modelo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantees Box */}
          <div className="p-8 rounded-lg bg-[#111622] border border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-white">Garantias de Engenharia Vision Solutions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Código 100% Autoral</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sem dependência de templates genéricos ou código descartável. O software pertence integralmente à sua empresa.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Arquitetura Escalável</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Modelagem relacional consistente no PostgreSQL com APIs tipadas e desacopladas.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Suporte Contínuo</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Acompanhamento técnico no deploy, monitoramento de performance e evolução contínua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
