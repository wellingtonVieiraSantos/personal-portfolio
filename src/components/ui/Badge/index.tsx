import { forwardRef, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const variantClasses = {
  default: 'bg-button-bg text-primary-bg',
  outline: 'bg-transparent border border-border',
  info: 'bg-sky-800 text-primary-bg',
  success: 'bg-emerald-700 text-primary-bg',
  warning: 'bg-amber-700 text-primary-bg ',
  error: 'bg-error',
  notification:
    'absolute px-1 -top-1 -right-3 rounded-full px-0 bg-button-bg text-primary-bg'
}

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variantClasses
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          `min-w-6 h-6 w-fit px-2 text-sm flex justify-center items-center gap-1
          rounded-md pointer-events-none text-primary-text`,
          variantClasses[variant],
          'dark:text-primary-text',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
