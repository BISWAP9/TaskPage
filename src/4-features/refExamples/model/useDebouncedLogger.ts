import { useState } from 'react'
import { useDebouncedValue } from 'shared'

const DEBOUNCE_MS = 1000

export const useDebouncedLogger = () => {
  const [value, setValue] = useState('')
  const loggedValue = useDebouncedValue(value, DEBOUNCE_MS)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return {
    value,
    loggedValue: loggedValue || null,
    handleChange,
  }
}
