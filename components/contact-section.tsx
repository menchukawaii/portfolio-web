"use client"

import { useState } from "react"
import { Linkedin, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const translations = {
  en: {
    title: "Get in Touch",
    description: "I'm always open to discussing new projects and opportunities.",
    linkedin: "Connect on LinkedIn",
    copyEmail: "Copy Email",
    copied: "Copied!",
    email: "carmengrrdz@gmail.com",
  },
  es: {
    title: "Contacto",
    description: "Siempre estoy abierto a discutir nuevos proyectos y oportunidades.",
    linkedin: "Conectar en LinkedIn",
    copyEmail: "Copiar Email",
    copied: "¡Copiado!",
    email: "carmengrrdz@gmail.com",
  },
}

interface ContactSectionProps {
  language: "en" | "es"
}

export function ContactSection({ language }: ContactSectionProps) {
  const [copied, setCopied] = useState(false)
  const t = translations[language]

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t.title}</h2>
        <p className="text-muted-foreground mb-10">{t.description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="gap-2 bg-[#0077B5] hover:bg-[#0077B5]/90 text-white rounded-xl w-full sm:w-auto"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/carmen-garc%C3%ADa-rodr%C3%ADguez-4b674a2b2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              {t.linkedin}
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={copyEmail}
            className="gap-2 rounded-xl w-full sm:w-auto relative overflow-hidden"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-green-600">{t.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                {t.copyEmail}
              </>
            )}
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{t.email}</p>
      </div>
    </section>
  )
}
