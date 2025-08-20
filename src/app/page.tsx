'use client'
import Contact from './components/Contact'
import HomePage from './components/HomePage'
import About from '@/components/About'
import Portifolio from '@/components/Portifolio'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Experience from './components/experience'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  return (
    <>
      <Nav activeSection={activeSection} />
      <main className='overflow-hidden'>
        <HomePage setActiveSection={setActiveSection} id='home' />
        <Experience setActiveSection={setActiveSection} id='experiencia' />
        <About setActiveSection={setActiveSection} id='sobre' />
        <Portifolio setActiveSection={setActiveSection} id='projetos' />
        <Contact setActiveSection={setActiveSection} id='contato' />
      </main>
      <Footer />
    </>
  )
}
