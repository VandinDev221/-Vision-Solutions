"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Server, Database, Workflow, ShieldCheck } from "lucide-react";

interface FloatingModuleProps {
  type?: "api" | "db" | "queue" | "auth";
  className?: string;
  delay?: number;
}

export const FloatingModule: React.FC<FloatingModuleProps> = ({
  type = "api",
  className = "",
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const configs = {
    api: {
      title: "API GATEWAY",
      status: "Connected • Sub-18ms",
      icon: <Server className="w-3.5 h-3.5 text-sky-400" />,
      dot: "bg-sky-400",
    },
    db: {
      title: "POSTGRESQL 16",
      status: "Multi-Tenant Schema",
      icon: <Database className="w-3.5 h-3.5 text-cyan-400" />,
      dot: "bg-cyan-400",
    },
    queue: {
      title: "BULLMQ QUEUE",
      status: "Worker Jobs Active",
      icon: <Workflow className="w-3.5 h-3.5 text-purple-400" />,
      dot: "bg-purple-400",
    },
    auth: {
      title: "JWT & LGPD",
      status: "Strict Tenant Guard",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
      dot: "bg-emerald-400",
    },
  };

  const current = configs[type];

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [-4, 4, -4],
              rotate: [-0.5, 0.5, -0.5],
            }
      }
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0E1622] border border-slate-800 shadow-lg select-none ${className}`}
    >
      <div className="p-1 rounded bg-[#070B12] border border-slate-800">
        {current.icon}
      </div>
      <div className="text-left font-mono">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${current.dot} animate-pulse`} />
          <span className="text-[10px] font-bold text-white leading-none">
            {current.title}
          </span>
        </div>
        <span className="text-[9px] text-slate-400 block mt-0.5">
          {current.status}
        </span>
      </div>
    </motion.div>
  );
};
