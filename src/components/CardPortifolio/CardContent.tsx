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
    <div className='lg:w-2/3 py-4 lg:px-6 grid place-content-between gap-4'>
      <header>
        <h2 className='text-3xl text-button-bg dark:text-button-bg-dark font-semibold'>
          {title}
        </h2>
      </header>
      <p className='flex flex-wrap text-justify'>{description}</p>
      <div>
        <p className='font-semibold text-lg'>Stack</p>
        <div className='flex flex-wrap gap-2 capitalize'>
          {stack.map(stack => (
            <span key={stack}>{stack}</span>
          ))}
        </div>
      </div>
      {children}
    </div>
  )
}
