'use client'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import SocialSideBar from './SocialSideBar'
import { Code, MessageCircleMore } from 'lucide-react'

export default function HomePage() {
  return (
    <section className='relative min-h-dvh grid place-content-center' id='home'>
      {/* <ThemeSwitch className='absolute right-4 top-2 md:hidden' /> */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, opacity: 'linear', ease: 'easeOut' }
        }}
        className='max-w-[1200px] md:pl-10 px-2 flex flex-col items-center md:items-start
         md:text-left text-center gap-10 md:border-l-4 border-border -mt-10 md:mt-0'
      >
        <h1 className='text-xl md:text-2xl'>
          Olá, sou{' '}
          <span className='leading-none block bg-linear-to-r from-button to-badge bg-clip-text text-transparent text-7xl md:text-9xl mt-4'>
            Ton Santos
          </span>
        </h1>
        <p className='text-xl md:text-2xl'>
          Desenvolvedor de Software |{' '}
          <span className='font-montserrat text-button text-3xl'>Next.js</span>
        </p>
        <p className='md:text-lg text-center md:text-justify px-4 text-foreground-secondary'>
          Esta à procura de um sistema profissional? Entre em contato para
          resolvermos seus problemas.{' '}
        </p>
        <div className='flex gap-4'>
          <Link href='#contato'>
            <Button className='bg-linear-to-r from-button to-badge'>
              Entre em contato
              <MessageCircleMore />
            </Button>
          </Link>
          <Link href='/projetos'>
            <Button variant='border'>
              Ver projetos
              <Code />
            </Button>
          </Link>
        </div>
      </motion.div>
      <SocialSideBar />
    </section>
  )
}

/* pagina principal, home + portifolio mini card de project que abre em modal 
completo com carrousel de fotos, uma pagina para sobre e outra para contato */
