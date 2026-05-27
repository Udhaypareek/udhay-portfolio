import Box from '@mui/material/Box';
import type { ReactNode } from 'react';
import { FLAME, AZURE } from '../../theme/palette';

interface GradientTextProps {
  children: ReactNode;
  from?: string;
  to?: string;
  component?: React.ElementType;
  sx?: object;
}

export function GradientText({
  children,
  from = FLAME,
  to = AZURE,
  component = 'span',
  sx = {},
}: GradientTextProps) {
  return (
    <Box
      component={component}
      sx={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
