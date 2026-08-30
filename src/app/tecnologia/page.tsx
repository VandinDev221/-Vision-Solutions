"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Layout, Server, Database, Layers, Monitor, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TecnologiaPage() {
  const techCategories = [
    {
      title: "Frontend & Interface",
      icon: <Layout className="w-5 h-5 text-sky-400" />,
      items: [
        { name: "Next.js 15", desc: "App Router, SSR e Server Components de alta velocidade." },
        { name: "React 19", desc: "UI declarativa e reativa com máxima fluidez de renderização." },
        { name: "Tailwind CSS", desc: "Estilização utilitária com zero CSS não utilizado em produção." },
        { name: "TypeScript", desc: "Tipagem estrita de ponta a ponta para prevenir erros em runtime." }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      items: [
        { name: "Fastify", desc: "Framework web de altíssimo throughput e baixo overhead de memória." },
        { name: "NestJS", desc: "Arquitetura modular em camadas para APIs corporativas complexas." },
        { name: "Node.js & Express", desc: "Execução assíncrona orientada a eventos para microsserviços." }
      ]
    },
    {
      title: "Banco de Dados & ORM",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      items: [
        { name: "PostgreSQL 16", desc: "Banco relacional robusto com integridade transacional ACID." },
        { name: "Prisma ORM", desc: "Mapeamento objeto-relacional com segurança total de tipos." },
        { name: "Redis", desc: "Armazenamento em memória para cache rápido e controle de sessões." }
      ]
    },
    {
      title: "Infraestrutura & Mensageria",
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      items: [
        { name: "NATS JetStream", desc: "Mensageria distribuída de ultra-alta velocidade e baixa latência." },
        { name: "BullMQ", desc: "Gerenciamento de filas assíncronas e jobs distribuídos resilientes." },
        { name: "Docker", desc: "Containerização consistente entre ambiente local e produção." }
      ]
    },
    {
      title: "Aplicações Nativas",
      icon: <Monitor className="w-5 h-5 text-amber-400" />,
      items: [
        { name: "Electron Desktop", desc: "Aplicativos de balcão nativos para computadores (Windows e macOS)." },
        { name: "React Native", desc: "Aplicativos móveis multiplataforma (iOS e Android)." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      <Navbar />

      <section className="pt-36 pb-16 bg-[#090d16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
            Base Tecnológica
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engenharia & Stack
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Conheça as tecnologias e ferramentas utilizadas pela Vision Solutions na construção de sistemas de alta resiliência e estabilidade.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((cat, idx) => (
              <div key={idx} className="p-7 rounded-xl bg-[#111726] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      {cat.icon}
                    </div>
                    <h2 className="text-lg font-bold text-white">{cat.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx}>
                        <span className="text-sm font-bold text-slate-200 block font-mono">{item.name}</span>
                        <span className="text-xs text-slate-400 leading-relaxed">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="p-8 rounded-xl bg-[#111726] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Dúvidas sobre viabilidade técnica da sua stack?</h3>
              <p className="text-xs text-slate-300 mt-1">Podemos avaliar a melhor arquitetura para o seu projeto.</p>
            </div>
            <Link href="/contato">
              <Button variant="primary" size="sm" className="font-semibold">
                Falar com a Engenharia
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
