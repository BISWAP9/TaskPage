import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/register', label: 'Регистрация' },
  { to: '/wizard', label: 'Подписка' },
]

export const Header = () => {
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}