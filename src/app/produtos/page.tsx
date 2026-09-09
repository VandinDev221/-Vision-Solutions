"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { saasProducts, SaaSProduct } from "@/data/saas-products";
import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SaaSDetailModal } from "@/components/sections/saas-detail-modal";

export default function ProdutosPage() {
  const [selectedProduct, setSelectedProduct] = useState<SaaSProduct | null>(null);

  return (
    <main className="min-h-screen bg-[#0B0E14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-36 pb-16 bg-[#0B0E14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-left">
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-2">
            Portfólio de Produtos
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Plataformas SaaS e Soluções Digitais
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Ecossistema de plataformas proprietárias desenvolvidas com arquitetura multi-tenant, código 100% autoral e foco exclusivo em resolver o fluxo de trabalho do seu mercado.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0B0E14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saasProducts.map((product) => (
              <div
                key={product.id}
                className="p-6 rounded-lg bg-[#111622] border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      {product.status}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {product.categoryLabel}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white font-mono">{product.name}</h2>
                    <p className="text-xs text-slate-400 mt-1 font-sans">{product.tagline}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed bg-[#0B0E14] p-3.5 rounded border border-white/5">
                    {product.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      Recursos Principais:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ficha técnica</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                  >
                    <span>Solicitar Demonstração</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SaaSDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <Footer />
    </main>
  );
}
