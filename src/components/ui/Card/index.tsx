import { motion } from 'motion/react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Card = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof motion.div> & { reverse?: boolean }
>(({ className, reverse = false, ...props }, ref) => {
  const variants = {
    hidden: (reverse: boolean) => ({
      opacity: 0,
      x: reverse ? 200 : -200
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.5 }
    }
  }

  return (
    <motion.div
      custom={reverse}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={variants}
      className={twMerge(`relative rounded-xl bg-card border`, className)}
      ref={ref}
      {...props}
    />
  )
})

Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={twMerge(`p-4 flex flex-col gap-1.5`, className)}
        ref={ref}
        {...props}
      />
    )
  }
)

CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLDivElement, React.ComponentProps<'h1'>>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        className={twMerge(`leading-none tracking-tight`, className)}
        ref={ref}
        {...props}
      />
    )
  }
)

CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
  HTMLSpanElement,
  React.ComponentProps<'span'>
>(({ className, ...props }, ref) => {
  return (
    <span
      className={twMerge(`text-sm text-foreground-secondary`, className)}
      ref={ref}
      {...props}
    />
  )
})

CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={twMerge(`p-4 pt-0 flex flex-col gap-1.5`, className)}
        ref={ref}
        {...props}
      />
    )
  }
)

CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          `p-4 pt-0 flex items-center gap-2 justify-end`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
