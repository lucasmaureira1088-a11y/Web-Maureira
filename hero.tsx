import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg mb-1">Lucas Maureira</p>
            <p className="text-sm text-muted-foreground">Guitarrista & Compositor</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="#inicio" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
            <Link href="#sobre-mi" className="hover:text-foreground transition-colors">
              Sobre mí
            </Link>
            <Link href="#proyecto" className="hover:text-foreground transition-colors">
              Proyecto
            </Link>
            <Link href="#musica" className="hover:text-foreground transition-colors">
              Música
            </Link>
            <Link href="#contacto" className="hover:text-foreground transition-colors">
              Contacto
            </Link>
          </nav>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lucas Maureira
          </p>
        </div>
      </div>
    </footer>
  )
}
