"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AdminStore, ManagedSaaSProduct } from "@/lib/admin-store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Wrench, Stethoscope, Scissors, Bot, Scale, TrendingDown, BarChart3, CreditCard } from "lucide-react";
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

export default function ProdutosPage() {
  const [products, setProducts] = useState<ManagedSaaSProduct[]>([]);
  const [activeProduct, setActiveProduct] = useState<ManagedSaaSProduct | null>(null);

  useEffect(() => {
    const loadProducts = () => {
      const all = AdminStore.getProducts();
      setProducts(all.filter((p) => p.isVisible));
    };

    loadProducts();
    window.addEventListener("vision_products_updated", loadProducts);
    return () => window.removeEventListener("vision_products_updated", loadProducts);
  }, []);

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      <Navbar />
      
      {/* Header */}
      <section className="pt-36 pb-16 bg-[#090d16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Produtos Próprios
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Nossos Produtos & Plataformas SaaS
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Plataformas digitais desenvolvidas e operadas pela Vision Solutions para resolver desafios operacionais específicos de diferentes mercados.
          </p>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-16 text-slate-400 font-mono text-sm">
              Nenhum produto SaaS ativo para exibição no momento.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="p-8 rounded-xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          {iconMap[p.iconName] || <Wrench className="w-5 h-5 text-sky-400" />}
                        </div>
                        <Badge variant="indigo" className="text-xs font-mono">
                          {p.categoryLabel}
                        </Badge>
                      </div>
                      <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded border ${
                        p.status === "Produção"
                          ? "bg-emerald-950/70 text-emerald-400 border-emerald-800/60"
                          : "bg-indigo-950/70 text-indigo-300 border-indigo-800/60"
                      }`}>
                        {p.status}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">{p.name}</h2>
                    <p className="text-sm font-semibold text-slate-200 mb-3">{p.tagline}</p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-6">{p.description}</p>

                    {/* Problem Solved */}
                    <div className="p-4 rounded-lg bg-[#090d16] border border-slate-800 mb-6">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Desafio Operacional que Resolve:
                      </span>
                      <p className="text-xs text-sky-300 font-medium">{p.problemSolved}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-mono text-slate-400 block mb-2">Recursos Principais:</span>
                      {p.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                      <span className="text-[10px] font-mono text-slate-500 mr-1">Tecnologias:</span>
                      {p.techStack.map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-mono">{p.badge}</span>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => setActiveProduct(p)}
                      className="font-semibold text-xs"
                    >
                      Ver Detalhes do {p.name}
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <SaaSDetailModal
        product={activeProduct}
        isOpen={!!activeProduct}
        onClose={() => setActiveProduct(null)}
      />

      <Footer />
    </main>
  );
}
