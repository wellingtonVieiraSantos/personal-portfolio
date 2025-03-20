import Contact from '@/components/Contact'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Portifolio from '@/components/Portifolio'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <HomePage />
      <About />
      <Portifolio />
      <Contact />
    </main>
  )
}
