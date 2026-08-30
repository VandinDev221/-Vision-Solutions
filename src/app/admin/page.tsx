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
    if (window.confirm("Deseja restaurar as configurações padrão de visibilidade e produtos?")) {
      AdminStore.resetDefaults();
      setServices(AdminStore.getServices());
      setProducts(AdminStore.getProducts());
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between selection:bg-sky-500 selection:text-slate-950">
        <Navbar />
        <div className="py-32 px-4 max-w-md mx-auto w-full my-auto">
          <Card className="p-8 bg-[#111726] border-slate-800 shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-4 text-sky-400">
                <Lock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">Acesso Restrito</span>
              <h1 className="text-2xl font-bold text-white">Painel do CEO</h1>
              <p className="text-xs text-slate-400 mt-1">Gerencie a visibilidade dos serviços e produtos no site público.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">
                  Chave Mestra de Acesso
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="Digite sua chave de acesso"
                    value={passkeyInput}
                    onChange={(e) => setPasskeyInput(e.target.value)}
                    className="w-full bg-[#090d16] border border-slate-800 rounded-md pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
                  />
                </div>
              </div>

              {authError && (
                <div className="p-3 rounded-md bg-rose-950/60 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Chave incorreta. Tente novamente.</span>
                </div>
              )}

              <Button variant="primary" type="submit" className="w-full justify-center font-semibold">
                Acessar Painel
              </Button>
            </form>
          </Card>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      <Navbar />

      <section className="pt-36 pb-8 bg-[#090d16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  CEO Master Dashboard
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight mt-1">
                Controle de Visibilidade do Site
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={handleResetDefaults} className="text-xs text-slate-300">
                <RotateCcw className="w-3.5 h-3.5 mr-1" />
                Restaurar Padrão
              </Button>
              <Button variant="secondary" size="sm" onClick={handleLogout} className="text-xs">
                <LogOut className="w-3.5 h-3.5 mr-1" />
                Sair
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-8 border-b border-slate-800">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-4 py-2.5 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === "services"
                  ? "border-sky-400 text-sky-400 bg-slate-900/40"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              Serviços & Soluções ({services.filter((s) => s.isVisible).length}/{services.length} Visíveis)
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`px-4 py-2.5 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer ${
                activeTab === "products"
                  ? "border-sky-400 text-sky-400 bg-slate-900/40"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              Produtos SaaS ({products.filter((p) => p.isVisible).length}/{products.length} Visíveis)
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "services" ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Card key={service.id} className="p-6 bg-[#111726] border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-white">{service.title}</h3>
                          <span
                            className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border mt-1 inline-block ${
                              service.isVisible
                                ? "bg-emerald-950 text-emerald-300 border-emerald-800"
                                : "bg-slate-900 text-slate-500 border-slate-800"
                            }`}
                          >
                            {service.isVisible ? "Exibido no Site" : "Ocultado"}
                          </span>
                        </div>

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

                      <p className="text-xs text-slate-400 leading-relaxed">{service.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="p-6 bg-[#111726] border-slate-800 flex flex-col justify-between">
                    <div>
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

                      <div className="p-3 rounded-md bg-[#090d16] border border-slate-800 mb-4 space-y-2">
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
