export const saveToLocaleStorage = <T> ({ key, state }: { key: string; state: T }) => {
  localStorage.setItem(key, JSON.stringify(state))
}

export const loadFromLS = <T>({ key }: { key: string }): T | null => {
  const raw = localStorage.getItem(key)
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export const clearLS = ({ key }: { key: string }) => {
  localStorage.removeItem(key)
}

