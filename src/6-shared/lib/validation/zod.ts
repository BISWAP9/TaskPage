import { z } from 'zod'

export const validationMessages = {
  email: 'Некорректный email',
  url: 'Некорректный URL',
  password: 'Введите пароль',
} as const

export const commonEmailSchema = z.email(validationMessages.email).trim()
export const commonUrlSchema = z.url(validationMessages.url).trim()
export const commonPasswordSchema = z.string().min(1, validationMessages.password)
