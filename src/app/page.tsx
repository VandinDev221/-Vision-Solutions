"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerList, StaggerItem } from "@/components/motion/StaggerList";
import { HeroWord } from "@/components/motion/HeroWord";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: "torqueos",
    name: "TorqueOS",
    category: "ERP Automotivo",
    badge: "ERP",
    color: "blue" as const,
    tagline: "Gestão completa para oficinas e centros automotivos.",
    description:
      "Multi-empresa, com Ordens de Serviço, controle de estoque de peças, financeiro integrado e app desktop Electron para uso sem navegador nos balcões.",
    stack: ["Next.js 15", "NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Electron"],
    metrics: [
      { label: "O.S. ativas", value: "18", delta: "+12%" },
      { label: "Peças em estoque", value: "247", delta: "+8%" },
      { label: "Faturamento/mês", value: "R$ 42.380", delta: "+15%" },
    ],
    tableHeaders: ["O.S.", "Cliente", "Veículo", "Status", "Valor"],
    tableRows: [
      { id: "#00128", col2: "João Silva", col3: "Honda Civic", status: "Em andamento", statusColor: "blue" as const, col5: "R$ 480" },
      { id: "#00127", col2: "Maria Souza", col3: "Fiat Uno", status: "Aguardando peça", statusColor: "amber" as const, col5: "R$ 120" },
      { id: "#00126", col2: "Carlos Lima", col3: "VW Gol", status: "Finalizado", statusColor: "emerald" as const, col5: "R$ 260" },
      { id: "#00125", col2: "Ana Costa", col3: "Toyota Corolla", status: "Em andamento", statusColor: "blue" as const, col5: "R$ 670" },
    ],
    features: [
      "Ordens de Serviço com status em tempo real",
      "Estoque de peças com alerta de mínimo",
      "Financeiro: recebimentos e despesas por OS",
      "App desktop Electron para balcão",
      "Relatórios: faturamento, técnicos, tempo de OS",
    ],
  },
  {
    id: "syndent",
    name: "SynDent",
    category: "SaaS Odontológico",
    badge: "SaaS",
    color: "violet" as const,
    tagline: "Prontuário clínico, agenda e financeiro para clínicas odontológicas.",
    description:
      "Multi-tenant com isolamento completo por clínica. Inclui prontuário digital, odontograma interativo, agendamento online, financeiro e relatórios.",
    stack: ["Next.js 15", "Fastify", "Prisma", "PostgreSQL", "Redis", "BullMQ", "MinIO"],
    metrics: [
      { label: "Pacientes hoje", value: "21", delta: "+3" },
      { label: "Clínicas ativas", value: "5", delta: "piloto" },
      { label: "Consultas/sem.", value: "142", delta: "+22%" },
    ],
    tableHeaders: ["Hora", "Paciente", "Dentista", "Procedimento", "Status"],
    tableRows: [
      { id: "09:00", col2: "Mariana Costa", col3: "Dra. Beatriz", status: "Endodontia", statusColor: "violet" as const, col5: "Em andamento" },
      { id: "09:40", col2: "Rafael Lima", col3: "Dr. Henrique", status: "Alinhadores 3D", statusColor: "blue" as const, col5: "Agendado" },
      { id: "10:20", col2: "Juliana Santos", col3: "Dra. Camila", status: "Clareamento", statusColor: "emerald" as const, col5: "Finalizado" },
      { id: "11:00", col2: "Pedro Alves", col3: "Dr. Ricardo", status: "Implante", statusColor: "amber" as const, col5: "Confirmado" },
    ],
    features: [
      "Prontuário clínico digital com histórico",
      "Odontograma interativo por dente",
      "Agendamento online com confirmação",
      "Multi-tenant com isolamento de schema",
      "Financeiro e relatórios por clínica",
    ],
  },
] as const;

