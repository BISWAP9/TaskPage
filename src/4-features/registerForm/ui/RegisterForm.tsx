import { Box, Button, Container, Paper, Stack, TextField, Typography } from '@mui/material'
import { type RegisterFormValues, useRegisterForm } from '../model'

export const RegisterForm = () => {
  const { form, socialLinks } = useRegisterForm()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = form
  const { fields, append, remove } = socialLinks

  const onSubmit = (data: RegisterFormValues) => {
    console.log('register data', data)
  }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h4" component="h1" align="center" sx={{ mb: 3 }}>
          Регистрация
        </Typography>

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

            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Социальные ссылки
            </Typography>

            {fields.map((field, index) => (
              <Stack key={field.id} direction="row" spacing={1} alignItems="flex-start">
                <TextField
                  label={`Ссылка #${index + 1}`}
                  type="url"
                  placeholder="https://github.com/username"
                  fullWidth
                  {...register(`socialLinks.${index}.url` as const)}
                  error={Boolean(errors.socialLinks?.[index]?.url)}
                  helperText={errors.socialLinks?.[index]?.url?.message}
                />
                <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                  sx={{ minWidth: 110, height: 56 }}
                >
                  Удалить
                </Button>
              </Stack>
            ))}

            <Button type="button" variant="outlined" onClick={() => append({ url: '' })}>
              Добавить ссылку
            </Button>

            <Button disabled={!isValid || isSubmitting} type="submit" variant="contained" size="large">
              Зарегистрироваться
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
  )
}

