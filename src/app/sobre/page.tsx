import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { principles } from "@/data/principles";

export const metadata: Metadata = {
  title: "Empresa",
  description: "Quem é a Vision Solutions e como a empresa pensa engenharia de software.",
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Empresa"
        title="Uma software house que constrói sua própria engenharia."
        description="Construímos SaaS verticais e sistemas sob medida para empresas que precisam transformar processos complexos em operação digital estruturada, rápida e estável."
      />

      <section className="border-b border-line px-5 py-16 sm:px-6 xl:px-0">
        <div className="mx-auto grid max-w-editorial grid-cols-1 gap-10 md:grid-cols-12">
          <p className="text-body-lg text-ink-dim md:col-span-7">
            A maioria dos gargalos operacionais não é falta de esforço da
            equipe, mas a ausência de um sistema que reflita as regras reais
            do negócio. É esse o problema que resolvemos: não vendemos
            software genérico configurado para parecer sob medida — projetamos
            e construímos o sistema a partir do processo real da operação.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 xl:px-0">
        <div className="mx-auto max-w-editorial">
          <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
            Princípios
          </span>

          <div className="mt-8 divide-y divide-line">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="grid grid-cols-1 gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <h2 className="text-h3 font-semibold text-ink md:col-span-4">
                  {principle.title}
                </h2>
                <p className="text-body text-ink-dim md:col-span-8">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
