import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Termos de Uso" };

export default function TermosPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Termos de Uso" />
      <section className="px-6 py-16 sm:px-10 xl:px-20">
        <div className="mx-auto max-w-editorial text-body text-ink-dim">
          <p>
            Este texto é um placeholder. Substitua pelo conteúdo revisado
            juridicamente antes de publicar, cobrindo condições de uso do
            site e dos produtos da Vision Solutions.
          </p>
        </div>
      </section>
    </>
  );
}
