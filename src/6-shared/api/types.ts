export type SignInRequest = {
  email: string
  password: string
}

export type SignUpRequest = {
  email: string
  name: string
  password: string
}

export type AuthUserResponse = {
  id: string
  email: string
}

export type AuthResponse = {
  user: AuthUserResponse
  accessToken: string
}

export type UserProfile = {
  id: string
  email: string
  name: string
  avatarPath?: string
  about?: string
  phone?: string
  roles: string[]
}
