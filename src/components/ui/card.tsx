import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "relative rounded-lg bg-[#111726] border border-slate-800/80 transition-all duration-200 ease-out hover:border-slate-700/80 overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
