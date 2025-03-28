import { useState } from 'react'
import { skills } from '@/utils/skillsData'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'

export default function SkillSmoothTabs() {
  const [active, setActive] = useState(skills[0].id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.4 }
      }}
      viewport={{ once: true }}
      className='w-full max-w-2xl bg-primary-bg dark:bg-primary-bg-dark rounded m-auto grid grid-flow-row px-2 py-4 overflow-hidden shadow'
    >
      <AnimatePresence mode='wait'>
        <motion.div
          className='h-[400px] mb-4 grid'
          key={active}
          initial={{ opacity: 0, x: '50%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-50%' }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <div className='flex justify-evenly items-center'>
            <Image
              src={skills.find(skill => skill.id === active)?.img}
              alt={skills.find(skill => skill.id === active)?.title + ' logo'}
              className='w-24 h-24 aspect-square border border-secondary-text dark:bg-white p-2 rounded'
            />
            <h3 className='text-3xl font-montserrat-title'>
              {skills.find(skill => skill.id === active)?.title}
            </h3>
          </div>
          <p className='max-w-[400px] m-auto text-justify text-lg'>
            {skills.find(skill => skill.id === active)?.content}
          </p>
        </motion.div>
      </AnimatePresence>

      <ul className='flex sm:flex-wrap overflow-x-scroll sm:overflow-auto gap-2'>
        {skills?.map(skill => (
          <button
            key={skill.id}
            onClick={() => setActive(skill.id)}
            className={`py-2 px-3 flex flex-1 justify-center relative border border-secondary-bg dark:border-secondary-bg-dark rounded ${
              active === skill.id &&
              'text-button-text dark:text-secondary-bg-dark'
            }  font-montserrat-title`}
          >
            <li className='z-10'>{skill.title}</li>
            {active === skill.id && (
              <motion.div
                layoutId='background-button'
                className='absolute left-0 w-full rounded bottom-0 h-full bg-button-bg dark:bg-button-bg-dark'
              />
            )}
          </button>
        ))}
      </ul>
    </motion.div>
  )
}
