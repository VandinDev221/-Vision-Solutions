import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacidadePage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Política de Privacidade" />
      <section className="px-6 py-16 sm:px-10 xl:px-20">
        <div className="mx-auto max-w-editorial text-body text-ink-dim">
          <p>
            Este texto é um placeholder. Substitua pelo conteúdo revisado
            juridicamente antes de publicar, cobrindo coleta, uso,
            armazenamento e direitos do titular sobre os dados tratados pela
            Vision Solutions, conforme a LGPD.
          </p>
        </div>
      </section>
    </>
  );
}
