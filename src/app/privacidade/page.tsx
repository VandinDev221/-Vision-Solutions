"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="pt-36 pb-16 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Legal & Conformidade
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Política de Privacidade
          </h1>
          <p className="mt-2 text-xs text-slate-400 font-mono">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-950 text-slate-300 text-sm leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Informações Gerais</h2>
            <p>
              A Vision Solutions compromete-se com a transparência e a proteção dos dados pessoais dos usuários que acessam nosso portal corporativo. Esta Política de Privacidade descreve como tratamos as informações coletadas em nossa plataforma.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Dados Coletados</h2>
            <p>
              Coletamos apenas as informações voluntariamente fornecidas pelos usuários por meio dos canais de contato e formulários de orçamento:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Nome completo;</li>
              <li>Endereço de e-mail;</li>
              <li>Número de telefone/WhatsApp;</li>
              <li>Descrição ou requisitos do projeto solicitado.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Finalidade do Tratamento de Dados</h2>
            <p>
              Os dados coletados são utilizados estritamente para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Responder a solicitações de orçamento e dúvidas comerciais;</li>
              <li>Agendar reuniões de alinhamento e demonstrações de produtos;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Armazenamento e Segurança</h2>
            <p>
              Implementamos medidas técnicas e administrativas de segurança para proteger seus dados pessoais contra acessos não autorizados, vazamentos ou alterações indevidas. Não comercializamos nem compartilhamos seus dados com terceiros para fins publicitários.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Direitos do Titular</h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você pode solicitar a confirmação, acesso, correção ou exclusão dos seus dados pessoais armazenados a qualquer momento entrando em contato conosco via e-mail ou WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
