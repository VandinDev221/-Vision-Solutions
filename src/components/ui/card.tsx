import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "indigo" | "cyan" | "emerald" | "violet" | "amber";
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, glowColor = "indigo", children, ...props }) => {
  const glowBorder = {
    indigo: "hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    emerald: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    violet: "hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    amber: "hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 transition-all duration-300 overflow-hidden group",
        glowBorder[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
