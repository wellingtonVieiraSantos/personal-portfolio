import { Check, X } from 'lucide-react'
import { motion } from 'motion/react'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const sizeClasses = {
  sm: 'h-8 px-3 text-sm gap-2 [&>svg]:size-4',
  md: 'h-11 px-6 gap-2 [&>svg]:size-5',
  lg: 'h-13 px-9 gap-2 [&>svg]:size-6',
  icon: 'size-8 [&>svg]:size-5'
}

const variantClasses = {
  default: 'bg-button-bg text-button-text hover:bg-button-bg/70',
  border: 'border border-border hover:border-primary-text',
  ghost: 'hover:bg-border',
  link: 'after:absolute after:bottom-2 after:w-0 after:h-[1px] after:bg-primary-text hover:after:w-full after:transition-all after:duration-300',
  loading: 'bg-button-bg/50 cursor-wait pointer-events-none',
  success: 'bg-emerald-600 pointer-events-none animate-shake',
  error: 'bg-error pointer-events-none animate-shake'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizeClasses
  variant?: keyof typeof variantClasses
}

const Button = forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof motion.button> & ButtonProps
>(
  (
    { size = 'sm', variant = 'default', className, children, ...props },
    ref
  ) => {
    return (
      <motion.button
        whileHover={{
          scale: 1.05
        }}
        className={twMerge(
          `w-max relative flex items-center justify-center rounded cursor-pointer transition-color duration-300
           disabled:bg-border disabled:cursor-not-allowed  disabled:pointer-events-none disabled:text-secondary-text`,
          sizeClasses[size],
          variantClasses[variant],
          variant === 'link' && 'disabled:bg-transparent',
          className
        )}
        ref={ref}
        {...props}
      >
        {variant === 'loading' && (
          <div className='size-4 border-1 border-b-transparent rounded-full animate-spin' />
        )}
        {variant === 'success' && <Check />}
        {variant === 'error' && <X />}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
