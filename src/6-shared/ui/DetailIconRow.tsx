import { Box, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type DetailIconRowProps = {
  icon: ReactNode
  label: string
  value: ReactNode
  alignItems?: 'center' | 'flex-start'
}

export const DetailIconRow = ({
  icon,
  label,
  value,
  alignItems = 'center',
}: DetailIconRowProps) => (
  <Stack direction="row" spacing={1.5} alignItems={alignItems}>
    {icon}
    <Box>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  </Stack>
)
