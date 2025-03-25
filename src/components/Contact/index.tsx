'use client'
import { FormContactType } from '@/app/types/formTypes'
import { formContactSchema } from '@/app/validators/FormContact'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { User, Mail, List, Github, Linkedin, SendHorizonal } from 'lucide-react'

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
    <section className='w-full h-fit dark:bg-secondary-bg-dark' id='contact'>
      <div className='max-w-7xl py-10 m-auto flex flex-col justify-center gap-10'>
        <header>
          <h2 className='text-center text-4xl'>Contato</h2>
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
                    ? 'border-error'
                    : 'border-primary-text dark:border-secondary-text'
                } bg-primary-bg dark:bg-secondary-bg-dark outline-none`}
              />
              <User
                size={25}
                className={`absolute bottom-2 left-1 ${
                  errors.name && 'text-error'
                }`}
              />
            </label>
            {errors?.name && (
              <span className='justify-self-start text-error'>
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
                    ? 'border-error'
                    : 'border-primary-text dark:border-secondary-text'
                } bg-primary-bg dark:bg-secondary-bg-dark outline-none`}
              />
              <Mail
                size={25}
                className={`absolute bottom-2 left-1 ${
                  errors.email && 'text-error'
                }`}
              />
            </label>
            {errors?.email && (
              <span className='justify-self-start text-error'>
                {errors.email?.message}
              </span>
            )}
            <label className='w-full grid gap-2 relative'>
              <span className='text-lg font-semibold'>Assunto</span>
              <select
                {...register('topic')}
                className={`px-10 py-2 border-b ${
                  errors.topic
                    ? 'border-error'
                    : 'border-primary-text dark:border-secondary-text'
                } bg-primary-bg dark:bg-secondary-bg-dark outline-none`}
              >
                <option value='contatoComercial'>Contato comercial</option>
                <option value='sugestoes'>Sugestões</option>
                <option value='duvidas'>Dúvidas</option>
              </select>
              <List
                size={25}
                className={`absolute bottom-2 left-1 ${
                  errors.topic && 'text-error'
                }`}
              />
            </label>
            {errors?.topic && (
              <span className='justify-self-start text-error'>
                {errors.topic?.message}
              </span>
            )}
            <label className='w-full grid gap-2'>
              <span className='text-lg font-semibold'>Menssagem</span>
              <textarea
                {...register('bodyMessage')}
                rows={5}
                placeholder='Escreva uma mensagem e retornarei seu e-mail.'
                className={`resize-none p-2 dark:bg-secondary-bg-dark border ${
                  errors.bodyMessage
                    ? 'border-error'
                    : 'border-primary-text dark:border-secondary-text'
                } rounded bg-primary-bg outline-none`}
              ></textarea>
            </label>
            {errors?.bodyMessage && (
              <span className='justify-self-start text-error'>
                {errors.bodyMessage?.message}
              </span>
            )}
            <button
              type='submit'
              className='w-full text-xl text-button-text shadow font-semibold
                bg-button-bg dark:bg-button-bg-dark p-3 rounded hover:bg-button-bg-dark
                dark:hover:bg-button-bg transition-all flex justify-center items-center gap-4'
            >
              <SendHorizonal />
              Enviar
            </button>
            <div className='w-full grid place-items-center gap-2 mt-2'>
              <p className='place-self-start text-secondary-text-dark'>
                Ou se preferir, entre em contato pelas redes:
              </p>
              <a
                href=''
                className='w-full border border-primary-text dark:border-secondary-text-dark hover:bg-blue-500 hover:text-slate-100 flex gap-2 justify-center text-lg p-3 rounded transition duration-500'
              >
                <Linkedin />
                Linkedin
              </a>
              <a
                href=''
                className='w-full border border-primary-text dark:border-secondary-text-dark hover:bg-primary-bg-dark hover:text-primary-text-dark dark:hover:bg-primary-bg dark:hover:text-primary-text flex justify-center gap-2 text-lg p-3 rounded transition duration-500'
              >
                <Github />
                Github
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
