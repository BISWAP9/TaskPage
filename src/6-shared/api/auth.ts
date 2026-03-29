import { api } from './instance'
import type { AuthResponse, SignInRequest, SignUpRequest, UserProfile } from './types'

export const signInRequest = (data: SignInRequest) =>
  api.post('auth/login', { json: data }).json<AuthResponse>()

export const signUpRequest = (data: SignUpRequest) =>
  api.post('auth/register', { json: data }).json<AuthResponse>()

export const getMeRequest = (token: string) =>
  api
    .get('users/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .json<UserProfile>()
