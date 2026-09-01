"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Stethoscope,
  Scissors,
  Bot,
  Scale,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers
} from "lucide-react";
import Link from "next/link";

export const ProductOrbit = () => {
  const [selectedProduct, setSelectedProduct] = useState<"torqueos" | "syndent" | "barbercrm" | "disparoflow">("torqueos");

  const products = {
    torqueos: {
      name: "TorqueOS",
      category: "ERP Automotivo",
      icon: <Wrench className="w-5 h-5 text-sky-400" />,
      tagline: "ERP completo para oficinas mecânicas, autocenters e autopeças",
      problem: "Elimina controles em papel, organiza o pátio e automatiza a emissão de ordens de serviço.",
      features: ["Ordens de Serviço Digitais", "Catálogo com +50k Peças", "Controle de Pátio", "Fluxo de Caixa Pix"],
      stack: ["Next.js 15", "Fastify", "PostgreSQL", "Electron"],
    },
    syndent: {
      name: "SynDent",
      category: "SaaS Odontológico",
      icon: <Stethoscope className="w-5 h-5 text-cyan-400" />,
      tagline: "Plataforma de gestão clínica com Clean Architecture e prontuário",
      problem: "Resolve a desorganização de prontuários em papel e o absenteísmo de consultas.",
      features: ["Prontuário & Raio-X", "Odontograma 2D/3D", "Confirmação WhatsApp", "Multi-Profissionais"],
      stack: ["React 19", "NestJS", "Prisma", "PostgreSQL"],
    },
    barbercrm: {
      name: "BarberCRM",
      category: "SaaS de Agendamento",
      icon: <Scissors className="w-5 h-5 text-amber-400" />,
      tagline: "Agendamento online e fidelização VIP para barbearias",
      problem: "Acaba com o agendamento manual no WhatsApp e comissões calculadas à mão.",
      features: ["Agendamento Online 24/7", "Comissão Automática", "Clube de Assinaturas", "Lembretes Automáticos"],
      stack: ["Next.js 15", "Node.js", "Redis", "PostgreSQL"],
    },
    disparoflow: {
      name: "DisparoFlow",
      category: "Automação WhatsApp",
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      tagline: "Motor de mensageria e notificações com fila assíncrona",
      problem: "Automatiza réguas de cobrança, confirmações e avisos sem bloqueio de linha.",
      features: ["Filas com BullMQ", "Gatilhos por Webhook", "Múltiplas Conexões", "Relatórios de Entrega"],
      stack: ["Fastify", "BullMQ", "Redis", "Docker"],
    },
  };

  const current = products[selectedProduct];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start select-none">
      {/* Left Column: Product Orbital Switcher */}
      <div className="lg:col-span-5 space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
          Selecione o Sistema no Ecossistema
        </span>

        <div className="space-y-2">
          {(Object.keys(products) as Array<keyof typeof products>).map((key) => {
            const p = products[key];
            const isSelected = selectedProduct === key;

            return (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                  isSelected
                    ? "bg-[#0E1622] border-sky-500/60 shadow-lg shadow-sky-500/10 scale-[1.01]"
                    : "bg-[#0A101A] border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg border ${
                    isSelected ? "bg-[#070B12] border-sky-500/40" : "bg-[#070B12] border-slate-800"
                  }`}>
                    {p.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold font-mono ${isSelected ? "text-white" : "text-slate-300"}`}>
                        {p.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#070B12] text-slate-400 border border-slate-800">
                        {p.category}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-sans">
                      {p.tagline}
                    </span>
                  </div>
                </div>

                <ArrowRight className={`w-4 h-4 transition-transform shrink-0 ${
                  isSelected ? "translate-x-1 text-sky-400" : "text-slate-600"
                }`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Active Inspection Bay */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0A101A] border border-slate-800 shadow-2xl space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#0E1622] border border-slate-800">
                  {current.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold font-mono text-white">{current.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      EM PRODUÇÃO
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 mt-0.5 block">
                    Categoria: {current.category}
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono text-sky-400 font-semibold hidden sm:inline-block">
                // ECOSSISTEMA ATIVO
              </span>
            </div>

            {/* Problem solved */}
            <div className="p-4 rounded-xl bg-[#0E1622] border border-slate-800/80 space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-sky-400 font-bold block">
                Problema Operacional Resolvido:
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {current.problem}
              </p>
            </div>

            {/* Capabilities */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
                Recursos Operacionais
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#0E1622] border border-slate-800 flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack & Direct CTA */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                <span className="text-slate-500 mr-1">Stack:</span>
                {current.stack.map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-[#070B12] text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href="/contato"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-sky-500/10 active:scale-[0.98]"
              >
                <span>Solicitar Demonstração</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
