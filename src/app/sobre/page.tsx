"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Code2, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="pt-36 pb-16 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider block mb-2">
            Institucional
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Sobre a Vision Solutions
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Um studio de desenvolvimento focado em engenharia de software de alta qualidade, criação de SaaS próprios e sistemas empresariais sob medida.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Posicionamento */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Nosso Posicionamento</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              A Vision Solutions nasceu com o objetivo claro de construir softwares profissionais que resolvem problemas operacionais reais. Combinamos a disciplina de engenharia moderna com a agilidade necessária para entregar produtos funcionais do diagnóstico à produção.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Atuamos tanto no desenvolvimento do nosso próprio ecossistema de produtos SaaS (como TorqueOS, SynDent, BarberCRM e DisparoFlow) quanto na criação de projetos sob medida para empresas que precisam digitalizar suas operações.
            </p>
          </div>

          {/* Filosofia de Engenharia */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Filosofia de Engenharia</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-5 bg-slate-900/60 border-slate-800">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Clean Architecture</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Código organizado com separação de responsabilidades para garantir fácil manutenção e evolução sem débitos técnicos.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-slate-900/60 border-slate-800">
                <div className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Performance & Resiliência</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Processamento assíncrono com filas distribuídas para garantir respostas rápidas e estabilidade operacional.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-slate-900/60 border-slate-800">
                <div className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Código 100% Próprio</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Desenvolvimento autoral adaptado estritamente aos requisitos do projeto, sem amarras a templates genéricos.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 bg-slate-900/60 border-slate-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">Comunicação Clara</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Transparência absoluta em etapas, entregas e requisitos técnicas sem promessas irrealistas.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Precisa de um software sob medida?</h3>
              <p className="text-xs text-slate-400 mt-1">Avalie os requisitos do seu projeto com nossa equipe.</p>
            </div>
            <Link href="/contato">
              <Button variant="glow" size="sm">
                Falar com Especialista
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
