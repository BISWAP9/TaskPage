import { z } from 'zod'
import { commonEmailSchema, commonPasswordSchema } from 'shared/lib/validation'

export const signInSchema = z.object({
  email: commonEmailSchema,
  password: commonPasswordSchema,
})

export type SignInFormValues = z.infer<typeof signInSchema>
