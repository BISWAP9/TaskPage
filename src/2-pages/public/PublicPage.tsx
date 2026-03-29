import { Alert, Stack, Typography } from '@mui/material'

export const PublicPage = () => (
  <Stack spacing={2}>
    <Typography variant="h4" fontWeight={800}>
      Публичная страница
    </Typography>
    <Alert severity="info">Эта страница доступна всем пользователям без авторизации.</Alert>
  </Stack>
)
