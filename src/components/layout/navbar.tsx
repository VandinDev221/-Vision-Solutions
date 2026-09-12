"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/produtos", label: "Produtos" },
  { href: "/servicos", label: "Soluções" },
  { href: "/tecnologia", label: "Engenharia" },
  { href: "/sobre", label: "Empresa" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    // Only flips state when crossing the threshold, not on every scroll tick.
    function handleScroll() {
      const shouldBeCompact = window.scrollY > 24;
      setCompact((current) => (current === shouldBeCompact ? current : shouldBeCompact));
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[padding,background-color,border-color] duration-300 ease-system ${
        compact
          ? "border-line bg-base/90 py-3 backdrop-blur-md"
          : "border-transparent bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-editorial items-center justify-between px-6 sm:px-10 xl:px-20">
        <Link
          href="/"
          className="font-technical text-body font-medium tracking-tight text-ink"
          aria-label="Vision Solutions — página inicial"
        >
          VS <span className="text-ink-faint">/ Vision Solutions</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-label text-ink-dim transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contato"
          className="rounded border border-line-strong px-4 py-2 text-label text-ink transition-colors duration-200 ease-system hover:border-ink-dim hover:bg-elevated"
        >
          Falar com a Vision
        </Link>
      </nav>
    </header>
  );
}
