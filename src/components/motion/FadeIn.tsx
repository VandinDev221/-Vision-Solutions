"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

const getVariants = (
  direction: FadeInProps["direction"],
  distance: number
): Variants => {
  const axis =
    direction === "left" || direction === "right" ? "x" : "y";
  const sign =
    direction === "down" || direction === "right" ? -1 : 1;

  return {
    hidden: {
      opacity: 0,
      ...(direction !== "none" && { [axis]: sign * distance }),
    },
    visible: {
      opacity: 1,
      ...(direction !== "none" && { [axis]: 0 }),
    },
  };
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 24,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={getVariants(direction, distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