type Product = (typeof PRODUCTS)[number];

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
    desc: "Campanhas WhatsApp multi-tenant com filas NATS/BullMQ, aquecimento inteligente de chips, tracking de conversão e analytics em tempo real.",
    stack: ["NestJS", "BullMQ", "NATS", "Redis", "Next.js 15"],
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500/8 border-emerald-500/15",
  },
  {
    name: "BarberCRM",
    category: "Gestão de Barbearias",
    desc: "CRM completo com agendamento online, fidelidade com pontos, notificações WhatsApp via Evolution API e relatórios financeiros.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Evolution API"],
    accent: "text-amber-400",
    accentBg: "bg-amber-500/8 border-amber-500/15",
  },
  {
    name: "AdvCargo",
    category: "Gestão Jurídica",
    desc: "Sistema para advogados: processos, prazos, audiências, financeiro e relatórios. HTTPS obrigatório com HSTS em toda a stack.",
    stack: ["React", "Vite", "Express", "PostgreSQL", "Prisma"],
    accent: "text-slate-400",
    accentBg: "bg-slate-500/8 border-slate-500/15",
  },
  {
    name: "EsperaAí",
    category: "Inteligência de Preços",
    desc: "Monitoramento de preços com histórico e recomendação de compra. Workers BullMQ para scraping contínuo e alertas de queda.",
    stack: ["Next.js", "Fastify", "BullMQ", "Redis", "PostgreSQL"],
    accent: "text-sky-400",
    accentBg: "bg-sky-500/8 border-sky-500/15",
  },
];

const ARCHITECTURE = [
  { layer: "Frontend", detail: "Next.js 15 · React 19 · TypeScript strict · Tailwind CSS", badge: "Client" },
  { layer: "API Gateway", detail: "Fastify / NestJS · Zod validation · JWT + Refresh HTTPOnly · RBAC", badge: "Server" },
  { layer: "Queue Engine", detail: "BullMQ + Redis · filas concorrentes · retry · DLQ · workers isolados", badge: "Workers" },
  { layer: "Banco de Dados", detail: "PostgreSQL 16 · Prisma ORM · migrations versionadas · seeds", badge: "Data" },
  { layer: "Multi-Tenancy", detail: "Isolamento por tenant (schema / RLS) · sem vazamento de dados", badge: "Security" },
  { layer: "Deploy", detail: "Vercel (frontend) · Render / Railway (API) · Docker Compose (local)", badge: "Infra" },
];

const PRINCIPLES = [
  { label: "Código 100% autoral", desc: "Cada linha tem intenção e propriedade. Sem boilerplates genéricos." },
  { label: "TypeScript estrito end-to-end", desc: "Do schema do banco ao componente React — tipagem em toda a stack." },
  { label: "Multi-tenant com isolamento real", desc: "Cada cliente opera em ambiente com garantias de segurança." },
  { label: "Em produção", desc: "Infraestrutura real: Vercel, Render, Railway, VPS. Não é protótipo." },
];

/* ─────────────────────────────────────────────────────────────
   SUBCOMPONENTS
───────────────────────────────────────────────────────────── */

