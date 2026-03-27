import { lazy, Suspense } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../layouts'

const MainPage = lazy(() => import('pages/main').then(module => ({ default: module.MainPage })))
const RegisterPage = lazy(() =>
  import('pages/register').then(module => ({ default: module.RegisterPage })),
)
const SubscribeWizard = lazy(() =>
  import('pages/wizard').then(module => ({ default: module.SubscribeWizard })),
)
const RefExamplesPage = lazy(() =>
  import('pages/refExamples').then(module => ({
    default: module.RefExamplesPage,
  })),
)

const PageFallback = () => (
  <Box sx={{ display: 'grid', placeItems: 'center', py: 10 }}>
    <CircularProgress />
  </Box>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageFallback />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<PageFallback />}>
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        path: 'wizard',
        element: (
          <Suspense fallback={<PageFallback />}>
            <SubscribeWizard />
          </Suspense>
        ),
      },
      {
        path: 'ref-examples',
        element: (
          <Suspense fallback={<PageFallback />}>
            <RefExamplesPage />
          </Suspense>
        ),
      },
    ],
  },
])

