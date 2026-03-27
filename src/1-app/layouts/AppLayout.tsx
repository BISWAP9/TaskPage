import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from 'widgets'

export const AppLayout = () => (
  <>
    <Header />
    <Container component="main" maxWidth="lg" sx={{ py: 4 }}>
      <Box>
        <Outlet />
      </Box>
    </Container>
  </>
)
