import { HTMLMotionProps, motion } from 'motion/react'
import { ElementType } from 'react'

interface ButtonLinkProps extends HTMLMotionProps<'a'> {
  iconPosition?: 'right' | 'left'
  text?: string
  icon?: ElementType
  textLink: string
  type: 'primary' | 'secondary'
}

export default function LinkCustom({
  iconPosition = 'left',
  text,
  icon: Icon,
  textLink,
  type,
  className,
  ...props
}: ButtonLinkProps) {
  const linkPropertys = {
    primary:
      'text-button-text dark:text-button-text-dark bg-button-bg dark:bg-button-bg-dark',
    secondary: 'dark:hover:text-button-bg-dark hover:text-button-bg'
  }

  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      href={textLink}
      {...props}
      className={`flex items-center text-lg gap-4 rounded p-3 font-montserrat-title ${
        linkPropertys[type]
      } ${className ?? ''}`}
    >
      {iconPosition === 'left' ? (
        <>
          {Icon && <Icon size={24} />}
          {text}
        </>
      ) : (
        <>
          {text}
          {Icon && <Icon size={24} />}
        </>
      )}
    </motion.a>
  )
}
