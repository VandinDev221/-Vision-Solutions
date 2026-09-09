"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MonolithArchitectureSection } from "@/components/sections/monolith-architecture-section";
import { ComplexityTransformationSection } from "@/components/sections/complexity-transformation-section";
import { CoreSolutionsSection } from "@/components/sections/core-solutions-section";
import { SaaSShowcase } from "@/components/sections/saas-showcase";
import { CustomSoftwareSection } from "@/components/sections/custom-software-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SceneWrapper } from "@/components/3d/SceneWrapper";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0B0E14] text-slate-100 selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      {/* Unified Continuous 3D WebGL World */}
      <SceneWrapper />

      {/* Spatial & Editorial Content Layers */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <MonolithArchitectureSection />
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
