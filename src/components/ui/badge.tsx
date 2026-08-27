import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "emerald" | "indigo" | "cyan" | "violet" | "amber" | "outline";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ className, variant = "indigo", children, ...props }) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md transition-all";
  
  const variants = {
    emerald: "bg-emerald-950/60 text-emerald-300 border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    indigo: "bg-indigo-950/60 text-indigo-300 border-indigo-500/30 shadow-[0_0_12px_rgba(99,102,241,0.15)]",
    cyan: "bg-cyan-950/60 text-cyan-300 border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
    violet: "bg-violet-950/60 text-violet-300 border-violet-500/30 shadow-[0_0_12px_rgba(139,92,246,0.15)]",
    amber: "bg-amber-950/60 text-amber-300 border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    outline: "bg-slate-900/80 text-slate-300 border-slate-700"
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
};
