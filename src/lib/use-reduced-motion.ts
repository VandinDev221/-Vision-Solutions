"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the user's prefers-reduced-motion preference reactively.
 * The 3D system and any Framer Motion variants should read this
 * instead of animating unconditionally.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const listener = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return reduced;
}

/** Clamp device pixel ratio to keep WebGL cost predictable on 3x+ mobile screens. */
export function getClampedDpr(): number {
  if (typeof window === "undefined") return 1;
  return Math.min(window.devicePixelRatio || 1, 2);
}
