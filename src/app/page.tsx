'use client'
import Contact from '@/components/Contact'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Portifolio from '@/components/Portifolio'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('home')
  return (
    <>
      <Nav activeSection={activeSection} />
      <main>
        <HomePage setActiveSection={setActiveSection} id='home' />
        <About setActiveSection={setActiveSection} id='sobre' />
        <Portifolio setActiveSection={setActiveSection} id='projetos' />
        <Contact setActiveSection={setActiveSection} id='contato' />
      </main>
      <Footer />
    </>
  )
}
