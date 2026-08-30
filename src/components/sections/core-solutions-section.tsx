"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AdminStore, ManagedService } from "@/lib/admin-store";
import { Card } from "@/components/ui/card";
import { Rocket, Building2, Code2, Workflow, ArrowRight } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="w-5 h-5 text-sky-400" />,
  Building2: <Building2 className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-purple-400" />,
  Workflow: <Workflow className="w-5 h-5 text-emerald-400" />
};

export const CoreSolutionsSection = () => {
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

  if (services.length === 0) return null;

  return (
    <section id="solucoes" className="relative py-20 bg-[#090d16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-2">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Soluções digitais para operações reais
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Desenvolvemos a camada tecnológica que sua empresa precisa para organizar processos, automatizar rotinas e crescer.
          </p>
        </motion.div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
            >
              <Card className="p-6 flex flex-col justify-between bg-[#111726] border-slate-800 hover:border-slate-700 transition-all duration-200 group h-full">
                <div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 w-fit mb-5">
                    {iconMap[item.iconName] || <Code2 className="w-5 h-5 text-sky-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center text-xs text-slate-400 group-hover:text-sky-400 font-medium transition-colors duration-200">
                  <Link href="/servicos" className="flex items-center gap-1">
                    <span>Saiba mais</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
