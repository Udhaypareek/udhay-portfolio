import Box from '@mui/material/Box';
import type { ReactNode } from 'react';
import { SURFACE, BORDER } from '../../theme/palette';

interface TerminalBlockProps {
  title?: string;
  children: ReactNode;
  sx?: object;
}

export function TerminalBlock({ title = 'udhay@workstation:~$ bash portfolio.sh', children, sx = {} }: TerminalBlockProps) {
  return (
    <Box
      sx={{
        backgroundColor: SURFACE,
        border: `0.5px solid ${BORDER}`,
        borderRadius: '12px',
        overflow: 'hidden',
        ...sx,
      }}
    >
      {/* macOS-style titlebar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          px: 4,
          py: 3,
          borderBottom: `0.5px solid ${BORDER}`,
          backgroundColor: 'rgba(17, 17, 17, 0.8)',
        }}
      >
        {/* Traffic light dots */}
        <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
        <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
        <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28C840' }} />
        <Box
          sx={{
            ml: 3,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.6875rem',
            color: '#8B949E',
            letterSpacing: '0.02em',
          }}
        >
          {title}
        </Box>
      </Box>

      {/* Terminal content */}
      <Box
        sx={{
          p: { xs: 4, md: 6 },
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.8125rem',
          lineHeight: 1.7,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
