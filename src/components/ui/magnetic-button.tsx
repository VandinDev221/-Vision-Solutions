"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  strength = 15,
  variant = "primary",
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({
      x: (middleX / width) * strength,
      y: (middleY / height) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold shadow-lg shadow-sky-500/10 active:scale-[0.98]",
    secondary:
      "bg-[#0f172a] hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700",
    outline:
      "bg-transparent hover:bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200",
    ghost: "bg-transparent hover:bg-slate-900/60 text-slate-300 hover:text-white",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm transition-colors cursor-pointer select-none",
        variantStyles[variant],
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
};
