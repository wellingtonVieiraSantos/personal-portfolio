'use client'
import { motion } from 'motion/react'
import { Button } from '../ui/Button'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import SocialSideBar from './SocialSideBar'

export default function HomePage({
  id,
  setActiveSection
}: {
  id: string
  setActiveSection: Dispatch<SetStateAction<string>>
}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  })
  useEffect(() => {
    if (inView) setActiveSection(id)
  }, [inView, id, setActiveSection])
  return (
    <section
      className='relative min-h-screen grid place-content-center bg-primary-bg text-primary-text'
      id={id}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, opacity: 'linear', ease: 'easeOut' }
        }}
        className='max-w-[1200px] md:pl-10 px-2 flex flex-col items-center md:items-start
         md:text-left text-center gap-10 md:border-l-4 border-border'
      >
        <h1 className='text-xl md:text-2xl'>
          Olá, sou{' '}
          <span className='leading-none block text-button-bg text-7xl md:text-9xl mt-4'>
            Ton Santos
          </span>
        </h1>
        <p className='text-xl md:text-2xl'>
          Desenvolvedor Front-end |{' '}
          <span className='font-montserrat text-button-bg text-3xl'>
            Next.js
          </span>
        </p>
        <p className='md:text-lg text-center md:text-justify px-4 text-primary-text/70'>
          Esta à procura de um sistema profissional? Entre em contato para
          resolvermos seus problemas.{' '}
        </p>
        <Link href='#contato'>
          <Button size='lg'>Tem um projeto?</Button>
        </Link>
      </motion.div>
      <SocialSideBar />
    </section>
  )
}
