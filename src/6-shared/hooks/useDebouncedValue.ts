import { useRef, useEffect, useState } from 'react'

export const useDebouncedValue = <V>(value: V, delay: number): V => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value)
      timeoutRef.current = null
    }, delay)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [value, delay])

  return debouncedValue
}
