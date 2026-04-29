import Image from "next/image"

const timeline = [
  {
    year: "2026",
    events: [
      "Presentación en el Teatro Bicentenario de San Juan junto al Trío de Cuerdas Ámbar, ciclo \"Tango y Folclore de nuevo siglo\"",
      "Estrenos de sus obras en Europa (Palermo, Italia) a cargo de Pablo Fortunato",
      "Dirección y composición en la orquesta típica El Desarme Tango (fundada en 2022)",
      "Participación en el ciclo televisivo Unísono (TV Pública) junto al Trío Ámbar",
      "Jurado en Pre Cosquín San Juan y Pre Baradero"
    ]
  },
  {
    year: "2025",
    events: [
      "Participación en FACAFF Tango con la Orquesta El Desarme, interpretando composiciones propias",
      "Su obra \"Anubio\" es grabada por la Camerata Fa en el disco Paisajes Sonoros de Argentina",
      "Participación en Sonata Argentina para guitarra",
      "Jurado en Pre Cosquín San Juan y Pre Baradero"
    ]
  },
  {
    year: "2024",
    events: [
      "Estrenos de sus obras en un festival de música de cámara en Suecia",
      "Grabación de \"Dos Caras\" junto a músicos de la Orquesta del Teatro Colón"
    ]
  },
  {
    year: "2023",
    events: [
      "Participación en Unísono con la obra \"La Agria\" (chacarera) junto al Trío Ámbar",
      "Compositor invitado en el próximo disco de la Camerata Fa",
      "Gira en Chile como compositor y arreglador del Felipe Chavez Cuarteto (Valparaíso)"
    ]
  },
  {
    year: "2022",
    events: [
      "Participación en Unísono con obras propias para trío de cuerdas",
      "Trabajo en música original y arreglos para producciones audiovisuales"
    ]
  }
]

export function Trajectory() {
  return (
    <section id="trayectoria" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Image and Intro */}
          <div>
            <p className="text-muted-foreground tracking-[0.2em] text-xs uppercase mb-4">
              Trayectoria
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
              Actividad reciente
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Su obra ha sido interpretada en Argentina y Europa, en espacios como el Teatro 
              Bicentenario de San Juan y festivales internacionales de música de cámara, 
              consolidando un lenguaje propio dentro de la música argentina contemporánea.
            </p>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_MG_2547_edited-fDW0ykg0McdGrNl2ZyvgUphgvaSLoz.jpeg"
                alt="Lucas Maureira con bailarines de tango"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-12">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-8 border-l border-border">
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-foreground" />
                <h3 className="text-2xl font-serif mb-4">{item.year}</h3>
                <ul className="space-y-3">
                  {item.events.map((event, index) => (
                    <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Repercusiones Section */}
        <div className="mt-24 pt-16 border-t border-border">
          <h3 className="text-sm tracking-[0.15em] uppercase mb-8 text-center text-muted-foreground">
            Repercusiones
          </h3>
          <div className="text-center mb-12">
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Participación en el ciclo televisivo Unísono de la TV Pública junto al Trío de Cuerdas Ámbar. 
              Presentaciones en escenarios nacionales e internacionales, incluyendo Argentina, Chile, Italia y Suecia.
            </p>
            
            {/* Press Links */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              <a 
                href="https://www.tiempodesanjuan.com/departamentales/san-martin/san-martin-se-alista-un-nuevo-pre-cosquin-dias-horarios-y-todos-los-detalles-del-competitivo-n415389"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border hover:bg-secondary/50 transition-colors group"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Tiempo de San Juan</p>
                <p className="text-sm group-hover:text-accent transition-colors">Pre Cosquín: días, horarios y todos los detalles del competitivo</p>
              </a>
              <a 
                href="https://revistaelsordo.com/cronicas-del-tango-nuevo-noctambula-el-desarme-umbrales/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border hover:bg-secondary/50 transition-colors group"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Revista El Sordo</p>
                <p className="text-sm group-hover:text-accent transition-colors">Crónicas del Tango Nuevo: Noctámbula, El Desarme, Umbrales</p>
              </a>
              <a 
                href="https://www.diariodecuyo.com.ar/tango-y-folclore-del-nuevo-siglo-el-teatro-del-bicentenario-san-juan-n6569660#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border hover:bg-secondary/50 transition-colors group"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Diario de Cuyo</p>
                <p className="text-sm group-hover:text-accent transition-colors">Tango y Folclore del nuevo siglo en el Teatro del Bicentenario</p>
              </a>
              <a 
                href="https://www.diariodecuyo.com.ar/espectaculos/pre-cosquin-2026-san-martin-se-prepara-para-armar-su-delegacion-en-noviembre-1792067.html"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-border hover:bg-secondary/50 transition-colors group"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Diario de Cuyo</p>
                <p className="text-sm group-hover:text-accent transition-colors">Pre Cosquín 2026: San Martín se prepara para armar su delegación</p>
              </a>
            </div>
          </div>
          
          {/* Ensemble Image */}
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_MG_2468_edited-sadZ8wKv6omEk3eAK5FSRbutH8hlEB.jpeg"
              alt="Presentación con cuarteto de cuerdas y bailarines"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
