interface CardActionsProps {
  children: React.ReactNode
}

export default function CardActions({ children }: CardActionsProps) {
  return (
    <div className='grid grid-flow-col place-content-end p-4 gap-4'>
      {children}
    </div>
  )
}
