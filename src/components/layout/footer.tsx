import Link from "next/link";
import { contact } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-base">
      <div className="mx-auto grid max-w-editorial grid-cols-1 gap-10 px-6 py-16 sm:px-10 md:grid-cols-12 xl:px-20">
        <div className="md:col-span-5">
          <p className="font-technical text-body font-medium text-ink">
            VS <span className="text-ink-faint">/ Vision Solutions</span>
          </p>
          <p className="mt-4 max-w-sm text-body text-ink-dim">
            Software para operações que não cabem em software genérico.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="text-label text-ink-faint">Empresa</p>
          <ul className="mt-4 space-y-3 text-body text-ink-dim">
            <li><Link href="/produtos" className="hover:text-ink">Produtos</Link></li>
            <li><Link href="/servicos" className="hover:text-ink">Soluções</Link></li>
            <li><Link href="/tecnologia" className="hover:text-ink">Engenharia</Link></li>
            <li><Link href="/sobre" className="hover:text-ink">Sobre</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-label text-ink-faint">Contato</p>
          <ul className="mt-4 space-y-3 text-body text-ink-dim">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-ink">
                {contact.email}
              </a>
            </li>
            <li>{contact.location}</li>
            <li className="flex gap-4 pt-1">
              <a href={contact.social.linkedin} className="hover:text-ink">LinkedIn</a>
              <a href={contact.social.github} className="hover:text-ink">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6 sm:px-10 xl:px-20">
        <div className="mx-auto flex max-w-editorial flex-col gap-2 text-micro text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Vision Solutions. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <Link href="/privacidade" className="hover:text-ink-dim">Privacidade</Link>
            <Link href="/termos" className="hover:text-ink-dim">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
