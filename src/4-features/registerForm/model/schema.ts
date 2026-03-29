import { z } from 'zod'
import { commonEmailSchema } from 'shared'

export const registerSchema = z
  .object({
    username: z.string().min(1, 'Имя пользователя обязательно'),
    email: commonEmailSchema,
    password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
    confirmPassword: z.string().min(1, 'Подтвердите пароль'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Пароли должны совпадать',
    path: ['confirmPassword'],
  })

export type RegisterFormValues = z.infer<typeof registerSchema>

export const registerDefaultValues: RegisterFormValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}
