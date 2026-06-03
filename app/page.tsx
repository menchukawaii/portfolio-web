"use client"


import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TechStack } from "@/components/tech-stack"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { language, setLanguage } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <Navigation language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <TechStack language={language} />
      <EducationSection language={language} />
      <ProjectsSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </main>
  )
}
