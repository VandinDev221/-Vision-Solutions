"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AdminStore, ManagedService } from "@/lib/admin-store";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Building2, Code2, Workflow, RefreshCw, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-6 h-6 text-sky-400" />,
  Building2: <Building2 className="w-6 h-6 text-cyan-400" />,
  Code2: <Code2 className="w-6 h-6 text-purple-400" />,
  Workflow: <Workflow className="w-6 h-6 text-emerald-400" />,
  Layers: <Layers className="w-6 h-6 text-amber-400" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-sky-400" />
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
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      <Navbar />

      <section className="pt-36 pb-16 bg-[#090d16] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider block mb-2">
            Serviços de Engenharia de Software
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Soluções Sob Medida para Seu Negócio
          </h1>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Estruturamos e desenvolvemos a camada de software necessária para digitalizar e acelerar a operação da sua empresa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.length === 0 ? (
            <div className="text-center py-16 text-slate-400 font-mono text-sm">
              Nenhum serviço ativo para exibição no momento.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((item, idx) => (
                <Card key={item.id || idx} className="p-7 bg-[#111726] border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 w-fit mb-5">
                      {iconMap[item.iconName] || <Code2 className="w-6 h-6 text-sky-400" />}
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3">{item.title}</h2>
                    <p className="text-xs text-slate-300 leading-relaxed mb-6">{item.description}</p>

                    <div className="pt-4 border-t border-slate-800">
                      <span className="font-mono text-slate-500 uppercase block text-[10px] mb-1.5">Entregável:</span>
                      <div className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>Arquitetura limpa com garantia de suporte e manutenção continuada.</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link href="/contato">
                      <Button variant="outline" className="w-full justify-between text-xs">
                        <span>Solicitar Proposta</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
