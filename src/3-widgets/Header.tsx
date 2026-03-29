import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthContext } from 'shared/lib/authContext'

const commonItems = [
  { to: '/', label: 'Главная' },
  { to: '/public', label: 'Публичная' },
]

const guestItems = [
  { to: '/login', label: 'Вход' },
  { to: '/register', label: 'Регистрация' },
]

const authItems = [{ to: '/profile', label: 'Профиль' }]

export const Header = () => {
  const { accessToken, logout } = useAuthContext()
  const navigate = useNavigate()
  const isAuthenticated = !!accessToken

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const navItems = [...commonItems, ...(isAuthenticated ? authItems : guestItems)]

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom: theme => `1px solid ${theme.palette.divider}`,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64, gap: 2 }}>
          <Typography
            component={NavLink}
            to="/"
            variant="h6"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 700,
            }}
          >
            Формы
          </Typography>

          <Box component="nav" sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
            {navItems.map(item => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                color="inherit"
                sx={{
                  px: 2,
                  color: 'text.secondary',
                  '&.active': {
                    color: 'primary.main',
                    backgroundColor: 'action.selected',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {isAuthenticated && (
              <Button color="error" variant="outlined" size="small" onClick={handleLogout}>
                Выйти
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
