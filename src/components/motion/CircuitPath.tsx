"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { User, Server, Workflow, Database, CheckCircle2 } from "lucide-react";

export const CircuitPath = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  const stations = [
    { id: "user", label: "01. REQUISIÇÃO", sub: "User / Web / App", icon: <User className="w-4 h-4 text-sky-400" /> },
    { id: "api", label: "02. FASTIFY API", sub: "Validação Zod & JWT", icon: <Server className="w-4 h-4 text-cyan-400" /> },
    { id: "queue", label: "03. FILA ASSÍNCRONA", sub: "Redis / BullMQ Jobs", icon: <Workflow className="w-4 h-4 text-purple-400" /> },
    { id: "db", label: "04. POSTGRESQL 16", sub: "Schema Multi-Tenant", icon: <Database className="w-4 h-4 text-emerald-400" /> },
  ];

  // Autonomous data packet flow loop
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stations.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, stations.length]);

  return (
    <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0A101A] border border-slate-800 shadow-2xl overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            DATA_FLOW // CIRCUITO DE EXECUÇÃO EM TEMPO REAL
          </span>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 font-semibold">
          FLUXO ATIVO
        </span>
      </div>

      {/* Interactive Horizontal Circuit Conduit */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
        {stations.map((st, idx) => {
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <div
              key={st.id}
              className={`p-4 rounded-xl border transition-all duration-300 relative ${
                isActive
                  ? "bg-[#0E1622] border-sky-500/60 shadow-lg shadow-sky-500/10 scale-[1.02]"
                  : isPassed
                  ? "bg-[#0A101A] border-slate-800 text-slate-300"
                  : "bg-[#070B12] border-slate-800/60 text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg border ${
                  isActive ? "bg-slate-900 border-sky-500/40" : "bg-[#070B12] border-slate-800"
                }`}>
                  {st.icon}
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  isActive
                    ? "bg-sky-950 text-sky-300 border-sky-800"
                    : isPassed
                    ? "bg-emerald-950 text-emerald-400 border-emerald-800"
                    : "bg-slate-900 text-slate-500 border-slate-800"
                }`}>
                  {isActive ? "Processando" : isPassed ? "Concluído" : "Aguardando"}
                </span>
              </div>

              <h4 className={`text-xs font-bold font-mono ${isActive ? "text-white" : "text-slate-300"}`}>
                {st.label}
              </h4>
              <p className="text-[11px] font-mono text-slate-400 mt-1">
                {st.sub}
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer telemetry */}
      <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Garantia: Idempotência de Webhooks & Transações ACID</span>
        <span className="text-sky-400 font-semibold">Sub-18ms Latência</span>
      </div>
    </div>
  );
};
