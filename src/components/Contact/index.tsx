'use client'
import { FormContactType } from '@/app/types/formTypes'
import { formContactSchema } from '@/app/validators/FormContact'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { User, Mail, List } from 'lucide-react'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormContactType>({
    resolver: zodResolver(formContactSchema)
  })

  const onSubmit = (data: FormContactType) => {
    console.log(data)
    reset()
  }

  return (
    <section
      className='h-fit py-10 max-w-7xl m-auto flex flex-col justify-center gap-10'
      id='contact'
    >
      <header>
        <h2 className='text-center text-2xl'>Contato</h2>
      </header>
      <div className='flex items-center justify-center'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-[min(100%,600px)] grid place-items-center gap-4 py-8 px-4'
        >
          <label className='w-full grid gap-2 relative'>
            <span className='text-lg font-semibold'>Nome</span>
            <input
              {...register('name')}
              type='text'
              placeholder='Escreva seu nome aqui'
              className={`px-10 py-2 border-b ${
                errors.name
                  ? 'border-red-700 dark:border-red-500'
                  : 'border-slate-500'
              } bg-gray-100 dark:bg-gray-900 outline-none`}
            />
            <User
              size={25}
              className={`absolute bottom-2 left-1 ${
                errors.name && 'text-red-700 dark:text-red-500'
              }`}
            />
          </label>
          {errors?.name && (
            <span className='justify-self-start text-red-700 dark:text-red-500'>
              {errors.name?.message}
            </span>
          )}
          <label className='w-full grid gap-2 relative'>
            <span className='text-lg font-semibold'>E-mail</span>
            <input
              {...register('email')}
              type='text'
              placeholder='ex: contato@email.com'
              className={`px-10 py-2 border-b ${
                errors.email
                  ? 'border-red-700 dark:border-red-500'
                  : 'border-slate-500'
              } bg-gray-100 dark:bg-gray-900 outline-none`}
            />
            <Mail
              size={25}
              className={`absolute bottom-2 left-1 ${
                errors.email && 'text-red-700 dark:text-red-500'
              }`}
            />
          </label>
          {errors?.email && (
            <span className='justify-self-start text-red-700 dark:text-red-500'>
              {errors.email?.message}
            </span>
          )}
          <label className='w-full grid gap-2 relative'>
            <span className='text-lg font-semibold'>Assunto</span>
            <select
              {...register('topic')}
              className={`px-10 py-2 border-b ${
                errors.topic
                  ? 'border-red-700 dark:border-red-500'
                  : 'border-slate-500'
              } bg-gray-100 dark:bg-gray-900 outline-none`}
            >
              <option value='contatoComercial'>Contato comercial</option>
              <option value='sugestoes'>Sugestões</option>
              <option value='duvidas'>Dúvidas</option>
            </select>
            <List
              size={25}
              className={`absolute bottom-2 left-1 ${
                errors.topic && 'text-red-700 dark:text-red-500'
              }`}
            />
          </label>
          {errors?.topic && (
            <span className='justify-self-start text-red-700 dark:text-red-500'>
              {errors.topic?.message}
            </span>
          )}
          <label className='w-full grid gap-2'>
            <span className='text-lg font-semibold'>Menssagem</span>
            <textarea
              {...register('bodyMessage')}
              rows={5}
              placeholder='Escreva uma mensagem e retornarei seu e-mail.'
              className={`resize-none p-2 dark:bg-gray-900 border ${
                errors.bodyMessage
                  ? 'border-red-700 dark:border-red-500'
                  : 'border-slate-500'
              } rounded bg-gray-100 outline-none`}
            ></textarea>
          </label>
          {errors?.bodyMessage && (
            <span className='justify-self-start text-red-700 dark:text-red-500'>
              {errors.bodyMessage?.message}
            </span>
          )}
          <button
            type='submit'
            className='w-full text-xl text-gray-100 shadow-md shadow-gray-500 dark:shadow-none font-semibold bg-indigo-600 p-3 rounded hover:bg-indigo-800 transition-all'
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
