import { Container, Paper, Stack, Typography } from '@mui/material'
import {
  ClickTimer,
  PreviousInput,
  FocusTracker,
  DebouncedLogger,
  WebSocketLogger,
} from 'features/refExamples'

export const RefExamplesPage = () => (
  <Container maxWidth="md" sx={{ py: 6 }}>
    <Stack spacing={4}>
      <Typography variant="h4" component="h1">
        Примеры с useRef
      </Typography>

      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          ClickTimer
        </Typography>
        <ClickTimer />
      </Paper>

      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          PreviousInput
        </Typography>
        <PreviousInput />
      </Paper>

      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          FocusTracker
        </Typography>
        <FocusTracker />
      </Paper>

      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          DebouncedLogger (отображает через 1 сек после остановки ввода)
        </Typography>
        <DebouncedLogger />
      </Paper>

      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          WebSocketLogger
        </Typography>
        <WebSocketLogger />
      </Paper>
    </Stack>
  </Container>
)
