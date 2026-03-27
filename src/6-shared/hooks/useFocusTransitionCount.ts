import { useRef, useState } from 'react'

export const useFocusTransitionCount = () => {
  const firstInputRef = useRef<HTMLInputElement>(null)
  const countRef = useRef(0)
  const [displayCount, setDisplayCount] = useState(0)

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget) {
      countRef.current += 1
      setDisplayCount(countRef.current)
    }
  }

  const focusFirst = () => {
    firstInputRef.current?.focus()
  }

  return { firstInputRef, displayCount, handleFocus, focusFirst }
}
