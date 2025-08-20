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
import { Divider } from '../../../components/ui/Divider'

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
      className='w-full xl:w-7xl m-auto px-4 rounded-md grid grid-cols-1 gap-2'
    >
      <h2 className='text-3xl my-10 text-center'>Habilidades</h2>
      {skills.map((skill, i) => (
        <Card
          key={i}
          reverse={i % 2 == 0}
          className={`relative m-auto sm:border-none sm:bg-background flex-wrap flex flex-col ${
            i % 2 == 0 ? 'sm:text-left' : 'sm:items-end sm:text-right'
          }`}
        >
          <Divider
            orientation='vertical'
            className={`hidden sm:block absolute`}
          />
          <CardHeader>
            <CardTitle
              className={`relative flex items-center gap-4 ${
                i % 2 !== 0 && 'sm:justify-start sm:flex-row-reverse'
              }`}
            >
              <Image
                src={skill.img}
                alt={skill.title + ' logo'}
                className='size-15 p-2 rounded-md dark:bg-button-foreground'
              />
              <p>{skill.title}</p>
            </CardTitle>
            <CardDescription className='max-w-xl'>
              {skill.content}
            </CardDescription>
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
    </motion.div>
  )
}
