import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import { ProtectedRoute } from 'features/authRouting'
import { AppLayout } from './layouts'

const MainPage = lazy(() => import('pages/main').then(m => ({ default: m.MainPage })))
const RegisterPage = lazy(() => import('pages/register').then(m => ({ default: m.RegisterPage })))
const SubscribeWizard = lazy(() => import('pages/wizard').then(m => ({ default: m.SubscribeWizard })))
const RefExamplesPage = lazy(() =>
  import('pages/refExamples').then(m => ({ default: m.RefExamplesPage })),
)
const LoginPage = lazy(() => import('pages/login').then(m => ({ default: m.LoginPage })))
const ProfilePage = lazy(() => import('pages/profile').then(m => ({ default: m.ProfilePage })))
const PublicPage = lazy(() => import('pages/public').then(m => ({ default: m.PublicPage })))

const PageFallback = () => (
  <Box sx={{ display: 'grid', placeItems: 'center', py: 10 }}>
    <CircularProgress />
  </Box>
)

export const App = () => (
  <BrowserRouter>
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="wizard" element={<SubscribeWizard />} />
          <Route path="ref-examples" element={<RefExamplesPage />} />
          <Route path="public" element={<PublicPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
)
