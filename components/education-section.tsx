import { GraduationCap, Calendar, ExternalLink, Palette, Code, Brain } from "lucide-react"

interface EducationSectionProps {
  language: "en" | "es"
}

const translations = {
  en: {
    title: "Education",
    subtitle: "My journey combining design, development and data",
    passion: "My graphic design background fuels my passion for creating beautiful, accessible interfaces. I believe great frontend development is where art meets functionality.",
    viewWeb: "View Website",
    education: [
      {
        degree: "Artificial Intelligence & Big Data",
        school: "IES Doctor Fleming",
        location: "Oviedo",
        period: "2025 - 2026",
        icon: Brain,
        highlights: [
          "Machine learning models with Python (Pandas, NumPy, Scikit-learn)",
          "Big data management with Apache HDFS, Pig and Hive",
          "MySQL and MongoDB databases"
        ],
        url: "https://alojaweb.educastur.es/web/iesdoctorfleming/secretaria/ce/iabd"
      },
      {
        degree: "Web Application Development",
        school: "IES Bernaldo de Quirós",
        location: "Mieres",
        period: "2022 - 2024",
        icon: Code,
        highlights: [
          "JavaScript, Java, PHP"
        ],
        url: "https://ibq.es/"
      },
      {
        degree: "Graphic Design (60 credits)",
        school: "Escuela Superior de Arte del Principado de Asturias",
        location: "Asturias",
        period: "2021 - 2022",
        icon: Palette,
        highlights: [],
        url: "https://www.esapa.org/"
      }
    ]
  },
  es: {
    title: "Estudios",
    subtitle: "Mi camino combinando diseño, desarrollo y datos",
    passion: "Mi formación en diseño gráfico alimenta mi pasión por crear interfaces bonitas y accesibles. Creo que el buen desarrollo frontend es donde el arte se encuentra con la funcionalidad.",
    viewWeb: "Ver Web",
    education: [
      {
        degree: "Inteligencia Artificial y Big Data",
        school: "IES Doctor Fleming",
        location: "Oviedo",
        period: "2025 - 2026",
        icon: Brain,
        highlights: [
          "Modelos de aprendizaje automático con Python (Pandas, NumPy, Scikit-learn)",
          "Gestión de grandes volúmenes de datos con Apache HDFS, Pig y Hive",
          "Bases de datos MySQL y MongoDB"
        ],
        url: "https://alojaweb.educastur.es/web/iesdoctorfleming/secretaria/ce/iabd"
      },
      {
        degree: "Desarrollo de Aplicaciones Web",
        school: "IES Bernaldo de Quirós",
        location: "Mieres",
        period: "2022 - 2024",
        icon: Code,
        highlights: [
          "JavaScript, Java, PHP"
        ],
        url: "https://ibq.es/"
      },
      {
        degree: "Diseño Gráfico (60 créditos)",
        school: "Escuela Superior de Arte del Principado de Asturias",
        location: "Asturias",
        period: "2021 - 2022",
        icon: Palette,
        highlights: [],
        url: "https://www.esapa.org/"
      }
    ]
  }
}

export function EducationSection({ language }: EducationSectionProps) {
  const t = translations[language]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground mb-4">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm font-medium">{t.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.subtitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.passion}
          </p>
        </div>

        <div className="space-y-6">
          {t.education.map((edu, index) => {
            const IconComponent = translations.en.education[index].icon
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      index === 0 
                        ? "bg-primary/10 text-primary" 
                        : index === 1 
                          ? "bg-secondary/50 text-secondary-foreground" 
                          : "bg-accent text-accent-foreground"
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground">
                          {edu.school}
                          <span className="text-muted-foreground/60"> · {edu.location}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{edu.period}</span>
                      </div>
                    </div>
                    
                    {edu.highlights.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {edu.highlights.map((highlight, hIndex) => (
                          <li 
                            key={hIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {t.viewWeb}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
