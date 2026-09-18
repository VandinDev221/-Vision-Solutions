"use client";

import { motion } from "framer-motion";
import { keyFeatures } from "@/data/features";

export function KeyFeaturesSection() {
  return (
    <section className="border-b border-line px-5 py-20 sm:px-6 xl:px-0">
      <div className="mx-auto max-w-editorial">
        <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
          Engenharia que sustenta a operação
        </span>
        <h2 className="mt-3 max-w-lg text-display-2 font-semibold text-ink">
          Não é sobre features. É sobre como o sistema é construído.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line-strong bg-line-strong sm:grid-cols-4">
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="flex min-h-[96px] items-center bg-surface px-5 py-4 text-[13.5px] text-ink-dim transition-colors duration-200 hover:bg-elevated hover:text-ink"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
