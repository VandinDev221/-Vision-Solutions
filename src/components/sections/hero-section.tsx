"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Play, ArrowRight, X } from "lucide-react";

const Hero3DStage = dynamic(
  () => import("../3d/Hero3DStage").then((m) => ({ default: m.Hero3DStage })),
  { ssr: false }
);

export const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05080e] text-white selection:bg-cyan-500 selection:text-black">
      {/* 3D Cybernetic Helix Canvas Background */}
      <Hero3DStage scrollProgress={scrollProgress} />

      {/* ── Frame 00:00 (Hero Stage 1) ── */}
      <section className="relative min-h-screen flex flex-col justify-between p-8 sm:p-16 z-10 pointer-events-none">
        
        {/* Top Right Floating Video Button (Matching Video 00:00) */}
        <div className="flex justify-end pt-20 pointer-events-auto">
          <button
            onClick={() => setVideoModalOpen(true)}
            className="group flex items-center gap-4 text-xs font-mono text-slate-300 hover:text-white cursor-pointer transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-slate-800/80 border border-white/20 group-hover:border-cyan-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xl backdrop-blur-md">
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400 ml-0.5" />
            </div>
            <span className="tracking-wider">Watch video</span>
          </button>
        </div>

        {/* Bottom Left Editorial Typography (Matching Video 00:00) */}
        <div className="max-w-md space-y-6 pb-12 pointer-events-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-[1.12]">
            Descubra o que o software autoral pode fazer pela sua empresa.
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            Construímos plataformas SaaS verticais e sistemas sob medida desenhados para transformar processos complexos em operações de alto rendimento.
          </p>
          <div>
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-cyan-400 tracking-wider transition-colors group cursor-pointer"
            >
              <span>&gt; Conhecer produtos</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Frame 00:01 - 00:02 (Section 2 - Scroll Right Alignment) ── */}
      <section className="relative min-h-screen flex flex-col justify-center items-end p-8 sm:p-16 z-10 pointer-events-none">
        <div className="max-w-md space-y-6 pointer-events-auto text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-[1.12]">
            Como o software sob medida transforma sua operação?
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            Sistemas verticais oferecem controle total sobre regras de negócio, estoque e faturamento, eliminando gargalos de softwares genéricos.
          </p>
          <div>
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-cyan-400 tracking-wider transition-colors group cursor-pointer"
            >
              <span>&gt; Ver casos de sucesso</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Frame 00:03 - 00:05 (Section 3 - Macro Close Up) ── */}
      <section className="relative min-h-screen flex flex-col justify-center items-end p-8 sm:p-16 z-10 pointer-events-none">
        <div className="max-w-md space-y-6 pointer-events-auto text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-[1.12]">
            Qual é a arquitetura técnica da sua empresa?
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            Arquitetura limpa com PostgreSQL, APIs tipadas em Fastify e mensageria de alta velocidade para garantir 100% de estabilidade.
          </p>
          <div>
            <Link
              href="/tecnologia"
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-cyan-400 tracking-wider transition-colors group cursor-pointer"
            >
              <span>&gt; Saber mais</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Frame 00:06 - 00:07 (Section 4 - Full View Final Action) ── */}
      <section className="relative min-h-screen flex flex-col justify-end p-8 sm:p-16 z-10 pointer-events-none pb-24">
        <div className="max-w-md space-y-6 pointer-events-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-white leading-[1.12]">
            Pronto para evoluir a sua operação digital?
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed font-sans">
            Entre em contato diretamente com nossa equipe de engenheiros e avalie o cenário da sua empresa.
          </p>
          <div>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-cyan-400 tracking-wider transition-colors group cursor-pointer"
            >
              <span>&gt; Falar com a Vision Solutions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal (Triggered by Watch Video button) */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-50 flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-4xl bg-[#090e1a] border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-black/50 z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <video
                src="/modelo do site/1080p.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
