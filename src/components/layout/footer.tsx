import Link from "next/link";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t border-white/[0.08] bg-[#050810] pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 text-left">
          
          {/* Col 1: Logo & Tagline */}
          <div className="md:col-span-4 space-y-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 flex items-center justify-center text-white font-extrabold text-xs shadow-md">
                VS
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-extrabold tracking-wider text-white font-mono">VISION</span>
                <span className="text-[9px] tracking-widest text-slate-400 font-mono">SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-xs text-slate-500 font-mono">
              Software House &amp; SaaS Studio
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 flex flex-wrap gap-6 text-xs text-slate-400 items-center">
            <Link href="#produtos" className="hover:text-white transition-colors">Produtos</Link>
            <Link href="#solucoes" className="hover:text-white transition-colors">Soluções</Link>
            <Link href="#engenharia" className="hover:text-white transition-colors">Engenharia</Link>
            <Link href="#empresa" className="hover:text-white transition-colors">Empresa</Link>
            <Link href="#contato" className="hover:text-white transition-colors">Contato</Link>
          </div>

          {/* Col 3: Contact Info & Socials */}
          <div className="md:col-span-4 space-y-2 text-xs text-slate-400 md:text-right">
            <div className="flex md:justify-end items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>contato@visionsolutions.com.br</span>
            </div>
            <div className="flex md:justify-end items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Brasil - Atendimento remoto</span>
            </div>
            <div className="flex md:justify-end items-center gap-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>© {year} Vision Solutions. Todos os direitos reservados.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacidade" className="hover:text-slate-400 transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-slate-400 transition-colors">Termos</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
