"use client";

import React, { useState } from "react";
import { saasProducts, SaaSProduct } from "@/data/saas-products";
import { ArrowRight, CheckCircle2, Cpu, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SaaSDetailModal } from "@/components/sections/saas-detail-modal";

export const SaaSShowcase = () => {
  const [activeProductId, setActiveProductId] = useState<string>("torqueos");
  const [modalProduct, setModalProduct] = useState<SaaSProduct | null>(null);

  const activeProduct = saasProducts.find((p) => p.id === activeProductId) || saasProducts[0];

  return (
    <section id="produtos" className="py-20 sm:py-28 bg-[#0B0E14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 space-y-3 text-left">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            Portfólio de Software
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Plataformas digitais construídas para o mundo real.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Cada produto do nosso ecossistema é projetado com arquitetura multi-tenant, código 100% autoral e foco exclusivo em solucionar gargalos de operações específicas.
          </p>
        </div>

        {/* Asymmetric Product Shelf: Left List (4 cols) + Right Detail Stage (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Shelf Selector */}
          <div className="lg:col-span-4 divide-y divide-white/5 border-y border-white/5">
            {saasProducts.map((product) => {
              const isSelected = product.id === activeProductId;

              return (
                <button
                  key={product.id}
                  onClick={() => setActiveProductId(product.id)}
                  className={`w-full text-left py-4 px-3 transition-colors flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-white/[0.04] text-white"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.01]"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-bold font-mono ${isSelected ? "text-white" : "text-slate-300"}`}>
                        {product.name}
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {product.categoryLabel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1 font-sans">
                      {product.tagline}
                    </p>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? "text-blue-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Product Detail & Operational Anatomy */}
          <div className="lg:col-span-8 rounded-lg bg-[#111622] border border-white/10 p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/5">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight font-mono">
                    {activeProduct.name}
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    {activeProduct.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Categoria: {activeProduct.categoryLabel} • Arquitetura {activeProduct.badge}
                </p>
              </div>

              <button
                onClick={() => setModalProduct(activeProduct)}
                className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors cursor-pointer self-start sm:self-auto"
              >
                <span>Ver ficha técnica completa</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Tagline & Business Problem */}
            <div className="space-y-3">
              <h4 className="text-base font-semibold text-slate-200">
                {activeProduct.tagline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0B0E14] p-4 rounded border border-white/5">
                <span className="font-mono text-slate-400 font-semibold block text-[11px] uppercase mb-1">
                  Problema Operacional Resolvido:
                </span>
                {activeProduct.problemSolved}
              </p>
            </div>

            {/* Core Features */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                Recursos em Produção
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeProduct.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded bg-[#0E131E] border border-white/5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Stack Bar */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                <span className="text-slate-400 mr-1">Stack:</span>
                {activeProduct.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-[#0B0E14] text-slate-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href="/contato"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                <span>Falar sobre o {activeProduct.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail */}
      <SaaSDetailModal
        product={modalProduct}
        isOpen={!!modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </section>
  );
};
