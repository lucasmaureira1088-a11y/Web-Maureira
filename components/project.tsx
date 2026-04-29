import Image from "next/image"

export function Project() {
  return (
    <section id="proyecto" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground tracking-[0.2em] text-xs uppercase mb-4">
            Proyecto Artístico
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light max-w-2xl mx-auto text-balance">
            Un lenguaje propio dentro de la música argentina contemporánea
          </h2>
        </div>

        {/* Main Image */}
        <div className="relative aspect-[21/9] mb-16 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_MG_2466_edited-ZBIpAPpW3MGS3XzFeuzZ1ooLABkFrg.jpeg"
            alt="Lucas Maureira con Trío Ámbar y bailarines de tango"
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-muted-foreground leading-relaxed mb-8">
            Lucas Maureira desarrolla un proyecto centrado en la interpretación de obras propias. 
            El repertorio aborda el tango y el folclore desde una perspectiva contemporánea, 
            con un enfoque en la composición y la exploración tímbrica.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-card border border-border">
            <h3 className="font-serif text-xl mb-4">Guitarra solista</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Obras para guitarra sola que exploran las posibilidades tímbricas 
              y expresivas del instrumento dentro del lenguaje contemporáneo argentino.
            </p>
          </div>
          <div className="p-8 bg-card border border-border">
            <h3 className="font-serif text-xl mb-4">Trío de cuerdas + guitarra</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Formación que permite un diálogo contrapuntístico rico entre la guitarra 
              y las cuerdas, expandiendo las posibilidades sonoras y texturales.
            </p>
          </div>
          <div className="p-8 bg-card border border-border">
            <h3 className="font-serif text-xl mb-4">Formatos adaptables</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Configuraciones flexibles con músicos locales, adaptando el repertorio 
              a las posibilidades de cada espacio y contexto.
            </p>
          </div>
        </div>

        {/* Target Audiences */}
        <div className="border-t border-border pt-12">
          <h3 className="text-sm tracking-[0.15em] uppercase mb-8 text-center text-muted-foreground">
            Orientado a
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Festivales de música de cámara",
              "Ciclos de música contemporánea",
              "Espacios culturales y académicos"
            ].map((item) => (
              <span
                key={item}
                className="px-6 py-2 border border-border text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
