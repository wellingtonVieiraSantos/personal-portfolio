'use client'
import { skills } from '@/lib/skillsData'
import Image from 'next/image'
import { motion } from 'motion/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../../../components/ui/Card'
import { ScrollArea } from '@/components/ui/ScrollArea'

const color = [
  'bg-amber-50',
  'bg-rose-50',
  'bg-sky-50',
  'bg-yellow-50',
  'bg-purple-50',
  'bg-indigo-50',
  'bg-orange-50',
  'bg-fuchsia-50',
  'bg-cyan-50'
]

export default function SkillSmoothTabs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.4 }
      }}
      viewport={{ once: true }}
      className='w-full max-w-7xl m-auto px-4 grid grid-cols-1 gap-2 my-8'
    >
      <h2 className='text-3xl text-center lg:text-left'>Minhas Habilidades</h2>
      <span className='text-sm text-foreground-secondary'>
        Para melhor concretizar os projetos, uso as ferramentas mais atuais,
        sempre atualizando meus conhecimentos.
      </span>
      <ScrollArea className='w-full border-none'>
        <div className='w-full flex gap-4 pb-3'>
          {skills.map((skill, i) => (
            <Card
              key={i}
              reverse
              className={`w-max max-w-[350px] flex flex-col ${color[i]} dark:bg-card`}
            >
              <CardHeader>
                <CardTitle className={`relative flex items-center gap-4`}>
                  <Image
                    src={skill.img}
                    alt={skill.title + ' logo'}
                    className='size-15 p-2 rounded-md dark:bg-button-foreground'
                  />
                  <p>{skill.title}</p>
                </CardTitle>
                <CardDescription>{skill.content}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className='font-montserrat'>Conhecimentos estudados:</p>
                <ul className='list-disc list-inside text-left marker:text-button'>
                  {skill.topics?.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  )
}
