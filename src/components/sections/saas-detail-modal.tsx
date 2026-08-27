"use client";

import React from "react";
import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SaaSProduct } from "@/data/saas-products";
import { CheckCircle2, ArrowUpRight, Cpu, Target, ExternalLink } from "lucide-react";

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
          <Badge variant={product.statusColor as any}>{product.status}</Badge>
          <Badge variant="outline">{product.badge}</Badge>
          <span className="text-xs text-slate-400 font-mono">Categoria: {product.categoryLabel}</span>
        </div>

        {/* Tagline */}
        <h4 className="text-xl font-bold text-slate-100 leading-snug">{product.tagline}</h4>

        {/* Long Description */}
        <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          {product.longDescription}
        </p>

        {/* Key Metrics Grid */}
        <div>
          <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
            <Target className="w-4 h-4 text-cyan-400" />
            Métricas de Impacto Alcançadas
          </h5>
          <div className="grid grid-cols-3 gap-3">
            {product.metrics.map((m, idx) => (
              <div key={idx} className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 text-center">
                <span className="block text-lg font-black text-white font-mono">{m.value}</span>
                <span className="text-[11px] text-slate-400">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Features */}
        <div>
          <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
            Recursos Principais
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/50">
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
            Stack Tecnológica & Arquitetura
          </h5>
          <div className="flex flex-wrap gap-2">
            {product.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-indigo-950/40 text-indigo-300 border border-indigo-800/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="text-xs text-slate-400 border-t border-slate-800 pt-4">
          <strong className="text-slate-200">Público-Alvo Recomendado:</strong> {product.targetAudience}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <Button variant="secondary" onClick={onClose} size="sm" className="w-full sm:w-auto">
            Fechar
          </Button>
          <a href="#contato" onClick={onClose} className="w-full sm:w-auto">
            <Button variant="glow" size="sm" className="w-full sm:w-auto">
              Testar / Licenciar este SaaS
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </Modal>
  );
};
