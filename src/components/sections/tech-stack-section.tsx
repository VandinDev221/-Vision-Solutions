"use client";

import React, { useState } from "react";
import { Layout, Server, Database, Workflow, Cloud, CheckCircle2 } from "lucide-react";

export const TechStackSection = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: "frontend",
      name: "Camada 1: Frontend & Aplicação",
      tech: "Next.js 15 • React 19 • TypeScript",
      icon: <Layout className="w-5 h-5 text-blue-400" />,
      purpose: "Interfaces rápidas, renderização híbrida (SSR/SSG), tipagem de ponta a ponta e experiência fluida no desktop e mobile.",
      specs: [
        "Componentes funcionais com Server Components",
        "Validação de formulários no cliente com Zod",
        "Acessibilidade nativa e suporte a telas compactas",
        "Comunicação otimizada via REST e WebSockets"
      ]
    },
    {
      id: "api",
      name: "Camada 2: API & Regras de Negócio",
      tech: "NestJS • Fastify • Node.js",
      icon: <Server className="w-5 h-5 text-sky-400" />,
      purpose: "Contratos de rotas estritos, autenticação segura com JWT/OAuth, isolamento multi-tenant e validação de permissões granulares.",
      specs: [
        "Injeção de dependência e Clean Architecture",
        "Middleware de isolamento por Tenant ID",
        "Validação de esquemas com DTOs tipados",
        "Documentação automática de endpoints"
      ]
    },
    {
      id: "data",
      name: "Camada 3: Banco de Dados Relacional",
      tech: "PostgreSQL 16 • Prisma ORM",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      purpose: "Armazenamento estruturado com integridade referencial, índices otimizados para busca e isolamento de dados por cliente.",
      specs: [
        "Modelagem relacional em conformidade com ACID",
        "Migrações de esquema controladas por versão",
        "Pool de conexões para alto volume de consultas",
        "Rotinas automáticas de backup e replicação"
      ]
    },
    {
      id: "async",
      name: "Camada 4: Filas & Processamento Assíncrono",
      tech: "Redis • BullMQ",
      icon: <Workflow className="w-5 h-5 text-purple-400" />,
      purpose: "Execução distribuída em segundo plano para relatórios pesados, envio em massa de mensagens e processamento de webhooks sem travar a interface.",
      specs: [
        "Filas com retentativa automática e backoff",
        "Processamento paralelo por worker pools",
        "Monitoramento de latência e consumo de memória",
        "Garantia de idempotência de eventos"
      ]
    },
    {
      id: "infra",
      name: "Camada 5: Infraestrutura & Nuvem",
      tech: "Docker • Cloud CI/CD • Linux",
      icon: <Cloud className="w-5 h-5 text-indigo-400" />,
      purpose: "Ambientes conteinerizados, pipelines automatizados de teste e deploy contínuo, garantindo que novas versões entrem no ar sem indisponibilidade.",
      specs: [
        "Imagens Docker leves e otimizadas",
        "Pipelines de build e testes automatizados",
        "Certificados SSL automáticos e firewall em nuvem",
        "Monitoramento contínuo de logs e métricas"
      ]
    }
  ];

  const current = layers[activeLayer];

  return (
    <section id="tecnologia" className="py-20 sm:py-28 bg-[#0B0E14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            Arquitetura Técnica
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Engenharia por trás de cada sistema.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Nossa base tecnológica é selecionada para garantir confiabilidade a longo prazo, baixa manutenção e facilidade de evolução conforme o negócio cresce.
          </p>
        </div>

        {/* Technical Architecture Stack Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 5 Architecture Layers */}
          <div className="lg:col-span-5 space-y-2">
            {layers.map((layer, idx) => {
              const isSelected = activeLayer === idx;

              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full text-left p-3.5 rounded border transition-colors cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-[#111622] border-blue-500/50 text-white"
                      : "bg-[#0B0E14] border-white/5 text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded ${isSelected ? "bg-slate-900 border border-slate-700" : "bg-[#0E131E] border border-white/5"}`}>
                      {layer.icon}
                    </div>
                    <div>
                      <span className={`text-xs font-bold block ${isSelected ? "text-white" : "text-slate-300"}`}>
                        {layer.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                        {layer.tech}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Technical Specification Panel */}
          <div className="lg:col-span-7 rounded-lg bg-[#111622] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-[#0B0E14] border border-white/5">
                  {current.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">{current.name}</h3>
                  <span className="text-xs font-mono text-blue-400 font-semibold">{current.tech}</span>
                </div>
              </div>

              <span className="text-xs font-mono text-slate-400">
                Camada {activeLayer + 1} de 5
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Finalidade Operacional:
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0B0E14] p-4 rounded border border-white/5">
                {current.purpose}
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                Padrões & Diretrizes de Implementação:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-[#0E131E] border border-white/5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
