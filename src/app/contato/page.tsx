"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact-section";

const PageScene3D = dynamic(
  () => import("@/components/3d/PageScene3D").then((m) => ({ default: m.PageScene3D })),
  { ssr: false }
);

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#0B0E14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="relative pt-36 pb-0 bg-[#0B0E14] border-b border-white/[0.06] overflow-hidden">
        <PageScene3D variant="contato" height="260px" className="absolute inset-x-0 top-0 opacity-55" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <span className="text-[11px] font-mono font-semibold text-blue-400 uppercase tracking-[0.18em] block mb-4">
            Atendimento &amp; Orçamentos
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Fale com a Vision Solutions
          </h1>
          <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-2xl">
            Entre em contato para avaliar as necessidades do seu projeto ou solicitar uma demonstração dos nossos produtos SaaS.
          </p>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  );
}
