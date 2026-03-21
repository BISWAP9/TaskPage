import { useActionState, useEffect, useState } from 'react'
import { subscriptionEmailSchema } from './validation'
import type { WizardActionType, WizardState } from './types'

const initialState: WizardState = {
  status: 'idle',
  step: 1,
  email: '',
}

export const simulateServerDelay = async () => {
  await new Promise(resolve => setTimeout(resolve, 800))
}

export const subscriptionAction = async (prevState: WizardState, formData: FormData): Promise<WizardState> => {
  const actionType = formData.get('actionType') as WizardActionType | null

  if (!actionType) {
    return { ...prevState, status: 'error', error: 'Неизвестное действие' }
  }

  const email = ((formData.get('email') as string | null) ?? prevState.email).trim()
  const emailResult = subscriptionEmailSchema.safeParse(email)

  if (!emailResult.success) {
    return {
      status: 'error',
      step: 1,
      email,
      error: emailResult.error.issues[0]?.message ?? 'Укажите корректный email',
    }
  }

  if (actionType === 'submitEmail') {
    await simulateServerDelay()
    return {
      status: 'idle',
      step: 2,
      email,
    }
  }

  await simulateServerDelay()
  return {
    status: 'success',
    step: 2,
    email,
  }
}

export const useSubscriptionWizard = () => {
  const [state, formAction, isPending] = useActionState<WizardState, FormData>(
    subscriptionAction,
    initialState,
  )
  const [email, setEmail] = useState(state.email)
  const [isEmailTouched, setIsEmailTouched] = useState(false)

  useEffect(() => {
    setEmail(state.email)
    setIsEmailTouched(false)
  }, [state.email])

  const emailValidation = subscriptionEmailSchema.safeParse(email)
  const isEmailValid = emailValidation.success
  const emailError =
    isEmailTouched && !isEmailValid
      ? (emailValidation.error.issues[0]?.message ?? 'Укажите корректный email')
      : undefined

  const handleEmailChange = (value: string) => {
    if (!isEmailTouched) {
      setIsEmailTouched(true)
    }
    setEmail(value)
  }

  const handleEmailBlur = () => {
    setIsEmailTouched(true)
  }

  return {
    state,
    formAction,
    isPending,
    showPending: isPending,
    email,
    isEmailValid,
    emailError,
    handleEmailChange,
    handleEmailBlur,
  }
}
