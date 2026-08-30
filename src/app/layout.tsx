import type { Metadata, Viewport } from "next";
import "./globals.css";
import { saasProducts } from "@/data/saas-products";

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://visionsolutionsbr.vercel.app"),
  title: {
    default: "Vision Solutions — Software, SaaS e Soluções Digitais",
    template: "%s | Vision Solutions"
  },
  description: "Desenvolvemos produtos SaaS, sistemas empresariais e soluções digitais sob medida para transformar processos complexos em software simples de operar.",
  keywords: [
    "Vision Solutions",
    "Software House",
    "Desenvolvimento de SaaS",
    "Sistemas Empresariais",
    "Sistemas sob medida",
    "TorqueOS",
    "SynDent",
    "BarberCRM",
    "Software para negócios",
    "Automação de processos"
  ],
  authors: [{ name: "Vision Solutions", url: "https://visionsolutionsbr.vercel.app" }],
  creator: "Vision Solutions",
  publisher: "Vision Solutions",
  alternates: {
    canonical: "https://visionsolutionsbr.vercel.app",
  },
  openGraph: {
    title: "Vision Solutions — Software, SaaS e Soluções Digitais",
    description: "Desenvolvemos produtos SaaS, sistemas empresariais e soluções digitais sob medida para transformar processos complexos em software simples de operar.",
    url: "https://visionsolutionsbr.vercel.app",
    siteName: "Vision Solutions",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Solutions — Software, SaaS e Soluções Digitais",
    description: "Desenvolvemos produtos SaaS, sistemas empresariais e soluções digitais sob medida.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vision Solutions",
    "url": "https://visionsolutionsbr.vercel.app",
    "description": "Software House & Studio especializado no desenvolvimento de plataformas SaaS e sistemas sob medida."
  };

  const softwareAppsSchema = saasProducts.map((product) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "operatingSystem": "Web, Windows, Mobile",
    "applicationCategory": "BusinessApplication",
    "description": product.description
  }));

  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
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
      <body className="min-h-screen bg-[#090d16] text-slate-100 antialiased selection:bg-sky-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
