import { Button, Stack, Typography } from '@mui/material'
import { useClickTimer } from './model'

export const ClickTimer = () => {
  const { logMessage, handleClick } = useClickTimer()

  return (
    <Stack spacing={2}>
      <Button variant="contained" onClick={handleClick}>
        Кликни
      </Button>
      {logMessage && (
        <Typography variant="body1" color="text.secondary">
          {logMessage}
        </Typography>
      )}
    </Stack>
  )
}
