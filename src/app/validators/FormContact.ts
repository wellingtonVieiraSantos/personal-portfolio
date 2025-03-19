import { z } from 'zod'
export const formContactSchema = z.object({
  name: z.string().trim().min(2, { message: 'O nome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  bodyMessage: z.string().trim().min(5, { message: 'A mensagem é obrigatória' })
})
