import { useMutation } from '@tanstack/react-query'
import { signUpRequest } from 'shared/api'
import type { SignUpRequest } from 'shared/api'

export const useSignUpApi = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (params: SignUpRequest) => signUpRequest(params),
  })
  return { mutateAsync, isPending }
}
