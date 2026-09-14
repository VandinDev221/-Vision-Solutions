import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { saasProducts } from "@/data/saas-products";

export const metadata: Metadata = {
  title: "Produtos",
  description: "SaaS verticais construídos e mantidos pela Vision Solutions.",
};

export default function ProdutosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Produtos"
        title="SaaS verticais para operações específicas."
        description="Cada produto nasce de um processo real que não cabia em software genérico. Alguns já estão em produção, outros em desenvolvimento ativo."
      />

      <section className="px-6 py-16 sm:px-10 xl:px-20">
        <div className="mx-auto max-w-editorial divide-y divide-line">
          {saasProducts.map((product) => (
            <article
              key={product.slug}
              className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:items-start"
            >
              <div className="md:col-span-4">
                <h2 className="text-h3 font-semibold text-ink">{product.name}</h2>
                <p className="mt-1 text-body text-ink-dim">{product.category}</p>
              </div>

              <div className="md:col-span-3">
                <span
                  className={`inline-flex items-center gap-2 text-label ${
                    product.status === "Em Produção" ? "text-emerald" : "text-sky"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      product.status === "Em Produção" ? "bg-emerald" : "bg-sky"
                    }`}
                    aria-hidden
                  />
                  {product.status}
                </span>
              </div>

              <div className="md:col-span-5">
                <p className="text-label text-ink-faint">Módulos</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {product.modules.map((module) => (
                    <li
                      key={module}
                      className="rounded border border-line-strong px-2.5 py-1 font-technical text-micro text-ink-dim"
                    >
                      {module}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
