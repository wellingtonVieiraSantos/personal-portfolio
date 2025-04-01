'use client'
import ThemeSwitch from '@/components/ThemeSwitch'
import { Menu, X, House, User, Briefcase, SendHorizontal } from 'lucide-react'
import { ElementType, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Button from './Button'

type navLinksProps = {
  id: number
  name: string
  icon: ElementType
}

const navLinks: navLinksProps[] = [
  { id: 1, name: 'home', icon: House },
  { id: 2, name: 'sobre', icon: User },
  { id: 3, name: 'portifolio', icon: Briefcase },
  { id: 4, name: 'contato', icon: SendHorizontal }
]

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const [active, setActive] = useState<number>(navLinks[0].id)

  return (
    <header className='h-20 grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_3fr_1fr] place-items-center sticky top-0 dark:bg-primary-bg-dark bg-primary-bg z-30'>
      <div className='text-2xl flex items-center'>
        {'< '}{' '}
        <span className='text-4xl text-button-bg dark:text-button-bg-dark font-montserrat-title'>
          T
        </span>{' '}
        {' />'}
      </div>
      <nav className='hidden w-full sm:block'>
        <motion.ul className='flex justify-evenly font-montserrat-title'>
          {navLinks.map(link => (
            <li
              key={link.id}
              className='relative'
              onClick={() => setActive(link.id)}
            >
              <Button.Link
                whileHover={{ scale: 1 }}
                textLink={'#' + link.name}
                type='secondary'
                text={link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                className='hover:text-button-bg dark:hover:text-button-bg-dark'
              />
              {link.id === active && (
                <motion.div
                  layoutId='nav-link'
                  className='absolute h-1 bottom-0 w-full rounded-full bg-button-bg dark:bg-button-bg-dark'
                />
              )}
            </li>
          ))}
        </motion.ul>
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
            className='absolute top-0 left-0 h-screen bg-button-bg dark:bg-secondary-bg-dark text-button-text'
            onClick={() => setOpenMenu(false)}
          >
            <ul className='h-full flex flex-col items-left justify-evenly px-6 font-montserrat-title'>
              {navLinks.map(link => (
                <li key={link.id}>
                  <Button.Link
                    textLink={'#' + link.name}
                    type='secondary'
                    text={link.name}
                    icon={link.icon}
                    className='p-0'
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <ThemeSwitch />
    </header>
  )
}
