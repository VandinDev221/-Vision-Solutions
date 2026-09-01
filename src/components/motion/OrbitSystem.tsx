"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SystemCore } from "./SystemCore";
import {
  Layers,
  Server,
  Database,
  Workflow,
  Wrench,
  Cloud,
  Network,
  Lock
} from "lucide-react";

export const OrbitSystem = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);

  // Satellite Nodes in Orbit
  const innerSatellites = [
    { label: "SaaS", sub: "Multi-Tenant", icon: <Layers className="w-3.5 h-3.5 text-sky-400" />, angle: 0 },
    { label: "API", sub: "Fastify / Nest", icon: <Server className="w-3.5 h-3.5 text-cyan-400" />, angle: 120 },
    { label: "DATABASE", sub: "PostgreSQL 16", icon: <Database className="w-3.5 h-3.5 text-emerald-400" />, angle: 240 },
  ];

  const outerSatellites = [
    { label: "AUTOMAÇÃO", sub: "Filas BullMQ", icon: <Workflow className="w-3.5 h-3.5 text-purple-400" />, angle: 45 },
    { label: "ERP", sub: "TorqueOS Core", icon: <Wrench className="w-3.5 h-3.5 text-sky-400" />, angle: 135 },
    { label: "CLOUD", sub: "Docker Cluster", icon: <Cloud className="w-3.5 h-3.5 text-indigo-400" />, angle: 225 },
    { label: "INTEGRAÇÕES", sub: "REST & Webhook", icon: <Network className="w-3.5 h-3.5 text-emerald-400" />, angle: 315 },
  ];

  // Periodic heartbeat cycle to highlight connecting nodes
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveModuleIndex((prev) => (prev + 1) % (innerSatellites.length + outerSatellites.length));
    }, 4500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, innerSatellites.length, outerSatellites.length]);

  return (
    <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center select-none mx-auto">
      {/* Background Orbital Guide Rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <circle
          cx="50%"
          cy="50%"
          r="28%"
          fill="none"
          stroke="rgba(56, 189, 248, 0.25)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <circle
          cx="50%"
          cy="50%"
          r="42%"
          fill="none"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="1"
        />
      </svg>

      {/* Center Vision Core Engine */}
      <div className="relative z-20">
        <SystemCore label="VISION CORE" sublabel="MULTI-SAAS ENGINE" />
      </div>

      {/* Inner Track Orbit (Clockwise) */}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
        {innerSatellites.map((sat, idx) => {
          const rad = (sat.angle * Math.PI) / 180;
          const dist = 32; // percentage of container radius
          const x = Math.cos(rad) * dist * 3.8;
          const y = Math.sin(rad) * dist * 3.8;

          return (
            <motion.div
              key={sat.label}
              style={{ x, y }}
              className="absolute pointer-events-auto"
            >
              {/* Counter-rotate so text remains upright */}
              <motion.div
                animate={shouldReduceMotion ? {} : { rotate: -360 }}
                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                className="px-3 py-1.5 rounded-xl bg-[#0E1622] border border-slate-800/90 shadow-lg hover:border-sky-500/50 transition-colors flex items-center gap-2"
              >
                <div className="p-1 rounded bg-[#070B12] border border-slate-800">
                  {sat.icon}
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-mono font-bold text-white leading-none">
                    {sat.label}
                  </span>
                  <span className="block text-[8px] font-mono text-slate-400 mt-0.5">
                    {sat.sub}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Outer Track Orbit (Counter-Clockwise) */}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
        {outerSatellites.map((sat, idx) => {
          const rad = (sat.angle * Math.PI) / 180;
          const dist = 43; // percentage of container radius
          const x = Math.cos(rad) * dist * 4.4;
          const y = Math.sin(rad) * dist * 4.4;

          return (
            <motion.div
              key={sat.label}
              style={{ x, y }}
              className="absolute pointer-events-auto"
            >
              {/* Counter-rotate so text remains upright */}
              <motion.div
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
                className="px-2.5 py-1.5 rounded-xl bg-[#0A101A] border border-slate-800 shadow-lg hover:border-sky-500/50 transition-colors flex items-center gap-1.5"
              >
                <div className="p-1 rounded bg-[#070B12] border border-slate-800">
                  {sat.icon}
                </div>
                <div className="text-left">
                  <span className="block text-[9px] font-mono font-bold text-white leading-none">
                    {sat.label}
                  </span>
                  <span className="block text-[8px] font-mono text-slate-400 mt-0.5">
                    {sat.sub}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
