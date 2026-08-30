"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      <Navbar />

      <section className="pt-36 pb-16 bg-[#090d16] border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Legal & Conformidade
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Termos de Uso
          </h1>
          <p className="mt-2 text-xs text-slate-400 font-mono">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#090d16] text-slate-300 text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site institucional da Vision Solutions, você concorda expressamente em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com qualquer um destes termos, não deve utilizar esta plataforma.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, marcas, logotipos, softwares, interfaces e códigos-fonte presentes neste portal são de propriedade exclusiva da Vision Solutions e estão protegidos pelas leis de propriedade intelectual vigentes no Brasil.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Uso do Conteúdo e Serviços</h2>
            <p>
              O conteúdo deste site tem caráter informativo e comercial sobre as soluções de engenharia de software e produtos SaaS da Vision Solutions. A contratação de qualquer serviço ou licenciamento de software será regida por proposta comercial ou contrato formal firmado entre as partes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância a Vision Solutions será responsável por danos indiretos, incidentais ou consequentes decorrentes do uso ou da impossibilidade de uso das informações públicas disponibilizadas neste site.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