function ProductPanel({ product }: { product: Product }) {
  return (
    <div className="rounded-xl bg-[#0B0D14] border border-white/[0.07] overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0D0F16]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[11px] text-white/25 font-mono">{product.name} — Produção</span>
        <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          online
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.05] border-b border-white/[0.06]">
        {product.metrics.map((m) => (
          <div key={m.label} className="px-4 py-3">
            <div className="text-[10px] text-white/25 font-mono uppercase tracking-wider">{m.label}</div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-[15px] font-bold text-white font-mono tracking-tight">{m.value}</span>
              <span className="text-[10px] text-emerald-400 font-mono">{m.delta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-[11px] font-mono">
          <thead>
            <tr className="border-b border-white/[0.05]">
              {product.tableHeaders.map((h) => (
                <th key={h} className="px-4 py-2.5 text-left text-[10px] text-white/20 uppercase tracking-wider font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.03]">
            {product.tableRows.map((row, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors duration-200">
                <td className="px-4 py-2.5 text-white/40">{row.id}</td>
                <td className="px-4 py-2.5 text-white/75 font-medium">{row.col2}</td>
                <td className="px-4 py-2.5 text-white/35">{row.col3}</td>
                <td className="px-4 py-2.5">
                  <span className={`px-2 py-0.5 rounded border text-[10px] ${STATUS_COLORS[row.statusColor] ?? ""}`}>{row.status}</span>
                </td>
                <td className="px-4 py-2.5 text-white/50">{row.col5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductShowcase({
  product,
  reverse = false,
  accentColor,
  accentInitial,
}: {
  product: Product;
  reverse?: boolean;
  accentColor: string;
  accentInitial: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <div className={`lg:col-span-5 space-y-5 ${reverse ? "lg:order-2" : ""}`}>
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg ${accentColor.replace("text-", "bg-").replace("400", "500/10")} border ${accentColor.replace("text-", "border-").replace("400", "500/20")} flex items-center justify-center`}>
              <span className={`${accentColor} font-black font-mono text-xs`}>{accentInitial}</span>
            </div>
            <div>
              <h3 className="text-[17px] font-bold text-white tracking-[-0.02em]">{product.name}</h3>
              <span className={`text-[11px] ${accentColor} font-mono`}>{product.category}</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-[14px] text-white/45 leading-relaxed">{product.description}</p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-1.5">
            {product.stack.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono text-white/35 bg-white/[0.04] border border-white/[0.06]">{t}</span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="pt-2 space-y-2 border-t border-white/[0.06]">
            {product.features.map((f) => (
              <div key={f} className="flex items-start gap-2.5 text-[12px] text-white/45">
                <span className={`w-1 h-1 rounded-full ${accentColor.replace("text-", "bg-").replace("400", "400/60")} shrink-0 mt-1.5`} />
                {f}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <FadeIn className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`} delay={0.2} direction="up" distance={32}>
        <ProductPanel product={product} />
      </FadeIn>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(0);
  const currentProduct = PRODUCTS[activeProduct] ?? PRODUCTS[0]!;

  return (
    <div className="min-h-screen bg-[#08090D] text-white selection:bg-blue-500/30 selection:text-white overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          1. HERO — Experience
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-20 sm:pt-28 pb-20 px-6">
        {/* Architectural grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.02) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Identity gradient — directional light, not glow blob */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-gradient-to-br from-blue-600/[0.06] via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[250px] bg-gradient-to-bl from-violet-600/[0.04] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-mono text-white/25 uppercase tracking-[0.2em]">
              <span className="w-5 h-px bg-blue-500/50" />
              Software House & SaaS Studio
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Em produção</span>
            </span>
          </motion.div>

          {/* Headline — word reveal */}
          <div className="max-w-4xl mb-6">
            <h1 className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              <HeroWord text="Construímos software para operações" delay={0.2} />
              <br />
              <span className="text-white/35">
                <HeroWord text="que já superaram planilhas." delay={0.5} />
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-[15px] text-white/40 leading-relaxed max-w-2xl mb-10"
          >
            Construímos SaaS verticais e sistemas sob medida para empresas que precisam transformar processos complexos em operação digital estruturada — do prontuário odontológico à ordem de serviço automotiva.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <Link
              href="/produtos"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-[13px] font-semibold tracking-[-0.01em] hover:bg-blue-500 transition-all duration-300"
            >
              Ver nossos produtos
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/contato"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/[0.09] text-white/60 text-[13px] font-medium hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
            >
              Construir um sistema
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Infra Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 py-4 mb-8 border-t border-b border-white/[0.05] text-[11px] font-mono text-white/25"
          >
            <span>Uptime <span className="text-emerald-400 ml-1">99.98%</span></span>
            <span>Latência média <span className="text-white/50 ml-1">42ms</span></span>
            <span>Tenants ativos <span className="text-white/50 ml-1">28</span></span>
            <span>Deploys/semana <span className="text-white/50 ml-1">12</span></span>
          </motion.div>

          {/* Product Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="space-y-4"
          >
            {/* Tabs */}
            <div className="flex items-center gap-1 bg-white/[0.03] rounded-lg p-1 w-fit border border-white/[0.06]">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActiveProduct(i)}
                  className={`relative px-4 py-1.5 rounded-md text-[12px] font-medium transition-all duration-200 ${
                    activeProduct === i
                      ? "text-white"
                      : "text-white/30 hover:text-white/55"
                  }`}
                >
                  {activeProduct === i && (
                    <motion.span
                      layoutId="product-tab"
                      className="absolute inset-0 rounded-md bg-white/[0.08]"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative">
                    {p.name}
                    <span className={`ml-1.5 text-[10px] font-mono opacity-50 ${
                      p.color === "violet" ? "text-violet-400" : "text-blue-400"
                    }`}>
                      [{p.badge}]
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* Active Product Panel — AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ProductPanel product={currentProduct} />
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. MANIFESTO — Editorial Asymmetric
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <div className="lg:col-span-5 space-y-6">
              <FadeIn>
                <div className="text-[11px] font-mono text-white/20 uppercase tracking-[0.2em]">
                  <span className="text-blue-400/60">01</span> — Nossa abordagem
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.03em]">
                  Software que resolve o problema real —{" "}
                  <span className="text-white/35">não o problema médio.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-[14px] text-white/35 leading-relaxed">
                  Softwares genéricos são projetados para o denominador comum. Quando sua operação é complexa, específica e de alta densidade, esse denominador comum falha. Construímos para a exceção, não para a regra.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="/sobre"
                  className="group inline-flex items-center gap-1.5 text-[13px] text-blue-400/70 hover:text-blue-400 transition-colors duration-300"
                >
                  Conhecer a Vision
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </FadeIn>
            </div>

            <StaggerList className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.1}>
              {PRINCIPLES.map((p) => (
                <StaggerItem key={p.label}>
                  <div className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-blue-400/70" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-[13px] font-semibold text-white/85 leading-tight">{p.label}</h3>
                        <p className="text-[12px] text-white/30 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. FLAGSHIP PRODUCTS
      ═══════════════════════════════════════════════════════ */}
      <section id="produtos" className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto space-y-20">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <FadeIn>
              <div className="space-y-3">
                <div className="text-[11px] font-mono text-white/20 uppercase tracking-[0.2em]">
                  <span className="text-blue-400/60">02</span> — Produtos flagship
                </div>
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                  Dois SaaS verticais em produção.
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/produtos" className="group text-[13px] text-white/35 hover:text-white/70 transition-colors shrink-0 flex items-center gap-1.5">
                Todos os produtos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </FadeIn>
          </div>

          {/* TorqueOS */}
          <ProductShowcase product={PRODUCTS[0]!} accentColor="text-blue-400" accentInitial="TO" />

          <div className="border-t border-white/[0.05]" />

          {/* SynDent */}
          <ProductShowcase product={PRODUCTS[1]!} reverse accentColor="text-violet-400" accentInitial="SD" />

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. ECOSYSTEM
      ═══════════════════════════════════════════════════════ */}
      <section id="solucoes" className="py-24 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <FadeIn>
              <div className="space-y-3">
                <div className="text-[11px] font-mono text-white/20 uppercase tracking-[0.2em]">
                  <span className="text-blue-400/60">03</span> — Ecossistema
                </div>
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                  Mais soluções em produção.
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/produtos" className="group text-[13px] text-white/35 hover:text-white/70 transition-colors shrink-0 flex items-center gap-1.5">
                Portfólio completo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </FadeIn>
          </div>

          <StaggerList className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.1}>
            {ECOSYSTEM.map((p) => (
              <StaggerItem key={p.name}>
                <div className="group p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 space-y-4 h-full">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1.5">
                      <h3 className="text-[15px] font-semibold text-white/85 tracking-[-0.01em]">{p.name}</h3>
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono border ${p.accent} ${p.accentBg}`}>
                        {p.category}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/15 group-hover:text-white/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-0.5" />
                  </div>
                  <p className="text-[13px] text-white/35 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.stack.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono text-white/25 bg-white/[0.03] border border-white/[0.05]">{t}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. ENGINEERING & INTERACTIVE ARCHITECTURE PIPELINE
      ═══════════════════════════════════════════════════════ */}
      <section id="engenharia" className="py-28 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <FadeIn>
                <div className="text-[11px] font-mono text-white/20 uppercase tracking-[0.2em]">
                  <span className="text-blue-400/60">04</span> — Engenharia & Arquitetura
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.03em]">
                  Arquitetura que sustenta{" "}
                  <span className="text-white/35">operações de missão crítica.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-[14px] text-white/35 leading-relaxed">
                  Fluxo de dados previsível, tipagem estrita de ponta a ponta e processamento assíncrono isolado. Do evento no navegador ao registro relacional no PostgreSQL, cada etapa é projetada para resiliência.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Link
                  href="/tecnologia"
                  className="group inline-flex items-center gap-1.5 text-[13px] text-blue-400/70 hover:text-blue-400 transition-colors duration-300"
                >
                  Arquitetura completa
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </Link>
              </FadeIn>
            </div>

            <FadeIn className="lg:col-span-7" delay={0.2} direction="up" distance={28}>
              <div className="rounded-xl bg-[#0B0D14] border border-white/[0.07] overflow-hidden p-6 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-2 text-[11px] text-white/30 font-mono">data-pipeline.topology.ts</span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400/70 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    Fluxo End-to-End
                  </span>
                </div>

                {/* Interactive Flow Pipeline Nodes */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
                  {[
                    { step: "01", name: "Frontend", tech: "Next.js 15", tag: "Client" },
                    { step: "02", name: "API Gateway", tech: "Fastify / Nest", tag: "REST/WS" },
                    { step: "03", name: "Queue Engine", tech: "BullMQ / Redis", tag: "Queue" },
                    { step: "04", name: "Async Worker", tech: "Isolated Jobs", tag: "Workers" },
                    { step: "05", name: "Database", tech: "PostgreSQL 16", tag: "Prisma" },
                  ].map((node, i) => (
                    <div
                      key={node.name}
                      className="group p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300 relative text-left"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-mono text-white/20">{node.step}</span>
                        <span className="text-[9px] font-mono text-blue-400/60 uppercase">{node.tag}</span>
                      </div>
                      <div className="text-[12px] font-semibold text-white/85 group-hover:text-white transition-colors">{node.name}</div>
                      <div className="text-[10px] text-white/30 font-mono mt-0.5">{node.tech}</div>
                    </div>
                  ))}
                </div>

                {/* Technical Stack Layer Breakdown */}
                <StaggerList className="divide-y divide-white/[0.04] pt-2" stagger={0.05}>
                  {ARCHITECTURE.map((a, i) => (
                    <StaggerItem key={a.layer}>
                      <div className="flex items-start gap-4 py-3 hover:bg-white/[0.02] transition-colors duration-200 px-2 rounded">
                        <div className="flex items-center gap-3 shrink-0 w-28">
                          <span className="text-[11px] text-white/15 font-mono w-4 text-right">{String(i + 1).padStart(2, "0")}</span>
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-white/[0.04] border border-white/[0.07] text-white/30 uppercase tracking-wider">{a.badge}</span>
                        </div>
                        <div className="space-y-0.5 flex-1 min-w-0">
                          <div className="text-[13px] font-medium text-white/75">{a.layer}</div>
                          <div className="text-[12px] text-white/30 leading-relaxed">{a.detail}</div>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerList>

              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.07] p-10 sm:p-16 overflow-hidden text-center">
              <div className="relative space-y-6 max-w-2xl mx-auto">
                <div className="text-[11px] font-mono text-white/20 uppercase tracking-[0.2em]">
                  <span className="text-blue-400/60">05</span> — Vamos construir juntos
                </div>
                <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                  Sua operação merece um sistema{" "}
                  <span className="text-white/35">feito para ela.</span>
                </h2>
                <p className="text-[15px] text-white/35 leading-relaxed">
                  Seja um SaaS vertical ou um sistema sob medida — a Vision Solutions projeta, desenvolve e entrega em produção.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <Link
                    href="/contato"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white text-[14px] font-semibold tracking-[-0.01em] hover:bg-blue-500 transition-all duration-300"
                  >
                    Falar com a Vision
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                  <Link
                    href="/produtos"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/50 text-[14px] font-medium hover:text-white hover:bg-white/[0.07] transition-all duration-300"
                  >
                    Ver nossos produtos
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
