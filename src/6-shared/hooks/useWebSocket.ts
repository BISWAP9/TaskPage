import { useEffect, useRef, useState } from 'react'

interface UseWebSocketOptions {
  onMessage?: (data: string) => void
  onError?: () => void
}

export const useWebSocket = (url: string, options?: UseWebSocketOptions) => {
  const socketRef = useRef<WebSocket | null>(null)
  const [messages, setMessages] = useState<string[]>([])
  const onMessageRef = useRef(options?.onMessage)
  const onErrorRef = useRef(options?.onError)

  onMessageRef.current = options?.onMessage
  onErrorRef.current = options?.onError

  useEffect(() => {
    socketRef.current = new WebSocket(url)

    socketRef.current.onmessage = (event) => {
      const data = String(event.data)
      setMessages((prev) => [...prev, data])
      onMessageRef.current?.(data)
    }

    socketRef.current.onerror = () => {
      setMessages((prev) => [...prev, '[Ошибка WebSocket]'])
      onErrorRef.current?.()
    }

    return () => {
      socketRef.current?.close()
      socketRef.current = null
    }
  }, [url])

  const send = (data: string | object) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      const payload =
        typeof data === 'string' ? data : JSON.stringify(data)
      socketRef.current.send(payload)
    }
  }

  return { messages, send }
}
