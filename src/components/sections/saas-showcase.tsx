"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { saasProducts, SaaSProduct } from "@/data/saas-products";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SaaSDetailModal } from "./saas-detail-modal";
import {
  Stethoscope,
  Scissors,
  Wrench,
  Send,
  Scale,
  TrendingDown,
  BarChart3,
  CreditCard,
  ArrowRight,
  Sparkles,
  Layers,
  Search
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6 text-cyan-400" />,
  Scissors: <Scissors className="w-6 h-6 text-amber-400" />,
  Wrench: <Wrench className="w-6 h-6 text-blue-400" />,
  Send: <Send className="w-6 h-6 text-emerald-400" />,
  Scale: <Scale className="w-6 h-6 text-violet-400" />,
  TrendingDown: <TrendingDown className="w-6 h-6 text-sky-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-purple-400" />,
  CreditCard: <CreditCard className="w-6 h-6 text-emerald-400" />
};

export const SaaSShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProduct, setActiveProduct] = useState<SaaSProduct | null>(null);

  const categories = [
    { id: "todos", label: "Todos os SaaS" },
    { id: "odontologia", label: "Odontologia" },
    { id: "barbearia", label: "Barbearia & Estética" },
    { id: "automotivo", label: "Automotivo" },
    { id: "marketing", label: "WhatsApp & Marketing" },
    { id: "juridico", label: "Jurídico" },
    { id: "consumidor", label: "E-Commerce & Preços" },
    { id: "analytics", label: "Analytics & Produtividade" },
    { id: "financas", label: "Finanças & Pagamentos" },
  ];

  const filteredProducts = saasProducts.filter((product) => {
    const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="saas" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="indigo" className="mb-4">
            <Layers className="w-3.5 h-3.5" />
            Ecossistema de Soluções SaaS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Softwares Prontos para Uso & Licenciamento
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Conheça as plataformas SaaS desenvolvidas com tecnologia de ponta, Clean Architecture e prontas para transformar a operação do seu negócio.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-6 mb-12">
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nome, tecnologia (ex: Next.js, Fastify) ou recurso..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all backdrop-blur-md shadow-lg"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/40 scale-105"
                    : "bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* SaaS Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                glowColor={product.statusColor as any}
                className="flex flex-col justify-between p-6 h-full border border-slate-800/80 bg-slate-900/60 hover:bg-slate-900/90 transition-all group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 group-hover:scale-110 transition-transform">
                      {iconMap[product.iconName]}
                    </div>
                    <Badge variant={product.statusColor as any}>{product.status}</Badge>
                  </div>

                  {/* Product Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-400 mt-1 font-mono">{product.badge}</p>
                  <p className="text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights Metric Pill */}
                  <div className="mt-5 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Impacto Principal:</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">
                      {product.metrics[0]?.value} ({product.metrics[0]?.label})
                    </span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {product.techStack.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-indigo-400 border border-slate-800">
                        +{product.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">{product.categoryLabel}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveProduct(product)}
                    className="group-hover:text-indigo-400 gap-1 text-xs"
                  >
                    Ver Detalhes
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-lg">Nenhum SaaS encontrado com os filtros selecionados.</p>
            <button
              onClick={() => {
                setSelectedCategory("todos");
                setSearchQuery("");
              }}
              className="mt-4 text-indigo-400 underline text-sm cursor-pointer"
            >
              Limpar filtros de busca
            </button>
          </div>
        )}

        {/* Modal for Selected SaaS Details */}
        <SaaSDetailModal
          product={activeProduct}
          isOpen={!!activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      </div>
    </section>
  );
};
