import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FLAME, TEXT_GHOST, BORDER } from '../../theme/palette';

interface SectionHeaderProps {
  number: string; // e.g. "01", "02"
  title: string;
  accentWord?: string; // part of title in accent color
  label?: string; // right-side label
}

export function SectionHeader({ number, title, accentWord, label }: SectionHeaderProps) {
  return (
    <Box sx={{ mb: 10 }}>
      {/* Number + line + label row */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.75rem',
            color: TEXT_GHOST,
            fontWeight: 400,
            userSelect: 'none',
          }}
        >
          {number}
        </Typography>
        <Box
          sx={{
            flex: 1,
            height: '0.5px',
            backgroundColor: BORDER,
          }}
        />
        {label && (
          <Typography
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.6875rem',
              color: TEXT_GHOST,
              letterSpacing: '0.08em',
            }}
          >
            // {label}
          </Typography>
        )}
      </Box>

      {/* Title */}
      <Typography variant="h2" sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
        {accentWord ? (
          <>
            {title.replace(accentWord, '')}{' '}
            <Box component="span" sx={{ color: FLAME }}>
              {accentWord}
            </Box>
          </>
        ) : (
          title
        )}
      </Typography>
    </Box>
  );
}
