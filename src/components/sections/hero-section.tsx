"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TorqueOsPanel } from "./torqueos-panel";

// The renderer touches window/canvas — must never run during SSR.
const GlobalScene = dynamic(
  () => import("@/components/3d/GlobalScene").then((mod) => mod.GlobalScene),
  { ssr: false }
);

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-base">
      <div className="mx-auto grid max-w-editorial grid-cols-1 items-center gap-14 px-5 pb-16 pt-28 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-36 xl:px-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="relative z-10 col-span-1 lg:col-span-6"
        >
          <motion.span
            variants={itemVariants}
            className="font-technical text-micro uppercase tracking-wide text-ink-faint"
          >
            Software House &amp; SaaS Studio
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-5 max-w-lg text-display-1 font-semibold text-ink"
          >
            Software para operações que não cabem em software genérico.
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-5 max-w-md text-body-lg text-ink-dim">
            Construímos SaaS verticais e sistemas sob medida para empresas que
            precisam transformar processos complexos em operação digital
            estruturada, rápida e estável.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/produtos"
              className="group inline-flex items-center gap-2 rounded bg-primary px-4 py-2.5 text-[14px] font-medium text-white transition-colors duration-300 ease-system hover:bg-primary-dim"
            >
              Conhecer nossos produtos
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 ease-system group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/contato"
              className="inline-flex items-center gap-2 rounded border border-line-strong px-4 py-2.5 text-[14px] font-medium text-ink transition-colors duration-300 ease-system hover:border-primary-soft hover:bg-elevated"
            >
              Construir um sistema
            </a>
          </motion.div>
        </motion.div>

        <div className="relative col-span-1 lg:col-span-6">
          {/* Subtle Vision System backdrop — present, not dominant (design > 3D). */}
          <div
            className="pointer-events-none absolute -inset-10 opacity-30 blur-[1px] [mask-image:radial-gradient(closest-side,black,transparent)]"
            aria-hidden
          >
            <GlobalScene className="h-full w-full" />
          </div>

          <div className="relative">
            <TorqueOsPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
