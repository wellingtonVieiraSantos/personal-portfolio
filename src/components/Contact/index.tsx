'use client'
import { FormContactType } from '@/types'
import { formContactSchema } from '@/app/validators/FormContact'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import {
  User,
  Mail,
  SendHorizonal,
  LinkedinIcon,
  InstagramIcon
} from 'lucide-react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '../ui/Button'
import { useInView } from 'react-intersection-observer'
import { useTheme } from 'next-themes'

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormSubmit
} from '../ui/Form'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/Select'
import Link from 'next/link'

export default function Contact({
  id,
  setActiveSection
}: {
  id: string
  setActiveSection: Dispatch<SetStateAction<string>>
}) {
  const [isLoading, setIsLoading] = useState(false)
  const { resolvedTheme } = useTheme()
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  })

  useEffect(() => {
    if (inView) setActiveSection(id)
  }, [inView, id, setActiveSection])

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FormContactType>({
    resolver: zodResolver(formContactSchema)
  })

  const onSubmit = async (data: FormContactType) => {
    setIsLoading(true)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    const resJson = await response.json()

    if (response.ok) {
      toast.success(
        'O e-mail foi enviado com sucesso, em breve irei respondê-lo.',
        {
          classNames: {
            icon: 'text-success'
          }
        }
      )
      /* reset() */
    } else {
      toast.error(
        resJson.error ||
          'Um erro aconteceu ao enviar o e-mail, tente novamente mais tarde.',
        {
          classNames: {
            icon: 'text-destructive'
          }
        }
      )
    }
    setIsLoading(false)
  }

  return (
    <section
      className='min-h-dvh grid place-items-center py-10'
      id={id}
      ref={ref}
    >
      <Toaster
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
        position='top-right'
        toastOptions={{
          classNames: {
            toast:
              '!bg-[var(--color-background)] !text-[var(--color-foreground)]'
          }
        }}
      />
      <header>
        <h2 className='text-center my-10 text-4xl'>Contato</h2>
      </header>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.4 }
        }}
        viewport={{ once: true }}
        className='w-full max-w-7xl flex flex-col justify-center items-center overflow-hidden'
      >
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className='w-[min(100%,500px)] flex flex-col p-4 gap-6'
        >
          <FormField name='name'>
            <FormLabel>Nome</FormLabel>
            <Input
              id='name'
              {...register('name')}
              placeholder='Escreva seu nome'
              icon={User}
              handleDelete={() => reset({ name: '' })}
            />
            {errors?.name && (
              <FormMessage className='justify-self-start text-destructive'>
                {errors.name?.message}
              </FormMessage>
            )}
          </FormField>
          <FormField name='email'>
            <FormLabel>Email</FormLabel>
            <Input
              id='email'
              {...register('email')}
              placeholder='Escreva seu email de contato'
              icon={Mail}
              handleDelete={() => reset({ email: '' })}
            />
            {errors?.email && (
              <FormMessage className='justify-self-start text-destructive'>
                {errors.email?.message}
              </FormMessage>
            )}
          </FormField>
          <FormField name='topic'>
            <FormLabel>Assunto</FormLabel>
            <Controller
              name='topic'
              control={control}
              defaultValue='contatoComercial'
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder='Escolha um assunto' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='contatoComercial'>
                      Contato Comercial
                    </SelectItem>
                    <SelectItem value='sugestoes'>Sugestões</SelectItem>
                    <SelectItem value='duvidas'>Dúvidas</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </FormField>
          <FormField name='bodyMessage'>
            <FormLabel>Menssagem</FormLabel>
            <FormControl asChild>
              <Textarea
                id='bodyMessage'
                {...register('bodyMessage')}
                rows={5}
                placeholder='Escreva sua mensagem e retornarei seu email.'
              />
            </FormControl>
            {errors?.bodyMessage && (
              <FormMessage className='justify-self-start text-destructive'>
                {errors.bodyMessage?.message}
              </FormMessage>
            )}
          </FormField>
          <FormSubmit asChild>
            <Button
              className='w-full text-button-foreground'
              type='submit'
              variant={isLoading ? 'loading' : 'default'}
            >
              {isLoading ? (
                'Enviando'
              ) : (
                <span className='flex items-center justify-center gap-2'>
                  <SendHorizonal />
                  Enviar
                </span>
              )}
            </Button>
          </FormSubmit>
        </Form>
        <div className='w-1/2 max-w-[250px] h-[1px] bg-border my-2' />
        <div className='w-full max-w-[500px] grid place-items-center gap-2 p-4'>
          <p className=' text-foreground-secondary py-2 text-sm'>
            Ou se preferir, entre em contato pelas redes:
          </p>
          <Link
            href={'https://www.linkedin.com/in/wellingtonsantos2022/'}
            target='_blank'
            className='w-full'
          >
            <Button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              variant='border'
              className='w-full'
            >
              <LinkedinIcon />
              LinkedIn
            </Button>
          </Link>

          <Link
            href={'https://www.instagram.com/tonsantos_26/'}
            target='_blank'
            className='w-full'
          >
            <Button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              variant='border'
              className='w-full'
            >
              <InstagramIcon />
              Instagram
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
