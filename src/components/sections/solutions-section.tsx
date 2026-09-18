"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Layers } from "lucide-react";
import { saasProducts } from "@/data/saas-products";

export function SolutionsSection() {
  return (
    <section id="produtos" className="border-b border-line px-5 py-20 sm:px-6 xl:px-0">
      <div className="mx-auto max-w-editorial">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
              Nossas Soluções
            </span>
            <h2 className="mt-3 max-w-md text-display-2 font-semibold text-ink">
              Um ecossistema de SaaS verticais.
            </h2>
          </div>
          <Link
            href="/produtos"
            className="text-[13px] text-ink-dim underline decoration-line-strong underline-offset-4 hover:text-ink"
          >
            Ver todos os produtos
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {saasProducts.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-md border border-line-strong bg-surface p-5 transition-colors duration-300 ease-system hover:border-primary-soft/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded border border-line-strong bg-elevated text-primary-soft">
                  <Layers size={14} strokeWidth={1.75} />
                </span>
                <span
                  className={`font-technical text-micro ${
                    product.status === "Em Produção" ? "text-emerald" : "text-sky"
                  }`}
                >
                  {product.status}
                </span>
              </div>
              <h3 className="mt-4 text-[15px] font-medium text-ink">{product.name}</h3>
              <p className="mt-1 text-[13px] text-ink-dim">{product.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
