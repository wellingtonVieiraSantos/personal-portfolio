'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/Card'
import { projects } from '../../utils/projectsPortifolio'
import { Button } from '../ui/Button'
import { CodeXml, PanelsTopLeft } from 'lucide-react'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Badge } from '../ui/Badge'
import Link from 'next/link'
import Image from 'next/image'

export default function Portifolio({
  id,
  setActiveSection
}: {
  id: string
  setActiveSection: Dispatch<SetStateAction<string>>
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  })
  useEffect(() => {
    if (inView) setActiveSection(id)
  }, [inView, id, setActiveSection])
  return (
    <section
      className='size-full min-h-dvh grid place-content-center py-4'
      id={id}
      ref={ref}
    >
      <div className='m-auto max-w-7xl px-4 grid grid-cols-1 gap-4 '>
        <header>
          <h2 className='text-center text-4xl my-10'>Projetos</h2>
        </header>
        {projects.map((project, i) => (
          <Card
            key={i}
            reverse={i % 2 == 0}
            className='sm:border-none sm:bg-background grid grid-cols-1 sm:grid-cols-2 place-items-center'
          >
            <Image
              src={project.img}
              alt={project.title}
              className={`sm:size-[90%] opacity-50 hover:opacity-100 transition duration-300 object-cover object-center ${
                i % 2 == 0 && 'sm:order-1'
              } rounded-lg`}
            />
            <div className={`flex flex-col ${i % 2 !== 0 && 'sm:items-end'}`}>
              <CardHeader className={`${i % 2 !== 0 && 'sm:text-right'}`}>
                <CardTitle className='text-xl'>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className={`${i % 2 !== 0 && 'sm:text-right'}`}>Stack</h3>
                <div className='flex gap-2 flex-wrap'>
                  {project.stack.map((stack, i) => (
                    <Badge key={i}>{stack}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter
                className={`flex-col sm:flex-row ${
                  i % 2 === 0 && 'sm:justify-normal'
                }`}
              >
                {project.links.githubCode && (
                  <Link
                    href={project.links.githubCode}
                    target='_blank'
                    className='w-full sm:w-fit'
                  >
                    <Button className='w-full sm:px-10'>
                      <CodeXml />
                      Github
                    </Button>
                  </Link>
                )}
                {project.links.website && (
                  <Link
                    href={project.links.website}
                    target='_blank'
                    className='w-full sm:w-fit'
                  >
                    <Button variant='border' className='w-full sm:px-10'>
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
