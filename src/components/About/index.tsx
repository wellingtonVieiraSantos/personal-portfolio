'use client'
import Image from 'next/image'
import perfil from '../../assets/perfil.webp'
import { motion } from 'motion/react'
import SkillSmoothTabs from './SkillsSmoothTabs'
import { CodeXml } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/Card'
import { Badge } from '../ui/Badge'

export default function About({
  id,
  setActiveSection
}: {
  id: string
  setActiveSection: Dispatch<SetStateAction<string>>
}) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  })
  useEffect(() => {
    if (inView) setActiveSection(id)
  }, [inView, id, setActiveSection])
  return (
    <section
      className='min-h-dvh grid place-items-center py-10'
      id={id}
      ref={ref}
    >
      <header>
        <h2 className='text-center my-10 text-4xl'>Sobre mim</h2>
      </header>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.1, duration: 0.4 }
        }}
        viewport={{ once: true }}
        className='w-full max-w-7xl px-4'
      >
        <Card
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='grid grid-flow-row lg:grid-flow-col bg-card sm:bg-background'
        >
          <div className='flex flex-col items-center pl-2'>
            <Image
              src={perfil}
              alt='imagem de perfil'
              width={300}
              height={300}
              className='m-auto rounded-xl bg-card'
            />
          </div>
          <div>
            <CardHeader className='text-center'>
              <CardTitle className='text-xl text-center lg:text-left'>
                Wellington Vieira
              </CardTitle>
              <CardDescription className='flex items-center justify-center lg:justify-normal gap-2 flex-wrap '>
                <CodeXml className='size-5 text-button' />
                Desencolvedor Front-end{' '}
                <strong className='text-base'>Next | TypeScript</strong>
              </CardDescription>
            </CardHeader>
            <CardContent className='text-justify gap-2'>
              <div className='flex gap-4 my-4 justify-center lg:justify-normal flex-wrap'>
                <Badge variant='outline'>Desenvolvedor Web</Badge>
                <Badge variant='outline'>Desenvolvedor App</Badge>
                <Badge variant='outline'>UX/UI</Badge>
              </div>
              <div className='leading-relaxed'>
                <p>Olá, meu nome é Wellington</p>
                <p>
                  Me formei em Matemática e à 2 anos fiz uma transição de
                  carreira para a programação. Desde então, tenho trabalhado
                  como freelancer, criando interfaces modernas, responsivas e
                  intuitivas.
                </p>
                <p>
                  Tenho um olhar atento para UI/UX, busco sempre entregar
                  produtos bem estruturados e visualmente agradáveis. Além
                  disso, priorizo códigos escaláveis, organizados e seguindo as
                  melhores práticas do Clean Code, garantindo manutenibilidade e
                  eficiência nos projetos.
                </p>
                <p>
                  Estou sempre em busca de desafios que me permitam evoluir como
                  profissional e contribuir com experiências digitais de alta
                  qualidade. 🚀
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
      <SkillSmoothTabs />
    </section>
  )
}
