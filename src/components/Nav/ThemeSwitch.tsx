'use client'
import { useTheme } from 'next-themes'
import { forwardRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Moon, Sun } from 'lucide-react'

const ThemeSwitch = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }) => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    useEffect(() => {
      if (isAnimating) {
        document.body.classList.add('overflow-x-hidden')
      } else {
        document.body.classList.remove('overflow-x-hidden')
      }
    }, [isAnimating])

    const toggleTheme = () => {
      setIsAnimating(true)
      setTimeout(() => {
        resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')
        setIsAnimating(false)
      }, 800)
    }

    if (!mounted)
      return (
        <div className='size-8 justify-self-end border-4 border-b-transparent animate-spin rounded-full' />
      )

    return (
      <div className={'flex justify-end items-center'} {...props}>
        <Button
          size='icon'
          onClick={toggleTheme}
          className='relative size-12 p-1 bg-transparent hover:bg-transparent text-primary-text outline-hidden [&>svg]:size-8 group'
        >
          {resolvedTheme === 'dark' ? (
            <Sun className='group-hover:text-button-bg transition duration-300' />
          ) : (
            <Moon className='group-hover:text-button-bg transition duration-300' />
          )}
          {isAnimating && (
            <motion.div
              className={`absolute size-8 bg-primary-text rounded-full`}
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 150, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          )}
        </Button>
      </div>
    )
  }
)

ThemeSwitch.displayName = 'ThemeSwitch'

export { ThemeSwitch }
