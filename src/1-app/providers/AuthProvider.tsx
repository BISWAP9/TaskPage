import { useCallback, useMemo, useState, type PropsWithChildren } from 'react'
import {
  JWT_ACCESS_LS_KEY,
  JWT_LS_KEY,
  JWT_REFRESH_LS_KEY,
  USER_INFO_LS_KEY,
} from 'shared/config/constants'
import { AuthContext, createInitAuthInfo } from 'shared/lib/authContext'
import { clearLS, loadFromLS, saveToLocaleStorage } from 'shared/lib/localStorage'
import type { AuthContextModel, AuthInfo, AuthMethods } from 'shared/model/auth'

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authInfo, setAuthInfo] = useState<AuthInfo>(() => {
    const tokens = loadFromLS<Record<'access' | 'refresh', string>>({
      key: JWT_LS_KEY,
    })

    const userInfo = loadFromLS<Omit<AuthInfo, 'accessToken' | 'refreshToken'>>({
      key: USER_INFO_LS_KEY,
    })

    return {
      accessToken: tokens?.access || '',
      refreshToken: tokens?.refresh || '',
      userId: userInfo?.userId || '',
      name: userInfo?.name,
    }
  })

  const login: AuthMethods['login'] = useCallback(auth => {
    setAuthInfo(auth)

    const { refreshToken, accessToken, ...userInfo } = auth

    saveToLocaleStorage({
      key: JWT_LS_KEY,
      state: {
        [JWT_ACCESS_LS_KEY]: accessToken,
        [JWT_REFRESH_LS_KEY]: refreshToken,
      },
    })

    saveToLocaleStorage({
      key: USER_INFO_LS_KEY,
      state: userInfo,
    })
  }, [])

  const logout: AuthMethods['logout'] = useCallback(() => {
    setAuthInfo(createInitAuthInfo())
    clearLS({ key: JWT_LS_KEY })
    clearLS({ key: USER_INFO_LS_KEY })
  }, [])

  const contextValue: AuthContextModel = useMemo(
    () => ({ ...authInfo, login, logout }),
    [authInfo, login, logout],
  )

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
