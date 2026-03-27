import { Alert, Box, Button, Container, Paper, Stack, TextField, Typography } from '@mui/material'
import { useSubscriptionWizard } from '../model'

export const SubscriptionWizard = () => {
  const {
    state,
    formAction,
    showPending,
    email,
    isEmailValid,
    emailError,
    handleEmailChange,
    handleEmailBlur,
  } = useSubscriptionWizard()

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h5" component="h1" align="center" sx={{ mb: 2 }}>
          Подписка на новости
        </Typography>

        {state.status === 'success' ? (
          <Alert severity="success">
            Подписка оформлена. На адрес {state.email} отправлено письмо с подтверждением.
          </Alert>
        ) : (
          <Box component="form" action={formAction}>
            <Stack spacing={2}>
              {state.step === 1 && (
                <>
                  <TextField
                    label="Введите email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={event => handleEmailChange(event.target.value)}
                    onBlur={handleEmailBlur}
                    disabled={showPending}
                    placeholder="you@example.com"
                    fullWidth
                    error={Boolean(emailError)}
                    helperText={emailError}
                  />
                  {state.error && <Alert severity="error">{state.error}</Alert>}
                  <Button
                    type="submit"
                    name="actionType"
                    value="submitEmail"
                    variant="contained"
                    disabled={showPending || !isEmailValid}
                  >
                    {showPending ? 'Проверяем...' : 'Продолжить'}
                  </Button>
                </>
              )}

              {state.step === 2 && (
                <>
                  <Typography variant="body1">
                    Email <strong>{state.email}</strong> будет использован для рассылки обновлений.
                    Подтвердите подписку.
                  </Typography>
                  {state.error && <Alert severity="error">{state.error}</Alert>}
                  <Button
                    type="submit"
                    name="actionType"
                    value="confirm"
                    variant="contained"
                    disabled={showPending}
                  >
                    {showPending ? 'Оформляем...' : 'Подтвердить подписку'}
                  </Button>
                </>
              )}
            </Stack>
          </Box>
        )}
      </Paper>
    </Container>
  )
}

