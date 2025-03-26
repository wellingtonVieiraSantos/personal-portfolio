'use client'
import Card from '@/components/CardPortifolio'
import { projects } from '../../utils/projectsPortifolio'

export default function Portifolio() {
  return (
    <section
      className='min-h-screen m-auto grid place-content-center my-20'
      id='portifolio'
    >
      <div className='max-w-7xl py-4 px-2 my-10 grid grid-cols-1 gap-10'>
        <header>
          <h2 className='text-center text-4xl font-montserrat-title my-8'>
            Portifolio
          </h2>
        </header>
        {projects.map((project, index) => (
          <Card.Root key={index} reverse={index % 2 === 1}>
            <Card.Image src={project.img} alt={project.title} />
            <Card.Content
              title={project.title}
              description={project.description}
              stack={project.stack}
            >
              <Card.Actions>
                {project.links.githubCode && (
                  <Card.Action
                    text='code'
                    linkHref={project.links.githubCode}
                  />
                )}
                {project.links.website && (
                  <Card.Action text='page' linkHref={project.links.website} />
                )}
              </Card.Actions>
            </Card.Content>
          </Card.Root>
        ))}
      </div>
    </section>
  )
}
