import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerDefaultValues, registerSchema, type RegisterFormValues } from './schema'

export const useRegisterForm = () => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: registerDefaultValues,
    mode: 'onChange',
  })

  const socialLinks = useFieldArray({
    control: form.control,
    name: 'socialLinks',
  })

  return {
    form,
    socialLinks,
  }
}
