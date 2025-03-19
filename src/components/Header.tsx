'use client'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function Header() {
  return (
    <header className='h-20 flex justify-around items-center flex-1 font-bold sticky top-0 dark:bg-gray-900 bg-gray-200 z-10'>
      <div className='text-2xl flex items-center'>
        {'< '}{' '}
        <span className='text-4xl text-indigo-600 dark:text-indigo-400'>T</span>{' '}
        {' />'}
      </div>
      <nav className='w-2/3 sm:w-1/2 hidden lg:block'>
        <ul className='flex justify-between'>
          <Link href={'#home-page'}>
            <li>Home</li>
          </Link>
          <Link href={'/#sobre'}>
            <li>Sobre</li>
          </Link>
          <Link href={'/#portifolio'}>
            <li>Portifolio</li>
          </Link>
          <Link href={'/#contato'}>
            <li>Contato</li>
          </Link>
        </ul>
      </nav>
      <div className='lg:hidden text-3xl rotate-90'>|||</div>
      <ThemeSwitch />
    </header>
  )
}
