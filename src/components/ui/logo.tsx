import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({
  className,
  size = "md"
}) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-10 h-10"
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl"
  };

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      {/* Precision Icon Symbol */}
      <div
        className={cn(
          "relative rounded-md bg-slate-900 border border-slate-700/60 p-[1px] shadow-sm group-hover:border-sky-500/50 transition-colors duration-200 shrink-0 overflow-hidden",
          iconSizes[size]
        )}
      >
        <svg viewBox="0 0 512 512" className="w-full h-full">
          <defs>
            <linearGradient id="logo-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#0284c7" />
            </linearGradient>
            <linearGradient id="logo-indigo" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#6366f1" />
              <stop offset="100%" stop-color="#4f46e5" />
            </linearGradient>
          </defs>

          <rect width="512" height="512" fill="#090d16" />
          <path d="M 148 160 L 256 360 L 210 360 L 110 178 Z" fill="url(#logo-cyan)" />
          <path d="M 364 160 L 256 360 L 302 360 L 402 178 Z" fill="url(#logo-indigo)" />
          <path d="M 256 180 L 320 280 L 256 340 L 192 280 Z" fill="#38bdf8" opacity="0.8" />
          <circle cx="256" cy="275" r="20" fill="#ffffff" />
        </svg>
      </div>

      {/* Typography Brand Name */}
      <div className="flex flex-col">
        <span className={cn("font-bold tracking-tight text-white flex items-center gap-1 leading-none", textSizes[size])}>
          Vision <span className="text-sky-400 font-semibold">Solutions</span>
        </span>
      </div>
    </Link>
  );
};
