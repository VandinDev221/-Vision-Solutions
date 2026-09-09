"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Wrench,
  Stethoscope,
  Clock,
  Search,
  Plus
} from "lucide-react";

export const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"torqueos" | "syndent">("torqueos");
  const [subTab, setSubTab] = useState<"os" | "pecas" | "caixa">("os");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B0E14] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Editorial Positioning */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                Software House & SaaS Studio
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-[1.12]">
                Software para operações que não cabem em software genérico.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Construímos SaaS verticais e sistemas sob medida para empresas que precisam transformar processos complexos em operação digital estruturada, rápida e estável.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
              >
                <span>Conhecer nossos produtos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium text-sm transition-colors"
              >
                <span>Construir um sistema</span>
              </Link>
            </div>

            {/* Verifiable Engineering Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-left">
              <div>
                <span className="block text-xl font-bold font-mono text-white">100%</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Código Autoral</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-white">Multi-Tenant</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Isolamento Seguro</span>
              </div>
              <div>
                <span className="block text-xl font-bold font-mono text-white">TypeScript</span>
                <span className="text-xs text-slate-400 mt-0.5 block">Tipagem Estrita</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Operating Product UI Component */}
          <div className="lg:col-span-7">
            <div className="rounded-lg bg-[#111622] border border-white/10 shadow-2xl overflow-hidden text-slate-200">
              {/* Product Switcher Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0E131E] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("torqueos")}
                    className={`px-3 py-1.5 rounded text-xs font-medium font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                      activeTab === "torqueos"
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    TorqueOS [ERP]
                  </button>
                  <button
                    onClick={() => setActiveTab("syndent")}
                    className={`px-3 py-1.5 rounded text-xs font-medium font-mono flex items-center gap-1.5 transition-colors cursor-pointer ${
                      activeTab === "syndent"
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Stethoscope className="w-3.5 h-3.5" />
                    SynDent [SaaS]
                  </button>
                </div>

                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                  Ambiente de Produção
                </span>
              </div>

              {/* Product Workspace Body */}
              <div className="p-5 space-y-4">
                {activeTab === "torqueos" ? (
                  <div className="space-y-4">
                    {/* Header Controls */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
                      <div>
                        <h2 className="text-sm font-bold text-white flex items-center gap-2">
                          TorqueOS AutoCenter
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                            Ativo
                          </span>
                        </h2>
                        <p className="text-xs text-slate-400">Oficina Principal • 18 O.S. no pátio hoje</p>
                      </div>

                      {/* Sub Tabs */}
                      <div className="flex items-center gap-1 bg-[#0B0E14] p-1 rounded border border-white/5 text-xs font-mono">
                        <button
                          onClick={() => setSubTab("os")}
                          className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                            subTab === "os" ? "bg-slate-800 text-white font-semibold" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          Ordens de Serviço
                        </button>
                        <button
                          onClick={() => setSubTab("pecas")}
                          className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                            subTab === "pecas" ? "bg-slate-800 text-white font-semibold" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          Peças
                        </button>
                        <button
                          onClick={() => setSubTab("caixa")}
                          className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                            subTab === "caixa" ? "bg-slate-800 text-white font-semibold" : "text-slate-400 hover:text-white"
                          }`}
                        >
                          Financeiro
                        </button>
                      </div>
                    </div>

                    {/* Operational Table */}
                    {subTab === "os" && (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-mono">
                          <thead>
                            <tr className="border-b border-white/10 text-slate-400 text-[11px]">
                              <th className="pb-2 font-medium">Nº O.S.</th>
                              <th className="pb-2 font-medium">Veículo / Cliente</th>
                              <th className="pb-2 font-medium">Serviço</th>
                              <th className="pb-2 font-medium">Status</th>
                              <th className="pb-2 font-medium text-right">Valor</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/[0.02]">
                              <td className="py-2.5 text-white font-bold">#4892</td>
                              <td className="py-2.5 text-slate-200">Toyota Corolla (Carlos M.)</td>
                              <td className="py-2.5 text-slate-300">Revisão 60k + Freios</td>
                              <td className="py-2.5">
                                <span className="px-2 py-0.5 rounded text-[10px] bg-blue-950 text-blue-400 border border-blue-800">
                                  Em Execução
                                </span>
                              </td>
                              <td className="py-2.5 text-right text-emerald-400 font-bold">R$ 1.840,00</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02]">
                              <td className="py-2.5 text-white font-bold">#4891</td>
                              <td className="py-2.5 text-slate-200">Honda Civic (Amanda R.)</td>
                              <td className="py-2.5 text-slate-300">Troca Amortecedores</td>
                              <td className="py-2.5">
                                <span className="px-2 py-0.5 rounded text-[10px] bg-amber-950 text-amber-400 border border-amber-800">
                                  Aguardando Peça
                                </span>
                              </td>
                              <td className="py-2.5 text-right text-emerald-400 font-bold">R$ 2.450,00</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02]">
                              <td className="py-2.5 text-white font-bold">#4890</td>
                              <td className="py-2.5 text-slate-200">Jeep Compass (Eduardo S.)</td>
                              <td className="py-2.5 text-slate-300">Diagnóstico Injeção</td>
                              <td className="py-2.5">
                                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800">
                                  Finalizado
                                </span>
                              </td>
                              <td className="py-2.5 text-right text-emerald-400 font-bold">R$ 720,00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    )}

                    {subTab === "pecas" && (
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between p-2.5 rounded bg-[#0E131E] border border-white/5">
                          <div>
                            <span className="font-bold text-white block">COD-8821 • Filtro de Óleo Motor 1.8 Flex</span>
                            <span className="text-[11px] text-slate-400">Compatível: Corolla / Yaris / Etios</span>
                          </div>
                          <span className="text-emerald-400 font-bold">24 em estoque</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded bg-[#0E131E] border border-white/5">
                          <div>
                            <span className="font-bold text-white block">COD-1904 • Jogo Velas Iridium NGK</span>
                            <span className="text-[11px] text-slate-400">Compatível: Linha Honda / Civic / Fit</span>
                          </div>
                          <span className="text-emerald-400 font-bold">12 em estoque</span>
                        </div>
                      </div>
                    )}

                    {subTab === "caixa" && (
                      <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                        <div className="p-3 rounded bg-[#0E131E] border border-white/5">
                          <span className="text-slate-400 text-[10px] block uppercase">Faturamento Dia</span>
                          <span className="text-base font-bold text-emerald-400 block mt-1">R$ 14.820,00</span>
                        </div>
                        <div className="p-3 rounded bg-[#0E131E] border border-white/5">
                          <span className="text-slate-400 text-[10px] block uppercase">Recebido via Pix</span>
                          <span className="text-base font-bold text-white block mt-1">R$ 9.400,00</span>
                        </div>
                        <div className="p-3 rounded bg-[#0E131E] border border-white/5">
                          <span className="text-slate-400 text-[10px] block uppercase">Cartão / Faturado</span>
                          <span className="text-base font-bold text-white block mt-1">R$ 5.420,00</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* SynDent Real Clinical Workspace */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div>
                        <h2 className="text-sm font-bold text-white flex items-center gap-2">
                          SynDent Odontologia Integrada
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                            Clínica Principal
                          </span>
                        </h2>
                        <p className="text-xs text-slate-400">Paciente: Mariana Costa (32 anos) • Dr. Henrique</p>
                      </div>

                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        Confirmado WhatsApp
                      </span>
                    </div>

                    {/* Clinical Dental Chart & Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded bg-[#0E131E] border border-white/5 space-y-2">
                        <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                          Odontograma Gráfico Ativo
                        </span>
                        <div className="flex items-center gap-2 font-mono text-xs">
                          <div className="p-2 rounded bg-[#0B0E14] border border-blue-800 text-blue-300 font-bold">
                            Dente 16
                          </div>
                          <div>
                            <span className="text-white font-bold block">Endodontia (Canal)</span>
                            <span className="text-slate-400 text-[11px]">Face Oclusal restaurada</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded bg-[#0E131E] border border-white/5 space-y-2">
                        <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
                          Próximos Horários Hoje
                        </span>
                        <div className="space-y-1.5 font-mono text-[11px]">
                          <div className="flex items-center justify-between text-slate-300">
                            <span>09:30 - Mariana Costa</span>
                            <span className="text-emerald-400">Em Atendimento</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-300">
                            <span>10:30 - Rafael Lima</span>
                            <span className="text-blue-400">Na Recepção</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Real Architecture Strip */}
              <div className="px-5 py-3 bg-[#0E131E] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Stack: Next.js 15 • Fastify • PostgreSQL 16</span>
                <span className="text-slate-300">Multi-Tenant com Schemas Isolados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
