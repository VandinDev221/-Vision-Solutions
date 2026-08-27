"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Building2, Code2, Workflow, RefreshCw, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicosPage() {
  const servicesList = [
    {
      title: "Desenvolvimento de SaaS Multi-Tenant",
      target: "Para empreendedores e empresas que buscam criar um produto digital recorrente.",
      problem: "Elimina a complexidade técnica de arquitetura multi-tenant, billing e isolamento de banco de dados.",
      deliverable: "Plataforma web completa em Next.js 15 / Fastify com painel administrativo, assinaturas e isolamento de dados.",
      icon: <Rocket className="w-6 h-6 text-indigo-400" />
    },
    {
      title: "Sistemas Empresariais (ERP & CRM)",
      target: "Para empresas com operações complexas que precisam organizar processos internos.",
      problem: "Substitui planilhas fragmentadas e papéis por um sistema centralizado de controle.",
      deliverable: "ERP ou CRM sob medida com gestão de estoque, ordens de serviço, clientes e fluxo financeiro.",
      icon: <Building2 className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Desenvolvimento Web Sob Medida",
      target: "Para negócios que necessitam de portais ou aplicações web exclusivas.",
      problem: "Atende a requisitos de regras de negócio específicas que softwares de prateleira não cobrem.",
      deliverable: "Aplicações web responsivas de alta velocidade construídas com Clean Architecture.",
      icon: <Code2 className="w-6 h-6 text-purple-400" />
    },
    {
      title: "APIs, Webhooks & Integrações",
      target: "Para empresas que utilizam múltiplos softwares desconectados.",
      problem: "Conecta plataformas terceiras, meios de pagamento e sistemas legados de forma automática.",
      deliverable: "APIs RESTful seguras, webhooks em tempo real e microsserviços de mensageria.",
      icon: <Workflow className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Automação de Processos Operacionais",
      target: "Para equipes que perdem tempo com tarefas manuais repetitivas.",
      problem: "Automatiza a geração de documentos, notificações de WhatsApp, réguas de cobrança e rotinas.",
      deliverable: "Rotinas assíncronas em background gerenciadas por filas NATS, Redis e BullMQ.",
      icon: <Layers className="w-6 h-6 text-amber-400" />
    },
    {
      title: "Modernização de Sistemas Legados",
      target: "Para empresas com sistemas antigos de difícil manutenção.",
      problem: "Resolve gargalos de lentidão, insegurança e impossibilidade de evolução técnica.",
      deliverable: "Reescrita modular e migração segura de dados para arquiteturas em nuvem modernas.",
      icon: <RefreshCw className="w-6 h-6 text-sky-400" />
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="pt-36 pb-16 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
            Serviços de Engenharia de Software
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Soluções Sob Medida para Seu Negócio
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Estruturamos e desenvolvemos a camada de software necessária para digitalizar e acelerar a operação da sua empresa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((item, idx) => (
              <Card key={idx} className="p-7 bg-slate-900/60 border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 w-fit mb-5">
                    {item.icon}
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3">{item.title}</h2>
                  
                  <div className="space-y-3 mb-6 text-xs">
                    <div>
                      <span className="font-mono text-slate-500 uppercase block text-[10px]">Para quem é:</span>
                      <p className="text-slate-300">{item.target}</p>
                    </div>
                    <div>
                      <span className="font-mono text-slate-500 uppercase block text-[10px]">Problema que resolve:</span>
                      <p className="text-indigo-300 font-medium">{item.problem}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <span className="font-mono text-slate-500 uppercase block text-[10px] mb-1.5">Entregável:</span>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item.deliverable}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link href="/contato">
                    <Button variant="outline" className="w-full justify-between text-xs">
                      <span>Solicitar Proposta</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
