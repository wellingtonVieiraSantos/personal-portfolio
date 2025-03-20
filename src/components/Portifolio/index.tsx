import Card from '@/components/CardPortifolio'
import DarkMode from '../../app/dark-theme.svg'

export default function Portifolio() {
  return (
    <section
      className='min-h-screen max-w-7xl m-auto flex flex-col justify-center'
      id='portifolio'
    >
      <header>
        <h2 className='text-center text-2xl'>Portifolio</h2>
      </header>
      <div className=' border-white w-full p-4 flex flex-wrap gap-4 justify-evenly my-10 dark:bg-slate-950 rounded-xl'>
        <Card.Root>
          <Card.Header src={DarkMode} alt='teste' />
          <Card.Content
            title='Primeiro card'
            description='lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom '
          />
          <Card.Actions>
            <a href='#' className='bg-indigo-400 py-2 px-4 rounded-lg'>
              Saiba mais!
            </a>
          </Card.Actions>
        </Card.Root>
        <Card.Root>
          <Card.Header src={DarkMode} alt='teste' />
          <Card.Content
            title='Segundo card'
            description='lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom '
          />
          <Card.Actions>
            <a href='#' className='bg-indigo-400 py-2 px-4 rounded-lg'>
              Saiba mais!
            </a>
          </Card.Actions>
        </Card.Root>
        <Card.Root>
          <Card.Header src={DarkMode} alt='teste' />
          <Card.Content
            title='Terceiro card'
            description='lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom '
          />
          <Card.Actions>
            <a href='#' className='bg-indigo-400 py-2 px-4 rounded-lg'>
              Saiba mais!
            </a>
          </Card.Actions>
        </Card.Root>
        <Card.Root>
          <Card.Header src={DarkMode} alt='teste' />
          <Card.Content
            title='Terceiro card'
            description='lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom '
          />
          <Card.Actions>
            <a href='#' className='bg-indigo-400 py-2 px-4 rounded-lg'>
              Saiba mais!
            </a>
            <a href='#' className='bg-indigo-400 py-2 px-4 rounded-lg'>
              Saiba menos!
            </a>
          </Card.Actions>
        </Card.Root>
      </div>
    </section>
  )
}
