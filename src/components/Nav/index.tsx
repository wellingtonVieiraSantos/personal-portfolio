'use client'
import { House, Briefcase, User, SendHorizontal } from 'lucide-react'
import Link from 'next/link'
import { ThemeSwitch } from './ThemeSwitch'
import { useEffect, useRef } from 'react'

const navLinks = [
  { path: 'home', name: 'Home', icon: House },
  { path: 'sobre', name: 'Sobre mim', icon: User },
  { path: 'projetos', name: 'Projetos', icon: Briefcase },
  { path: 'contato', name: 'Contato', icon: SendHorizontal }
]

export default function Nav({ activeSection }: { activeSection: string }) {
  const navbarRef = useRef<HTMLDivElement>(null)
  const scrollYPos = useRef(0)

  useEffect(() => {
    const scroll = () => {
      const currentScroll = window.scrollY
      if (!navbarRef.current) return
      navbarRef.current.style.transform =
        currentScroll > scrollYPos.current
          ? `translateY(-80px)`
          : `translateY(0)`

      scrollYPos.current = currentScroll
    }
    window.addEventListener('scroll', scroll)
    return () => window.removeEventListener('scroll', scroll)
  }, [])

  return (
    <>
      <nav
        ref={navbarRef}
        className='size-full md:grid grid-cols-[1fr_2fr_1fr] items-center px-10
        hidden md:fixed top-0 w-full h-20 bg-background z-10 transition duration-300'
      >
        <div className='text-3xl flex items-center font-montserrat'>
          {'< '} <span className='text-5xl text-button'>T</span> {' />'}
        </div>
        <ul className='flex text-foreground-secondary'>
          {navLinks.map((link, i) => (
            <li
              key={i}
              className={`relative hover:text-foreground flex items-center justify-center flex-1 after:absolute after:-bottom-2 after:scale-0 
                  after:w-full after:h-[3px] after:bg-linear-to-r after:from-button after:to-badge after:transition after:duration-300 transition-colors duration-300 ${
                    activeSection === link.path &&
                    'text-foreground after:scale-100'
                  }`}
            >
              <Link href={'#' + link.path} className={`flex gap-3`}>
                <link.icon strokeWidth={1.4} />
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ThemeSwitch />
      </nav>
      {/* Mobile navbar bottom */}
      <nav
        className=' md:hidden w-full h-17 fixed bottom-0 rounded-t-3xl text-button-foreground bg-button text-[12px] 
        z-10 shadow-[1px_-14px_0_0_var(--color-background)]'
      >
        <ul className='h-full flex items-center'>
          {navLinks.map((link, i) => (
            <li
              key={i}
              className={`relative flex-1 ${
                activeSection === link.path && 'text-foreground'
              }`}
            >
              <Link
                href={'#' + link.path}
                className='grid place-items-center gap-1'
              >
                <span className='relative inline-block z-10'>
                  <link.icon
                    className={`size-6 text-button-foreground ${
                      activeSection === link.path
                        ? '-translate-y-[18px]'
                        : 'translate-y-2'
                    } transition-all duration-200`}
                    strokeWidth={1.3}
                  />
                </span>
                <span
                  className={` ${
                    activeSection === link.path
                      ? ' translate-y-1 opacity-100 text-button-foreground'
                      : ' translate-y-5 opacity-0'
                  } transition duration-300`}
                >
                  {link.name}
                </span>
                <div
                  className={`${
                    activeSection === link.path ? 'absolute' : 'hidden'
                  } -top-10 size-17 bg-button rounded-full border-6 border-background
                      after:absolute after:w-7 after:h-5 after:bg-transparent after:-left-[32px] after:top-[23px]
                      after:rounded-tr-full after:shadow-[3px_-6px_0_0_var(--color-background)] 
                      before:absolute before:w-7 before:h-5 before:bg-transparent before:-right-[32px] before:top-[23px]
                      before:rounded-tl-full before:shadow-[-3px_-6px_0_0_var(--color-background)]`}
                ></div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
