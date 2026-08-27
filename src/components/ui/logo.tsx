import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className,
  size = "md",
  showTagline = true
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-11 h-11"
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl"
  };

  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      {/* Icon Graphic Symbol (Stylized V + S Prism Node) */}
      <div
        className={cn(
          "relative rounded-xl bg-slate-950 p-[1px] border border-slate-800 shadow-md group-hover:border-cyan-500/50 group-hover:scale-105 transition-all duration-300 overflow-hidden shrink-0",
          iconSizes[size]
        )}
      >
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <defs>
            <linearGradient id="logo-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#06b6d4" />
            </linearGradient>
            <linearGradient id="logo-violet" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#a855f7" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
            <linearGradient id="logo-indigo" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#6366f1" />
              <stop offset="100%" stop-color="#818cf8" />
            </linearGradient>
          </defs>

          <rect width="512" height="512" fill="#020617" />
          <path d="M 148 160 L 256 360 L 210 360 L 110 178 Z" fill="url(#logo-cyan)" />
          <path d="M 364 160 L 256 360 L 302 360 L 402 178 Z" fill="url(#logo-violet)" />
          <path d="M 256 180 L 320 280 L 256 340 L 192 280 Z" fill="url(#logo-indigo)" opacity="0.9" />
          <circle cx="256" cy="275" r="24" fill="#ffffff" />
          <circle cx="256" cy="275" r="14" fill="#06b6d4" />
        </svg>
      </div>

      {/* Typography Brand Name */}
      <div className="flex flex-col">
        <span className={cn("font-extrabold tracking-tight text-white flex items-center gap-1 leading-none", textSizes[size])}>
          Vision <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">Solutions</span>
        </span>
        {showTagline && (
          <span className="text-[9px] uppercase tracking-widest font-mono text-slate-400 mt-1">
            Software House & Studio
          </span>
        )}
      </div>
    </Link>
  );
};
