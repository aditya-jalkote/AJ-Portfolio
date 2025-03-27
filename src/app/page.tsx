import Header from "@/components/header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Education from "@/components/Education"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col dark bg-black text-white relative">
      {/* Circuit Board Background Pattern - Semi-transparent overlay */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-repeat"></div>
      </div>

      <Header />
      <main className="flex-1 relative z-10">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

