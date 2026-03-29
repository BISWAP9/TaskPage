import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import { DetailIconRow } from 'shared/ui'
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from 'shared/lib/authContext'
import { useGetMeApi } from '../api'

export const ProfileInfo = () => {
  const navigate = useNavigate()
  const { accessToken, logout } = useAuthContext()
  const { data: profile, isLoading } = useGetMeApi(accessToken)

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  if (isLoading) {
    return (
      <Box sx={{ display: 'grid', placeItems: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Stack spacing={3} maxWidth={520}>
      <Typography variant="h4" fontWeight={800}>
        Профиль
      </Typography>

      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Stack spacing={3} alignItems="center">
            <Avatar
              src={profile?.avatarPath}
              sx={{
                width: 96,
                height: 96,
              }}
            />
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h5" fontWeight={700}>
                {profile?.name || 'Без имени'}
              </Typography>
              {profile?.roles?.length && (
                <Stack direction="row" spacing={0.5}>
                  {(profile?.roles ?? []).map(role => (
                    <Chip
                      key={role}
                      label={role}
                      size="small"
                      color={'primary'}
                      variant="outlined"
                    />
                  ))}
                </Stack>
              )}
            </Stack>
          </Stack>

          <Divider sx={{ my: 2.5 }} />

          <Stack spacing={2}>
            <DetailIconRow
              icon={<EmailIcon color="action" fontSize="small" />}
              label="Email"
              value={profile?.email ?? '—'}
            />

            {profile?.phone && (
              <DetailIconRow
                icon={<PhoneIcon color="action" fontSize="small" />}
                label="Телефон"
                value={profile.phone}
              />
            )}

            {profile?.about && (
              <DetailIconRow
                icon={<PersonIcon color="action" fontSize="small" sx={{ mt: 0.5 }} />}
                label="О себе"
                value={profile.about}
                alignItems="flex-start"
              />
            )}
          </Stack>
        </CardContent>
      </Card>

      <Button
        color="error"
        variant="contained"
        startIcon={<LogoutIcon />}
        onClick={handleLogout}
        sx={{ alignSelf: 'flex-start' }}
      >
        Выйти
      </Button>
    </Stack>
  )
}
