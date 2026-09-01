"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AdminStore, ManagedSaaSProduct } from "@/lib/admin-store";
import {
  Wrench,
  Stethoscope,
  Scissors,
  Bot,
  Scale,
  TrendingDown,
  BarChart3,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { SaaSDetailModal } from "@/components/sections/saas-detail-modal";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-5 h-5 text-sky-400" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-cyan-400" />,
  Scissors: <Scissors className="w-5 h-5 text-amber-400" />,
  Bot: <Bot className="w-5 h-5 text-emerald-400" />,
  Scale: <Scale className="w-5 h-5 text-purple-400" />,
  TrendingDown: <TrendingDown className="w-5 h-5 text-sky-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-indigo-400" />,
  CreditCard: <CreditCard className="w-5 h-5 text-emerald-400" />
};

export const SaaSShowcase = () => {
  const [products, setProducts] = useState<ManagedSaaSProduct[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>("torqueos");
  const [modalProduct, setModalProduct] = useState<ManagedSaaSProduct | null>(null);

  useEffect(() => {
    const loadProducts = () => {
      const all = AdminStore.getProducts();
      const visible = all.filter((p) => p.isVisible);
      setProducts(visible);
      if (visible.length > 0 && !visible.some((p) => p.id === selectedProductId)) {
        setSelectedProductId(visible[0].id);
      }
    };

    loadProducts();
    window.addEventListener("vision_products_updated", loadProducts);
    return () => window.removeEventListener("vision_products_updated", loadProducts);
  }, [selectedProductId]);

  if (products.length === 0) return null;

  const currentProduct = products.find((p) => p.id === selectedProductId) || products[0];

  return (
    <section id="produtos" className="relative py-28 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 space-y-3 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
            <span>// ECOSSISTEMA DE PRODUTOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Plataformas digitais construídas para o mundo real.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Cada produto do ecossistema Vision Solutions é projetado com arquitetura multi-tenant, código 100% autoral e foco exclusivo em resolver o fluxo de trabalho do seu mercado.
          </p>
        </div>

        {/* Interactive Master-Detail Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Product Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
              Selecione o Sistema ({products.length} ativos)
            </span>

            <div className="space-y-2">
              {products.map((p) => {
                const isSelected = p.id === selectedProductId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProductId(p.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer ${
                      isSelected
                        ? "bg-[#0e1422] border-sky-500/50 shadow-lg shadow-sky-500/5"
                        : "bg-[#0e1422]/60 hover:bg-[#0e1422] border-slate-800/80 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-lg border ${
                        isSelected ? "bg-slate-900 border-sky-500/40" : "bg-slate-900/80 border-slate-800"
                      }`}>
                        {iconMap[p.iconName] || <Wrench className="w-5 h-5 text-sky-400" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold ${isSelected ? "text-white" : "text-slate-300"}`}>
                            {p.name}
                          </span>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            p.status === "Produção"
                              ? "bg-emerald-950/60 text-emerald-400 border-emerald-800/40"
                              : "bg-indigo-950/60 text-indigo-300 border-indigo-800/40"
                          }`}>
                            {p.status}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 line-clamp-1 mt-0.5">{p.tagline}</span>
                      </div>
                    </div>

                    <div className="shrink-0 text-slate-400">
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? "translate-x-1 text-sky-400" : ""}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep Product Anatomy Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {currentProduct && (
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-8 sm:p-10 rounded-2xl bg-[#0e1422] border border-slate-800/90 shadow-2xl space-y-8"
                >
                  {/* Product Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                        {iconMap[currentProduct.iconName] || <Wrench className="w-6 h-6 text-sky-400" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{currentProduct.name}</h3>
                          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                            {currentProduct.badge}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 font-mono mt-1 block">
                          Categoria: {currentProduct.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setModalProduct(currentProduct)}
                        className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        Abrir Visão Completa
                      </button>
                    </div>
                  </div>

                  {/* Problem & Solution Block */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Posicionamento de Mercado
                      </span>
                      <p className="text-base font-semibold text-slate-200">{currentProduct.tagline}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#090d16] border border-slate-800 space-y-1.5">
                      <span className="text-[11px] font-mono uppercase text-sky-400 font-semibold block">
                        Problema de Negócio que Resolve:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                        {currentProduct.problemSolved}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {currentProduct.description}
                    </p>
                  </div>

                  {/* Concrete Capabilities Checklist */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Recursos Operacionais em Produção
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentProduct.features.map((feat, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-[#090d16] border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack & Direct CTA Footer */}
                  <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono text-slate-400 mr-1">Stack:</span>
                      {currentProduct.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#090d16] text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contato"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-sky-500/10 active:scale-[0.98]"
                    >
                      <span>Solicitar demo do {currentProduct.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Full Product Detail Modal */}
      <SaaSDetailModal
        product={modalProduct}
        isOpen={!!modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </section>
  );
};
