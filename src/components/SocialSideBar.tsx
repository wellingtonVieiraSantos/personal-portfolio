'use client'
import { Github, Linkedin } from 'lucide-react'
import { motion } from 'motion/react'

export default function SocialSideBar() {
  return (
    <aside className='hidden xl:block fixed w-1 h-[calc(100%-80px)] z-50'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.3 }
        }}
        className='absolute bottom-10 left-6 flex flex-col px-4 gap-2 border-l-4 border-button-bg dark:border-button-bg-dark'
      >
        <a
          href='#'
          className='border border-primary-text dark:border-button-text p-2 bg-button-bg dark:to-button-bg-dark text-primary-text-dark rounded hover:bg-transparent hover:text-primary-text dark:hover:text-primary-text-dark transition duration-300'
        >
          <Github />
        </a>
        <a
          href='#'
          className='border border-primary-text dark:border-button-text p-2 bg-button-bg dark:to-button-bg-dark text-primary-text-dark rounded hover:bg-transparent hover:text-primary-text dark:hover:text-primary-text-dark transition duration-300'
        >
          <Linkedin />
        </a>
      </motion.div>
    </aside>
  )
}
