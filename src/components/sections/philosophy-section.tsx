"use client";

import { motion } from "framer-motion";
import { principles } from "@/data/principles";

export function PhilosophySection() {
  return (
    <section className="border-b border-line px-5 py-20 sm:px-6 xl:px-0">
      <div className="mx-auto max-w-editorial">
        <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
          Nossa forma de construir
        </span>

        <div className="mt-8 divide-y divide-line">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="grid grid-cols-1 gap-1.5 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6"
            >
              <h3 className="text-[15px] font-medium text-ink sm:col-span-4">
                {principle.title}
              </h3>
              <p className="text-[13.5px] text-ink-dim sm:col-span-8">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
