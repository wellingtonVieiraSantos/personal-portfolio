import { CodeXml, PanelsTopLeft } from 'lucide-react'
type CardActionProps = {
  linkHref: string
  text: 'code' | 'page'
}
export default function CardAction({ linkHref, text }: CardActionProps) {
  return (
    <a
      href={linkHref}
      className='bg-button-bg text-button-text dark:bg-button-bg-dark py-2 px-6 rounded flex items-center gap-2 text-lg'
    >
      {text == 'code' ? <CodeXml /> : <PanelsTopLeft />}
      {text}
    </a>
  )
}
