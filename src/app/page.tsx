import Card from '@/components/CardPortifolio'
import DarkMode from '../app/dark-theme.svg'
import Contact from '@/components/Contact'
import { Github, Linkedin, ChevronDown } from 'lucide-react'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <section
        className='min-h-screen relative grid place-content-center'
        id='home-page'
      >
        <div className='max-w-[1200px] p-4 flex flex-col items-center text-center gap-10'>
          <h1 className='text-6xl'>
            Olá, sou{' '}
            <span className='text-indigo-600 dark:text-indigo-400'>Ton</span>
          </h1>
          <p className='text-xl'>
            Desenvolvedor Front-end |{' '}
            <span className='text-indigo-600 dark:text-indigo-400 text-3xl'>
              Next.js
            </span>
          </p>
          <div className='flex text-xl flex-col sm:flex-row gap-6'>
            <a
              href='#'
              className='flex gap-4 items-center text-white border border-indigo-600 rounded bg-indigo-900 dark:bg-indigo-500 px-8 py-2 dark:hover:bg-transparent hover:shadow-button hover:border hover:border-indigo-500 transition-all'
            >
              <Github />
              Github
            </a>
            <a
              href='#'
              className='flex gap-4 items-center text-black dark:text-white border border-indigo-600 rounded dark:bg-transparent px-8 py-2 dark:hover:bg-transparent hover:shadow-button hover:bg-indigo-900 hover:text-white transition-all'
            >
              <Linkedin />
              LinkedIn
            </a>
          </div>
        </div>
        <a
          href='#sobre'
          className='absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center text-xl gap-4'
        >
          <span>Saiba mais</span>
          <ChevronDown size={35} className='animate-bounce' />
        </a>
      </section>
      <section
        className='h-screen max-w-7xl m-auto grid place-items-center'
        id='sobre'
      >
        <div className='h-2/3 w-full  border-black dark:border-white dark:bg-slate-950 rounded-xl p-6 flex justify-between gap-6'>
          <div className='h-full w-1/3 border border-white rounded-md grid place-content-center'>
            {' '}
            FOTO{' '}
          </div>
          <div className='h-full w-2/3 border border-white rounded-md p-10 grid gap-10 text-center'>
            <header>
              <h2 className='text-left text-2xl'>Sobre Mim</h2>
            </header>
            DESCRIÇÃO + TECNOLOGIAS
          </div>
        </div>
      </section>
      <section
        className='min-h-screen max-w-7xl m-auto flex flex-col justify-center'
        id='portifolio'
      >
        <header>
          <h2 className='text-center text-2xl'>Portifolio</h2>
        </header>
        <div className=' border-white w-full p-4 flex flex-wrap gap-4 justify-evenly my-10 dark:bg-slate-950 rounded-xl'>
          <Card.Root>
            <Card.Header src={DarkMode} alt='teste' />
            <Card.Content
              title='Primeiro card'
              description='lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom '
            />
            <Card.Actions>
              <a href='#' className='bg-indigo-400 py-2 px-4 rounded-lg'>
                Saiba mais!
              </a>
            </Card.Actions>
          </Card.Root>
          <Card.Root>
            <Card.Header src={DarkMode} alt='teste' />
            <Card.Content
              title='Segundo card'
              description='lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom '
            />
            <Card.Actions>
              <a href='#' className='bg-indigo-400 py-2 px-4 rounded-lg'>
                Saiba mais!
              </a>
            </Card.Actions>
          </Card.Root>
          <Card.Root>
            <Card.Header src={DarkMode} alt='teste' />
            <Card.Content
              title='Terceiro card'
              description='lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom '
            />
            <Card.Actions>
              <a href='#' className='bg-indigo-400 py-2 px-4 rounded-lg'>
                Saiba mais!
              </a>
            </Card.Actions>
          </Card.Root>
          <Card.Root>
            <Card.Header src={DarkMode} alt='teste' />
            <Card.Content
              title='Terceiro card'
              description='lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom '
            />
            <Card.Actions>
              <a href='#' className='bg-indigo-400 py-2 px-4 rounded-lg'>
                Saiba mais!
              </a>
              <a href='#' className='bg-indigo-400 py-2 px-4 rounded-lg'>
                Saiba menos!
              </a>
            </Card.Actions>
          </Card.Root>
        </div>
      </section>
      <Contact />
    </main>
  )
}
