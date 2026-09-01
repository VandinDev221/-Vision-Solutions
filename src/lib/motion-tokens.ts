import { Transition, Variants } from "framer-motion";

/**
 * Vision Solutions — Centralized Motion Design System
 * Engineered for 60fps GPU acceleration using transform, opacity, and clip-path.
 */

export const transitions = {
  instant: { duration: 0.12, ease: [0.16, 1, 0.3, 1] } as Transition,
  fast: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } as Transition,
  normal: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } as Transition,
  slow: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } as Transition,
  springGentle: { type: "spring", stiffness: 220, damping: 24 } as Transition,
  springSnappy: { type: "spring", stiffness: 380, damping: 28 } as Transition,
  springMagnetic: { type: "spring", stiffness: 320, damping: 18 } as Transition,
};

export const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
};

export const itemFadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.springGentle,
  },
};
