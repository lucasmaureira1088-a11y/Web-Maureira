import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Project } from "@/components/project"
import { Music } from "@/components/music"
import { Trajectory } from "@/components/trajectory"
import { Workshop } from "@/components/workshop"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Project />
      <Music />
      <Trajectory />
      <Workshop />
      <Contact />
      <Footer />
    </main>
  )
}
