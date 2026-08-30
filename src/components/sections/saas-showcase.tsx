"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AdminStore, ManagedSaaSProduct } from "@/lib/admin-store";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  ChevronRight
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
  const [activeProduct, setActiveProduct] = useState<ManagedSaaSProduct | null>(null);
  const [products, setProducts] = useState<ManagedSaaSProduct[]>([]);

  useEffect(() => {
    const loadProducts = () => {
      const all = AdminStore.getProducts();
      setProducts(all.filter((p) => p.isVisible));
    };

    loadProducts();
    window.addEventListener("vision_products_updated", loadProducts);
    return () => window.removeEventListener("vision_products_updated", loadProducts);
  }, []);

  if (products.length === 0) return null;

  const flagshipProducts = products.filter((p) => p.isFeatured);
  const coreProducts = products.filter((p) => !p.isFeatured);

  return (
    <section id="produtos" className="relative py-24 bg-[#090d16] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Produtos Próprios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Produtos que estamos construindo.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Plataformas digitais proprietárias desenvolvidas e operadas pela Vision Solutions para resolver problemas reais de operações específicas.
          </p>
        </div>

        {/* Flagship Products (Featured High-Hierarchy Layout) */}
        {flagshipProducts.length > 0 && (
          <div className="space-y-6 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {flagshipProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-8 rounded-xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          {iconMap[product.iconName] || <Wrench className="w-5 h-5 text-sky-400" />}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                          <span className="text-xs text-slate-400 font-mono">{product.categoryLabel}</span>
                        </div>
                      </div>
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded border ${
                        product.status === "Produção"
                          ? "bg-emerald-950/70 text-emerald-400 border-emerald-800/60"
                          : "bg-indigo-950/70 text-indigo-300 border-indigo-800/60"
                      }`}>
                        {product.status}
                      </span>
                    </div>

                    <p className="text-base font-semibold text-slate-200 mb-2">{product.tagline}</p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">{product.description}</p>

                    <div className="p-3.5 rounded-lg bg-[#090d16] border border-slate-800 mb-6">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Desafio operacional resolvido:
                      </span>
                      <p className="text-xs text-sky-300 font-medium">{product.problemSolved}</p>
                    </div>

                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">{product.badge}</span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setActiveProduct(product)}
                      className="text-xs font-semibold"
                    >
                      Ver detalhes do produto
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Core SaaS Suite */}
        {coreProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                Outros Sistemas do Ecossistema
              </span>
              <div className="h-px bg-slate-800 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-6 rounded-xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                        {iconMap[product.iconName] || <Wrench className="w-5 h-5 text-sky-400" />}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {product.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                    <span className="text-xs font-medium text-sky-400 block mb-2">{product.tagline}</span>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">{product.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">{product.badge}</span>
                    <button
                      onClick={() => setActiveProduct(product)}
                      className="text-xs text-sky-400 hover:underline flex items-center gap-1 font-medium cursor-pointer"
                    >
                      Ver detalhes <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detail Modal */}
        <SaaSDetailModal
          product={activeProduct}
          isOpen={!!activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      </div>
    </section>
  );
};
