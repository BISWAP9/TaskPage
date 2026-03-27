import { useRef, useState } from 'react'

interface ClickData {
  startTime: number | null
  clickCount: number
}

export const useClickTimer = () => {
  const clickDataRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  })
  const [logMessage, setLogMessage] = useState<string | null>(null)

  const handleClick = () => {
    const data = clickDataRef.current
    const now = Date.now()

    if (data.startTime === null) {
      data.startTime = now
      data.clickCount = 1
      setLogMessage('Первый клик зафиксирован')
      return
    }

    data.clickCount += 1
    const diff = now - data.startTime

    setLogMessage(
      `Разница от первого клика: ${diff} мс, всего кликов: ${data.clickCount}`
    )
  }

  return { logMessage, handleClick }
}
