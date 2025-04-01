'use client'
import { motion } from 'motion/react'
import Button from './Button'
import { Github, Linkedin } from 'lucide-react'

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
        <Button.Link
          icon={Github}
          textLink='https://github.com/wellingtonVieiraSantos'
          type='secondary'
          target='_blank'
          className='bg-button-bg dark:bg-button-bg-dark text-secondary-bg dark:text-secondary-bg-dark
           hover:text-button-text-dark dark:hover:text-button-text'
        />
        <Button.Link
          icon={Linkedin}
          textLink='https://www.linkedin.com/in/wellingtonsantos2022/'
          type='secondary'
          target='_blank'
          className='bg-button-bg dark:bg-button-bg-dark text-secondary-bg dark:text-secondary-bg-dark
           hover:text-button-text-dark dark:hover:text-button-text'
        />
      </motion.div>
    </aside>
  )
}
