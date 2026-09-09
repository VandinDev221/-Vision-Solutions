"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#0B0E14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-36 pb-8 bg-[#0B0E14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-left">
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-2">
            Atendimento & Orçamentos
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Fale com a Vision Solutions
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Entre em contato para avaliar as necessidades do seu projeto ou solicitar uma demonstração dos nossos produtos SaaS.
          </p>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  );
}
