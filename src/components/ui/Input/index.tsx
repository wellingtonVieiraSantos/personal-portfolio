import { LucideIcon, X } from 'lucide-react'
import { forwardRef, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  type?: 'text' | 'number' | 'password' | 'email' | 'search'
  icon?: LucideIcon
  handleDelete?: () => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, type = 'text', icon: Icon, handleDelete, className, ...props },
    ref
  ) => {
    return (
      <div className='relative w-full'>
        <input
          type={type}
          name={id}
          id={id}
          ref={ref}
          className={twMerge(
            `w-full h-8 text-sm appearance-none border rounded border-border placeholder:text-sm
          outline-none no-spinner peer focus-within:ring-1 focus-within:ring-primary-text/70 shadow
          disabled:bg-primary-text/30 disabled:cursor-not-allowed disabled:text-primary-text/60`,
            Icon ? 'px-10' : 'pl-2 pr-8',
            className
          )}
          {...props}
        />
        <X
          className={`size-4 absolute bottom-2 hidden peer-focus:block cursor-pointer right-2`}
          onMouseDown={handleDelete}
        />
        {Icon && (
          <Icon
            className={`size-4.5 absolute bottom-2 left-2 pointer-events-none peer-disabled:text-primary-text/60`}
          />
        )}
      </div>
    )
  }
)

Input.displayName = 'input'

export { Input }
