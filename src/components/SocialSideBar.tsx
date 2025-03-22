import { Github, Linkedin } from 'lucide-react'

export default function SocialSideBar() {
  return (
    <aside className='hidden xl:block fixed w-1 h-[calc(100%-80px)] z-50'>
      <div className='absolute bottom-10 left-6 flex flex-col px-4 gap-2 border-l-4 border-indigo-600'>
        <a
          href='#'
          className='border border-gray-700 p-2 bg-indigo-600 text-gray-100 rounded hover:bg-transparent hover:text-gray-600 dark:hover:text-gray-100 transition duration-300'
        >
          <Github />
        </a>
        <a
          href='#'
          className='border border-gray-700 p-2 bg-indigo-600 text-gray-100 rounded hover:bg-transparent hover:text-gray-600 dark:hover:text-gray-100 transition duration-300'
        >
          <Linkedin />
        </a>
      </div>
    </aside>
  )
}
