"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle2, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    need: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contato" className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-800">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: CTA Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider block">
              Contato & Orçamentos
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Vamos transformar sua ideia em software?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Conte o que você precisa. Avaliamos o projeto, arquitetura e o melhor caminho para transformar sua necessidade em uma solução digital.
            </p>

            {/* Direct Details */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>contato@visionsolutions.dev.br</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+55 (11) 99999-8888</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>São Paulo, SP — Atendimento Brasil</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean 4-field Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 bg-slate-900/90 border-slate-800 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Mensagem Enviada!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Obrigado pelo contato. Nossa equipe avaliará os requisitos do seu projeto e retornará em breve.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs"
                  >
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                    Solicitar Orçamento
                  </h3>

                  {/* 1. Nome */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>

                  {/* 2 & 3: WhatsApp & E-mail */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                  </div>

                  {/* 4. O que você precisa? */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      O que você precisa? *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Descreva brevemente o seu sistema, SaaS de interesse ou necessidade de negócio..."
                      value={formData.need}
                      onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button variant="glow" size="lg" type="submit" disabled={loading} className="w-full font-semibold">
                    {loading ? (
                      <span className="animate-pulse">Enviando...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-1.5" />
                        Solicitar orçamento
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
