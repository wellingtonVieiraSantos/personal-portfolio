'use client'
import { motion } from 'motion/react'
import { Button } from '../ui/Button'
import { Github, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'

export default function SocialSideBar() {
  return (
    <aside className='hidden xl:block'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.3 }
        }}
        className='absolute bottom-20 left-6 flex flex-col px-4 gap-2 border-l-4 border-button-bg'
      >
        <Link
          href={'https://github.com/wellingtonVieiraSantos'}
          target='_blank'
        >
          <Button className='w-full'>
            <Github />
            Github
          </Button>
        </Link>
        <Link
          href={'https://www.linkedin.com/in/wellingtonsantos2022/'}
          target='_blank'
        >
          <Button className='w-full'>
            <LinkedinIcon />
            LinkedIn
          </Button>
        </Link>
      </motion.div>
    </aside>
  )
}
