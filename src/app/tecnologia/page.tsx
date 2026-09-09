"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Layout, Server, Database, Layers, Monitor, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TecnologiaPage() {
  const techCategories = [
    {
      title: "Frontend & Interface",
      icon: <Layout className="w-5 h-5 text-blue-400" />,
      items: [
        { name: "Next.js 15", desc: "App Router, SSR e Server Components de alta velocidade." },
        { name: "React 19", desc: "UI declarativa e reativa com máxima fluidez de renderização." },
        { name: "Tailwind CSS", desc: "Estilização utilitária com zero CSS não utilizado em produção." },
        { name: "TypeScript", desc: "Tipagem estrita de ponta a ponta para prevenir erros em runtime." }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-sky-400" />,
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
    <main className="min-h-screen bg-[#0B0E14] text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section className="pt-36 pb-16 bg-[#0B0E14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-left">
          <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-2">
            Base Tecnológica
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Engenharia & Stack
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Conheça as tecnologias e ferramentas utilizadas pela Vision Solutions na construção de sistemas de alta resiliência e estabilidade.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#0B0E14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-[#111622] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/5">
                    <div className="p-2 rounded bg-[#0B0E14] border border-white/5">
                      {cat.icon}
                    </div>
                    <h2 className="text-base font-bold text-white">{cat.title}</h2>
                  </div>

                  <div className="space-y-3.5">
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx}>
                        <span className="text-xs font-bold text-slate-200 block font-mono">{item.name}</span>
                        <span className="text-xs text-slate-400 leading-relaxed">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="p-8 rounded-lg bg-[#111622] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Dúvidas sobre viabilidade técnica da sua stack?</h3>
              <p className="text-xs text-slate-300 mt-1">Podemos avaliar a melhor arquitetura para o seu projeto.</p>
            </div>
            <Link
              href="/contato"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shrink-0"
            >
              <span>Falar com a Engenharia</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
