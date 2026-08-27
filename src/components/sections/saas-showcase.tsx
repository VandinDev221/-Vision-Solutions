"use client";

import React, { useState } from "react";
import { saasProducts, SaaSProduct } from "@/data/saas-products";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SaaSDetailModal } from "./saas-detail-modal";
import {
  Wrench,
  Stethoscope,
  Scissors,
  Send,
  Scale,
  TrendingDown,
  BarChart3,
  CreditCard,
  ArrowRight,
  Monitor,
  CheckCircle2
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-5 h-5 text-blue-400" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-cyan-400" />,
  Scissors: <Scissors className="w-5 h-5 text-amber-400" />,
  Send: <Send className="w-5 h-5 text-emerald-400" />,
  Scale: <Scale className="w-5 h-5 text-purple-400" />,
  TrendingDown: <TrendingDown className="w-5 h-5 text-sky-400" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-indigo-400" />,
  CreditCard: <CreditCard className="w-5 h-5 text-emerald-400" />
};

export const SaaSShowcase = () => {
  const [activeProduct, setActiveProduct] = useState<SaaSProduct | null>(null);

  return (
    <section id="produtos" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider block mb-2">
            Produtos Próprios & Licenciamento
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nossas Plataformas SaaS em Operação
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Softwares desenvolvidos pela Vision Solutions para resolver problemas específicos de diferentes setores do mercado.
          </p>
        </div>

        {/* Large Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {saasProducts.map((product) => (
            <Card
              key={product.id}
              className="p-6 md:p-8 flex flex-col justify-between bg-slate-900/60 border-slate-800 hover:border-slate-700 transition-all duration-300 group"
            >
              <div>
                {/* Header: Icon, Category & Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-105 transition-transform">
                      {iconMap[product.iconName]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xs text-slate-400">{product.categoryLabel}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-[11px] font-mono">
                    {product.badge}
                  </Badge>
                </div>

                {/* Tagline */}
                <p className="text-sm font-semibold text-slate-200 mb-2">
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Problem Solved Highlight Box */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-6">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                    Problema de negócio que resolve:
                  </span>
                  <p className="text-xs text-indigo-300 font-medium leading-normal">
                    {product.problemSolved}
                  </p>
                </div>

                {/* UI Dashboard Mockup Frame (Screenshot Container Placeholder) */}
                <div className="relative rounded-xl bg-slate-950 border border-slate-800/90 p-3 mb-6 overflow-hidden">
                  <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800/60">
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                    <div className="w-2 h-2 rounded-full bg-slate-700" />
                    <span className="text-[10px] font-mono text-slate-500 ml-1">app.{product.id}.internal</span>
                  </div>
                  
                  {/* System Mockup Visual Content */}
                  <div className="py-6 px-4 text-center bg-slate-900/40 rounded-lg border border-slate-800/40">
                    <Monitor className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                    <span className="text-xs font-semibold text-slate-300 block">{product.name} Interface</span>
                    <span className="text-[11px] text-slate-500">Painel de Operação & Dashboard</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-1.5 mb-6">
                  {product.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies in Background */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-800/60">
                  <span className="text-[10px] font-mono text-slate-500 mr-1">Tech Stack:</span>
                  {product.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Status: {product.status}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveProduct(product)}
                  className="text-xs gap-1 group-hover:border-indigo-500/50 group-hover:text-indigo-300"
                >
                  Conhecer o {product.name}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal for Details */}
        <SaaSDetailModal
          product={activeProduct}
          isOpen={!!activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      </div>
    </section>
  );
};
