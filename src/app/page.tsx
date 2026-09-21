"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: "torqueos",
    name: "TorqueOS",
    category: "ERP Automotivo",
    badge: "ERP",
    color: "blue",
    tagline: "Gestão completa para oficinas e centros automotivos.",
    description:
      "Multi-empresa, com Ordens de Serviço, controle de estoque de peças, financeiro integrado e app desktop Electron para uso sem navegador nos balcões.",
    stack: ["Next.js 15", "NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Electron"],
    metrics: [
      { label: "O.S. ativas hoje", value: "18", delta: "+12%" },
      { label: "Peças em estoque", value: "247", delta: "+8%" },
      { label: "Faturamento/mês", value: "R$ 42.380", delta: "+15%" },
    ],
    tableRows: [
      { id: "#00128", client: "João Silva", vehicle: "Honda Civic", status: "Em andamento", statusColor: "blue", value: "R$ 480" },
      { id: "#00127", client: "Maria Souza", vehicle: "Fiat Uno", status: "Aguardando peça", statusColor: "amber", value: "R$ 120" },
      { id: "#00126", client: "Carlos Lima", vehicle: "VW Gol", status: "Finalizado", statusColor: "emerald", value: "R$ 260" },
      { id: "#00125", client: "Ana Costa", vehicle: "Toyota Corolla", status: "Em andamento", statusColor: "blue", value: "R$ 670" },
    ],
  },
  {
    id: "syndent",
    name: "SynDent",
    category: "SaaS Odontológico",
    badge: "SaaS",
    color: "violet",
    tagline: "Prontuário clínico, agenda e financeiro para clínicas odontológicas.",
    description:
      "Multi-tenant com isolamento completo por clínica. Inclui prontuário digital, odontograma interativo, agendamento online, financeiro e relatórios.",
    stack: ["Next.js 15", "Fastify", "Prisma", "PostgreSQL", "Redis", "BullMQ", "MinIO"],
    metrics: [
      { label: "Pacientes hoje", value: "21", delta: "+3" },
      { label: "Clínicas ativas", value: "5", delta: "piloto" },
      { label: "Consultas/semana", value: "142", delta: "+22%" },
    ],
    tableRows: [
      { id: "09:00", client: "Mariana Costa", vehicle: "Dra. Beatriz", status: "Endodontia", statusColor: "violet", value: "Em andamento" },
      { id: "09:40", client: "Rafael Lima", vehicle: "Dr. Henrique", status: "Alinhadores 3D", statusColor: "blue", value: "Agendado" },
      { id: "10:20", client: "Juliana Santos", vehicle: "Dra. Camila", status: "Clareamento", statusColor: "emerald", value: "Finalizado" },
      { id: "11:00", client: "Pedro Alves", vehicle: "Dr. Ricardo", status: "Implante", statusColor: "amber", value: "Confirmado" },
    ],
  },
];

const STATUS_COLORS: Record<string, string> = {
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
};

const ECOSYSTEM = [
  {
    name: "DisparoFlow",
    category: "Mensageria Enterprise",
    desc: "Campanhas WhatsApp multi-tenant com filas NATS/BullMQ, aquecimento inteligente de chips por IA, tracking de conversão e analytics em tempo real.",
    stack: ["NestJS", "BullMQ", "NATS", "Redis", "Next.js 15"],
    color: "emerald",
  },
  {
    name: "BarberCRM",
    category: "Gestão de Barbearias",
    desc: "CRM completo com agendamento online, programa de fidelidade com pontos, notificações WhatsApp e relatórios financeiros por período.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Evolution API"],
    color: "amber",
  },
  {
    name: "AdvCargo",
    category: "Gestão Jurídica",
    desc: "Sistema para advogados e escritórios: processos, prazos, audiências, financeiro e relatórios. HTTPS obrigatório + HSTS configurado.",
    stack: ["React", "Vite", "Express", "PostgreSQL", "Prisma"],
    color: "slate",
  },
  {
    name: "EsperaAí",
    category: "Inteligência de Preços",
    desc: "Plataforma de recomendação de compra baseada em histórico de preços. Monitoramento contínuo e alertas de queda de preço.",
    stack: ["Next.js", "Fastify", "BullMQ", "Redis", "PostgreSQL"],
    color: "sky",
  },
];

