'use client'
import Contact from './components/Contact'
import HomePage from './components/HomePage'
import Experience from './components/Experience'

export default function Home() {
  return (
    <>
      <main className='overflow-hidden'>
        <HomePage />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
