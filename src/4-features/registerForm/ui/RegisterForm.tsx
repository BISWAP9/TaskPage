import { Alert, Box, Button, Container, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from 'shared/lib/authContext'
import { extractApiError } from 'shared/lib/apiError'
import { type RegisterFormValues, useRegisterForm } from '../model'
import { useSignUpApi } from '../api'

export const RegisterForm = () => {
  const navigate = useNavigate()
  const { login } = useAuthContext()
  const { form } = useRegisterForm()
  const { mutateAsync, isPending } = useSignUpApi()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = form

  const onSubmit = async (data: RegisterFormValues) => {
    setServerError(null)

    try {
      const response = await mutateAsync({
        email: data.email,
        name: data.username,
        password: data.password,
      })

      const rawToken = response.accessToken.replace(/^Bearer\s+/i, '')

      login({
        accessToken: rawToken,
        refreshToken: '',
        userId: response.user.id,
        name: data.username,
      })

      navigate('/profile', { replace: true })
    } catch (error) {
      const message = await extractApiError(error)
      setServerError(message)
    }
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 3 }}>
          Регистрация
        </Typography>

        {serverError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {serverError}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Имя пользователя"
              fullWidth
              {...register('username')}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
            />

            <TextField
              label="Email"
              type="email"
              fullWidth
              {...register('email')}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />

            <TextField
              label="Пароль"
              type="password"
              fullWidth
              {...register('password')}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />

            <TextField
              label="Подтверждение пароля"
              type="password"
              fullWidth
              {...register('confirmPassword')}
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword?.message}
            />

            <Button
              disabled={!isValid || isSubmitting || isPending}
              type="submit"
              variant="contained"
              size="large"
            >
              Зарегистрироваться
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  )
}
