import { useEffect, useRef } from 'react'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { useDebouncedLogger, useWebSocketLogger } from './model'

export const WebSocketLogger = () => {
  const { messages, sendMessage } = useWebSocketLogger()
  const { value, loggedValue, handleChange } = useDebouncedLogger()
  const sendMessageRef = useRef(sendMessage)
  sendMessageRef.current = sendMessage

  useEffect(() => {
    if (loggedValue) {
      sendMessageRef.current(loggedValue)
    }
  }, [loggedValue])

  return (
    <Box>
      <Typography variant="h3" align="center" sx={{ mb: 6 }}>
        WebSocket
      </Typography>

      <Stack spacing={2} sx={{ mb: 2 }}>
        <TextField
          label="Введите сообщение"
          placeholder="Сообщение отправится через 1 сек после ввода..."
          value={value}
          onChange={handleChange}
          fullWidth
        />
      </Stack>

      {messages.length > 0 && (
        <Stack spacing={0.5}>
          <Typography variant="subtitle2" color="text.secondary">
            Полученные сообщения:
          </Typography>
          {messages.map((msg, i) => (
            <Typography
              key={i}
              variant="body2"
              component="code"
              sx={{ bgcolor: 'action.hover', px: 1, py: 0.5, borderRadius: 1 }}
            >
              {msg}
            </Typography>
          ))}
        </Stack>
      )}
    </Box>
  )
}
