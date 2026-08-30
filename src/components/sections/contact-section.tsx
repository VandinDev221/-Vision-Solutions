"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SITE_CONTACT } from "@/data/contact";
import { Mail, Phone, MapPin, Send, ExternalLink, MessageSquare, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    need: ""
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Orçamento Vision Solutions — ${formData.name || "Novo Contato"}`;
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
    <section id="contato" className="relative py-24 bg-[#090d16] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact info & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block">
              Contato Direto
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Tem um problema que precisa virar software?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Vamos entender o cenário da sua operação e avaliar a melhor solução — seja através de um dos nossos produtos SaaS ou por desenvolvimento sob medida.
            </p>

            <div className="pt-2">
              <Link href="/produtos">
                <Button variant="outline" size="sm" className="text-xs font-medium text-slate-300 border-slate-700 hover:border-slate-500">
                  Conhecer nossos produtos
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>

            {/* Direct Interactive Contact Links */}
            <div className="space-y-3 pt-4">
              {/* WhatsApp Link */}
              <a
                href={SITE_CONTACT.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg bg-[#111726] border border-slate-800 flex items-center justify-between gap-3 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">WhatsApp Comercial</span>
                    <span className="text-sm font-bold text-white font-mono">{SITE_CONTACT.displayWhatsapp}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Instagram Link */}
              <a
                href={SITE_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-lg bg-[#111726] border border-slate-800 flex items-center justify-between gap-3 text-slate-300 hover:text-white hover:border-pink-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">Instagram Oficial</span>
                    <span className="text-sm font-bold text-white font-mono">{SITE_CONTACT.displayInstagram}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors" />
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${SITE_CONTACT.realEmail}`}
                className="p-3.5 rounded-lg bg-[#111726] border border-slate-800 flex items-center justify-between gap-3 text-slate-300 hover:text-white hover:border-slate-700 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400 uppercase">Contato por E-mail</span>
                    <span className="text-sm font-bold text-white font-mono">{SITE_CONTACT.displayEmail}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
              </a>

              {/* Location */}
              <div className="p-3.5 rounded-lg bg-[#111726]/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Localização da Empresa</span>
                  <span className="text-xs font-semibold text-slate-200">{SITE_CONTACT.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 bg-[#111726] border-slate-800 shadow-xl">
              <form onSubmit={handleEmailSubmit} className="space-y-5">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                  Falar com a Vision Solutions
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
                    className="w-full bg-[#090d16] border border-slate-800 rounded-md px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
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
                      placeholder="(98) 98919-8146"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-[#090d16] border border-slate-800 rounded-md px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
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
                      className="w-full bg-[#090d16] border border-slate-800 rounded-md px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
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
                    placeholder="Descreva o cenário da sua empresa, SaaS de interesse ou necessidade de software..."
                    value={formData.need}
                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                    className="w-full bg-[#090d16] border border-slate-800 rounded-md p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <Button variant="primary" size="lg" type="submit" className="w-full font-semibold">
                    <Send className="w-4 h-4 mr-1.5" />
                    Enviar Mensagem
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleWhatsappSubmit}
                    className="w-full font-semibold text-emerald-300 border-emerald-500/40 hover:border-emerald-500"
                  >
                    <MessageSquare className="w-4 h-4 mr-1.5" />
                    Falar no WhatsApp
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
