import Image from 'next/image'
import perfil from '../../images/perfil.jpg'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <section className='min-h-screen m-auto grid place-items-center' id='about'>
      <div className='w-full h-full bg-indigo-100 dark:bg-slate-950 py-10 grid place-items-center'>
        <div className='max-w-7xl grid grid-flow-row lg:grid-cols-[1fr_2fr] lg:grid-flow-col m-auto rounded xl:border border-gray-400 dark:border-gray-700 py-10 px-4'>
          <div className='flex flex-col items-center gap-4'>
            <Image
              src={perfil}
              alt='imagem de perfil'
              className='rounded-full w-[200px] ring ring-white'
            />
            <span className='text-lg'>Wellington Vieira</span>
            <div className='grid grid-flow-col gap-4'>
              <Link
                href={'/#contact'}
                className='hover:text-red-700 transition-all'
              >
                <Mail />
              </Link>
              <Link
                href={'https://github.com/wellingtonVieiraSantos'}
                target='_blank'
                className='hover:text-indigo-400 dark:hover:text-indigo-500 transition-all'
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
            <header>
              <h2 className='text-left text-3xl my-5 '>Sobre Mim</h2>
            </header>
            <p className='text-justify text-lg mb-1'>
              Sou um <strong>desenvolvedor front-end</strong> especializado em{' '}
              <strong>Next.js</strong>, com formação em Matemática, há dois anos
              fiz uma transição de carreira para a programação, pois me
              apaixonei pela área. Desde então, tenho trabalhado como
              freelancer, criando interfaces modernas, responsivas e intuitivas.
            </p>
            <p className='text-justify text-lg mb-1'>
              Tenho um olhar atento para UI/UX, buscando sempre entregar
              produtos bem estruturados e visualmente agradáveis. Além disso,
              priorizo códigos escaláveis, organizados e seguindo as melhores
              práticas do Clean Code, garantindo manutenibilidade e eficiência
              nos projetos.
            </p>
            <p className='text-justify text-lg'>
              Estou sempre em busca de desafios que me permitam evoluir como
              profissional e contribuir com experiências digitais de alta
              qualidade. 🚀
            </p>
          </div>
        </div>
        <div>CARROSSEL DE TECNOLOGIAS</div>
      </div>
    </section>
  )
}
