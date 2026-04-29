import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground tracking-[0.2em] text-xs uppercase mb-4">
            Contacto
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">
            Hablemos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            Para contrataciones, colaboraciones artísticas, talleres o cualquier consulta 
            relacionada con el proyecto musical.
          </p>

          <div className="space-y-6 mb-12">
            <Link
              href="mailto:lucasmaureira1088@gmail.com"
              className="flex items-center justify-center gap-3 text-lg hover:text-accent transition-colors"
            >
              <Mail size={20} className="text-muted-foreground" />
              lucasmaureira1088@gmail.com
            </Link>
            <Link
              href="tel:+5491137761142"
              className="flex items-center justify-center gap-3 text-lg hover:text-accent transition-colors"
            >
              <Phone size={20} className="text-muted-foreground" />
              +54 9 11 3776-1142
            </Link>
          </div>

          <div className="flex justify-center gap-6">
            <Link
              href="https://www.instagram.com/lucasmaureiramusic/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com/@lucasmaureiramusic/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
