'use client'
import Contact from './_components/Contact'
import HomePage from './_components/HomePage'
import Experience from './_components/Experience'
import ProjectsOverview from './_components/ProjectsOverview'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <HomePage />
      <Experience />
      <ProjectsOverview />
      <Contact />
    </main>
  )
}
