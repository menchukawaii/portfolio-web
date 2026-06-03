"use client"

import Link from "next/link"
import { ArrowLeft, Github, Chrome, CheckCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const translations = {
  en: {
    backToPortfolio: "Back to Portfolio",
    viewCode: "View Code",
    chromeExtension: "Chrome Extension",
    subtitle: "Extension that solves LinkedIn minigames autonomously in the blink of an eye.",
    videoDemos: "Video Demos",
    automaticResolution: "Automatic Resolution",
    automaticResolutionText: "Watch how the extension reads the board and solves games like Patches, Mini Sudoku, Queens, Tango, or Zip instantly using AI.",
    aboutProject: "About the Project",
    aboutText: "A browser extension that automatically solves LinkedIn's daily puzzles (Patches, Mini Sudoku, Zip, Tango, and Queens). Beyond being a fun tool for breaking records, the project was developed to apply classic Artificial Intelligence algorithms in a real web environment, dynamically interacting with the DOM.",
    features: "Features",
    featuresList: [
      "Automatically detects the active minigame on LinkedIn.",
      "No network cheating: the extension calculates solutions by itself.",
      "Seamless integration via script injection without interrupting navigation.",
      "Solves complex puzzles in milliseconds thanks to optimized code.",
      "Privacy-focused: no data collection or use of external APIs.",
    ],
    technicalDetails: "Technical Details (Algorithms)",
    technicalText: "The core of the project lies in how the extension \"thinks\" to solve each game, avoiding trivial web-scraping techniques or reading answers from the network.",
    algorithms: [
      { name: "Patches and Queens", desc: "Modeled as Constraint Satisfaction Problems (CSP) and solved using Backtracking." },
      { name: "Mini Sudoku", desc: "Classic Backtracking algorithm to try numbers and backtrack if rules are broken (rows/columns/blocks)." },
      { name: "Zip", desc: "Hamiltonian Path search using Depth-First Search (DFS) with heuristics to detect dead ends." },
      { name: "Tango", desc: "Depth-first search (DFS) optimized with balance constraint propagation." },
    ],
    technicalText2: "Additionally, robust techniques using element geometry heuristics and HTML5 attributes were implemented to bypass LinkedIn's code obfuscation (dynamic classes).",
    warning: "Disclaimer: This is an unofficial extension and is not affiliated with LinkedIn. It was developed exclusively for educational purposes, algorithm practice, and personal entertainment.",
    installInstructions: "Installation Instructions",
    installText: "Follow these steps to install the extension in your Chromium-based browser:",
    step1Title: "Download the Extension",
    step1Text: "Clone the repository from GitHub or download the source code as a ZIP file and extract it.",
    step2Title: "Open Chrome Extensions",
    step2Text: "Go to chrome://extensions in your address bar and enable Developer mode in the top right corner.",
    step3Title: "Load Unpacked",
    step3Text: "Click the \"Load unpacked\" button and select the extension folder you just downloaded.",
    step4Title: "Play!",
    step4Text: "Open one of the LinkedIn games and click on the extension icon for the magic to happen.",
    downloadFromGithub: "Download from GitHub",
    backToProjects: "Back to All Projects",
  },
  es: {
    backToPortfolio: "Volver al Portafolio",
    viewCode: "Ver Codigo",
    chromeExtension: "Extension de Chrome",
    subtitle: "Extension que resuelve los minijuegos de LinkedIn de forma autonoma en un abrir y cerrar de ojos.",
    videoDemos: "Demos en Video",
    automaticResolution: "Resolucion Automatica",
    automaticResolutionText: "Observa como la extension lee el tablero y resuelve juegos como Patches, Mini Sudoku, Queens, Tango o Zip al instante usando IA.",
    aboutProject: "Sobre el Proyecto",
    aboutText: "Una extension para el navegador que resuelve automaticamente los puzzles diarios de LinkedIn (Patches, Mini Sudoku, Zip, Tango y Queens). Mas alla de ser una herramienta divertida para batir records, el proyecto fue desarrollado para aplicar algoritmos clasicos de Inteligencia Artificial en un entorno web real, interactuando dinamicamente con el DOM.",
    features: "Caracteristicas",
    featuresList: [
      "Detecta automaticamente el minijuego activo en LinkedIn.",
      "No hace trampas de red: la extension calcula las soluciones por si misma.",
      "Integracion perfecta mediante la inyeccion de scripts sin interrumpir la navegacion.",
      "Resuelve puzzles complejos en milisegundos gracias a su codigo optimizado.",
      "Enfoque en privacidad: sin recoleccion de datos ni uso de APIs externas.",
    ],
    technicalDetails: "Detalles Tecnicos (Algoritmos)",
    technicalText: "El nucleo del proyecto reside en como la extension \"piensa\" para resolver cada juego evitando tecnicas de web-scraping triviales o lectura de respuestas en la red.",
    algorithms: [
      { name: "Patches y Queens", desc: "Modelados como Problemas de Satisfaccion de Restricciones (CSP) y resueltos mediante Backtracking." },
      { name: "Mini Sudoku", desc: "Algoritmo clasico de Backtracking para probar numeros y retroceder si se rompen las reglas (filas/columnas/bloques)." },
      { name: "Zip", desc: "Busqueda de un Camino Hamiltoniano usando Busqueda en Profundidad (DFS) con heuristicas para detectar callejones sin salida." },
      { name: "Tango", desc: "Busqueda en profundidad (DFS) optimizada con propagacion de restricciones de balanceo." },
    ],
    technicalText2: "Ademas, se implementaron tecnicas robustas usando heuristicas de geometria de elementos y atributos HTML5 para eludir la ofuscacion del codigo (clases dinamicas) de LinkedIn.",
    warning: "Aviso: Esta es una extension no oficial y no esta afiliada a LinkedIn. Ha sido desarrollada exclusivamente con fines educativos, de practica de algoritmia y entretenimiento personal.",
    installInstructions: "Instrucciones de Instalacion",
    installText: "Sigue estos pasos para instalar la extension en tu navegador basado en Chromium:",
    step1Title: "Descargar la Extension",
    step1Text: "Clona el repositorio desde GitHub o descarga el codigo fuente en un archivo ZIP y extraelo.",
    step2Title: "Abrir Extensiones de Chrome",
    step2Text: "Ve a chrome://extensions en tu barra de direcciones y activa el Modo de desarrollador en la esquina superior derecha.",
    step3Title: "Cargar Descomprimida",
    step3Text: "Haz clic en el boton \"Cargar descomprimida\" y selecciona la carpeta de la extension que acabas de descargar.",
    step4Title: "A jugar!",
    step4Text: "Abre uno de los juegos de LinkedIn y haz clic en el icono de la extension para que ocurra la magia.",
    downloadFromGithub: "Descargar desde GitHub",
    backToProjects: "Volver a Todos los Proyectos",
  }
}

export default function LinkedInGamesPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" className="gap-2 rounded-xl" asChild>
            <Link href={`/#projects`}>
              <ArrowLeft className="w-4 h-4" />
              {t.backToPortfolio}
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 rounded-xl"
            asChild
          >
            <a href="https://github.com/menchukawaii/minigames_solver" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              {t.viewCode}
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
              <Chrome className="w-7 h-7 text-blue-500" />
            </div>
            <div>
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                {t.chromeExtension}
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3 text-balance">
            LinkedIn Games Solver
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "Chrome API", "CSP & Backtracking", "DFS"].map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium text-secondary-foreground bg-secondary/50 px-4 py-2 rounded-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demos */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">{t.videoDemos}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-2xl border border-border flex items-center justify-center overflow-hidden">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/y2-q53RZBoc?si=WSH9WfiUiT_t_ODL&controls=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video 2 */}
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-2xl border border-border flex items-center justify-center overflow-hidden">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Jc2K-KV-TGg?si=DThGZvxJtXyAxaMs&controls=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-12">
            <h3 className="font-semibold text-foreground text-lg">
              {t.automaticResolution}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.automaticResolutionText}
            </p>
          </div>

        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">{t.aboutProject}</h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {t.aboutText}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{t.features}</h3>
                <ul className="space-y-3">
                  {t.featuresList.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">{t.technicalDetails}</h3>
                <div className="text-muted-foreground leading-relaxed space-y-3">
                  <p>
                    {t.technicalText}
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {t.algorithms.map((algo, index) => (
                      <li key={index}><strong>{algo.name}:</strong> {algo.desc}</li>
                    ))}
                  </ul>
                  <p>
                    {t.technicalText2}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  {t.warning}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Install */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">{t.installInstructions}</h2>
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                {t.installText}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-medium text-foreground">{t.step1Title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.step1Text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-medium text-foreground">{t.step2Title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.step2Text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-medium text-foreground">{t.step3Title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.step3Text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold flex items-center justify-center flex-shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-medium text-foreground">{t.step4Title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.step4Text}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <Button className="gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <a href="https://github.com/menchukawaii/minigames_solver" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4" />
                    {t.downloadFromGithub}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <Button variant="outline" className="rounded-xl" asChild>
            <Link href={`/#projects`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToProjects}
            </Link>
          </Button>
        </div>
      </footer>
    </main>
  )
}
