"use client";

import React, { useState } from "react";
import { ProductOrbit } from "@/components/motion/ProductOrbit";
import { saasProducts } from "@/data/saas-products";
import { SaaSDetailModal } from "@/components/sections/saas-detail-modal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const SaaSShowcase = () => {
  const [modalProduct, setModalProduct] = useState<any | null>(null);

  return (
    <section id="produtos" className="relative py-20 sm:py-28 bg-[#070B12] border-b border-slate-800/80 tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            <span>// ECOSSISTEMA DE PRODUTOS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Plataformas digitais construídas para o mundo real.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Cada produto do ecossistema Vision Solutions é projetado com arquitetura multi-tenant, código 100% autoral e foco exclusivo em resolver o fluxo de trabalho do seu mercado.
          </p>
        </div>

        {/* WOW #4: Interactive Living Product Ecosystem Matrix */}
        <ProductOrbit />
      </div>

      {/* Product Detail Modal */}
      <SaaSDetailModal
        product={modalProduct}
        isOpen={!!modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </section>
  );
};
