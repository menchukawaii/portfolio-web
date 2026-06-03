"use client"

import { DiRuby } from "react-icons/di"
import { 
  SiJavascript, 
  SiHtml5, 
  SiCss, 
  SiPostgresql, 
  SiGit, 
  SiRubyonrails,
  SiSqlite,
  SiBootstrap,
  SiDocker,
  SiHotwire
} from "react-icons/si"
import { TbShip } from "react-icons/tb" // Icono alternativo para Kamal (un barco/contenedor)

const translations = {
  en: {
    title: "Tech Stack",
    coreSkills: "Core Skills",
    additional: "Additional Technologies",
    concepts: "APIs & Core Concepts",
  },
  es: {
    title: "Stack Tecnológico",
    coreSkills: "Habilidades Principales",
    additional: "Tecnologías Adicionales",
    concepts: "APIs y Conceptos Clave",
  },
}

const coreSkills = [
  {
    name: "Ruby on Rails",
    icon: SiRubyonrails,
    color: "text-red-600",
  },
  {
    name: "Hotwire",
    icon: SiHotwire,
    color: "text-amber-500",
  },
  {
    name: "Vanilla JavaScript",
    icon: SiJavascript,
    color: "text-yellow-500",
  },
]

const additionalSkills = [
  { name: "Ruby", icon: DiRuby, color: "text-red-500" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss, color: "text-blue-500" },
  { name: "Bootstrap 5", icon: SiBootstrap, color: "text-purple-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
  { name: "SQLite3", icon: SiSqlite, color: "text-blue-400" },
  { name: "Docker", icon: SiDocker, color: "text-sky-500" },
  { name: "Kamal", icon: TbShip, color: "text-stone-500" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
]

const conceptualSkills = [
  "Chrome Extensions API",
  "DOM Manipulation",
  "AI Algorithms (CSP & Backtracking)",
  "Geolocation & Geocoder API"
]

interface TechStackProps {
  language: "en" | "es"
}

export function TechStack({ language }: TechStackProps) {
  const t = translations[language]

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-10 text-center">
          {t.title}
        </h2>

        {/* Core Skills */}
        <div className="mb-12">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 text-center">
            {t.coreSkills}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coreSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
                <span className="font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mb-12">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 text-center">
            {t.additional}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 bg-muted/50 border border-border/50 rounded-lg px-4 py-2"
              >
                <skill.icon className={`w-5 h-5 ${skill.color}`} />
                <span className="text-sm text-foreground font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conceptual Skills / APIs */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 text-center">
            {t.concepts}
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {conceptualSkills.map((concept) => (
              <span
                key={concept}
                className="text-xs bg-muted text-muted-foreground border border-border/40 rounded-full px-3 py-1 font-medium"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}