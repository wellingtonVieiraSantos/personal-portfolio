import { CodeXml, PanelsTopLeft } from 'lucide-react'
type CardActionProps = {
  linkHref: string
  text: 'code' | 'page'
}
export default function CardAction({ linkHref, text }: CardActionProps) {
  return (
    <a
      href={linkHref}
      target='_blank'
      className='bg-button-bg hover:bg-button-bg-dark dark:hover:bg-button-bg
       text-button-text dark:bg-button-bg-dark py-2 px-6 rounded flex items-center gap-2 text-lg
       transition duration-300'
    >
      {text == 'code' ? <CodeXml /> : <PanelsTopLeft />}
      {text}
    </a>
  )
}
