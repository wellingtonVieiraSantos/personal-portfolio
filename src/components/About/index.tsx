'use client'
import Image from 'next/image'
import perfil from '../../assets/perfil.png'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import SkillSmoothTabs from './SkillsSmoothTabs'

export default function About() {
  return (
    <section className='min-h-screen m-auto grid place-items-center' id='about'>
      <div className='w-full h-full dark:bg-secondary-bg-dark bg-secondary-bg py-10 grid place-items-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.1, duration: 0.4 }
          }}
          viewport={{ once: true }}
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
              <motion.a
                whileHover={{ scale: 1.2 }}
                href={'/#contact'}
                className='hover:text-error'
              >
                <Mail />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href={'https://github.com/wellingtonVieiraSantos'}
                target='_blank'
                className='hover:text-button-bg dark:hover:text-button-bg-dark'
              >
                <Github />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href={'https://www.linkedin.com/in/wellingtonsantos2022/'}
                target='_blank'
                className='hover:text-blue-500'
              >
                <Linkedin />
              </motion.a>
            </div>
          </div>
          <div className='grid place-content-around px-4 text-justify text-xl leading-relaxed'>
            <header className='my-5'>
              <h2 className='text-left font-montserrat-title text-4xl'>
                Sobre Mim
              </h2>
            </header>
            <p>
              Meu nome é{' '}
              <strong className='text-button-bg dark:text-button-bg-dark font-montserrat-title'>
                Wellington Vieira
              </strong>
              , sou um{' '}
              <strong className='text-button-bg dark:text-button-bg-dark font-montserrat-title'>
                Desenvolvedor Front-end
              </strong>{' '}
              especializado em{' '}
              <strong className='text-button-bg dark:text-button-bg-dark font-montserrat-title'>
                Next.js
              </strong>
              , com formação em Matemática, há dois anos fiz uma transição de
              carreira para a programação, pois me apaixonei pela área. Desde
              então, tenho trabalhado como freelancer, criando interfaces
              modernas, responsivas e intuitivas.
            </p>
            <p>
              Tenho um olhar atento para UI/UX, buscando sempre entregar
              produtos bem estruturados e visualmente agradáveis. Além disso,
              priorizo códigos escaláveis, organizados e seguindo as melhores
              práticas do Clean Code, garantindo manutenibilidade e eficiência
              nos projetos.
            </p>
            <p>
              Estou sempre em busca de desafios que me permitam evoluir como
              profissional e contribuir com experiências digitais de alta
              qualidade. 🚀
            </p>
          </div>
        </motion.div>
        <div className='w-full text-center '>
          <h2 className=' text-4xl my-20 font-montserrat-title'>Habilidades</h2>
          <SkillSmoothTabs />
        </div>
      </div>
    </section>
  )
}
