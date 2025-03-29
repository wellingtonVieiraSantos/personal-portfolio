'use client'
import { MessageCircleMore } from 'lucide-react'
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
        className='max-w-[1200px] md:pl-10 px-2 flex flex-col items-center md:items-start md:text-left text-center gap-10 md:border-l-4 border-secondary-text'
      >
        <h1 className='text-xl md:text-2xl'>
          Olá, sou{' '}
          <span className='font-montserrat-title leading-none block text-button-bg dark:text-button-bg-dark text-7xl md:text-9xl mt-4'>
            Ton Santos
          </span>
        </h1>
        <p className='text-xl md:text-2xl'>
          Desenvolvedor Front-end |{' '}
          <span className='font-montserrat-title text-button-bg dark:text-button-bg-dark text-3xl'>
            Next.js
          </span>
        </p>
        <p className='md:text-lg text-center md:text-justify px-2'>
          Esta à procura de um sistema profissional? Entre em contato para
          resolvermos seus problemas.{' '}
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href='#contact'
          className='flex text-lg font-montserrat-title gap-4 items-center text-button-text dark:text-button-text-dark border border-button-bg rounded bg-button-bg dark:bg-button-bg-dark px-8 py-2'
        >
          Contato
          <MessageCircleMore />
        </motion.a>
      </motion.div>
    </section>
  )
}
