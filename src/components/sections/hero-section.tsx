"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// The renderer touches window/canvas — must never run during SSR.
const GlobalScene = dynamic(
  () => import("@/components/3d/GlobalScene").then((mod) => mod.GlobalScene),
  { ssr: false }
);

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-base">
      <div className="mx-auto grid max-w-editorial grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="relative z-10 col-span-1 flex flex-col justify-center px-6 pb-16 pt-28 sm:px-10 lg:col-span-6 lg:px-14 lg:pb-32 lg:pt-40 xl:pl-20"
        >
          <motion.span
            variants={itemVariants}
            className="font-technical text-micro uppercase tracking-wide text-ink-faint"
          >
            Software House &amp; SaaS Studio
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-6 max-w-xl text-display-1 font-semibold text-ink"
          >
            Software para operações que não cabem em software genérico.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-md text-body-lg text-ink-dim"
          >
            Construímos SaaS verticais e sistemas sob medida para empresas que
            precisam transformar processos complexos em operação digital
            estruturada, rápida e estável.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#produtos"
              className="group inline-flex items-center gap-2 rounded bg-primary px-5 py-3 text-body font-medium text-white transition-colors duration-300 ease-system hover:bg-primary-dim"
            >
              Conhecer nossos produtos
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 ease-system group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded border border-line-strong px-5 py-3 text-body font-medium text-ink transition-colors duration-300 ease-system hover:border-ink-dim hover:bg-elevated"
            >
              Construir um sistema
            </a>
          </motion.div>
        </motion.div>

        <div className="relative col-span-1 h-[70vh] min-h-[420px] lg:col-span-6 lg:h-auto">
          <GlobalScene className="absolute inset-0 h-full w-full" />

          {/* Content stays reachable even where WebGL is unavailable or disabled. */}
          <noscript>
            <div className="flex h-full items-center justify-center p-10 text-center text-body text-ink-dim">
              A Vision Solutions constrói sistemas de software modulares:
              frontend, API, regras de negócio, banco de dados, filas e
              infraestrutura funcionando como uma única operação.
            </div>
          </noscript>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-center justify-between font-technical text-micro text-ink-faint sm:bottom-10 sm:left-10 sm:right-10"
          >
            <span>VISION SYSTEM</span>
            <span>FRONTEND · API · RULES · DATA · QUEUES · INFRA</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
