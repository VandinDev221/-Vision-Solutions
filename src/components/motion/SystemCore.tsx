"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Cpu } from "lucide-react";

interface SystemCoreProps {
  size?: number;
  label?: string;
  sublabel?: string;
}

export const SystemCore: React.FC<SystemCoreProps> = ({
  size = 140,
  label = "VISION CORE",
  sublabel = "SYSTEM ENGINE",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative flex flex-col items-center justify-center select-none"
      style={{ width: size, height: size }}
    >
      {/* Outer Rotating Dotted Ring */}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-sky-500/25 pointer-events-none"
      />

      {/* Mid Orbit Ring */}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-2 rounded-full border border-slate-800 pointer-events-none"
      >
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-sm shadow-sky-400/80" />
      </motion.div>

      {/* Core Center Pulse Housing */}
      <motion.div
        animate={shouldReduceMotion ? {} : { scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-24 h-24 rounded-2xl bg-[#0E1622] border border-sky-500/35 shadow-xl shadow-sky-950/60 flex flex-col items-center justify-center p-2 text-center"
      >
        <div className="p-1.5 rounded-lg bg-[#070B12] border border-slate-800 text-sky-400 mb-1">
          <Cpu className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-mono font-bold text-white tracking-wider leading-none">
          {label}
        </span>
        <span className="text-[8px] font-mono text-slate-400 tracking-tight mt-0.5">
          {sublabel}
        </span>
      </motion.div>
    </div>
  );
};
