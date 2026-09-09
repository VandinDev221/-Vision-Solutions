"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = "md", className = "" }) => {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-90 ${className}`}
      aria-label="Vision Solutions Home"
    >
      {/* Crisp Geometric Monogram Anchor */}
      <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm">
        VS
      </div>

      {/* Authoritative Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-tight text-white uppercase">
          Vision
        </span>
        <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase mt-0.5">
          Solutions
        </span>
      </div>
    </Link>
  );
};
