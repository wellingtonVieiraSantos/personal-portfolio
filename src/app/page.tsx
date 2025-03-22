import Contact from '@/components/Contact'
import HomePage from '@/components/HomePage'
import About from '@/components/About'
import Portifolio from '@/components/Portifolio'
import SocialSideBar from '@/components/SocialSideBar'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <SocialSideBar />
      <HomePage />
      <About />
      <Portifolio />
      <Contact />
    </main>
  )
}
