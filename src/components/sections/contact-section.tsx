"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { saasProducts } from "@/data/saas-products";
import { Send, CheckCircle2, Sparkles, Phone, Mail, MapPin, Building, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "assinar-saas",
    saasSelected: "syndent",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contato" className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-800">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <Badge variant="emerald" className="mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Atendimento Imediato
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Vamos Construir ou Acelerar o Seu Negócio?
              </h2>
              <p className="mt-4 text-base text-slate-300 leading-relaxed">
                Seja para contratar uma das nossas plataformas SaaS prontas ou para desenvolver um software enterprise sob medida, nossa equipe técnica está pronta para atender você.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-mono uppercase">E-mail Comercial</span>
                  <span className="text-sm font-bold text-white">contato@visionsolutions.dev.br</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-mono uppercase">WhatsApp / Telefone</span>
                  <span className="text-sm font-bold text-white">+55 (11) 99999-8888</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-mono uppercase">Sede da Startup</span>
                  <span className="text-sm font-bold text-white">São Paulo, SP — Brasil (100% Remoto & Global)</span>
                </div>
              </div>
            </div>

            {/* SLA Promise */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 to-slate-900 border border-indigo-800/30 text-xs text-slate-300">
              <strong className="text-indigo-400 font-semibold block mb-1">⚡ SLA de Resposta Rápida:</strong>
              Respondemos todas as solicitações de novos projetos e demonstrações de SaaS em até 2 horas úteis.
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <Card glowColor="indigo" className="p-8 bg-slate-900/90 border-slate-800 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Solicitação Enviada com Sucesso!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Obrigado por entrar em contato! Um de nossos engenheiros especialistas retornará em breve com os detalhes da demonstração ou proposta sob medida.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Enviar Nova Mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                    Solicitar Demonstração / Proposta Comercial
                  </h3>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Dr. Marcelo Ramos"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        E-mail Corporativo / Pessoal *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seuemail@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                  </div>

                  {/* Phone & Interest Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        WhatsApp / Celular com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Objetivo Principal *
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      >
                        <option value="assinar-saas">Assinar / Licenciar um SaaS Existente</option>
                        <option value="software-sob-medida">Desenvolver Software / SaaS Sob Medida</option>
                        <option value="parceria-empresa">Parceria Comercial / Investimento</option>
                      </select>
                    </div>
                  </div>

                  {/* Conditional Select for SaaS product */}
                  {formData.interest === "assinar-saas" && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Selecione o SaaS de Interesse *
                      </label>
                      <select
                        value={formData.saasSelected}
                        onChange={(e) => setFormData({ ...formData, saasSelected: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-indigo-300 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      >
                        {saasProducts.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} — {p.tagline}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Conte-nos mais sobre o seu projeto ou necessidade
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Descreva detalhes da sua empresa, tamanho da equipe ou funcionalidades que busca..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button variant="glow" size="lg" type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <span className="animate-pulse">Enviando Solicitação...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Solicitação & Receber Demonstração
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
