interface Card{
  children: React.ReactNode
}

export default function CardRoot({children}: Card) {
  return (
    <div className="w-[500px] h-[600px] grid grid-rows-[6fr_3fr_1fr] border border-white rounded-md">
      {children}
    </div>
  );
}