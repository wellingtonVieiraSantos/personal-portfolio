'use client'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'
import { Menu, X, House, User, Briefcase, SendHorizonal } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className='h-20 grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_3fr_1fr] place-items-center sticky top-0 dark:bg-primary-bg-dark bg-primary-bg z-10'>
      <div className='text-2xl flex items-center'>
        {'< '}{' '}
        <span className='text-4xl text-button-bg dark:text-button-bg-dark font-montserrat-title'>
          T
        </span>{' '}
        {' />'}
      </div>
      <nav className='hidden w-full sm:block'>
        <ul className='flex justify-evenly font-montserrat-title'>
          <Link href={'#home-page'}>
            <li className='relative before:w-0 before:h-[4px] dark:before:bg-button-bg-dark before:bg-button-bg before:absolute before:left-0 before:-bottom-1 before:hover:w-full before:hover:duration-500 transition-all'>
              Home
            </li>
          </Link>
          <Link href={'/#about'}>
            <li className='relative before:w-0 before:h-[4px] dark:before:bg-button-bg-dark before:bg-button-bg before:absolute before:left-0 before:-bottom-1 before:hover:w-full before:hover:duration-500 transition-all'>
              Sobre
            </li>
          </Link>
          <Link href={'/#portifolio'}>
            <li className='relative before:w-0 before:h-[4px] dark:before:bg-button-bg-dark before:bg-button-bg before:absolute before:left-0 before:-bottom-1 before:hover:w-full before:hover:duration-500 transition-all'>
              Portifolio
            </li>
          </Link>
          <Link href={'/#contact'}>
            <li className='relative before:w-0 before:h-[4px] dark:before:bg-button-bg-dark before:bg-button-bg before:absolute before:left-0 before:-bottom-1 before:hover:w-full before:hover:duration-500 transition-all'>
              Contato
            </li>
          </Link>
        </ul>
      </nav>
      <div className='sm:hidden' onClick={() => setOpenMenu(prev => !prev)}>
        {openMenu ? <X size={35} /> : <Menu size={35} />}
      </div>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.1, duration: 0.3 }
            }}
            exit={{
              opacity: 0,
              x: -100,
              transition: { duration: 0.3 }
            }}
            className='absolute top-0 left-0 h-screen bg-button-bg dark:bg-button-bg-dark text-button-text'
            onClick={() => setOpenMenu(false)}
          >
            <ul className='h-full flex flex-col items-left justify-evenly px-6 font-montserrat-title'>
              <Link href={'#home-page'}>
                <li className='flex gap-2'>
                  <House />
                  Home
                </li>
              </Link>
              <Link href={'/#about'}>
                <li className='flex gap-2'>
                  <User />
                  Sobre
                </li>
              </Link>
              <Link href={'/#portifolio'}>
                <li className='flex gap-2'>
                  <Briefcase />
                  Portifolio
                </li>
              </Link>
              <Link href={'/#contact'}>
                <li className='flex gap-2'>
                  <SendHorizonal />
                  Contato
                </li>
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <ThemeSwitch />
    </header>
  )
}
