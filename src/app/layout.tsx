import type { Metadata, Viewport } from "next";
import "./globals.css";
import { saasProducts } from "@/data/saas-products";

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://visionsolutions.dev.br"),
  title: {
    default: "Vision Solutions | Software House, Desenvolvimento de SaaS & Sistemas Enterprise",
    template: "%s | Vision Solutions"
  },
  description: "Vision Solutions é líder no desenvolvimento de softwares sob medida e plataformas SaaS de alta performance: SynDent (odontológico), BarberCRM (barbearia), TorqueOS (oficinas), DisparoFlow (WhatsApp & IA), AdvCargo (jurídico) e EsperaAí.",
  keywords: [
    // Institucional & Geral
    "Vision Solutions",
    "Software House",
    "Desenvolvimento de SaaS",
    "Criar SaaS sob medida",
    "Empresa de desenvolvimento de software",
    "Clean Architecture",
    "Next.js 15 React 19",
    "Sistemas Enterprise",
    
    // Nicho Odontológico (SynDent)
    "SaaS odontológico",
    "sistema para clínica odontológica",
    "odontograma digital",
    "prontuário eletrônico odontológico",
    "SynDent",
    
    // Nicho Barbearia & Beleza (BarberCRM)
    "sistema para barbearia",
    "agendamento online barbearia",
    "CRM para barbeiros",
    "BarberCRM",
    "confirmação de agendamento WhatsApp",
    
    // Nicho Automotivo (TorqueOS)
    "ERP para oficina mecânica",
    "sistema para autocenter",
    "ordem de serviço oficina",
    "gestão de peças automotivas",
    "TorqueOS",
    
    // Nicho Marketing & WhatsApp (DisparoFlow)
    "plataforma de disparo whatsapp",
    "aquecimento de chip whatsapp IA",
    "mensageria em massa whatsapp",
    "tracking de conversão whatsapp",
    "DisparoFlow",
    
    // Nicho Jurídico (AdvCargo)
    "sistema de gestão jurídica",
    "software para advogados",
    "controle de prazos processuais",
    "AdvCargo",
    
    // Nicho E-Commerce & Consumidor (EsperaAí)
    "histórico de preços",
    "rastreador de ofertas e compras",
    "EsperaAí",

    // Nicho Finanças & Billing
    "faturamento recorrente pix",
    "gestão de assinaturas SaaS"
  ],
  authors: [{ name: "Vision Solutions", url: "https://visionsolutions.dev.br" }],
  creator: "Vision Solutions",
  publisher: "Vision Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://visionsolutions.dev.br",
  },
  openGraph: {
    title: "Vision Solutions | Software House & Ecossistema Multi-SaaS Enterprise",
    description: "Criamos e licenciamos plataformas SaaS de alto crescimento (SynDent, BarberCRM, TorqueOS, DisparoFlow, AdvCargo, EsperaAí). Softwares prontos para produção.",
    url: "https://visionsolutions.dev.br",
    siteName: "Vision Solutions",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Vision Solutions — Ecossistema Multi-SaaS & Software House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Solutions | Software House & Multi-SaaS Studio",
    description: "Desenvolvimento de software sob medida e catálogo de SaaS líderes de mercado.",
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data (JSON-LD) para a Organização Vision Solutions e todas as suas aplicações
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vision Solutions",
    "url": "https://visionsolutions.dev.br",
    "logo": "https://visionsolutions.dev.br/logo.png",
    "sameAs": [
      "https://github.com/VandinDev221/-Vision-Solutions.git"
    ],
    "description": "Software House & Studio especializado no desenvolvimento de plataformas SaaS multi-tenant, ERPs e softwares sob medida.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-99999-8888",
      "contactType": "sales",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  };

  const softwareAppsSchema = saasProducts.map((product) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "operatingSystem": "Web, Windows, iOS, Android",
    "applicationCategory": "BusinessApplication",
    "description": product.longDescription,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "128"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    }
  }));

  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        {/* JSON-LD Rich Snippets para o Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {softwareAppsSchema.map((appSchema, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
          />
        ))}
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
