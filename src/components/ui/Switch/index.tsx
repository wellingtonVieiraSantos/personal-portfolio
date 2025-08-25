import { forwardRef } from 'react'
import * as SwitchRadix from '@radix-ui/react-switch'
import { twMerge } from 'tailwind-merge'
import { useTheme } from 'next-themes'
import { Moon, MoonStar, Sun, SunDim } from 'lucide-react'

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
        `relative w-14 h-7 rounded-full text-foreground-secondary
         border transition-colors duration-300 cursor-pointer text-[12px]
         disabled:bg-disabled disabled:cursor-not-allowed`,
        className
      )}
    >
      <SunDim size={18} className='absolute left-1 top-1' />
      <Moon size={18} className='absolute right-1 top-1' />
      <SwitchRadix.Thumb
        className='absolute size-6.5 left-0 grid place-content-center
       bg-button text-button-foreground data-[state=checked]:translate-x-7
        -translate-y-1/2 transform transition duration-300 rounded-full group'
      >
        {resolvedTheme === 'dark' ? <MoonStar size={18} /> : <Sun size={18} />}
      </SwitchRadix.Thumb>
      {children}
    </SwitchRadix.Root>
  )
})

Switch.displayName = SwitchRadix.Root.displayName

export { Switch }
