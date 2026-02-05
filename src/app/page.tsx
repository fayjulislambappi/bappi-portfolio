
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Certificates from '@/components/Certificates'
import Projects from '@/components/Projects'

import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

import Preloader from '@/components/Preloader'

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certificates />
      <Projects />

      <Contact />
      <Footer />
    </main>
  )
}
