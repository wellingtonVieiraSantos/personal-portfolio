import { Button } from '@/components/ui/Button'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/Carousel'
import { projects } from '@/lib/projectsPortifolio'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectOverview() {
  return (
    <section
      id='experiencia'
      className='grid place-items-center gap-3 p-3 pt-10'
    >
      <div className='w-full max-w-7xl text-center md:text-left'>
        <h2 className='text-3xl'>Projetos com significado</h2>
        <p className='text-sm py-2 text-foreground-secondary'>
          Buscamos além de criar códigos claros e escaláveis, criar soluções
          para problemas.
        </p>
        <Link href={'/projetos'}>
          <Button className='justify-self-center lg:justify-self-end my-2 bg-gradient-to-r from-button to-badge'>
            Ver todos os projetos
            <ArrowUpRight />
          </Button>
        </Link>
      </div>
      <Carousel className='size-full max-w-4xl border-0 dark:border shadow dark:shadow-none rounded-lg'>
        <CarouselContent>
          {projects.slice(0, 3).map((project, i) => (
            <CarouselItem
              key={project.title}
              className={`relative text-balance overflow-hidden flex flex-col dark:bg-card ${
                i === 0 ? 'bg-indigo-50' : i === 1 ? 'bg-rose-50' : 'bg-teal-50'
              }`}
            >
              <Image
                src={project.img}
                alt={project.title}
                width={1900}
                height={900}
              />
              <div
                className={`p-4 grid gap-1 lg:absolute dark:bg-card border-t bottom-0 ${
                  i === 0
                    ? 'bg-indigo-50'
                    : i === 1
                    ? 'bg-rose-50'
                    : 'bg-teal-50'
                }`}
              >
                <h3 className='text-xl'>{project.title}</h3>
                <span className='line-clamp-1 text-sm text-foreground-secondary'>
                  {project.description}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
