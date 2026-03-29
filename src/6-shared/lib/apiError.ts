import { HTTPError } from 'ky'

export const extractApiError = async (error: unknown): Promise<string> => {
  if (error instanceof HTTPError) {
    try {
      const body = (await error.response.json()) as { message?: string | string[] }
      const msg = Array.isArray(body.message) ? body.message.join(', ') : body.message
      return msg || `Ошибка (${error.response.status})`
    } catch {
      return `Ошибка (${error.response.status})`
    }
  }
  return error instanceof Error ? error.message : 'Неизвестная ошибка'
}
