import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { techLayers } from "@/data/tech-stack";

export const metadata: Metadata = {
  title: "Engenharia",
  description: "A arquitetura técnica em camadas usada nos sistemas da Vision Solutions.",
};

export default function TecnologiaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engenharia"
        title="Arquitetura em camadas, não em improviso."
        description="Cada sistema é construído sobre a mesma base técnica sólida — da interface até a infraestrutura."
      />

      <section className="px-5 py-16 sm:px-6 xl:px-0">
        <div className="mx-auto max-w-editorial">
          <div className="relative border-l border-line pl-8">
            {techLayers.map((layer) => (
              <div key={layer.label} className="relative pb-14 last:pb-0">
                <span
                  className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded border border-line-strong bg-surface font-technical text-micro text-ink-faint"
                  aria-hidden
                >
                  {layer.label}
                </span>
                <h2 className="text-h3 font-semibold text-ink">{layer.title}</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {layer.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-line-strong bg-elevated px-2.5 py-1 font-technical text-micro text-sky"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 sm:px-6 xl:px-0">
        <div className="mx-auto max-w-editorial">
          <span className="font-technical text-micro uppercase tracking-wide text-ink-faint">
            Stack
          </span>
          <p className="mt-4 max-w-2xl text-body-lg text-ink-dim">
            Next.js 15 e React 19 no frontend, TypeScript estrito em toda a base
            de código, Three.js puro para visualização de sistemas, Framer
            Motion para interface, deploy contínuo na Vercel.
          </p>
        </div>
      </section>
    </>
  );
}
