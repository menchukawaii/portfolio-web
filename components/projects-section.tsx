"use client"

import Link from "next/link"
import { ExternalLink, Github, Lock, Clock, Chrome, ShoppingBag, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const translations = {
  en: {
    title: "Projects",
    featured: "Featured Project",
    privateCode: "Private Code",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    viewDetails: "View Details",
    inProgress: "In Progress",
    bodasVintage: {
      title: "Bodas Vintage",
      subtitle: "Full-Stack Development in Ruby on Rails 8",
      description: "Tailored booking platform for classic car rentals in Asturias, designed to deliver a seamless SPA-like user experience using Turbo Streams and Stimulus. Automates complex business logic by calculating rates based on geolocalized mileage, package add-ons, and strict date availability scheduling.",
      features: [
        "Responsive, custom vintage-style interface with high performance",
        "Interactive map integration and location distance calculation",
        "Automated email confirmations and backend request lifecycle handling",
        "Modern containerized production deployment using Docker and Kamal"
      ],
      tech: ["Ruby on Rails", "SQLite3", "Hotwire", "Bootstrap 5", "Geocoder API", "Docker"],
    },
    linkedinGames: {
      title: "LinkedIn Games Solver",
      subtitle: "Chrome Extension (AI & Algorithms)",
      description: "An autonomous Chrome extension that instantly solves all 5 LinkedIn daily minigames (Queens, Tango, Zip, Sudoku, Patches) using classic Artificial Intelligence search algorithms.",
      features: [
        "Constraint Satisfaction Problem (CSP) & Backtracking",
        "Dynamic board reading to bypass code obfuscation",
        "Zero network cheating: algorithms calculate solutions autonomously"
      ],
      tech: ["JavaScript", "Chrome API", "Algorithms", "DOM Manipulation"],
    },  
    crochetStore: {
      title: "Crochet Pattern Store",
      subtitle: "E-commerce Platform",
      description: "An online store for selling crochet patterns. Currently building with Ruby on Rails, featuring pattern previews, secure payments, and user accounts.",
      tech: ["Ruby on Rails", "PostgreSQL", "Stripe", "Hotwire"],
    },
  },
  es: {
    title: "Proyectos",
    featured: "Proyecto Destacado",
    privateCode: "Código Privado",
    liveDemo: "Ver Demo",
    viewCode: "Ver Código",
    viewDetails: "Ver Detalles",
    inProgress: "En Desarrollo",
  bodasVintage: {
    title: "Bodas Vintage",
    subtitle: "Desarrollo Full-Stack en Ruby on Rails 8",
    description: "Plataforma personalizada para la cotización y reserva de vehículos clásicos en Asturias. Diseñada para ofrecer una experiencia de usuario fluida estilo SPA mediante Turbo Streams y Stimulus. Automatiza la lógica de negocio calculando precios basados en kilometraje geolocalizado, extras contratados y validación estricta de fechas disponibles.",
    features: [
      "Interfaz fluida y reactiva con diseño personalizado estilo vintage",
      "Integración de mapas interactivos y geolocalización de eventos",
      "Automatización de notificaciones por correo y control de estado de solicitudes",
      "Despliegue moderno en contenedores Docker mediante Kamal"
    ],
    tech: ["Ruby on Rails", "SQLite3", "Hotwire", "Bootstrap 5", "Geocoder API", "Docker"],
    },
    linkedinGames: {
    title: "LinkedIn Games Solver",
    subtitle: "Extensión de Chrome (IA y Algoritmos)",
    description: "Una extensión de Chrome autónoma que resuelve al instante los 5 minijuegos diarios de LinkedIn (Queens, Tango, Zip, Sudoku, Patches) utilizando algoritmos clásicos de búsqueda e Inteligencia Artificial.",
    features: [
      "Problemas de Satisfacción de Restricciones (CSP) y Backtracking",
      "Lectura dinámica del tablero para eludir la ofuscación de código",
      "Cálculo autónomo: no hace trampa de red, la IA halla la solución"
    ],
    tech: ["JavaScript", "Chrome API", "Algoritmos", "Manipulación del DOM"],
    },
    crochetStore: {
      title: "Tienda de Patrones de Crochet",
      subtitle: "Plataforma E-commerce",
      description: "Una tienda online para vender patrones de crochet. Actualmente en desarrollo con Ruby on Rails, con vista previa de patrones, pagos seguros y cuentas de usuario.",
      tech: ["Ruby on Rails", "PostgreSQL", "Stripe", "Hotwire"],
    },
  },
}

interface ProjectsSectionProps {
  language: "en" | "es"
}

export function ProjectsSection({ language }: ProjectsSectionProps) {
  const t = translations[language]

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-12 text-center">
          {t.title}
        </h2>

        <div className="grid gap-8">
          {/* Featured Project - Bodas Vintage (Private) */}
          <Link 
            href="/projects/bodas-vintage"
            className="block bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:border-primary/30 group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {t.featured}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              {t.bodasVintage.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t.bodasVintage.subtitle}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.bodasVintage.description}
            </p>
            {t.bodasVintage.features && t.bodasVintage.features.length > 0 && (
              <ul className="mb-6 space-y-1.5 max-w-2xl">
                {t.bodasVintage.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mb-8">
              {t.bodasVintage.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-secondary-foreground bg-secondary/50 px-3 py-1.5 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                disabled
                className="gap-2 opacity-60 cursor-not-allowed rounded-xl"
              >
                <Lock className="w-4 h-4" />
                {t.privateCode}
              </Button>
              <Button
                size="sm"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
              >
                <ExternalLink className="w-4 h-4" />
                {t.viewDetails}
              </Button>
            </div>
          </Link>

          {/* Secondary Project - LinkedIn Games (Public) */}
          <Link 
            href="/projects/linkedin-games"
            className="block bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-500/30 group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Chrome className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {t.linkedinGames.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t.linkedinGames.subtitle}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t.linkedinGames.description}
            </p>
            {t.linkedinGames.features && t.linkedinGames.features.length > 0 && (
              <ul className="mb-5 space-y-1.5">
                {t.linkedinGames.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mb-6">
              {t.linkedinGames.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-secondary-foreground bg-secondary/50 px-3 py-1.5 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-xl"
                asChild
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  {t.viewCode}
                </a>
              </Button>
              <Button
                size="sm"
                className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl"
              >
                <ExternalLink className="w-4 h-4" />
                {t.viewDetails}
              </Button>
            </div>
          </Link>

          {/* Third Project - Crochet Store (In Progress) */}
          <div className="bg-card border border-dashed border-border rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {t.inProgress}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1">
              {t.crochetStore.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t.crochetStore.subtitle}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              {t.crochetStore.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.crochetStore.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium text-secondary-foreground bg-secondary/50 px-3 py-1.5 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
