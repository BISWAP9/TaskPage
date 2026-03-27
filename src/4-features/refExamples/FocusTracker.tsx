import { Button, Stack, TextField, Typography } from '@mui/material'
import { useFocusTracker } from './model'

export const FocusTracker = () => {
  const {
    firstInputRef,
    displayCount,
    handleFocus,
    handleFocusFirst,
  } = useFocusTracker()

  return (
    <Stack spacing={2}>
      <TextField
        inputRef={firstInputRef}
        label="Первое поле"
        onFocus={handleFocus}
        fullWidth
      />
      <TextField
        label="Второе поле"
        onFocus={handleFocus}
        fullWidth
      />
      <Button variant="outlined" onClick={handleFocusFirst}>
        Сфокусировать на первом
      </Button>
      <Typography variant="body1" color="text.secondary">
        Переходов фокуса между полями: {displayCount}
      </Typography>
    </Stack>
  )
}
