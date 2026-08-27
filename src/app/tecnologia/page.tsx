"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Cpu, Layout, Server, Database, Layers, Monitor } from "lucide-react";

export default function TecnologiaPage() {
  const techCategories = [
    {
      title: "Frontend & Interface",
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      items: [
        { name: "Next.js 15", desc: "App Router, SSR e Server Components de alta velocidade." },
        { name: "React 19", desc: "UI declarativa e reativa de última geração." },
        { name: "Tailwind CSS", desc: "Estilização utilitária otimizada sem CSS desnecessário." },
        { name: "Framer Motion", desc: "Microinterações fluidas e acessíveis." }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      items: [
        { name: "Fastify", desc: "Framework web de altíssimo throughput e baixo overhead." },
        { name: "NestJS", desc: "Arquitetura TypeScript modular para APIs empresariais." },
        { name: "Node.js & Express", desc: "Execução assíncrona orientada a eventos." }
      ]
    },
    {
      title: "Banco de Dados & ORM",
      icon: <Database className="w-5 h-5 text-purple-400" />,
      items: [
        { name: "PostgreSQL 16", desc: "Banco relacional robusto com suporte a dados complexos." },
        { name: "Prisma ORM", desc: "Mapeamento objeto-relacional com segurança de tipos no TS." },
        { name: "Redis", desc: "Armazenamento em memória para cache e gerenciamento de sessões." }
      ]
    },
    {
      title: "Infraestrutura & Mensageria",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      items: [
        { name: "NATS JetStream", desc: "Mensageria de ultra-alta velocidade e baixa latência." },
        { name: "BullMQ", desc: "Gerenciamento de filas assíncronas e jobs distribuídos." },
        { name: "Docker", desc: "Containerização consistente entre desenvolvimento e produção." }
      ]
    },
    {
      title: "Aplicações Nativas",
      icon: <Monitor className="w-5 h-5 text-amber-400" />,
      items: [
        { name: "Electron Desktop", desc: "Aplicativos de balcão nativos para computadores (Windows/macOS)." },
        { name: "React Native", desc: "Aplicativos móveis multiplataforma (iOS & Android)." }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="pt-36 pb-16 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
            Base Tecnológica
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engenharia & Stack
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Conheça as tecnologias e ferramentas utilizadas pela Vision Solutions na construção de sistemas de alta resiliência.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((cat, idx) => (
              <Card key={idx} className="p-7 bg-slate-900/60 border-slate-800">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-950 stroke-1 border border-slate-800">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
