import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='h-40 bg-secondary-bg-dark dark:bg-primary-bg-dark text-primary-text-dark grid place-items-center grid-flow-row md:grid-flow-col'>
      <ul className='flex gap-8'>
        <li>
          <a
            href='https://github.com/wellingtonVieiraSantos'
            target='_blank'
            className='flex gap-2 text-lg relative before:w-0 before:h-[2px] before:bg-primary-text-dark before:absolute before:left-0 before:-bottom-1 before:hover:w-full before:hover:duration-500 transition-all'
          >
            <Github />
            Github
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/wellingtonsantos2022/'
            target='_blank'
            className='flex gap-2 text-lg relative before:w-0 before:h-[2px] before:bg-blue-500 before:absolute before:left-0 before:-bottom-1 before:hover:w-full before:hover:duration-500 transition-all'
          >
            <Linkedin />
            Linkedin
          </a>
        </li>
      </ul>
      <span className='text-center text-sm text-secondary-text-dark'>
        © 2025 Ton . Todos os direitos reservados.
      </span>
    </footer>
  )
}
