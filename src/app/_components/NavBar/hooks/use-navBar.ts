'use client'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export const useNavBar = () => {
  const [mounted, setMounted] = useState(false)
  const pathName = usePathname()
  const { setTheme, resolvedTheme } = useTheme()

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

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return { pathName, toggleTheme, navbarRef, resolvedTheme, mounted }
}
