'use client'
import { MessageCircleMore, ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'

export default function HomePage() {
  return (
    <section
      className='min-h-screen relative grid place-content-center'
      id='home-page'
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, opacity: 'linear', ease: 'easeOut' }
        }}
        className='max-w-[1200px] md:pl-10 flex flex-col items-center md:items-start md:text-left text-center gap-10 md:border-l-4 border-primary-text'
      >
        <h1 className='text-4xl'>
          Olá, sou{' '}
          <span className='block text-button-bg dark:text-button-bg-dark text-6xl mt-4'>
            Wellington Vieira
          </span>
        </h1>
        <p className='text-xl'>
          Desenvolvedor Front-end |{' '}
          <span className='text-button-bg dark:text-button-bg-dark text-3xl'>
            Next.js
          </span>
        </p>
        <div className='flex text-xl flex-col sm:flex-row gap-6'>
          <a
            href='#contact'
            className='flex gap-4 items-center text-button-text border border-button-bg rounded bg-button-bg dark:bg-button-bg-dark px-8 py-2 dark:hover:bg-transparent hover:shadow-button hover:border hover:border-button-bg transition-all'
          >
            Contato
            <MessageCircleMore />
          </a>
        </div>
      </motion.div>
      <motion.a
        initial={{ opacity: 0, x: 0 }}
        animate={{
          opacity: 1,
          x: '-50%',
          transition: { delay: 0.7, duration: 0.4 }
        }}
        href='/#portifolio'
        className='absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center text-xl gap-4'
      >
        <span className='border border-button-bg dark:border-button-bg-dark px-6 py-2 rounded'>
          Ver Projetos
        </span>
        <ChevronDown size={35} className='animate-bounce' />
      </motion.a>
    </section>
  )
}
