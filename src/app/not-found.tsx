import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />
      <div className="py-32 px-4 text-center max-w-2xl mx-auto my-auto">
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 w-fit mx-auto mb-6">
          <FileQuestion className="w-10 h-10 text-indigo-400" />
        </div>
        <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block mb-2">Erro 404</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Página não encontrada
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          O endereço que você tentou acessar não existe ou foi movido. Verifique a URL ou navegue de volta para a página inicial.
        </p>
        <Link href="/">
          <Button variant="glow" size="md" className="font-semibold">
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Voltar para a Vision Solutions
          </Button>
        </Link>
      </div>
      <Footer />
    </main>
  );
}
