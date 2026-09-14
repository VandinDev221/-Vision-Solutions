import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { ContactForm } from "@/components/sections/contact-form";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Vision Solutions sobre o sistema que sua operação precisa.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Construir um sistema."
        description="Conte sobre o processo que hoje não cabe em software genérico. Respondemos diretamente, sem camadas de atendimento."
      />

      <section className="px-6 py-16 sm:px-10 xl:px-20">
        <div className="mx-auto grid max-w-editorial grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="text-label text-ink-faint">Contato direto</p>
            <ul className="mt-4 space-y-3 text-body text-ink-dim">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-ink">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.whatsapp} className="hover:text-ink">
                  WhatsApp
                </a>
              </li>
              <li>{contact.location}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
