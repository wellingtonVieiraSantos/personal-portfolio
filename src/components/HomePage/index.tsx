import { Github, Linkedin, ChevronDown } from 'lucide-react'

export default function HomePage() {
  return (
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
        href='/#about'
        className='absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center text-xl gap-4'
      >
        <span>Saiba mais</span>
        <ChevronDown size={35} className='animate-bounce' />
      </a>
    </section>
  )
}
