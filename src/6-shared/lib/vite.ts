export const getEnvVariable = (key: string): string => {
  const value = import.meta.env[key] as string | undefined
  if (!value) throw new Error(`Environment variable ${key} is not defined`)
  return value
}
