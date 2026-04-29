import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Play } from "lucide-react"

const videos = [
  {
    title: "La Maldecida (Chacarera)",
    subtitle: "3er Movimiento de Sonata Argentina para Guitarra",
    type: "Guitarra solista",
    url: "https://youtu.be/19ixIqu3L90?si=XXHy6QrXXDHGCG8v",
    embedId: "19ixIqu3L90"
  },
  {
    title: "Huayno",
    subtitle: "Guitarra solista",
    type: "Guitarra solista",
    url: "https://youtu.be/Flucn7J-cOY?si=gLX-whCxMmVyYvea",
    embedId: "Flucn7J-cOY"
  },
  {
    title: "Música de cámara",
    subtitle: "Obras para trío de cuerdas y guitarra",
    type: "Música de cámara",
    url: "https://youtu.be/IpdjarfRr58?si=ran-DdiafU7fXLs-",
    embedId: "IpdjarfRr58"
  }
]

export function Music() {
  return (
    <section id="musica" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground tracking-[0.2em] text-xs uppercase mb-4">
              Música / Obras
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">
              Escuchar
            </h2>
          </div>
          
          <div className="flex gap-4">
            <Link
              href="https://open.spotify.com/intl-es/album/25doazIqL2iBOQdjYyTf7k?si=j-mMVTBdSsiVmDsbImIFcg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm hover:bg-secondary/50 transition-colors"
            >
              Spotify
              <ExternalLink size={14} />
            </Link>
            <Link
              href="https://www.youtube.com/@lucasmaureiramusic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm hover:bg-secondary/50 transition-colors"
            >
              YouTube
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <div className="relative aspect-video bg-card overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].embedId}`}
              title={videos[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {videos[0].type}
              </p>
              <h3 className="font-serif text-xl">{videos[0].title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{videos[0].subtitle}</p>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.slice(1).map((video) => (
            <Link
              key={video.embedId}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="relative aspect-video bg-card overflow-hidden mb-4">
                <Image
                  src={`https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-foreground/90 flex items-center justify-center">
                    <Play size={24} className="text-background ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                {video.type}
              </p>
              <h3 className="font-serif text-lg group-hover:text-accent transition-colors">
                {video.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{video.subtitle}</p>
            </Link>
          ))}
          
          {/* Performance Image */}
          <div className="relative aspect-video overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1776800935188-y78HCDSToy4RmzLXuIbO6dcNggRYTg.jpg"
              alt="Lucas Maureira en vivo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                En vivo
              </p>
              <h3 className="font-serif text-lg">Presentaciones y conciertos</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
