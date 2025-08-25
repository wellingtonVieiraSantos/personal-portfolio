'use client'
import { Button } from '@/components/ui/Button'
import { Github, Instagram, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'

export default function SocialSideBar() {
  return (
    <aside className='hidden absolute bottom-20 left-6 xl:flex px-4 gap-3 border-l-4'>
      <Link href={'https://github.com/wellingtonVieiraSantos'} target='_blank'>
        <Button variant='ghost' size='icon'>
          <Github />
        </Button>
      </Link>
      <Link
        href={'https://www.linkedin.com/in/wellingtonsantos2022/'}
        target='_blank'
      >
        <Button variant='ghost' size='icon'>
          <LinkedinIcon />
        </Button>
      </Link>
      <Link href={'https://www.instagram.com/tonsantos_26/'} target='_blank'>
        <Button variant='ghost' size='icon'>
          <Instagram />
        </Button>
      </Link>
    </aside>
  )
}
