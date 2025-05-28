import { ReactNode } from 'react'

type CardContentProps = {
  title: string
  description: string
  stack: string[]
  children: ReactNode
}

export default function CardContent({
  title,
  description,
  stack,
  children
}: CardContentProps) {
  return (
    <div
      className='lg:w-2/3 py-4 lg:px-6 grid place-content-between gap-4 overflow-hidden
     bg-secondary-bg shadow rounded px-2
     hover:shadow-button-bg hover:shadow-[0px_0px_5px] transition duration-500 text-lg'
    >
      <header>
        <h2 className='text-3xl'>{title}</h2>
      </header>
      <p className='flex flex-wrap text-justify leading-relaxed'>
        {description}
      </p>
      <div>
        <p className='font-semibold text-lg'>Stack</p>
        <div className='flex flex-wrap gap-2 capitalize'>
          {stack.map(stack => (
            <span
              key={stack}
              className='relative  py-1 pl-6 pr-2 font-montserrat-title after:absolute after:left-1 after:top-[9px] 
              after:w-3 after:h-3 after:bg-button-bg after:rounded-full '
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}
