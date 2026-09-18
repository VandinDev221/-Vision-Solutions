import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { coreSolutions, processSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "Soluções",
  description: "Software sob medida para o seu processo: ERPs, SaaS multi-tenant, APIs e automação.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Soluções"
        title="Software sob medida para o seu processo."
        description="Não vendemos módulos prontos. Construímos o sistema que a sua operação realmente precisa."
      />

      <section className="border-b border-line px-5 py-16 sm:px-6 xl:px-0">
        <div className="mx-auto grid max-w-editorial grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {coreSolutions.map((solution) => (
            <div key={solution.title} className="border-t border-line pt-6">
              <h2 className="text-h3 font-semibold text-ink">{solution.title}</h2>
              <p className="mt-3 max-w-sm text-body text-ink-dim">{solution.description}</p>
              <ul className="mt-5 space-y-2 font-technical text-micro text-ink-faint">
                {solution.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 xl:px-0">
        <div className="mx-auto max-w-editorial">
          <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
            Como trabalhamos
          </span>
          <h2 className="mt-4 max-w-lg text-display-2 font-semibold text-ink">
            Da compreensão do processo ao suporte contínuo.
          </h2>

          <ol className="mt-12 border-l border-line">
            {processSteps.map((step) => (
              <li key={step.number} className="relative pb-10 pl-8 last:pb-0">
                <span
                  className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-primary"
                  aria-hidden
                />
                <span className="font-technical text-micro text-ink-faint">{step.number}</span>
                <h3 className="mt-1 text-h3 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-md text-body text-ink-dim">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