const ARCHITECTURE = [
  {
    layer: "Frontend",
    detail: "Next.js 15 App Router + React 19 + TypeScript strict + Tailwind CSS",
    badge: "Client",
  },
  {
    layer: "API Gateway",
    detail: "Fastify / NestJS com Zod validation, JWT + Refresh HTTPOnly, RBAC",
    badge: "Server",
  },
  {
    layer: "Queue Engine",
    detail: "BullMQ + Redis para filas concorrentes, retry, DLQ e workers isolados",
    badge: "Workers",
  },
  {
    layer: "Banco de Dados",
    detail: "PostgreSQL 16 com Prisma ORM, migrations versionadas e seeds",
    badge: "Data",
  },
  {
    layer: "Multi-Tenancy",
    detail: "Isolamento por tenant em nível de schema ou RLS, sem vazamento de dados",
    badge: "Security",
  },
  {
    layer: "Deploy",
    detail: "Vercel (frontend) · Render / Railway (API) · Docker Compose (local)",
    badge: "Infra",
  },
];

const PRINCIPLES = [
  { label: "Código 100% autoral", desc: "Sem boilerplates genéricos. Cada linha tem intenção e propriedade." },
  { label: "TypeScript estrito end-to-end", desc: "Do schema do banco ao componente React, tipagem em toda a stack." },
  { label: "Multi-tenant com isolamento real", desc: "Cada cliente tem seu ambiente de dados com garantias de segurança." },
  { label: "Deploy em produção", desc: "Todos os projetos em infraestrutura real: Vercel, Render, Railway, VPS." },
];

/* ─────────────────────────────────────────────────────────────
   SUBCOMPONENTS
───────────────────────────────────────────────────────────── */

