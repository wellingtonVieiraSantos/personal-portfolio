import { forwardRef } from 'react'
import * as SwitchRadix from '@radix-ui/react-switch'
import { twMerge } from 'tailwind-merge'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const Switch = forwardRef<
  React.ComponentRef<typeof SwitchRadix.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchRadix.Root>
>(({ className, children, ...props }, ref) => {
  const { resolvedTheme } = useTheme()
  return (
    <SwitchRadix.Root
      ref={ref}
      {...props}
      className={twMerge(
        `relative w-26 h-7  data-[state=checked]:bg-button rounded-full
         border transition-colors duration-300 cursor-pointer text-[12px]
         disabled:bg-disabled disabled:cursor-not-allowed`,
        className
      )}
    >
      <Sun className='absolute left-3.5 top-0.5' />
      <Moon className='absolute right-3.5 top-0.5' />
      <SwitchRadix.Thumb
        className='absolute w-13 h-full left-0 grid place-content-center
       bg-warning data-[state=checked]:translate-x-13 data-[state=checked]:bg-hover
        top-1/2 -translate-y-1/2 transform transition duration-300 rounded-full group'
      >
        {resolvedTheme === 'dark' ? <Moon /> : <Sun />}
      </SwitchRadix.Thumb>
      {children}
    </SwitchRadix.Root>
  )
})

Switch.displayName = SwitchRadix.Root.displayName

export { Switch }
