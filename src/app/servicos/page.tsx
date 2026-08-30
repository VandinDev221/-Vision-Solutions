"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AdminStore, ManagedService } from "@/lib/admin-store";
import { Button } from "@/components/ui/button";
import { Rocket, Building2, Code2, Workflow, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-5 h-5 text-sky-400" />,
  Building2: <Building2 className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-emerald-400" />,
  Workflow: <Workflow className="w-5 h-5 text-purple-400" />
};

export default function ServicosPage() {
  const [services, setServices] = useState<ManagedService[]>([]);

  useEffect(() => {
    const loadServices = () => {
      const all = AdminStore.getServices();
      setServices(all.filter((s) => s.isVisible));
    };

    loadServices();
    window.addEventListener("vision_services_updated", loadServices);
    return () => window.removeEventListener("vision_services_updated", loadServices);
  }, []);

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 bg-[#090d16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
            Engenharia Sob Demanda
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Desenvolvimento de Software Sob Medida
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Construímos sistemas empresariais, plataformas SaaS e automações alinhadas exatamente às regras e rotinas da sua operação.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.id || idx}
                className="p-8 rounded-xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 w-fit mb-5">
                    {iconMap[service.iconName] || <Code2 className="w-5 h-5 text-sky-400" />}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Engenharia Autoral</span>
                  <Link href="/contato">
                    <Button variant="outline" size="sm" className="text-xs text-sky-400 border-sky-500/30 hover:border-sky-500">
                      Solicitar Orçamento
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* How We Build Software */}
          <div className="p-8 sm:p-10 rounded-xl bg-[#111726] border border-slate-800">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                Garantia de Qualidade
              </span>
              <h3 className="text-2xl font-bold text-white">Como entregamos valor técnico</h3>
              <p className="text-sm text-slate-300 mt-2">
                Trabalhamos com código limpo, cobertura de testes e comunicação transparente do início ao fim.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Código 100% Autoral</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Sem dependência de templates genéricos ou código descartável. O software pertence à sua empresa.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Arquitetura Escalável</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Modelagem relacional consistente no PostgreSQL com APIs tipadas e desacopladas.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Suporte Contínuo</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Acompanhamento técnico no deploy, monitoramento de performance e evolução de rotinas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
