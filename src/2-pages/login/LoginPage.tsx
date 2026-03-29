import { Navigate } from 'react-router-dom'
import { SignInForm, useAuth } from 'features/authRouting'

export const LoginPage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) return <Navigate to="/profile" replace />

  return <SignInForm />
}
