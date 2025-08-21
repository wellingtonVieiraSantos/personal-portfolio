'use client'
import Image from 'next/image'
import perfil from '../../assets/perfil.webp'
import { motion } from 'motion/react'
import SkillSmoothTabs from './_components/SkillsSmoothTabs'
import { CodeXml } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
export default function About() {
  return (
    <section className='min-h-dvh grid place-items-center py-4'>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.4 }
        }}
        viewport={{ once: true }}
        className='w-full max-w-7xl px-4'
      >
        <Card
          initial={{ opacity: 0, y: 200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.4 }
          }}
          viewport={{ once: true }}
          className=' grid grid-flow-row lg:grid-flow-col mt-10 lg:mt-20 bg-sky-50 dark:bg-card'
        >
          <div className='flex flex-col items-center pl-2'>
            <Image
              src={perfil}
              alt='imagem de perfil'
              width={300}
              height={300}
              className='m-auto rounded-xl'
            />
          </div>
          <div>
            <CardHeader className='text-center'>
              <CardTitle className='text-2xl lg:text-left'>Sobre mim</CardTitle>
              <CardDescription className='flex items-center justify-center lg:justify-normal gap-2 flex-wrap '>
                <CodeXml className='size-5 text-button' />
                Desenvolvedor Front-end{' '}
                <strong className='text-base text-button'>
                  Next | TypeScript
                </strong>
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
                  Me formei em Matemática e há 2 anos fiz uma transição de
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
