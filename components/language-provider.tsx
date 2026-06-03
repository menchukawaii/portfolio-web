"use client"

import * as React from "react"

export type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("es")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // Check URL parameters first for initial load
    const urlParams = new URLSearchParams(window.location.search)
    const urlLang = urlParams.get("lang") as Language | null
    
    if (urlLang === "en" || urlLang === "es") {
      setLanguageState(urlLang)
      localStorage.setItem("portfolio-language", urlLang)
    } else {
      const savedLang = localStorage.getItem("portfolio-language") as Language | null
      if (savedLang) {
        setLanguageState(savedLang)
      }
    }
    setMounted(true)
  }, [])

  // Update the HTML lang attribute when language changes
  React.useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("portfolio-language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
