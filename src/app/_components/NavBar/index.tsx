'use client'
import { House, Briefcase, User } from 'lucide-react'
import Link from 'next/link'
import { Switch } from '../../../components/ui/Switch'
import { useNavBar } from './hooks/use-navBar'
import Image from 'next/image'
import logoLight from '@/assets/logoLight.png'
import logoDark from '@/assets/logoDark.png'

const navLinks = [
  { path: '/', name: 'Home', icon: House },
  { path: '/sobre', name: 'Sobre', icon: User },
  { path: '/projetos', name: 'Projetos', icon: Briefcase }
]

export default function NavBar() {
  const { pathName, toggleTheme, navbarRef, resolvedTheme, mounted } =
    useNavBar()

  if (!mounted) return null

  return (
    <>
      <nav
        ref={navbarRef}
        className='size-full md:grid grid-cols-[1fr_2fr_1fr] items-center px-10
        hidden md:fixed top-0 w-full h-20 bg-background z-10 transition duration-300'
      >
        <Image
          src={resolvedTheme === 'dark' ? logoDark : logoLight}
          alt='imagem do logo'
          width={192}
          height={192}
          className='size-12'
        />
        <ul className='flex text-foreground-secondary'>
          {navLinks.map((link, i) => (
            <li
              key={i}
              className={`relative hover:text-foreground flex items-center justify-center flex-1 after:absolute after:-bottom-2 after:scale-0 
                  after:w-full after:h-1 after:bg-linear-to-r after:from-button after:to-badge after:transition after:duration-300 transition-colors duration-300 ${
                    pathName === link.path && 'text-foreground after:scale-100'
                  }`}
            >
              <Link href={link.path}>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Switch
          className='justify-self-end'
          checked={resolvedTheme === 'dark'}
          onCheckedChange={toggleTheme}
        />
      </nav>
      {/* Mobile navbar bottom */}
      <nav
        className=' md:hidden w-full h-17 fixed bottom-0 rounded-t-3xl text-button-foreground bg-gradient-to-b from-badge to-button text-[12px] 
        z-10 shadow-[1px_-14px_0_0_var(--color-background)]'
      >
        <ul className='h-full flex items-center'>
          {navLinks.map((link, i) => (
            <li
              key={i}
              className={`relative flex-1 ${
                pathName === link.path && 'text-foreground'
              }`}
            >
              <Link href={link.path} className='grid place-items-center gap-1'>
                <span className='relative inline-block z-10'>
                  <link.icon
                    className={`size-6 text-button-foreground ${
                      pathName === link.path
                        ? '-translate-y-[18px]'
                        : 'translate-y-2'
                    } transition-all duration-200`}
                    strokeWidth={1.3}
                  />
                </span>
                <span
                  className={` ${
                    pathName === link.path
                      ? ' translate-y-1 opacity-100 text-button-foreground'
                      : ' translate-y-5 opacity-0'
                  } transition duration-300`}
                >
                  {link.name}
                </span>
                <div
                  className={`${
                    pathName === link.path ? 'absolute' : 'hidden'
                  } -top-10 size-17 bg-gradient-to-b from-badge to-button rounded-full border-6 border-background
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
