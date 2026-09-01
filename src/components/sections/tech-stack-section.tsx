"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Zap,
  Lock,
  Terminal,
  Layers,
  Cpu,
  ArrowDown
} from "lucide-react";

export const TechStackSection = () => {
  const [activeNode, setActiveNode] = useState<"frontend" | "backend" | "workers" | "database">("frontend");

  const nodeDetails = {
    frontend: {
      title: "Camada de Interface & Frontend",
      stack: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Electron"],
      description: "Interfaces com renderização híbrida (SSR/SSG), zero layout shift, carregamento em menos de 100ms e experiência de aplicativo nativo no desktop.",
      metrics: "FCP < 0.4s • Score 100 Performance"
    },
    backend: {
      title: "API Gateway & Microsserviços",
      stack: ["Node.js 22 LTS", "Fastify", "NestJS", "RESTful & Webhooks", "OAuth 2.0 / JWT"],
      description: "Servidores HTTP de alta vazão com tipagem estrita de contratos, validação de payload via Zod e baixa latência de execução por requisição.",
      metrics: "Latência p99 < 18ms • 50k req/s"
    },
    workers: {
      title: "Filas Assíncronas & Mensageria",
      stack: ["Redis 7 Cache", "BullMQ Queues", "NATS JetStream", "Cron Workers"],
      description: "Processamento distribuído em segundo plano para envio em massa de mensagens no WhatsApp, relatórios pesados e reprocessamento com retry exponencial.",
      metrics: "Zero bloqueio na thread principal"
    },
    database: {
      title: "Banco de Dados & Multi-Tenancy",
      stack: ["PostgreSQL 16", "Prisma ORM", "Schema Isolation", "WAL Backups"],
      description: "Modelagem relacional normalizada com isolamento estrito de dados por organização cliente, índices otimizados e conformidade com a LGPD.",
      metrics: "Transações ACID • Backups Diários"
    }
  };

  return (
    <section id="tecnologia" className="relative py-20 sm:py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            <span>// TOPOLOGIA DO SISTEMA & ENGENHARIA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Arquitetura em produção.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Interaja com os nós da nossa infraestrutura para entender como o fluxo de dados trafega de ponta a ponta.
          </p>
        </div>

        {/* Interactive Architecture Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Interactive Topology Node Graph */}
          <div className="lg:col-span-6 p-4 sm:p-6 lg:p-8 rounded-2xl bg-[#0e1422] border border-slate-800/90 shadow-2xl space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase font-semibold">
                Nós da Arquitetura
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Cluster Ativo
              </span>
            </div>

            {/* Node 1: Frontend */}
            <div
              onClick={() => setActiveNode("frontend")}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeNode === "frontend"
                  ? "bg-[#090d16] border-sky-500/60 shadow-md shadow-sky-500/10"
                  : "bg-[#090d16]/60 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className={`p-2 sm:p-2.5 rounded-lg border shrink-0 ${
                  activeNode === "frontend" ? "bg-slate-900 border-sky-500/40 text-sky-400" : "bg-slate-900/80 border-slate-800 text-slate-400"
                }`}>
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">01. Frontend Layer</h4>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-mono truncate block">Next.js 15 • React 19 • Electron</span>
                </div>
              </div>
              <span className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ${
                activeNode === "frontend" ? "bg-sky-950 text-sky-300 border-sky-800" : "bg-slate-900 text-slate-500 border-slate-800"
              }`}>
                {activeNode === "frontend" ? "Ativo" : "Ver"}
              </span>
            </div>

            {/* Animated Connector 1 */}
            <div className="flex justify-center py-0.5">
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 animate-bounce" />
            </div>

            {/* Node 2: Backend */}
            <div
              onClick={() => setActiveNode("backend")}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeNode === "backend"
                  ? "bg-[#090d16] border-cyan-500/60 shadow-md shadow-cyan-500/10"
                  : "bg-[#090d16]/60 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className={`p-2 sm:p-2.5 rounded-lg border shrink-0 ${
                  activeNode === "backend" ? "bg-slate-900 border-cyan-500/40 text-cyan-400" : "bg-slate-900/80 border-slate-800 text-slate-400"
                }`}>
                  <Server className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">02. API Gateway & Fastify</h4>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-mono truncate block">Fastify • NestJS • REST & Webhooks</span>
                </div>
              </div>
              <span className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ${
                activeNode === "backend" ? "bg-cyan-950 text-cyan-300 border-cyan-800" : "bg-slate-900 text-slate-500 border-slate-800"
              }`}>
                {activeNode === "backend" ? "Ativo" : "Ver"}
              </span>
            </div>

            {/* Animated Connector 2 */}
            <div className="flex justify-center py-0.5">
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 animate-bounce" />
            </div>

            {/* Node 3: Workers & Queues */}
            <div
              onClick={() => setActiveNode("workers")}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeNode === "workers"
                  ? "bg-[#090d16] border-purple-500/60 shadow-md shadow-purple-500/10"
                  : "bg-[#090d16]/60 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className={`p-2 sm:p-2.5 rounded-lg border shrink-0 ${
                  activeNode === "workers" ? "bg-slate-900 border-purple-500/40 text-purple-400" : "bg-slate-900/80 border-slate-800 text-slate-400"
                }`}>
                  <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">03. Filas & Mensageria</h4>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-mono truncate block">BullMQ • Redis • NATS JetStream</span>
                </div>
              </div>
              <span className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ${
                activeNode === "workers" ? "bg-purple-950 text-purple-300 border-purple-800" : "bg-slate-900 text-slate-500 border-slate-800"
              }`}>
                {activeNode === "workers" ? "Ativo" : "Ver"}
              </span>
            </div>

            {/* Animated Connector 3 */}
            <div className="flex justify-center py-0.5">
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 animate-bounce" />
            </div>

            {/* Node 4: Database */}
            <div
              onClick={() => setActiveNode("database")}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                activeNode === "database"
                  ? "bg-[#090d16] border-emerald-500/60 shadow-md shadow-emerald-500/10"
                  : "bg-[#090d16]/60 border-slate-800/80 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className={`p-2 sm:p-2.5 rounded-lg border shrink-0 ${
                  activeNode === "database" ? "bg-slate-900 border-emerald-500/40 text-emerald-400" : "bg-slate-900/80 border-slate-800 text-slate-400"
                }`}>
                  <Database className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">04. Banco & Multi-Tenancy</h4>
                  <span className="text-[11px] sm:text-xs text-slate-400 font-mono truncate block">PostgreSQL 16 • Prisma • Schemas</span>
                </div>
              </div>
              <span className={`text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded border shrink-0 ${
                activeNode === "database" ? "bg-emerald-950 text-emerald-300 border-emerald-800" : "bg-slate-900 text-slate-500 border-slate-800"
              }`}>
                {activeNode === "database" ? "Ativo" : "Ver"}
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Deep Architecture Node Inspector */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#0e1422] border border-slate-800/90 shadow-2xl space-y-5"
              >
                <div className="space-y-2 pb-4 border-b border-slate-800/80">
                  <span className="text-[10px] sm:text-[11px] font-mono text-sky-400 uppercase font-semibold">
                    Especificação Técnica do Nó
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {nodeDetails[activeNode].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {nodeDetails[activeNode].description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="space-y-2">
                  <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Tecnologias Integradas
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {nodeDetails[activeNode].stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] sm:text-xs font-mono px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#090d16] text-slate-200 border border-slate-800 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance SLA Metrics Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#090d16] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-slate-300 font-medium font-mono text-[11px] sm:text-xs">
                      {nodeDetails[activeNode].metrics}
                    </span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[10px] font-semibold">
                    100% Produção
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
