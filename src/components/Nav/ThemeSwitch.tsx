'use client'
import { useTheme } from 'next-themes'
import { forwardRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Switch } from '../ui/Switch'

const ThemeSwitch = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ ...props }, ref) => {
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
      <div className={'flex justify-end items-center'} ref={ref} {...props}>
        <Switch
          checked={resolvedTheme === 'dark'}
          onCheckedChange={toggleTheme}
        >
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
        </Switch>
      </div>
    )
  }
)

ThemeSwitch.displayName = 'ThemeSwitch'

export { ThemeSwitch }
