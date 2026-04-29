export function Workshop() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground tracking-[0.2em] text-xs uppercase mb-4">
              Talleres
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
              Guitarra Argentina – Tango
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Como extensión de su trabajo compositivo e interpretativo, desarrolla espacios 
              de formación orientados a guitarristas interesados en el lenguaje del tango contemporáneo.
            </p>
          </div>

          <div className="bg-card border border-border p-8 md:p-12 space-y-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Exploración de los acompañamientos de guitarra en el tango y la creación de arreglos</h3>
              <p className="text-sm text-muted-foreground">Duración: 2 horas</p>
            </div>

            <div>
              <h4 className="text-sm tracking-[0.15em] uppercase mb-4 text-foreground">Objetivos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  Comprender los distintos estilos de acompañamiento en el tango
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  Analizar el fraseo melódico aplicado a la guitarra
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  Explorar recursos para la creación de arreglos
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  Incorporar conceptos de armonía y orquestación dentro del género
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm tracking-[0.15em] uppercase mb-4 text-foreground">Contenidos</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">I. Introducción</p>
                  <p className="text-sm text-muted-foreground">Contextualización histórica del tango y su evolución musical</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">II. Acompañamientos</p>
                  <p className="text-sm text-muted-foreground">Rasgueo, compás, punteo, golpe y arpegio</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">III. Aplicación práctica</p>
                  <p className="text-sm text-muted-foreground">Análisis y ejecución sobre ejemplos concretos</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h4 className="text-sm tracking-[0.15em] uppercase mb-4 text-foreground">Requisitos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Guitarra</li>
                <li>• Material para toma de notas</li>
                <li>• Espacio con proyector o pizarra (opcional)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
