"use client";

import React from "react";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SaaSProduct } from "@/data/saas-products";
import { CheckCircle2, ArrowUpRight, Cpu, Target } from "lucide-react";

interface SaaSDetailModalProps {
  product: SaaSProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SaaSDetailModal: React.FC<SaaSDetailModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name}>
      <div className="space-y-6">
        {/* Header Tagline & Badge */}
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="indigo">{product.status}</Badge>
          <Badge variant="outline">{product.badge}</Badge>
          <span className="text-xs text-slate-400 font-mono">Categoria: {product.categoryLabel}</span>
        </div>

        {/* Tagline */}
        <h4 className="text-lg font-bold text-slate-100 leading-snug">{product.tagline}</h4>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
          {product.description}
        </p>

        {/* Problem Solved Highlight Box */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <span className="text-xs uppercase font-mono text-slate-400 block mb-1">Problema de negócio que resolve:</span>
          <p className="text-xs text-indigo-300 font-medium">{product.problemSolved}</p>
        </div>

        {/* Main Features */}
        <div>
          <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
            Recursos Principais
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div>
          <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-indigo-400" />
            Tecnologias
          </h5>
          <div className="flex flex-wrap gap-2">
            {product.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <Button variant="secondary" onClick={onClose} size="sm" className="w-full sm:w-auto">
            Fechar
          </Button>
          <a href="#contato" onClick={onClose} className="w-full sm:w-auto">
            <Button variant="glow" size="sm" className="w-full sm:w-auto">
              Falar sobre o {product.name}
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
        </div>
      </div>
    </Modal>
  );
};
