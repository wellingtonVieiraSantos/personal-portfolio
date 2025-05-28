'use client'
import Card from '@/components/CardPortifolio'
import { projects } from '../../utils/projectsPortifolio'
import Button from '../Button'
import { CodeXml, PanelsTopLeft } from 'lucide-react'

export default function Portifolio() {
  return (
    <section
      className='min-h-screen m-auto grid place-content-center bg-primary-bg text-primary-text'
      id='portifolio'
    >
      <div className='max-w-7xl py-4 px-2 my-10 grid grid-cols-1 gap-10'>
        <header>
          <h2 className='text-center text-4xl my-8'>Portifolio</h2>
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
                  <Button.Link
                    textLink={project.links.githubCode}
                    type='primary'
                    text='code'
                    icon={CodeXml}
                    className='px-6'
                    target='_blank'
                  />
                )}
                {project.links.website && (
                  <Button.Link
                    textLink={project.links.website}
                    type='primary'
                    text='page'
                    icon={PanelsTopLeft}
                    className='px-6'
                    target='_blank'
                  />
                )}
              </Card.Actions>
            </Card.Content>
          </Card.Root>
        ))}
      </div>
    </section>
  )
}
