'use client'
import Image from 'next/image'
import perfil from '../../assets/perfil.png'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import html from '../../assets/coloredIcons/html5.svg'
import css from '../../assets/coloredIcons/css3.svg'
import js from '../../assets/coloredIcons/js.svg'
import react from '../../assets/coloredIcons/react.svg'
import tailwind from '../../assets/coloredIcons/tailwindcss.svg'
import git from '../../assets/coloredIcons/git.svg'
import node from '../../assets/coloredIcons/node.svg'
import sql from '../../assets/coloredIcons/sql.svg'
import api from '../../assets/coloredIcons/api.svg'
import express from '../../assets/coloredIcons/express.svg'
import next from '../../assets/coloredIcons/nextjs.svg'
import ts from '../../assets/coloredIcons/typescript.svg'
import github from '../../assets/coloredIcons/github.svg'
import { useTheme } from 'next-themes'

export default function About() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme == 'dark' ? '#242629' : '#d1d1e9'

  return (
    <section className='min-h-screen m-auto grid place-items-center' id='about'>
      <div className='w-full h-full dark:bg-secondary-bg-dark bg-secondary-bg py-10 grid place-items-center'>
        <div
          className='max-w-7xl grid grid-flow-row lg:grid-cols-[1fr_2fr] lg:grid-flow-col rounded
         py-10 px-4 bg-primary-bg dark:bg-primary-bg-dark shadow'
        >
          <div className='flex flex-col items-center gap-4'>
            <Image
              src={perfil}
              alt='imagem de perfil'
              width={300}
              height={300}
              className='rounded-full'
            />
            <span className='text-lg'>Wellington Vieira</span>
            <div className='grid grid-flow-col gap-4'>
              <Link
                href={'/#contact'}
                className='hover:text-error transition-all'
              >
                <Mail />
              </Link>
              <Link
                href={'https://github.com/wellingtonVieiraSantos'}
                target='_blank'
                className='hover:text-button-bg dark:hover:text-button-bg-dark transition-all'
              >
                <Github />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/wellingtonsantos2022/'}
                target='_blank'
                className='hover:text-blue-500 transition-all'
              >
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className='grid place-content-around px-4'>
            <header className='my-5'>
              <h2 className='text-left text-4xl'>Sobre Mim</h2>
            </header>
            <p className='text-justify text-xl mb-1'>
              Sou um <strong>desenvolvedor front-end</strong> especializado em{' '}
              <strong>Next.js</strong>, com formação em Matemática, há dois anos
              fiz uma transição de carreira para a programação, pois me
              apaixonei pela área. Desde então, tenho trabalhado como
              freelancer, criando interfaces modernas, responsivas e intuitivas.
            </p>
            <p className='text-justify text-xl mb-1'>
              Tenho um olhar atento para UI/UX, buscando sempre entregar
              produtos bem estruturados e visualmente agradáveis. Além disso,
              priorizo códigos escaláveis, organizados e seguindo as melhores
              práticas do Clean Code, garantindo manutenibilidade e eficiência
              nos projetos.
            </p>
            <p className='text-justify text-xl'>
              Estou sempre em busca de desafios que me permitam evoluir como
              profissional e contribuir com experiências digitais de alta
              qualidade. 🚀
            </p>
          </div>
        </div>
        <div className='w-full hidden lg:block text-center'>
          <h2 className='uppercase text-4xl my-8 font-bold'>Skills</h2>
          <div>
            <Marquee
              autoFill
              pauseOnHover
              speed={40}
              delay={0}
              gradient
              gradientWidth={200}
              gradientColor={isDark}
              className='max-w-5xl m-auto h-full my-4 '
            >
              <div className='mx-8 flex gap-2 grayscale hover:grayscale-0 transition duration-500'>
                <Image src={html} alt='html' width={30} height={30} />
                <span className='text-xl'>HTML</span>
              </div>
              <div className='mx-8 flex gap-2 grayscale hover:grayscale-0 transition duration-500'>
                <Image src={css} alt='html' width={30} height={30} />
                <span className='text-xl'>CSS</span>
              </div>
              <div className='mx-8 flex gap-2 grayscale hover:grayscale-0 transition duration-500'>
                <Image src={js} alt='html' width={30} height={30} />
                <span className='text-xl'>JavaScrypt</span>
              </div>
              <div className='mx-8 flex gap-2 grayscale hover:grayscale-0 transition duration-500'>
                <Image src={react} alt='html' width={30} height={30} />
                <span className='text-xl'>React</span>
              </div>
              <div className='mx-8 grayscale hover:grayscale-0 transition duration-500'>
                <Image
                  src={tailwind}
                  alt='html'
                  width={120}
                  height={120}
                  className='dark:invert'
                />
              </div>
              <div className='mx-8 grayscale hover:grayscale-0 transition duration-500'>
                <Image
                  src={git}
                  alt='html'
                  width={100}
                  height={100}
                  className='dark:invert'
                />
              </div>
              <div className='mx-8 grayscale hover:grayscale-0 transition duration-500'>
                <Image
                  src={node}
                  alt='html'
                  width={100}
                  height={100}
                  className='dark:invert'
                />
              </div>
              <div className='mx-8 flex gap-2 grayscale hover:grayscale-0 transition duration-500'>
                <Image src={api} alt='html' width={30} height={30} />
                <span className='text-xl'>Api Rest</span>
              </div>
              <div className='mx-8 flex gap-2 grayscale hover:grayscale-0 transition duration-500'>
                <Image src={sql} alt='html' width={30} height={30} />
                <span className='text-xl'>Sql DB</span>
              </div>
              <div className='mx-8 flex gap-2 grayscale hover:grayscale-0 transition duration-500'>
                <Image
                  src={express}
                  alt='html'
                  width={30}
                  height={30}
                  className='dark:invert'
                />
                <span className='text-xl'>Express</span>
              </div>
              <div className='mx-8 grayscale hover:grayscale-0 transition duration-500'>
                <Image
                  src={next}
                  alt='html'
                  width={100}
                  height={100}
                  className='dark:invert'
                />
              </div>
              <div className='mx-8 grayscale hover:grayscale-0 transition duration-500'>
                <Image
                  src={ts}
                  alt='html'
                  width={100}
                  height={100}
                  className='dark:invert'
                />
              </div>
              <div className='mx-8 grayscale hover:grayscale-0 transition duration-500'>
                <Image
                  src={github}
                  alt='html'
                  width={100}
                  height={100}
                  className='dark:invert'
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
