import { useRef } from 'react'

export const usePrevValue = <V>(value: V): V => {
  const prevValue = useRef({
    actualValue: value,
    prevValue: value,
  })

  if (value !== prevValue.current.actualValue) {
    prevValue.current = {
      actualValue: value,
      prevValue: prevValue.current.actualValue,
    }
  }

  return prevValue.current.prevValue
}
