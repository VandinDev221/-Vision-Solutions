"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MetricsBar } from "@/components/sections/metrics-bar";
import { SaaSShowcase } from "@/components/sections/saas-showcase";
import { CustomSoftwareSection } from "@/components/sections/custom-software-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <HeroSection />
      <MetricsBar />
      <SaaSShowcase />
      <CustomSoftwareSection />
      <TechStackSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
