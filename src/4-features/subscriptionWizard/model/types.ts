export type WizardStep = 1 | 2

export type WizardStatus = 'idle' | 'error' | 'success'

export type WizardState = {
  status: WizardStatus
  step: WizardStep
  email: string
  error?: string
}

export type WizardActionType = 'submitEmail' | 'confirm'
