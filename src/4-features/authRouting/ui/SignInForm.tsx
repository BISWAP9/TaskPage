import { zodResolver } from '@hookform/resolvers/zod'
import { Alert, Button, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from 'shared/lib/authContext'
import { extractApiError } from 'shared/lib/apiError'
import { useSignInApi } from '../api'
import { signInSchema, type SignInFormValues } from '../model'

export const SignInForm = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuthContext()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  })

  const { mutateAsync, isPending } = useSignInApi()

  const onSubmit = async (values: SignInFormValues) => {
    setServerError(null)

    try {
      const response = await mutateAsync(values)

      const rawToken = response.accessToken.replace(/^Bearer\s+/i, '')

      login({
        accessToken: rawToken,
        refreshToken: '',
        userId: response.user.id,
        name: '',
      })

      const fromUrl = (location.state as { fromUrl?: string } | null)?.fromUrl
      navigate(fromUrl || '/profile', { replace: true })
    } catch (error) {
      const message = await extractApiError(error)
      setServerError(message)
    }
  }

  return (
    <Stack spacing={2} maxWidth={420}>
      <Typography variant="h4" fontWeight={800}>
        Вход
      </Typography>

      {serverError && <Alert severity="error">{serverError}</Alert>}

      <Stack component="form" spacing={2} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email')}
        />
        <TextField
          label="Пароль"
          type="password"
          autoComplete="current-password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password')}
        />
        <Button type="submit" variant="contained" disabled={isSubmitting || isPending}>
          Войти
        </Button>
      </Stack>
    </Stack>
  )
}
