'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Loader } from 'lucide-react'

export default function ThemeSwitch() {
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

  if (!mounted)
    return <Loader width={40} height={40} className='animate-spin' />

  const toggleTheme = () => {
    setIsAnimating(true)
    setTimeout(() => {
      resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark')
      setIsAnimating(false)
    }, 700)
  }

  return (
    <div className='relative flex justify-center items-center'>
      <button
        onClick={toggleTheme}
        className='h-12 w-12 rounded-full p-1 outline-hidden'
      >
        <svg
          className='fill-black hover:fill-indigo-600 block dark:hidden transition-all'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
        </svg>
        <svg
          className='fill-slate-200 hidden dark:block hover:fill-yellow-500 transition-all'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path
            d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
            fillRule='evenodd'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      {isAnimating && (
        <motion.div
          className={`absolute w-8 h-8 ${'bg-primary-text'} rounded-full`}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 150, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
    </div>
  )
}
