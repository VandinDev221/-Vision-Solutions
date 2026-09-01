"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface HolographicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowTheme?: "cyan" | "purple" | "emerald";
}

export const HolographicCard: React.FC<HolographicCardProps> = ({
  children,
  className = "",
  maxTilt = 8,
  glowTheme = "cyan",
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 240,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 240,
    damping: 22,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const glowThemes = {
    cyan: "rgba(0, 240, 255, 0.16)",
    purple: "rgba(121, 40, 202, 0.16)",
    emerald: "rgba(0, 223, 143, 0.16)",
  };

  const cornerBorders = {
    cyan: "border-cyan-500/60",
    purple: "border-purple-500/60",
    emerald: "border-emerald-500/60",
  };

  if (isTouchDevice) {
    return (
      <div
        className={cn(
          "relative rounded-2xl bg-[#080e1c]/80 backdrop-blur-xl border border-cyan-500/20 p-5 sm:p-6 shadow-xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-2xl bg-[#080e1c]/85 backdrop-blur-2xl border border-cyan-500/25 hover:border-cyan-400/50 transition-all duration-300 shadow-2xl group overflow-hidden",
        className
      )}
      {...(props as any)}
    >
      {/* Sci-Fi Hologram Corner Brackets */}
      <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${cornerBorders[glowTheme]} rounded-tl-sm pointer-events-none z-20`} />
      <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${cornerBorders[glowTheme]} rounded-tr-sm pointer-events-none z-20`} />
      <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${cornerBorders[glowTheme]} rounded-bl-sm pointer-events-none z-20`} />
      <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${cornerBorders[glowTheme]} rounded-br-sm pointer-events-none z-20`} />

      {/* Cybernetic Telemetry Bar */}
      <div className="absolute top-2 right-4 flex items-center gap-1 opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none z-20">
        <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
        <span className="text-[8px] font-mono text-cyan-300 tracking-widest">HUD_SYS//OK</span>
      </div>

      {/* Dynamic Cursor Spotlight Reflection */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at ${(mouseX.get() + 0.5) * 100}% ${(mouseY.get() + 0.5) * 100}%, ${glowThemes[glowTheme]}, transparent 75%)`,
          }}
        />
      )}

      {/* Moving Laser Sweep Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-40 transition-all duration-1000 pointer-events-none z-10" />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};
