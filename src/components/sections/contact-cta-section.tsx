"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ContactCtaSection() {
  return (
    <section id="contato" className="px-5 py-24 sm:px-6 xl:px-0">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-editorial flex-col items-start justify-between gap-8 rounded-md border border-line-strong bg-surface px-8 py-14 sm:flex-row sm:items-center"
      >
        <h2 className="max-w-md text-display-2 font-semibold text-ink">
          Vamos construir o sistema que sua operação precisa.
        </h2>
        <a
          href="/contato"
          className="group inline-flex shrink-0 items-center gap-2 rounded bg-primary px-5 py-3 text-[14px] font-medium text-white transition-colors duration-300 ease-system hover:bg-primary-dim"
        >
          Construir um sistema
          <ArrowUpRight
            size={15}
            strokeWidth={2}
            className="transition-transform duration-300 ease-system group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </motion.div>
    </section>
  );
}