function ProductTab({
  product,
}: {
  product: (typeof PRODUCTS)[0];
}) {
  const colHeaders =
    product.id === "torqueos"
      ? ["O.S.", "Cliente", "Veículo", "Status", "Valor"]
      : ["Hora", "Paciente", "Dentista", "Procedimento", "Status"];

  return (
    <div className="rounded-xl bg-[#0B0D12] border border-white/[0.07] overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0E1018]">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[11px] text-white/30 font-mono">
          {product.name} — Produção
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          online
        </span>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-b border-white/[0.06]">
        {product.metrics.map((m) => (
          <div key={m.label} className="px-4 py-3 space-y-0.5">
            <div className="text-[10px] text-white/30 font-mono uppercase tracking-wider">{m.label}</div>
            <div className="flex items-baseline gap-2">
              <span className="text-[15px] font-bold text-white font-mono tracking-tight">{m.value}</span>
              <span className="text-[10px] text-emerald-400 font-mono">{m.delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-[11px] font-mono">
          <thead>
            <tr className="border-b border-white/[0.06]">
              {colHeaders.map((h) => (
                <th
                  key={h}
                  className="px-4 py-2.5 text-left text-[10px] text-white/25 uppercase tracking-wider font-medium"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {product.tableRows.map((row, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-4 py-2.5 text-white/50">{row.id}</td>
                <td className="px-4 py-2.5 text-white/80 font-medium">{row.client}</td>
                <td className="px-4 py-2.5 text-white/40">{row.vehicle}</td>
                <td className="px-4 py-2.5">
                  <span
                    className={`px-2 py-0.5 rounded border text-[10px] ${STATUS_COLORS[row.statusColor]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-white/60">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="min-h-screen bg-[#08090D] text-white selection:bg-blue-500/30 selection:text-white overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-20 px-6">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.025) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Single soft gradient radial — not a glow blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/[0.07] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          {/* Label */}
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono text-white/30 uppercase tracking-[0.2em]">
              <span className="w-4 h-px bg-white/20" />
              Software House & SaaS Studio
            </span>
          </div>

          {/* Headline */}
          <div className="max-w-4xl space-y-4 mb-10">
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-bold text-white leading-[1.08] tracking-[-0.03em]">
              Software para operações que<br />
              <span className="text-white/40">não cabem em plataformas genéricas.</span>
            </h1>
            <p className="text-[15px] text-white/45 leading-relaxed max-w-2xl">
              Construímos SaaS verticais e sistemas sob medida para empresas que precisam transformar processos complexos em operação digital estruturada — do prontuário odontológico à ordem de serviço automotiva, com arquitetura que escala.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-20">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#08090D] text-[13px] font-semibold tracking-[-0.01em] hover:bg-white/90 transition-all"
            >
              Ver nossos produtos
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.09] text-white/70 text-[13px] font-medium hover:text-white hover:bg-white/[0.08] transition-all"
            >
              Construir um sistema
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Switcher UI */}
          <div className="space-y-4">
            {/* Tabs */}
            <div className="flex items-center gap-1 bg-white/[0.03] rounded-lg p-1 w-fit border border-white/[0.06]">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProduct(i)}
                  className={`px-4 py-1.5 rounded-md text-[12px] font-medium transition-all ${
                    activeProduct === i
                      ? "bg-white/[0.09] text-white"
                      : "text-white/35 hover:text-white/60"
                  }`}
                >
                  {p.name}
                  <span
                    className={`ml-1.5 text-[10px] font-mono opacity-60 ${
                      p.color === "violet" ? "text-violet-400" : "text-blue-400"
                    }`}
                  >
                    [{p.badge}]
                  </span>
                </button>
              ))}
            </div>

            {/* Active Product UI Panel */}
            <ProductTab product={PRODUCTS[activeProduct] ?? PRODUCTS[0]!} />
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. MANIFESTO / PRINCÍPIOS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: Label + Headline */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em]">
                Nossa abordagem
              </div>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.03em]">
                Software que resolve o problema real — não o problema médio.
              </h2>
              <p className="text-[14px] text-white/40 leading-relaxed">
                Softwares genéricos são projetados para o denominador comum. Quando sua operação é complexa, específica e de alta densidade, esse denominador comum falha. Construímos para a exceção, não para a regra.
              </p>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-1.5 text-[13px] text-white/60 hover:text-white transition-colors group"
              >
                Conhecer a Vision
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Right: Principles */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PRINCIPLES.map((p) => (
                <div
                  key={p.label}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-white/60" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[13px] font-semibold text-white/90 leading-tight">{p.label}</h3>
                      <p className="text-[12px] text-white/35 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. FLAGSHIP PRODUCTS IN-DEPTH (TorqueOS + SynDent)
      ═══════════════════════════════════════════════════════ */}
      <section id="produtos" className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em]">Produtos flagship</div>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                Dois SaaS verticais em produção.
              </h2>
            </div>
            <Link href="/produtos" className="text-[13px] text-white/40 hover:text-white/80 transition-colors shrink-0 flex items-center gap-1.5 group">
              Ver todos os produtos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* TorqueOS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 font-black font-mono text-xs">TO</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-white tracking-[-0.02em]">TorqueOS</h3>
                  <span className="text-[11px] text-blue-400 font-mono">ERP Automotivo · Multi-empresa</span>
                </div>
              </div>
              <p className="text-[14px] text-white/45 leading-relaxed">
                ERP SaaS para oficinas mecânicas e centros automotivos. Gestão de Ordens de Serviço, estoque de peças com alertas de mínimo, financeiro integrado e app desktop Electron para os terminais de balcão — sem depender de navegador.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["NestJS", "Prisma", "PostgreSQL", "Redis + BullMQ", "Electron", "Next.js 15", "Turborepo"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono text-white/40 bg-white/[0.04] border border-white/[0.07]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-2 space-y-2.5 border-t border-white/[0.06]">
                {["Ordens de Serviço com status em tempo real", "Estoque de peças com mínimo e alertas", "Financeiro: recebimentos e despesas por OS", "App desktop Electron para balcão off-line", "Relatórios: faturamento, técnicos, tempo de OS"].map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-[12px] text-white/50">
                    <span className="w-1 h-1 rounded-full bg-blue-400/60 shrink-0 mt-1.5" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <ProductTab product={PRODUCTS[0]!} />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.05]" />

          {/* SynDent */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5 lg:order-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <span className="text-violet-400 font-black font-mono text-xs">SD</span>
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-white tracking-[-0.02em]">SynDent</h3>
                  <span className="text-[11px] text-violet-400 font-mono">SaaS Odontológico · Multi-tenant</span>
                </div>
              </div>
              <p className="text-[14px] text-white/45 leading-relaxed">
                Plataforma SaaS para clínicas odontológicas com Clean Architecture e multi-tenancy real. Prontuário digital, odontograma interativo, agendamento online, financeiro por clínica e isolamento completo entre tenants.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Fastify", "Prisma", "PostgreSQL", "Redis", "BullMQ", "MinIO (S3)", "Next.js 15"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono text-white/40 bg-white/[0.04] border border-white/[0.07]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-2 space-y-2.5 border-t border-white/[0.06]">
                {["Prontuário clínico digital com histórico completo", "Odontograma interativo por dente", "Agendamento online com confirmação automática", "Multi-tenant com isolamento em nível de schema", "Financeiro e relatórios por clínica"].map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-[12px] text-white/50">
                    <span className="w-1 h-1 rounded-full bg-violet-400/60 shrink-0 mt-1.5" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 lg:order-1">
              <ProductTab product={PRODUCTS[1]!} />
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. ECOSYSTEM (outros produtos)
      ═══════════════════════════════════════════════════════ */}
      <section id="solucoes" className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em]">Ecossistema</div>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                Mais soluções em produção.
              </h2>
            </div>
            <Link href="/produtos" className="text-[13px] text-white/40 hover:text-white/80 transition-colors shrink-0 flex items-center gap-1.5 group">
              Ver portfólio completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ECOSYSTEM.map((p) => {
              const accent =
                p.color === "emerald" ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                  : p.color === "amber" ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                  : p.color === "sky" ? "text-sky-400 bg-sky-500/10 border-sky-500/20"
                  : "text-slate-400 bg-slate-500/10 border-slate-500/20";

              return (
                <div
                  key={p.name}
                  className="group p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all space-y-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-[15px] font-semibold text-white/90 tracking-[-0.01em]">{p.name}</h3>
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono border ${accent}`}>
                        {p.category}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors mt-0.5" />
                  </div>
                  <p className="text-[13px] text-white/40 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-white/30 bg-white/[0.04] border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. ARQUITETURA & ENGENHARIA
      ═══════════════════════════════════════════════════════ */}
      <section id="engenharia" className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left */}
            <div className="lg:col-span-4 space-y-6">
              <div className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em]">Engenharia</div>
              <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold leading-[1.12] tracking-[-0.03em]">
                Arquitetura que sustenta operações reais.
              </h2>
              <p className="text-[14px] text-white/40 leading-relaxed">
                Cada camada da stack é escolhida com intenção. Do schema do banco ao componente React, a tipagem estrita e as responsabilidades bem definidas eliminam classes inteiras de bugs em produção.
              </p>
              <Link
                href="/tecnologia"
                className="inline-flex items-center gap-1.5 text-[13px] text-white/50 hover:text-white transition-colors group"
              >
                Ver arquitetura completa
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Right: Stack Layers */}
            <div className="lg:col-span-8">
              <div className="rounded-xl bg-[#0B0D12] border border-white/[0.07] overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0E1018]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-[11px] text-white/30 font-mono">stack.architecture.ts</span>
                </div>

                {/* Layers list */}
                <div className="divide-y divide-white/[0.04]">
                  {ARCHITECTURE.map((a, i) => (
                    <div key={a.layer} className="flex items-start gap-4 px-5 py-4 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-center gap-3 shrink-0 w-28">
                        <span className="text-[11px] text-white/20 font-mono w-4 text-right">{String(i + 1).padStart(2, "0")}</span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/[0.05] border border-white/[0.08] text-white/35 uppercase tracking-wider">{a.badge}</span>
                      </div>
                      <div className="space-y-0.5 flex-1 min-w-0">
                        <div className="text-[13px] font-medium text-white/80">{a.layer}</div>
                        <div className="text-[12px] text-white/35 leading-relaxed">{a.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. CTA FINAL
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.08] p-10 sm:p-16 overflow-hidden text-center">

            {/* Subtle radial in background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600px] h-[300px] bg-gradient-radial from-blue-600/[0.06] to-transparent rounded-full" />
            </div>

            <div className="relative space-y-6 max-w-2xl mx-auto">
              <div className="text-[11px] font-mono text-white/25 uppercase tracking-[0.2em]">
                Vamos construir juntos
              </div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                Sua operação merece um sistema feito para ela.
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed">
                Seja um SaaS vertical novo ou um sistema sob medida para digitalizar processos internos complexos — a Vision Solutions projeta, desenvolve e entrega em produção.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#08090D] text-[14px] font-semibold tracking-[-0.01em] hover:bg-white/90 transition-all"
                >
                  Falar com a Vision
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/produtos"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/60 text-[14px] font-medium hover:text-white hover:bg-white/[0.07] transition-all"
                >
                  Ver nossos produtos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
