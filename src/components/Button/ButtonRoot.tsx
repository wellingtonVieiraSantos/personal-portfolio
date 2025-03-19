import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode,
  buttonProperty: 'primary' | 'secondary'
}

const ButtonRoot = ({children, buttonProperty, ...rest}: ButtonProps) => {

  const typeButton = {
    'primary': 'border-indigo-600 bg-indigo-900 text-white font-bold dark:bg-indigo-500 dark:hover:bg-transparent dark:hover:bg-transparent hover:border-indigo-500',
    'secondary': 'bg-transparent text-indigo-900 font-medium dark:text-white border-indigo-600 dark:bg-transparent dark:hover:bg-transparent hover:bg-indigo-900 hover:text-white', 
  }

  return (
    <button {...rest} className={`w-max flex gap-4 items-center border
      rounded-xl px-7 py-3 hover:shadow-button
      hover:border transition-all ${typeButton[buttonProperty]}`}>
      {children}
    </button>
  )
}

export default ButtonRoot