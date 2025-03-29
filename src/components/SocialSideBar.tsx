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
        <motion.a
          whileHover={{ scale: 1.1 }}
          href='https://github.com/wellingtonVieiraSantos'
          target='_blank'
          className='border border-primary-text dark:border-button-text p-2 bg-button-bg dark:bg-button-bg-dark dark:text-primary-text text-primary-text-dark rounded hover:bg-transparent hover:text-primary-text dark:hover:bg-transparent dark:hover:text-primary-text-dark'
        >
          <Github />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href='https://www.linkedin.com/in/wellingtonsantos2022/'
          target='_blank'
          className='border border-primary-text dark:border-button-text p-2 bg-button-bg dark:bg-button-bg-dark dark:text-primary-text text-primary-text-dark rounded hover:bg-transparent hover:text-primary-text dark:hover:bg-transparent dark:hover:text-primary-text-dark'
        >
          <Linkedin />
        </motion.a>
      </motion.div>
    </aside>
  )
}
