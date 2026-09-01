"use client";

import React from "react";
import { Modal } from "@/components/ui/modal";
import { SaaSProduct } from "@/data/saas-products";
import { CheckCircle2, ArrowUpRight, Cpu } from "lucide-react";
import Link from "next/link";

interface SaaSDetailModalProps {
  product: SaaSProduct | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SaaSDetailModal: React.FC<SaaSDetailModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.name}>
      <div className="space-y-5">
        {/* Header Tagline & Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
            {product.status}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
            {product.badge}
          </span>
          <span className="text-xs text-slate-400 font-mono">Categoria: {product.categoryLabel}</span>
        </div>

        {/* Tagline */}
        <h4 className="text-base sm:text-lg font-bold text-slate-100 leading-snug">{product.tagline}</h4>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#090d16] p-4 rounded-xl border border-slate-800">
          {product.description}
        </p>

        {/* Problem Solved Highlight Box */}
        <div className="p-4 rounded-xl bg-[#090d16] border border-slate-800">
          <span className="text-[11px] uppercase font-mono text-sky-400 font-semibold block mb-1">
            Problema de negócio que resolve:
          </span>
          <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">{product.problemSolved}</p>
        </div>

        {/* Main Features */}
        <div>
          <h5 className="text-[11px] uppercase font-mono tracking-wider text-slate-400 mb-2.5 font-semibold">
            Recursos Principais em Produção
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-[#090d16] p-2.5 rounded-lg border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div>
          <h5 className="text-[11px] uppercase font-mono tracking-wider text-slate-400 mb-2 flex items-center gap-1.5 font-semibold">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            Tecnologias Utilizadas
          </h5>
          <div className="flex flex-wrap gap-1.5">
            {product.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#090d16] text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
          >
            Fechar
          </button>
          <Link
            href="/contato"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/10 active:scale-[0.98]"
          >
            <span>Falar sobre o {product.name}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </Modal>
  );
};
