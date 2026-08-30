"use client";

import React, { useState, useEffect } from "react";
import { AdminStore, ManagedService, ManagedSaaSProduct, CEO_DEFAULT_KEY } from "@/lib/admin-store";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  LogOut,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  SlidersHorizontal,
  Sparkles,
  KeyRound
} from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkeyInput, setPasskeyInput] = useState("");
  const [authError, setAuthError] = useState(false);

  const [activeTab, setActiveTab] = useState<"services" | "products">("services");
  const [services, setServices] = useState<ManagedService[]>([]);
  const [products, setProducts] = useState<ManagedSaaSProduct[]>([]);

  useEffect(() => {
    const authed = AdminStore.isAuthenticated();
    setIsAuthenticated(authed);
    if (authed) {
      setServices(AdminStore.getServices());
      setProducts(AdminStore.getProducts());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (AdminStore.login(passkeyInput)) {
      setIsAuthenticated(true);
      setAuthError(false);
      setServices(AdminStore.getServices());
      setProducts(AdminStore.getProducts());
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    AdminStore.logout();
    setIsAuthenticated(false);
    setPasskeyInput("");
  };

  const handleToggleService = (id: string) => {
    const updated = AdminStore.toggleServiceVisibility(id);
    setServices(updated);
  };

  const handleToggleProduct = (id: string) => {
    const updated = AdminStore.toggleProductVisibility(id);
    setProducts(updated);
  };

  const handleToggleProductFeatured = (id: string) => {
    const updated = AdminStore.toggleProductFeatured(id);
    setProducts(updated);
  };

  const handleUpdateProductStatus = (id: string, status: "Produção" | "Piloto" | "Disponível") => {
    const updated = AdminStore.updateProductStatus(id, status);
    setProducts(updated);
  };

  const handleResetDefaults = () => {
    if (confirm("Deseja restaurar todas as configurações de visibilidade para o padrão de fábrica?")) {
      AdminStore.resetDefaults();
      setServices(AdminStore.getServices());
      setProducts(AdminStore.getProducts());
    }
  };

  // If Not Authenticated: Render Password Security Gate
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between">
        <Navbar />
        <div className="py-32 px-4 max-w-md mx-auto my-auto w-full">
          <Card className="p-8 bg-[#111726] border-slate-800 shadow-2xl">
            <div className="text-center space-y-3 mb-6">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 w-fit mx-auto">
                <ShieldCheck className="w-8 h-8 text-sky-400" />
              </div>
              <h1 className="text-xl font-bold text-white">Painel do CEO — Vision Solutions</h1>
              <p className="text-xs text-slate-400">
                Área restrita de controle executivo para gerenciar a exibição de serviços e produtos no site.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>Chave de Acesso Master *</span>
                  <span className="text-[10px] font-mono text-slate-500">Master Key</span>
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="Digite a chave de acesso do CEO..."
                    value={passkeyInput}
                    onChange={(e) => {
                      setPasskeyInput(e.target.value);
                      setAuthError(false);
                    }}
                    className="w-full bg-[#090d16] border border-slate-800 rounded-md pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                  />
                </div>
              </div>

              {authError && (
                <div className="p-3 rounded-md bg-rose-950/60 border border-rose-800/80 text-xs text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Chave de acesso incorreta. Tente novamente.</span>
                </div>
              )}

              <Button variant="primary" size="lg" type="submit" className="w-full font-semibold">
                <Lock className="w-4 h-4 mr-1.5" />
                Acessar Painel Executivo
              </Button>

              <div className="pt-3 text-center">
                <span className="text-[11px] font-mono text-slate-500 block">
                  Chave padrão de demonstração: <code className="text-sky-400 font-bold">{CEO_DEFAULT_KEY}</code>
                </span>
              </div>
            </form>
          </Card>
        </div>
        <Footer />
      </main>
    );
  }

  // Authenticated CEO Dashboard View
  const visibleServicesCount = services.filter((s) => s.isVisible).length;
  const visibleProductsCount = products.filter((p) => p.isVisible).length;

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      <Navbar />

      <section className="pt-36 pb-12 bg-[#090d16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                  CEO Control Center
                </span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Autenticado
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                Painel Executivo de Gestão do Site
              </h1>
              <p className="mt-1 text-xs text-slate-400">
                Selecione quais serviços e produtos SaaS ficam visíveis publicamente no site em tempo real.
              </p>
            </div>

            {/* Quick Actions & Logout */}
            <div className="flex items-center gap-3">
              <Link href="/" target="_blank">
                <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                  <span>Ver Site Público</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </Link>

              <Button variant="secondary" size="sm" onClick={handleResetDefaults} className="gap-1.5 text-xs text-amber-300 border-amber-800/60 hover:bg-amber-950/40">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restaurar Padrão</span>
              </Button>

              <Button variant="outline" size="sm" onClick={handleLogout} className="gap-1.5 text-xs text-rose-400 border-rose-900/60 hover:bg-rose-950/40">
                <LogOut className="w-3.5 h-3.5" />
                <span>Sair</span>
              </Button>
            </div>
          </div>

          {/* Stat Summary Metrics Header */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <Card className="p-4 bg-[#111726] border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Serviços Ativos no Site</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-2xl font-extrabold text-white font-mono">{visibleServicesCount} de {services.length}</span>
                <span className="text-xs text-sky-400 font-mono font-semibold">
                  {Math.round((visibleServicesCount / services.length) * 100)}% Exibidos
                </span>
              </div>
            </Card>

            <Card className="p-4 bg-[#111726] border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">SaaS Ativos no Site</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono">{visibleProductsCount} de {products.length}</span>
                <span className="text-xs text-cyan-400 font-mono font-semibold">
                  {Math.round((visibleProductsCount / products.length) * 100)}% Exibidos
                </span>
              </div>
            </Card>

            <Card className="p-4 bg-[#111726] border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Nível de Acesso</span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-base font-bold text-emerald-400 font-mono">CEO / Diretor</span>
                <span className="text-[10px] font-mono text-slate-500">Chave Master Ativa</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Control Dashboard Content */}
      <section className="py-12 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === "services"
                  ? "bg-slate-800 text-sky-400 border border-slate-700 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Serviços de Engenharia ({services.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("products")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === "products"
                  ? "bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Produtos SaaS & Licenciamento ({products.length})</span>
            </button>
          </div>

          {/* Tab 1: Services Management */}
          {activeTab === "services" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Controle de Exibição dos Serviços no Site</h2>
                <span className="text-xs text-slate-400 font-mono">
                  Altere as chaves para publicar ou ocultar serviços na Home e na página /servicos.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={`p-5 transition-all ${
                      service.isVisible
                        ? "bg-[#111726] border-slate-800"
                        : "bg-slate-950/80 border-slate-900 opacity-60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-white">{service.title}</h3>
                          <span
                            className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${
                              service.isVisible
                                ? "bg-emerald-950 text-emerald-300 border-emerald-800"
                                : "bg-slate-900 text-slate-500 border-slate-800"
                            }`}
                          >
                            {service.isVisible ? "Exibido no Site" : "Ocultado"}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed mt-1">{service.description}</p>
                      </div>

                      {/* Toggle Switch */}
                      <button
                        onClick={() => handleToggleService(service.id)}
                        className={`p-2.5 rounded-lg border transition-all cursor-pointer shrink-0 ${
                          service.isVisible
                            ? "bg-sky-950 text-sky-300 border-sky-800 hover:bg-sky-900"
                            : "bg-slate-900 text-slate-500 border-slate-800 hover:bg-slate-800 hover:text-slate-300"
                        }`}
                        title={service.isVisible ? "Clique para ocultar do site" : "Clique para exibir no site"}
                      >
                        {service.isVisible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: SaaS Products Management */}
          {activeTab === "products" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Controle de Exibição dos Produtos SaaS</h2>
                <span className="text-xs text-slate-400 font-mono">
                  Gerencie quais produtos aparecem no site, status e destaques do Hero.
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className={`p-6 transition-all flex flex-col justify-between ${
                      product.isVisible
                        ? "bg-[#111726] border-slate-800"
                        : "bg-slate-950/80 border-slate-900 opacity-60"
                    }`}
                  >
                    <div>
                      {/* Product Header & Toggle */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-white">{product.name}</h3>
                            <span
                              className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${
                                product.isVisible
                                  ? "bg-emerald-950 text-emerald-300 border-emerald-800"
                                  : "bg-slate-900 text-slate-500 border-slate-800"
                              }`}
                            >
                              {product.isVisible ? "Exibido no Site" : "Ocultado"}
                            </span>
                          </div>
                          <span className="text-xs text-slate-400 font-medium block mt-0.5">{product.tagline}</span>
                        </div>

                        <button
                          onClick={() => handleToggleProduct(product.id)}
                          className={`p-2.5 rounded-lg border transition-all cursor-pointer shrink-0 ${
                            product.isVisible
                              ? "bg-cyan-950 text-cyan-300 border-cyan-800 hover:bg-cyan-900"
                              : "bg-slate-900 text-slate-500 border-slate-800 hover:bg-slate-800 hover:text-slate-300"
                          }`}
                          title={product.isVisible ? "Clique para ocultar do site" : "Clique para exibir no site"}
                        >
                          {product.isVisible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                        </button>
                      </div>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">{product.description}</p>

                      {/* Status Selector */}
                      <div className="p-3 rounded-md bg-slate-950 border border-slate-800 mb-4 space-y-2">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block">Estágio de Produção:</span>
                        <div className="flex items-center gap-2">
                          {(["Produção", "Piloto", "Disponível"] as const).map((st) => (
                            <button
                              key={st}
                              onClick={() => handleUpdateProductStatus(product.id, st)}
                              className={`px-2.5 py-1 rounded text-xs font-mono cursor-pointer transition-colors ${
                                product.status === st
                                  ? "bg-slate-800 text-sky-400 font-bold border border-sky-800"
                                  : "bg-slate-900 text-slate-500 border border-slate-800 hover:text-slate-300"
                              }`}
                            >
                              {st}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Featured Toggle Footer */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-mono">Destaque na Seção Principal:</span>
                      <button
                        onClick={() => handleToggleProductFeatured(product.id)}
                        className={`px-3 py-1 rounded-md text-xs font-mono font-semibold transition-colors cursor-pointer ${
                          product.isFeatured
                            ? "bg-indigo-950 text-indigo-300 border border-indigo-800"
                            : "bg-slate-900 text-slate-500 border border-slate-800 hover:text-slate-300"
                        }`}
                      >
                        {product.isFeatured ? "Destaque Ativo" : "Secundário"}
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
