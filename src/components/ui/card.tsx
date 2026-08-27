import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 transition-all duration-200 ease-out hover:-translate-y-[2px] hover:border-slate-700 hover:shadow-lg hover:shadow-slate-950/40 overflow-hidden group",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
