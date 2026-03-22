import { Stack, TextField, Typography } from '@mui/material'
import { useDebouncedLogger } from './model'
import { usePrevValue } from 'shared'

export const PreviousInput = () => {
  const { value,loggedValue, handleChange } = useDebouncedLogger()
  
  const prevValue = usePrevValue(loggedValue)

  return (
    <Stack spacing={2}>
      <TextField
        label="Ввод текста"
        value={value}
        onChange={handleChange}
        fullWidth
      />
      <Typography variant="body1">
        Предыдущее значение: {prevValue}
      </Typography>
    </Stack>
  )
}
