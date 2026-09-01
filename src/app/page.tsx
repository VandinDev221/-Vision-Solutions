"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ComplexityTransformationSection } from "@/components/sections/complexity-transformation-section";
import { CoreSolutionsSection } from "@/components/sections/core-solutions-section";
import { SaaSShowcase } from "@/components/sections/saas-showcase";
import { CustomSoftwareSection } from "@/components/sections/custom-software-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HologramViewport } from "@/components/ui/hologram-viewport";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#040711] text-slate-100 selection:bg-cyan-400 selection:text-slate-950 antialiased overflow-x-hidden">
      {/* Immersive Sci-Fi Holographic 3D Particle Universe */}
      <HologramViewport />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ComplexityTransformationSection />
        <CoreSolutionsSection />
        <SaaSShowcase />
        <CustomSoftwareSection />
        <ProcessSection />
        <TechStackSection />
        <PrinciplesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
