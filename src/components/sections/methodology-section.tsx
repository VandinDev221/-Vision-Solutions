"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/services";

export function MethodologySection() {
  return (
    <section className="border-b border-line px-5 py-20 sm:px-6 xl:px-0">
      <div className="mx-auto max-w-editorial">
        <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
          Como trabalhamos
        </span>
        <h2 className="mt-3 max-w-lg text-display-2 font-semibold text-ink">
          Um processo previsível, do requisito ao suporte.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-t border-line-strong pt-3"
            >
              <span className="font-technical text-micro text-ink-faint">{step.number}</span>
              <p className="mt-1.5 text-[13px] font-medium leading-snug text-ink">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
