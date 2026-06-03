"use client"

const translations = {
  en: {
    greeting: "Hello, I'm",
    name: "Carmen García",
    title: "Junior Full Stack Developer",
    description:
      "I specialize in Ruby on Rails, building clean and scalable web applications. Passionate about crafting elegant solutions and writing maintainable code.",
    cta: "View my work",
    cto: "Contact me"
  },
  es: {
    greeting: "Hola, soy",
    name: "Carmen García",
    title: "Desarrolladora Full Stack Junior",
    description:
      "Me especializo en Ruby on Rails, construyendo aplicaciones web limpias y escalables. Apasionado por crear soluciones elegantes y escribir código mantenible.",
    cta: "Ver mis proyectos",
    cto: "Contáctame"
  },
}

interface HeroSectionProps {
  language: "en" | "es"
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-medium mb-2">{t.greeting}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
              {t.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary-foreground font-medium mb-6">
              {t.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-pretty">
              {t.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                {t.cta}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                {t.cto}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </div>

          
          <div className="order-1 md:order-2 flex items-center justify-center gap-4">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl border border-border overflow-hidden shadow-lg">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2012%20may%202026%2C%2021_15_31-bz3bQ4WUSWUHWT6vKU7CemRAyWUxwF.png"
                  alt="Carmen García - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zE4Ij6y4ABEvDx68u9Qo4SOS4aLDc1.png"
              alt="Cute sleeping cat illustration"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            /> */}
          </div>


        </div>
      </div>
    </section>
  )
}
