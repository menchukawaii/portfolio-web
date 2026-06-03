"use client"

const translations = {
  en: {
    builtWith: "Built with Ruby on Rails passion",
    rights: "All rights reserved.",
  },
  es: {
    builtWith: "Construido con pasión por Ruby on Rails",
    rights: "Todos los derechos reservados.",
  },
}

interface FooterProps {
  language: "en" | "es"
}

export function Footer({ language }: FooterProps) {
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs text-muted-foreground/70 mt-2">
          © {currentYear} Carmen García Rodríguez. {t.rights}
        </p>
      </div>
    </footer>
  )
}
