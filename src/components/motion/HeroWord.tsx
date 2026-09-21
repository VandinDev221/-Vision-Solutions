"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroWordProps {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}

/**
 * Word-by-word reveal for hero headlines.
 * Each word fades in and translates up with stagger timing.
 */
export function HeroWord({
  text,
  className,
  stagger = 0.06,
  delay = 0,
}: HeroWordProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
}
