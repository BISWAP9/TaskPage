import { z } from 'zod'

export const validationMessages = {
  email: 'Некорректный email',
  url: 'Некорректный URL',
} as const

export const commonEmailSchema = z.email(validationMessages.email).trim()
export const commonUrlSchema = z.url(validationMessages.url).trim()
