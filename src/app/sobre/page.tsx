"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ShieldCheck, Code2, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#0B0E14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-36 pb-16 bg-[#0B0E14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-left">
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-2">
            Sobre a Empresa
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Sobre a Vision Solutions
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Uma empresa de software focada em engenharia sólida, desenvolvimento de plataformas SaaS proprietárias e soluções sob medida para operações de negócios.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0B0E14]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Posicionamento */}
          <div className="space-y-4">
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block">
              Nosso Posicionamento
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Construímos software para operações reais.</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A Vision Solutions nasceu com o objetivo claro de desenvolver softwares profissionais que resolvem gargalos operacionais específicos. Combinamos a disciplina de engenharia moderna com o pragmatismo necessário para entregar sistemas funcionais do entendimento à produção.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Atuamos em duas frentes complementares: no desenvolvimento do nosso próprio ecossistema de produtos SaaS (como TorqueOS, SynDent, BarberCRM e DisparoFlow) e na criação de soluções sob medida para empresas que precisam digitalizar seus processos com controle total.
            </p>
          </div>

          {/* Filosofia de Engenharia */}
          <div className="space-y-6">
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block">
              Princípios de Engenharia
            </span>
            <h2 className="text-2xl font-bold text-white">Como pensamos e construímos software</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-[#111622] border border-white/10">
                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-white">Arquitetura Limpa</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Código organizado com separação clara de responsabilidades, garantindo facilidade de manutenção e evolução técnica.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-[#111622] border border-white/10">
                <div className="flex items-start gap-3.5">
                  <Cpu className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-white">Performance & Resiliência</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Processamento assíncrono com filas distribuídas para garantir respostas rápidas e estabilidade contínua.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-[#111622] border border-white/10">
                <div className="flex items-start gap-3.5">
                  <Code2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-white">Código 100% Autoral</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Desenvolvimento adaptado estritamente aos requisitos do projeto, sem amarras a templates engessados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-[#111622] border border-white/10">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-white">Comunicação Transparente</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Clareza absoluta em prazos, entregas e requisitos técnicos, sem promessas irrealistas ou jargões vazios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 rounded-lg bg-[#111622] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Tem um projeto para a sua operação?</h3>
              <p className="text-xs text-slate-300 mt-1">Converse diretamente conosco e avalie o cenário da sua empresa.</p>
            </div>
            <Link
              href="/contato"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
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
