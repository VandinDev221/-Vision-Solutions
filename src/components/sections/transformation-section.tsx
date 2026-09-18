"use client";

import { motion } from "framer-motion";
import { transformationStages } from "@/data/transformation";

// Deterministic "random" scatter so the fragmented panel doesn't shift on re-render.
const SCATTER_POSITIONS = [
  [12, 18], [68, 10], [34, 46], [80, 52], [8, 70], [52, 78], [90, 24], [24, 88],
];

function FragmentedVisual() {
  return (
    <div className="relative h-24 w-full overflow-hidden rounded border border-line-strong bg-elevated">
      {SCATTER_POSITIONS.map(([x, y], index) => (
        <span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-ink-faint"
          style={{ left: `${x}%`, top: `${y}%` }}
        />
      ))}
    </div>
  );
}

function IntegrationVisual() {
  return (
    <div className="relative h-24 w-full overflow-hidden rounded border border-line-strong bg-elevated">
      <svg viewBox="0 0 100 40" className="h-full w-full" aria-hidden>
        {[10, 30, 50, 70, 90].map((x) => (
          <circle key={x} cx={x} cy={20} r={2.2} fill="#8B5CF6" opacity={0.8} />
        ))}
        {[10, 30, 50, 70].map((x) => (
          <line key={x} x1={x + 2.2} y1={20} x2={x + 17.8} y2={20} stroke="#8B5CF6" strokeWidth={0.6} opacity={0.4} />
        ))}
      </svg>
    </div>
  );
}

function ProductionVisual() {
  return (
    <div className="relative flex h-24 w-full flex-col justify-center gap-1.5 overflow-hidden rounded border border-primary-soft/30 bg-elevated px-4">
      <div className="h-2 w-3/4 rounded-sm bg-primary-soft/70" />
      <div className="h-2 w-1/2 rounded-sm bg-line-strong" />
      <div className="h-2 w-2/3 rounded-sm bg-line-strong" />
    </div>
  );
}

const VISUALS = [FragmentedVisual, IntegrationVisual, ProductionVisual];

export function TransformationSection() {
  return (
    <section className="border-b border-line px-5 py-20 sm:px-6 xl:px-0">
      <div className="mx-auto max-w-editorial">
        <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
          Complexidade → Software
        </span>
        <h2 className="mt-3 max-w-lg text-display-2 font-semibold text-ink">
          Como transformamos complexidade em software funcional.
        </h2>
        <p className="mt-4 max-w-lg text-body text-ink-dim">
          A maioria dos gargalos operacionais não é falta de esforço da
          equipe, mas a ausência de um sistema que reflita as regras reais do
          negócio.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {transformationStages.map((stage, index) => (
            <motion.div
              key={stage.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {index === 0 && <FragmentedVisual />}
                {index === 1 && <IntegrationVisual />}
                {index === 2 && <ProductionVisual />}
                <span className="mt-4 block font-technical text-micro text-ink-faint">
                  {stage.number}
                </span>
                <h3 className="mt-1 text-[15px] font-medium text-ink">{stage.title}</h3>
                <p className="mt-1.5 text-[13px] text-ink-dim">{stage.description}</p>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
