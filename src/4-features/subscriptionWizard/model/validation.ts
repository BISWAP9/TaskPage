import { commonEmailSchema, validationMessages } from 'shared'

export const subscriptionEmailSchema = commonEmailSchema.refine(Boolean, {
  message: validationMessages.email,
})
