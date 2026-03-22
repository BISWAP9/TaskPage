import { Stack, TextField, Typography } from '@mui/material'
import { useDebouncedLogger } from './model'

export const DebouncedLogger = () => {
  const { value, loggedValue, handleChange } = useDebouncedLogger()

  return (
    <Stack spacing={2}>
      <TextField
        label="Ввод с отложенным отображением"
        placeholder="Введите текст..."
        value={value}
        onChange={handleChange}
        fullWidth
      />
      {loggedValue !== null && (
        <Typography variant="body1" color="text.secondary">
          Выведено: {loggedValue}
        </Typography>
      )}
    </Stack>
  )
}
