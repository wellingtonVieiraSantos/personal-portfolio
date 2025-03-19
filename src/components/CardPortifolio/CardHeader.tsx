import Image from "next/image";

interface Card{
  src: string,
  alt: string,
}

export default function CardHeader({src, alt}: Card) {
  return (
    <header className="bg-white">
      <Image src={src} alt={alt} className=""/>
    </header>
  );
}