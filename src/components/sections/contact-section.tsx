"use client";

import React, { useState } from "react";
import { SITE_CONTACT } from "@/data/contact";
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram, ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    need: ""
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Solicitação de Projeto — ${formData.name || "Novo Contato"}`;
    const body = `Olá, equipe Vision Solutions!\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nDetalhes do Projeto / Necessidade:\n${formData.need}`;
    
    const mailtoUrl = SITE_CONTACT.getEmailComposeUrl(subject, body);
    window.location.href = mailtoUrl;
  };

  const handleWhatsappSubmit = () => {
    const text = `Olá, Vision Solutions! Meu nome é ${formData.name || "Cliente"} (${formData.email}). Gostaria de solicitar um diagnóstico para: ${formData.need}`;
    const waUrl = SITE_CONTACT.getWhatsappUrl(text);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                Atendimento Direto
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Tem um problema que precisa virar software?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Vamos entender o cenário da sua operação e avaliar a solução mais adequada — seja através de um dos nossos produtos SaaS ou por desenvolvimento sob medida.
              </p>
            </div>

            {/* Direct Channel Tiles */}
            <div className="space-y-2.5">
              {/* WhatsApp */}
              <a
                href={SITE_CONTACT.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg bg-[#111622] border border-white/10 hover:border-emerald-500/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#0B0E14] border border-white/5 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">WhatsApp Comercial</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono">{SITE_CONTACT.displayWhatsapp}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href={SITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg bg-[#111622] border border-white/10 hover:border-pink-500/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#0B0E14] border border-white/5 text-pink-400">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">Instagram Oficial</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono">{SITE_CONTACT.displayInstagram}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONTACT.displayEmail}`}
                className="p-3.5 rounded-lg bg-[#111622] border border-white/10 hover:border-blue-500/40 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded bg-[#0B0E14] border border-white/5 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">E-mail Direto</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono truncate block">{SITE_CONTACT.displayEmail}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              {/* Location */}
              <div className="p-3.5 rounded-lg bg-[#111622]/60 border border-white/5 flex items-center gap-3 text-xs text-slate-400">
                <div className="p-2 rounded bg-[#0B0E14] border border-white/5 text-slate-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-slate-500">Base da Empresa</span>
                  <span className="text-xs font-semibold text-slate-300">{SITE_CONTACT.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Proposal Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg bg-[#111622] border border-white/10 space-y-5">
              <div className="space-y-1 pb-4 border-b border-white/5">
                <h3 className="text-lg font-bold text-white">
                  Envie os requisitos do seu projeto
                </h3>
                <p className="text-xs text-slate-400">
                  Retornaremos diretamente por WhatsApp ou e-mail com a avaliação técnica inicial.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0B0E14] border border-white/10 rounded px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(98) 98919-8146"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-[#0B0E14] border border-white/10 rounded px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0B0E14] border border-white/10 rounded px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono">
                    O que você precisa construir ou resolver? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Descreva resumidamente o sistema, SaaS de interesse ou fluxo operacional que deseja automatizar..."
                    value={formData.need}
                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    className="w-full bg-[#0B0E14] border border-white/10 rounded p-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitação</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsappSubmit}
                    className="w-full py-3 px-4 rounded bg-[#0B0E14] hover:bg-slate-800 border border-emerald-500/40 text-emerald-400 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
