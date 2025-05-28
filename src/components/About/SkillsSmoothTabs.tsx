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
      className='w-full max-w-4xl bg-secondary-bg xl:bg-primary-bg lg:rounded-sm m-auto grid grid-flow-row p-4 overflow-hidden lg:shadow-sm'
    >
      <AnimatePresence mode='wait'>
        <motion.div
          className='mb-4 grid grid-flow-col gap-4'
          key={active}
          initial={{ opacity: 0, x: '50%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-50%' }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <Image
            src={skills.find(skill => skill.id === active)?.img}
            alt={skills.find(skill => skill.id === active)?.title + ' logo'}
            className='h-16 w-auto border border-secondary-text bg-white p-2 rounded-sm'
          />
          <div className='grid place-items-start gap-2'>
            <h3 className='text-2xl text-primary-text'>
              {skills.find(skill => skill.id === active)?.title}
            </h3>
            <p className=' m-auto text-justify text-lg '>
              {skills.find(skill => skill.id === active)?.content}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <ul className='flex sm:flex-wrap overflow-x-scroll sm:overflow-auto gap-2'>
        {skills?.map(skill => (
          <button
            key={skill.id}
            onClick={() => setActive(skill.id)}
            className={`py-2 px-4 flex flex-1 justify-center relative border border-primary-bg xl:border-secondary-bg rounded ${
              active === skill.id && 'text-button-text'
            }  font-montserrat-title`}
          >
            <li className='z-10 '>{skill.title}</li>
            {active === skill.id && (
              <motion.div
                layoutId='background-button'
                className='absolute left-0 w-full rounded-sm bottom-0 h-full bg-button-bg'
              />
            )}
          </button>
        ))}
      </ul>
    </motion.div>
  )
}
