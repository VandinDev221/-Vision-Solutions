import { HeroSection } from "@/components/sections/hero-section";

// Próximas seções (fase 2, mesma qualidade da fundação):
// <ComplexityTransformationSection />  — seção 14 do briefing
// <SaasShowcaseSection />              — seção 16
// <CoreSolutionsSection />             — seção 17
// <ProcessSection />                   — seção 18
// <TechStackSection />                 — seção 19
// <PrinciplesSection />                — seção 20
// <ContactSection />                   — seção 21
// Todas devem reaproveitar a mesma instância visual do Vision System,
// não criar novas cenas 3D isoladas.

export default function HomePage() {
  return (
    <>
      <HeroSection />
    </>
  );
}
