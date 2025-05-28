'use client'
import { Github, Linkedin } from 'lucide-react'
import Button from './Button'

export default function Footer() {
  return (
    <footer className='h-40 bg-primary-bg text-primary-text grid place-items-center grid-flow-row md:grid-flow-col'>
      <ul className='flex gap-8'>
        <li>
          <Button.Link
            whileHover={{ scale: 1 }}
            textLink='https://github.com/wellingtonVieiraSantos'
            type='secondary'
            text='Github'
            icon={Github}
            target='_blank'
            className=' relative before:w-0 before:h-1 before:bg-primary-text before:absolute before:left-0 before:-bottom-1 hover:before:w-full hover:before:duration-500 transition-all'
          />
        </li>
        <li>
          <Button.Link
            whileHover={{ scale: 1 }}
            textLink='https://www.linkedin.com/in/wellingtonsantos2022/'
            type='secondary'
            text='Linkedin'
            icon={Linkedin}
            target='_blank'
            className=' relative before:w-0 before:h-1 before:bg-blue-500 before:absolute before:left-0 before:-bottom-1 hover:before:w-full hover:before:duration-500 transition-all'
          />
        </li>
      </ul>
      <span className='text-center text-sm text-secondary-text'>
        © 2025 Ton . Todos os direitos reservados.
      </span>
    </footer>
  )
}
