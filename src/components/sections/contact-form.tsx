"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/data/contact";

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Construir um sistema — ${company || name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmpresa: ${company}\n\n${message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
      <div>
        <label htmlFor="name" className="text-label text-ink-faint">
          Nome
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 w-full rounded border border-line-strong bg-surface px-4 py-3 text-body text-ink outline-none transition-colors duration-200 focus-visible:border-sky"
        />
      </div>

      <div>
        <label htmlFor="company" className="text-label text-ink-faint">
          Empresa
        </label>
        <input
          id="company"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          className="mt-2 w-full rounded border border-line-strong bg-surface px-4 py-3 text-body text-ink outline-none transition-colors duration-200 focus-visible:border-sky"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-label text-ink-faint">
          Conte sobre o processo que você quer transformar em sistema
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-2 w-full resize-none rounded border border-line-strong bg-surface px-4 py-3 text-body text-ink outline-none transition-colors duration-200 focus-visible:border-sky"
        />
      </div>

      <button
        type="submit"
        className="rounded bg-primary px-5 py-3 text-body font-medium text-white transition-colors duration-300 ease-system hover:bg-primary-dim"
      >
        Construir um sistema
      </button>
    </form>
  );
}
