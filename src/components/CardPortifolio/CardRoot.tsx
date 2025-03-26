import { motion } from 'motion/react'

interface Card {
  reverse?: boolean
  children: React.ReactNode
}

export default function CardRoot({ reverse = false, children }: Card) {
  const variants = {
    hidden: (reverse: boolean) => ({
      opacity: 0,
      x: reverse ? 100 : -100
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 0.5 }
    }
  }

  return (
    <motion.div
      custom={reverse}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={variants}
      className={`w-full sm:w-[600px] lg:w-full gap-2 flex flex-col lg:flex-row px-4 py-8 ${
        reverse && 'lg:flex-row-reverse'
      }`}
    >
      {children}
    </motion.div>
  )
}
