"use client";

import React, { useState } from "react";
import { SITE_CONTACT } from "@/data/contact";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Instagram,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

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
    const body = `Olá, equipe Vision Solutions!\n\nMeu nome é ${formData.name}.\nE-mail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nDetalhes do Projeto / Necessidade:\n${formData.need}`;
    
    const mailtoUrl = SITE_CONTACT.getEmailComposeUrl(subject, body);
    window.location.href = mailtoUrl;
  };

  const handleWhatsappSubmit = () => {
    const text = `Olá, Vision Solutions! Meu nome é ${formData.name || "Cliente"} (${formData.email}). Gostaria de solicitar um orçamento para: ${formData.need}`;
    const waUrl = SITE_CONTACT.getWhatsappUrl(text);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contato" className="relative py-20 sm:py-28 bg-[#090d16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Communication & Channels */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">
                <span>// CANAIS DIRETOS DE ATENDIMENTO</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Tem um problema que precisa virar software?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
                Vamos entender o cenário da sua operação e avaliar a solução mais adequada — seja através de um dos nossos produtos SaaS ou por desenvolvimento sob medida.
              </p>
            </div>

            {/* Direct Channel Tiles */}
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={SITE_CONTACT.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl bg-[#0e1422] border border-slate-800/90 hover:border-emerald-500/50 transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 group-hover:border-emerald-500/40 transition-colors shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase">WhatsApp Comercial</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono">{SITE_CONTACT.displayWhatsapp}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0" />
              </a>

              {/* Instagram */}
              <a
                href={SITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-xl bg-[#0e1422] border border-slate-800/90 hover:border-pink-500/50 transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-pink-400 group-hover:border-pink-500/40 transition-colors shrink-0">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase">Instagram Oficial</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono">{SITE_CONTACT.displayInstagram}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-pink-400 transition-colors shrink-0" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE_CONTACT.displayEmail}`}
                className="p-3.5 sm:p-4 rounded-xl bg-[#0e1422] border border-slate-800/90 hover:border-sky-500/50 transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sky-400 group-hover:border-sky-500/40 transition-colors shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase">E-mail Direto</span>
                    <span className="text-xs sm:text-sm font-bold text-white font-mono truncate block">{SITE_CONTACT.displayEmail}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors shrink-0" />
              </a>

              {/* Location */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#0e1422]/60 border border-slate-800/60 flex items-center gap-3 text-xs text-slate-400">
                <div className="p-2 sm:p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase text-slate-400">Base da Empresa</span>
                  <span className="text-xs font-semibold text-slate-300">{SITE_CONTACT.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-[#0e1422] border border-slate-800/90 shadow-2xl space-y-5">
              <div className="space-y-1 pb-4 border-b border-slate-800/80">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Envie os requisitos do seu projeto
                </h3>
                <p className="text-xs text-slate-400">
                  Retornaremos diretamente por WhatsApp ou e-mail com a avaliação técnica inicial.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4 sm:space-y-5">
                {/* 1. Nome */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#090d16] border border-slate-800 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                  />
                </div>

                {/* 2 & 3: WhatsApp & E-mail */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(98) 98919-8146"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-[#090d16] border border-slate-800 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#090d16] border border-slate-800 rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                    />
                  </div>
                </div>

                {/* 4. O que você precisa construir? */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                    O que você precisa construir ou resolver? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Descreva brevemente o sistema, SaaS de interesse ou fluxo operacional que deseja automatizar..."
                    value={formData.need}
                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    className="w-full bg-[#090d16] border border-slate-800 rounded-lg p-3 sm:p-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/10 active:scale-[0.98] cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitação</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsappSubmit}
                    className="w-full py-3 sm:py-3.5 px-4 sm:px-5 rounded-lg bg-[#090d16] hover:bg-slate-800 border border-emerald-500/40 hover:border-emerald-500 text-emerald-300 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
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
