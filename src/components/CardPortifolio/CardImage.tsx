import Image, { StaticImageData } from 'next/image'

type Card = {
  src: string | StaticImageData
  alt: string
}

export default function CardImage({ src, alt }: Card) {
  return (
    <div className='grid place-items-center lg:w-1/3 rounded opacity-80 hover:opacity-100 transiton duration-500'>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className='rounded shadow-lg lg:w-full'
      />
    </div>
  )
}

/* lembrete: fazer um carousel com imagens do projeto ao clicar na imagem passa para a proxima imagem */
