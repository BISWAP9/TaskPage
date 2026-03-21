import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const Main = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4" component="h1">
          Добро пожаловать
        </Typography>
        <Typography color="text.secondary">
           Выбери свой путь.
        </Typography>
        <Box sx={{ display: 'flex', gap: 1.5, pt: 1 }}>
          <Button component={NavLink} to="/register" variant="contained">
            К регистрации
          </Button>
          <Button component={NavLink} to="/wizard" variant="outlined">
            К подписке
          </Button>
        </Box>
      </Stack>
    </Paper>
  </Container>
)