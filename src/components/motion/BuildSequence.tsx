"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Server,
  Database,
  Workflow,
  Layout,
  CheckCircle2,
  Cpu,
  Zap,
  ArrowDown
} from "lucide-react";

export const BuildSequence = () => {
  const shouldReduceMotion = useReducedMotion();
  const [buildStep, setBuildStep] = useState(0);

  const modules = [
    { id: "auth", name: "AUTH & JWT", tag: "Security", icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
    { id: "api", name: "FASTIFY API", tag: "Contracts", icon: <Server className="w-4 h-4 text-sky-400" /> },
    { id: "db", name: "POSTGRESQL", tag: "Relational DB", icon: <Database className="w-4 h-4 text-cyan-400" /> },
    { id: "queue", name: "BULLMQ QUEUES", tag: "Async Jobs", icon: <Workflow className="w-4 h-4 text-purple-400" /> },
    { id: "ui", name: "NEXT.JS 15 UI", tag: "Frontend", icon: <Layout className="w-4 h-4 text-amber-400" /> },
  ];

  // Autonomous organic build loop:
  // Step 0: Dispersed
  // Step 1: Connecting
  // Step 2: Assembling
  // Step 3: Complete Unified Software
  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setBuildStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <div className="relative p-6 sm:p-8 rounded-2xl bg-[#0A101A] border border-slate-800 shadow-2xl overflow-hidden select-none">
      {/* Circuit Grid Background */}
      <div className="absolute inset-0 tech-grid-bg opacity-40 pointer-events-none" />

      {/* Header telemetry */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            BUILD_PIPELINE // AUTOMATIC ASSEMBLY
          </span>
        </div>
        <span className="text-[11px] font-mono text-sky-400 font-semibold">
          CICLO {buildStep + 1}/4
        </span>
      </div>

      {/* Dynamic Assembly Canvas */}
      <div className="py-8 min-h-[260px] flex flex-col items-center justify-center relative z-10">
        {buildStep < 3 ? (
          <div className="space-y-4 w-full">
            <div className="text-center mb-4">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                {buildStep === 0 && "Fase 01: Módulos Independentes em Órbita"}
                {buildStep === 1 && "Fase 02: Estabelecendo Contratos de Tipagem & Rotas"}
                {buildStep === 2 && "Fase 03: Encaixe Estrutural dos Serviços"}
              </span>
            </div>

            {/* Modular Blocks Converging */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {modules.slice(0, 3).map((mod, idx) => (
                <motion.div
                  key={mod.id}
                  animate={{
                    y: buildStep === 2 ? 0 : idx % 2 === 0 ? -6 : 6,
                    scale: buildStep === 2 ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="p-3.5 rounded-xl bg-[#0E1622] border border-slate-800/90 flex items-center justify-between shadow-md"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#070B12] border border-slate-800">
                      {mod.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-bold font-mono text-white leading-none">
                        {mod.name}
                      </span>
                      <span className="block text-[10px] font-mono text-slate-400 mt-1">
                        {mod.tag}
                      </span>
                    </div>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
              {modules.slice(3).map((mod, idx) => (
                <motion.div
                  key={mod.id}
                  animate={{
                    y: buildStep === 2 ? 0 : idx % 2 === 0 ? 6 : -6,
                    scale: buildStep === 2 ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="p-3.5 rounded-xl bg-[#0E1622] border border-slate-800/90 flex items-center justify-between shadow-md"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#070B12] border border-slate-800">
                      {mod.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-bold font-mono text-white leading-none">
                        {mod.name}
                      </span>
                      <span className="block text-[10px] font-mono text-slate-400 mt-1">
                        {mod.tag}
                      </span>
                    </div>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* Step 3: Unified Operational Application Locked */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-lg p-5 rounded-2xl bg-[#0E1622] border border-sky-500/40 shadow-2xl shadow-sky-950/60 space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold font-mono text-white">
                  SISTEMA TOTALMENTE INTEGRADO
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                100% PRODUÇÃO
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-center font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-[#070B12] border border-slate-800">
                <span className="text-[9px] text-slate-400 block uppercase">Latência</span>
                <span className="text-sm font-bold text-sky-400 mt-0.5 block">&lt; 18ms</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#070B12] border border-slate-800">
                <span className="text-[9px] text-slate-400 block uppercase">Isolamento</span>
                <span className="text-sm font-bold text-emerald-400 mt-0.5 block">Multi-Tenant</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#070B12] border border-slate-800">
                <span className="text-[9px] text-slate-400 block uppercase">Código</span>
                <span className="text-sm font-bold text-white mt-0.5 block">100% Autoral</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer status timeline */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
        <span>Engine: TypeScript Strict • Clean Architecture</span>
        <span className="text-emerald-400">Pronto para escala</span>
      </div>
    </div>
  );
};
