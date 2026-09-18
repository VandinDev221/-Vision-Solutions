"use client";

import { motion } from "framer-motion";
import { techLayers } from "@/data/tech-stack";

export function TechStackSection() {
  return (
    <section className="border-b border-line px-5 py-20 sm:px-6 xl:px-0">
      <div className="mx-auto max-w-editorial">
        <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
          Stack técnica
        </span>
        <h2 className="mt-3 max-w-lg text-display-2 font-semibold text-ink">
          Especificação técnica dos sistemas que construímos.
        </h2>

        <div className="mt-10 overflow-hidden rounded-md border border-line-strong">
          {techLayers.map((layer, index) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className={`flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                index % 2 === 0 ? "bg-surface" : "bg-elevated"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-technical text-micro text-ink-faint">{layer.label}</span>
                <span className="text-[14px] text-ink">{layer.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-line-strong px-2 py-0.5 font-technical text-micro text-ink-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
