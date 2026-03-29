import { useMutation, useQuery } from '@tanstack/react-query'
import { signInRequest, getMeRequest } from 'shared/api'
import type { SignInRequest } from 'shared/api'

export const useSignInApi = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (params: SignInRequest) => signInRequest(params),
  })
  return { mutateAsync, isPending }
}

export const useGetMeApi = (token: string) =>
  useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => getMeRequest(token),
    enabled: !!token,
  })
