import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={twMerge(
        `border border-border w-full px-4 py-2 
        resize-none scrollbar-custom rounded outline-none placeholder:text-primary-text/50
         focus-visible:ring-1 ring-primary-text/70`,
        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }
