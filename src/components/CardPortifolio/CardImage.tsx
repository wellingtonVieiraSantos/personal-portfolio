import Image, { StaticImageData } from 'next/image'

type Card = {
  src: string | StaticImageData
  alt: string
}

export default function CardImage({ src, alt }: Card) {
  return (
    <div className='lg:w-1/3 rounded-sm opacity-70 hover:opacity-100 transiton duration-500 overflow-hidden'>
      <Image
        src={src}
        alt={alt}
        width={1900}
        height={900}
        className='rounded shadow-lg w-full h-full object-cover'
      />
    </div>
  )
}

/* lembrete: fazer um carousel com imagens do projeto ao clicar na imagem passa para a proxima imagem */
