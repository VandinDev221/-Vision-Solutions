"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AdminStore, ManagedSaaSProduct } from "@/lib/admin-store";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProdutosPage() {
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

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      <Navbar />
      
      {/* Header */}
      <section className="pt-36 pb-16 bg-[#090d16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            Ecossistema de Soluções
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Nossos Produtos & Plataformas SaaS
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Plataformas digitais desenvolvidas pela Vision Solutions para resolver desafios operacionais específicos de diferentes mercados.
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
                <Card key={p.id} className="p-8 bg-[#111726] border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <Badge variant="indigo" className="text-xs font-mono">
                        {p.categoryLabel}
                      </Badge>
                      <span className="text-xs text-emerald-400 font-mono font-semibold">Status: {p.status}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">{p.name}</h2>
                    <p className="text-sm font-semibold text-slate-300 mb-3">{p.tagline}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{p.description}</p>

                    {/* Problem Solved */}
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 mb-6">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                        Problema de Negócio que Resolve:
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
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-mono">{p.badge}</span>
                    <Link href="/contato">
                      <Button variant="primary" size="sm">
                        Solicitar Informações do {p.name}
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
