import { useWebSocket } from 'shared'

const WS_URL = 'wss://echo.websocket.org'

export const useWebSocketLogger = () => {
  const { messages, send } = useWebSocket(WS_URL)

  const parsedMessages = messages.map((msg) => {
    try {
      const parsed = JSON.parse(msg)
      return parsed.text ?? msg
    } catch {
      return msg
    }
  })

  const sendMessage = (text: string) => {
    send({ type: 'chat', text })
  }

  return { messages: parsedMessages, sendMessage }
}
