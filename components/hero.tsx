import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_MG_2396_edited-JIidTwjnzSMuCqQc3VI9Poyd3DbKuO.jpeg"
          alt="Lucas Maureira en concierto"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <p className="text-muted-foreground tracking-[0.3em] text-sm uppercase mb-6">
          Guitarrista & Compositor
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8">
          Lucas Maureira
        </h1>

        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Música contemporánea de raíz argentina para guitarra solista y música de cámara
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed">
            Obras propias que integran tango y folclore desde una perspectiva compositiva actual
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#musica"
            className="px-8 py-3 bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors"
          >
            Escuchar música
          </Link>
          <Link
            href="#contacto"
            className="px-8 py-3 border border-foreground/30 text-sm tracking-wide hover:bg-foreground/10 transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent opacity-50" />
      </div>
    </section>
  )
}
