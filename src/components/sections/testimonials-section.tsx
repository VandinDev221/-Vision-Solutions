"use client";

import React, { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, MessageSquareQuote, CheckCircle2, Building } from "lucide-react";

export const TestimonialsSection = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>("todos");

  const segments = [
    { id: "todos", label: "Todos os Depoimentos" },
    { id: "Odontologia", label: "Odontologia" },
    { id: "Barbearia", label: "Barbearia" },
    { id: "Automotivo", label: "Automotivo" },
    { id: "Marketing", label: "Marketing & Disparos" },
    { id: "Jurídico", label: "Jurídico" },
    { id: "Consumidor", label: "Consumidor" }
  ];

  const filteredTestimonials = testimonials.filter(
    (t) => selectedSegment === "todos" || t.segment === selectedSegment
  );

  return (
    <section id="depoimentos" className="relative py-24 bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="amber" className="mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Prova Social & Depoimentos Reais
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            O Que Dizem os Nossos Clientes & Parceiros
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Avaliações e histórias de impacto reais de quem utiliza nossas soluções no dia a dia.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {segments.map((seg) => (
            <button
              key={seg.id}
              onClick={() => setSelectedSegment(seg.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                selectedSegment === seg.id
                  ? "bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-105"
                  : "bg-slate-900/80 hover:bg-slate-800 text-slate-400 border border-slate-800"
              }`}
            >
              {seg.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((item) => (
            <Card key={item.id} glowColor="amber" className="p-6 flex flex-col justify-between bg-slate-950/80">
              <div>
                {/* Rating Stars & SaaS Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                    {item.saasName}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Metric Highlight Badge */}
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 mb-6 flex items-center gap-2 text-xs text-emerald-300 font-semibold font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.metricHighlight}</span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-indigo-500/30 shrink-0 bg-slate-800">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {item.author}
                    {item.verified && (
                      <span className="text-[10px] bg-cyan-950 text-cyan-400 px-1.5 py-0.2 rounded border border-cyan-800/40 font-normal">
                        Verificado
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-slate-400">{item.role}</p>
                  <p className="text-[11px] text-indigo-400 font-medium flex items-center gap-1 mt-0.5">
                    <Building className="w-3 h-3" />
                    {item.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
