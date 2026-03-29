import { useAuthContext } from 'shared/lib/authContext'

export const useAuth = () => {
  const ctx = useAuthContext()

  return {
    isAuthenticated: !!ctx.accessToken,
    accessToken: ctx.accessToken,
    userId: ctx.userId,
    name: ctx.name,
    login: ctx.login,
    logout: ctx.logout,
  }
}
