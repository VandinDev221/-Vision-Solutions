import type { Metadata, Viewport } from "next";
import "./globals.css";
import { saasProducts } from "@/data/saas-products";

export const viewport: Viewport = {
  themeColor: "#0B0E14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://visionsolutionsbr.vercel.app"),
  title: {
    default: "Vision Solutions - Software House & SaaS Studio",
    template: "%s | Vision Solutions"
  },
  description: "Desenvolvemos produtos SaaS proprietários e sistemas empresariais sob medida para operações que precisam de controle, automação e previsibilidade.",
  keywords: [
    "Vision Solutions",
    "Software House",
    "Desenvolvimento de SaaS",
    "Sistemas Empresariais",
    "Sistemas sob medida",
    "TorqueOS",
    "SynDent",
    "BarberCRM",
    "DisparoFlow",
    "Automação de processos"
  ],
  authors: [{ name: "Vision Solutions", url: "https://visionsolutionsbr.vercel.app" }],
  creator: "Vision Solutions",
  publisher: "Vision Solutions",
  alternates: {
    canonical: "https://visionsolutionsbr.vercel.app",
  },
  openGraph: {
    title: "Vision Solutions - Software House & SaaS Studio",
    description: "Desenvolvemos produtos SaaS proprietários e sistemas empresariais sob medida para operações que precisam de controle, automação e previsibilidade.",
    url: "https://visionsolutionsbr.vercel.app",
    siteName: "Vision Solutions",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Solutions - Software House & SaaS Studio",
    description: "Desenvolvemos produtos SaaS proprietários e sistemas empresariais sob medida.",
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
    "description": "Software House & SaaS Studio especializado no desenvolvimento de plataformas proprietárias e sistemas sob medida."
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
      <body className="min-h-screen bg-[#0B0E14] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
