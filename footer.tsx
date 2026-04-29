import Image from "next/image"

export function About() {
  return (
    <section id="sobre-mi" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_MG_2401_edited-sFRiDtt9fQ8XxzUJP5gL35z9Tw3jeJ.jpeg"
              alt="Lucas Maureira interpretando guitarra"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-muted-foreground tracking-[0.2em] text-xs uppercase mb-4">
                Sobre mí
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                Entre lo popular y lo académico
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                La obra de Lucas Maureira se inscribe en la música popular argentina contemporánea, 
                abordada desde una perspectiva compositiva. Sus piezas articulan elementos del tango 
                y el folclore actuales con recursos de la música académica, particularmente del siglo XX.
              </p>
              <p>
                El uso de armonías extendidas, la exploración tímbrica y el trabajo contrapuntístico 
                configuran un lenguaje propio, donde la expresividad melódica ocupa un lugar central.
              </p>
              <p className="text-foreground/70 italic border-l-2 border-accent/50 pl-6">
                Su trabajo no busca reproducir lenguajes tradicionales, sino reconfigurarlos desde 
                una mirada contemporánea, donde la guitarra funciona como un espacio de síntesis 
                entre lo popular y lo académico.
              </p>
            </div>

            {/* Formation */}
            <div className="pt-8 border-t border-border">
              <h3 className="text-sm tracking-[0.15em] uppercase mb-6 text-foreground">
                Formación
              </h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-4">
                  <span className="text-foreground/50 w-16 shrink-0">Origen</span>
                  <span>San Juan, Argentina</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-foreground/50 w-16 shrink-0">Estudios</span>
                  <span>Universidad Nacional de San Juan (Guitarra)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-foreground/50 w-16 shrink-0">2010–17</span>
                  <span>Licenciado Composición Musical, Universidad Nacional de Villa María (Córdoba)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-foreground/50 w-16 shrink-0">2015</span>
                  <span>Becado en Improvisación Musical, Universidad Veracruzana (México)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-foreground/50 w-16 shrink-0">Maestro</span>
                  <span>Clases de composición con Rodolfo Mederos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
