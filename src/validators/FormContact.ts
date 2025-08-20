import { z } from 'zod'

export const formContactSchema = z.object({
  name: z.string().trim().min(1, { message: 'O nome é obrigatório' }),
  email: z.string().trim().email({ message: 'E-mail inválido' }),
  topic: z.enum(['contatoComercial', 'sugestoes', 'duvidas']),
  bodyMessage: z.string().trim().min(1, { message: 'A mensagem é obrigatória' })
})
