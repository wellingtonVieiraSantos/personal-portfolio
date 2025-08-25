'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/Card'
import { projects } from '../../lib/projectsPortifolio'
import { Button } from '@/components/ui/Button'
import { CodeXml, PanelsTopLeft } from 'lucide-react'

import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import Image from 'next/image'

const color = [
  'bg-green-50',
  'bg-rose-50',
  'bg-sky-50',
  'bg-emerald-50',
  'bg-purple-50',
  'bg-indigo-50'
]

export default function Projects() {
  return (
    <section className='size-full min-h-dvh grid place-content-center py-5 overflow-hidden'>
      <div className='m-auto max-w-7xl p-3 grid grid-cols-1 gap-4'>
        <header className='lg:mt-20 text-center lg:text-left p-3'>
          <h2 className='text-3xl'>Principais Projetos</h2>
          <p className='text-sm text-foreground-secondary'>
            Buscamos sempre criar projetos com as tecnologias mais recentes e
            sempre com foco no cliente e no usuário.
          </p>
        </header>
        {projects.map((project, i) => (
          <Card
            key={i}
            className={` grid grid-cols-1 lg:grid-cols-2 place-items-center overflow-hidden ${color[i]} dark:bg-card`}
          >
            <Image
              src={project.img}
              alt={project.title}
              className={`w-full opacity-50 hover:opacity-100 transition duration-300 ${
                i % 2 == 0 && 'lg:order-1'
              }`}
            />
            <div className={`h-full flex flex-col justify-evenly`}>
              <CardHeader className={`${i % 2 !== 0 && 'lg:text-right'}`}>
                <CardTitle className='text-xl'>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className={`${i % 2 !== 0 && 'lg:items-end'}`}>
                <h3>Stack</h3>
                <div className={`flex gap-2 flex-wrap `}>
                  {project.stack.map((stack, i) => (
                    <Badge key={i}>{stack}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className={`flex-col lg:flex-row gap-3`}>
                {project.links.githubCode && (
                  <Link
                    href={project.links.githubCode}
                    target='_blank'
                    className='flex-1 w-full'
                  >
                    <Button className='w-full bg-gradient-to-r from-button to-badge'>
                      <CodeXml />
                      Github
                    </Button>
                  </Link>
                )}
                {project.links.website && (
                  <Link
                    href={project.links.website}
                    target='_blank'
                    className='flex-1 w-full'
                  >
                    <Button variant='border' className='w-full'>
                      <PanelsTopLeft />
                      Site
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
