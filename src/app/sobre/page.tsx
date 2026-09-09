"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ShieldCheck, Code2, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const PageScene3D = dynamic(
  () => import("@/components/3d/PageScene3D").then((m) => ({ default: m.PageScene3D })),
  { ssr: false }
);

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#0B0E14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="relative pt-36 pb-0 bg-[#0B0E14] border-b border-white/[0.06] overflow-hidden">
        <PageScene3D variant="sobre" height="260px" className="absolute inset-x-0 top-0 opacity-55" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <span className="text-[11px] font-mono font-semibold text-blue-400 uppercase tracking-[0.18em] block mb-4">
            Sobre a Empresa
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Vision Solutions
          </h1>
          <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-2xl">
            Uma empresa de software focada em engenharia sólida, desenvolvimento de plataformas SaaS proprietárias e soluções sob medida para operações de negócios.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0B0E14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div className="space-y-4">
            <span className="text-[11px] font-mono font-semibold text-blue-400 uppercase tracking-[0.18em] block">
              Nosso Posicionamento
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Construímos software para operações reais.</h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A Vision Solutions nasceu com o objetivo claro de desenvolver softwares profissionais que resolvem gargalos operacionais específicos. Combinamos a disciplina de engenharia moderna com o pragmatismo necessário para entregar sistemas funcionais do entendimento à produção.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Atuamos em duas frentes complementares: no desenvolvimento do nosso próprio ecossistema de produtos SaaS (TorqueOS, SynDent, BarberCRM, DisparoFlow) e na criação de soluções sob medida para empresas que precisam digitalizar seus processos com controle total.
            </p>
          </div>

          <div className="space-y-6">
            <span className="text-[11px] font-mono font-semibold text-blue-400 uppercase tracking-[0.18em] block">
              Princípios de Engenharia
            </span>
            <h2 className="text-2xl font-bold text-white">Como pensamos e construímos software</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />, title: "Arquitetura Limpa", desc: "Código organizado com separação clara de responsabilidades, garantindo facilidade de manutenção e evolução técnica." },
                { icon: <Cpu className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />, title: "Performance & Resiliência", desc: "Processamento assíncrono com filas distribuídas para garantir respostas rápidas e estabilidade contínua." },
                { icon: <Code2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />, title: "Código 100% Autoral", desc: "Desenvolvimento adaptado estritamente aos requisitos do projeto, sem amarras a templates engessados." },
                { icon: <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />, title: "Comunicação Transparente", desc: "Clareza absoluta em prazos, entregas e requisitos técnicos, sem promessas irrealistas ou jargões vazios." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-lg bg-[#111622] border border-white/[0.08] hover:border-white/15 transition-colors">
                  <div className="flex items-start gap-3.5">
                    {item.icon}
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-lg bg-[#111622] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Tem um projeto para a sua operação?</h3>
              <p className="text-xs text-slate-400 mt-1">Converse diretamente conosco e avalie o cenário da sua empresa.</p>
            </div>
            <Link
              href="/contato"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shrink-0"
            >
              <span>Falar com a Vision Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
