import { MessageCircleMore, ChevronDown } from 'lucide-react'

export default function HomePage() {
  return (
    <section
      className='min-h-screen relative grid place-content-center bg-gradient-to-tl from-gray-100 from-40% via-gray-50 to-gray-100 to-70% dark:bg-none'
      id='home-page'
    >
      <div className='max-w-[1200px] md:pl-10 flex flex-col items-center md:items-start md:text-left text-center gap-10 md:border-l-4 border-gray-700'>
        <h1 className='text-4xl'>
          Olá, sou{' '}
          <span className='block text-indigo-600 dark:text-indigo-400 text-6xl mt-4'>
            Wellington Vieira
          </span>
        </h1>
        <p className='text-xl'>
          Desenvolvedor Front-end |{' '}
          <span className='text-indigo-600 dark:text-indigo-400 text-3xl'>
            Next.js
          </span>
        </p>
        <div className='flex text-xl flex-col sm:flex-row gap-6'>
          <a
            href='#contact'
            className='flex gap-4 items-center text-white border border-indigo-600 rounded bg-indigo-900 dark:bg-indigo-500 px-8 py-2 dark:hover:bg-transparent hover:shadow-button hover:border hover:border-indigo-500 transition-all'
          >
            Contato
            <MessageCircleMore />
          </a>
        </div>
      </div>
      <a
        href='/#portifolio'
        className='absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center text-xl gap-4'
      >
        <span>Ver Projetos</span>
        <ChevronDown size={35} className='animate-bounce' />
      </a>
    </section>
  )
}
