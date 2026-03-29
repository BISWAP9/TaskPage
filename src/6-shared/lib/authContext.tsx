import { createContext, useContext } from 'react'
import type { AuthContextModel, AuthInfo } from 'shared/model/auth'

export const createInitAuthInfo = (): AuthInfo => ({
  accessToken: '',
  refreshToken: '',
  userId: '',
  name: '',
})

export const AuthContext = createContext<AuthContextModel>({
  ...createInitAuthInfo(),
  login: () => {},
  logout: () => {},
})

export const useAuthContext = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuthContext должен использоваться только внутри AuthProvider')
  }
  return ctx
}

