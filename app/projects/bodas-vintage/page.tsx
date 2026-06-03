"use client"

import Link from "next/link"
import { ArrowLeft, Lock, Heart, CheckCircle, ExternalLink, MapPin, Calculator, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const translations = {
  en: {
    backToPortfolio: "Back to Portfolio",
    privateCode: "Private Code",
    visitSite: "Visit Site",
    featuredProject: "Featured Project",
    subtitle: "Reactive web platform with dynamic, geolocalized real-time quoting.",
    videoDemos: "Video Demos",
    video1Title: "Interactive Quote Builder Flow",
    video1Description: "Shows the fluidity of the multi-step form. When typing an address, the map updates instantly via Turbo Streams without page reload, calculating the exact distance for the budget.",
    video2Title: "Advanced Admin Management",
    video2Description: "Demonstration of the control panel (built with madmin and Ransack) where the business reviews, filters, searches, and approves quotes or reservations centrally.",
    aboutProject: "About the Project",
    purposeTitle: "Purpose and Vision",
    purposeText: "Bodas Vintage was created to digitize and optimize the booking of classic vehicles (Volkswagen Classic) for exclusive events in Asturias. The main goal was to replace the slow manual quoting process with an automated, intuitive assistant that calculates rates based on real distances, service hours, and custom packages, while maintaining a carefully crafted retro aesthetic.",
    keyFeatures: "Key Features",
    features: [
      "Fully custom retro-modern UI/UX design using Bootstrap 5 and Sass.",
      "SPA-like reactive quote builder powered by Hotwire (Turbo Streams and Stimulus).",
      "Automatic mileage and route coordinate calculation with Geocoder API.",
      "Dynamic pricing with proximity/distance rates and decorative package add-ons.",
      "Automatic email notification system (ActionMailer).",
      "Strict calendar control to prevent booking duplicates on the same date.",
      "Advanced search and sorting in the admin panel using Ransack.",
      "Agile production deployment on Docker containers orchestrated by Kamal."
    ],
    technicalDetails: "Technical Details and Architecture",
    technicalText1: "Technically, the application challenges the need for heavy frontend frameworks (like React or Vue) by relying natively on Hotwire. When the user enters the event address, a Rails controller queries geocoding servers and returns HTML fragments updated via Turbo Streams to render the interactive map and refresh totals on the fly.",
    technicalText2: "Data persistence uses SQLite3 optimized for modern production environments, leveraging Rails 8's concurrency advantages to handle background job queues (solid_queue), high-performance caching (solid_cache), and self-contained, fast error logging.",
    tryItYourself: "Try It Yourself",
    tryItTitle: "Calculate your own live budget!",
    tryItSubtitle: "I invite you to visit the website and experience the platform's speed by following these simple steps:",
    step1Title: "1. Event Details",
    step1Text: "Select an available date on the calendar, your times, and add extras like the Photocall or floral decoration packages.",
    step2Title: "2. Location and Map Verification",
    step2Text: "Enter your wedding or route address. The system will geolocate the point instantly and show it on the interactive map so you can verify accuracy.",
    step3Title: "3. Dynamic Rate Calculation",
    step3Text: "Click Calculate Budget. You'll see the price automatically broken down by distance in kilometers and receive a confirmation email.",
    tryNowButton: "Try the Quote Builder Now",
    backToProjects: "Back to All Projects",
  },
  es: {
    backToPortfolio: "Volver al Portafolio",
    privateCode: "Codigo Privado",
    visitSite: "Visitar Web",
    featuredProject: "Proyecto Destacado / Featured Project",
    subtitle: "Plataforma web reactiva con cotizacion dinamica y geolocalizada en tiempo real.",
    videoDemos: "Video Demos",
    video1Title: "Flujo del Cotizador Interactivo",
    video1Description: "Muestra la fluidez del formulario multi-paso. Al escribir la direccion, el mapa se actualiza al instante por Turbo Streams sin recargar la pagina, calculando la distancia exacta para el presupuesto.",
    video2Title: "Gestion Administrativa Avanzada",
    video2Description: "Demostracion del panel de control (construido con madmin y Ransack) donde el negocio revisa, filtra, busca y aprueba presupuestos o reservas de forma centralizada.",
    aboutProject: "Sobre el Proyecto / About the Project",
    purposeTitle: "Proposito y Vision",
    purposeText: "Bodas Vintage nace para digitalizar y optimizar la contratacion de vehiculos clasicos (Volkswagen Classic) para eventos exclusivos en Asturias. El objetivo central fue reemplazar el lento proceso de cotizacion manual por un asistente automatizado e intuitivo que calcule tarifas en base a distancias reales, horas de servicio y packs personalizados, manteniendo en todo momento una estetica retro sumamente cuidada.",
    keyFeatures: "Caracteristicas Clave / Key Features",
    features: [
      "Diseno UI/UX retro-moderno totalmente a medida usando Bootstrap 5 y Sass.",
      "Cotizador reactivo tipo SPA impulsado por Hotwire (Turbo Streams y Stimulus).",
      "Calculo automatico de kilometraje y coordenadas de ruta con Geocoder API.",
      "Tarifacion dinamica con tasas por cercania/lejania y packs de decoracion decorativos.",
      "Sistema de notificaciones automaticas por correo electronico (ActionMailer).",
      "Control estricto de agenda para evitar duplicidades de reservas en la misma fecha.",
      "Busqueda y ordenacion avanzada en el panel de administracion usando Ransack.",
      "Despliegue agil en produccion sobre contenedores Docker orquestados por Kamal."
    ],
    technicalDetails: "Detalles Tecnicos y Arquitectura",
    technicalText1: "A nivel tecnico, la aplicacion desafia la necesidad de frameworks pesados de frontend (como React o Vue) apoyandose de forma nativa en Hotwire. Cuando el usuario introduce la direccion del evento, un controlador de Rails consulta servidores de geocodificacion y devuelve fragmentos de HTML actualizados por Turbo Streams para renderizar el mapa interactivo y refrescar los totales al vuelo.",
    technicalText2: "La persistencia de datos utiliza SQLite3 optimizada para entornos de produccion modernos, aprovechando las ventajas de concurrencia de Rails 8 para manejar colas de trabajos en segundo plano (solid_queue), cache de alto rendimiento (solid_cache) y registro de errores de forma autocontenida y veloz.",
    tryItYourself: "Pruebalo tu mismo",
    tryItTitle: "Calcula tu propio presupuesto en vivo!",
    tryItSubtitle: "Te invito a visitar la web y experimentar la velocidad de la plataforma siguiendo estos sencillos pasos:",
    step1Title: "1. Datos del Evento",
    step1Text: "Selecciona una fecha disponible en el calendario, tus horarios y anade extras como el Photocall o packs de decoracion floral.",
    step2Title: "2. Ubicacion y Verificacion en Mapa",
    step2Text: "Introduce la direccion de tu boda o trayecto. El sistema geolocalizara el punto al instante y lo mostrara en el mapa interactivo para que verifiques la exactitud.",
    step3Title: "3. Calculo de Tarifa Dinamica",
    step3Text: "Haz clic en Calcular Presupuesto. Veras el precio desglosado automaticamente segun la distancia en kilometros y recibiras una confirmacion en tu correo.",
    tryNowButton: "Probar el Cotizador ahora",
    backToProjects: "Volver a Todos los Proyectos / All Projects",
  }
}

export default function BodasVintagePage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" className="gap-2 rounded-xl hover:bg-muted" asChild>
            <Link href={`/#projects`}>
              <ArrowLeft className="w-4 h-4" />
              {t.backToPortfolio}
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              disabled
              className="gap-2 opacity-60 cursor-not-allowed rounded-xl"
            >
              <Lock className="w-4 h-4" />
              {t.privateCode}
            </Button>
            <Button size="sm" className="gap-2 rounded-xl" asChild>
              <a href="https://www.vwclassicastur.com" target="_blank" rel="noopener noreferrer">
                {t.visitSite}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-inner">
              <Heart className="w-7 h-7 text-primary animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                {t.featuredProject}
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 text-balance">
            Bodas Vintage
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl font-light">
            {t.subtitle}
          </p>
          <div className="flex flex-wrap gap-2">
            {["Ruby on Rails 8", "SQLite3", "Hotwire (Turbo/Stimulus)", "Bootstrap 5", "Sass", "Geocoder API", "Docker"].map((tech) => (
              <span
                key={tech}
                className="text-xs md:text-sm font-medium text-secondary-foreground bg-secondary/60 hover:bg-secondary/80 transition-colors px-3.5 py-1.5 rounded-xl border border-border"
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
          <h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">{t.videoDemos}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="space-y-4 group">
              <div className="aspect-video bg-muted rounded-2xl border border-border flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/c4dHvZcyfBc?si=Zj_8K70huLWps-_d&controls=0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {t.video1Title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.video1Description}
              </p>
            </div>

            {/* Video 2 */}
            <div className="space-y-4 group">
              <div className="aspect-video bg-muted rounded-2xl border border-border flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/5RGSgGshCBs?si=hYS__xwZe0imq0OP" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {t.video2Title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.video2Description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 px-6 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">{t.aboutProject}</h2>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-sm space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{t.purposeTitle}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t.purposeText}
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{t.keyFeatures}</h3>
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                {t.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-border pt-6">
              <h3 className="text-xl font-semibold text-foreground">{t.technicalDetails}</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t.technicalText1}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                {t.technicalText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Try */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 tracking-tight">{t.tryItYourself}</h2>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden shadow-sm">

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{t.tryItTitle}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.tryItSubtitle}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-3.5 bg-muted/40 rounded-xl border border-border/50">
                  <span className="w-8 h-8 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <CalendarCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{t.step1Title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t.step1Text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 bg-muted/40 rounded-xl border border-border/50">
                  <span className="w-8 h-8 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{t.step2Title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t.step2Text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 bg-muted/40 rounded-xl border border-border/50">
                  <span className="w-8 h-8 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Calculator className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{t.step3Title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {t.step3Text}
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full gap-2 rounded-xl mt-2 font-medium shadow-sm" asChild>
                <a href="https://www.vwclassicastur.com/calculadora-presupuesto" target="_blank" rel="noopener noreferrer">
                  {t.tryNowButton}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border bg-muted/20">
        <div className="max-w-5xl mx-auto text-center">
          <Button variant="outline" className="rounded-xl hover:bg-background" asChild>
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
