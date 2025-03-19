interface Card{
  children: React.ReactNode
}

export default function CardActions({children}: Card) {
  return (
    <div className="grid place-content-end p-4 grid-flow-col gap-4">
      {children}
    </div>
  );
}