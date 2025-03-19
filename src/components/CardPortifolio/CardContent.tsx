
interface Card{
  title: string,
  description: string,
}

export default function CardContent({title, description}: Card) {
  return (
    <div className="w-full p-4 grid gap-2">
      <h2 className="text-2xl">{title}</h2>
      <p className="flex flex-wrap">{description}</p>
    </div>
  );
}