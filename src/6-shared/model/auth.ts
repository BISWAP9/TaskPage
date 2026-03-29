export type AuthInfo = {
  accessToken: string
  refreshToken: string
  userId: string
  name?: string
}

export type AuthMethods = {
  login: (authInfo: AuthInfo) => void
  logout: () => void
}

export type AuthContextModel = AuthInfo & AuthMethods

