import Chip from '@mui/material/Chip';
import { accentMap } from '../../theme/palette';
import type { AccentName } from '../../theme/palette';

interface TechTagProps {
  label: string;
  accent?: AccentName;
  size?: 'small' | 'medium';
  onClick?: () => void;
}

export function TechTag({ label, accent = 'flame', size = 'small', onClick }: TechTagProps) {
  const { color, tint } = accentMap[accent];

  return (
    <Chip
      label={label}
      size={size}
      onClick={onClick}
      sx={{
        backgroundColor: tint,
        color: color,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.6875rem',
        fontWeight: 500,
        letterSpacing: '0.04em',
        borderRadius: '6px',
        height: size === 'small' ? '26px' : '30px',
        border: 'none',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 200ms ease',
        '&:hover': onClick
          ? {
              backgroundColor: `${color}20`,
              transform: 'translateY(-1px)',
            }
          : {},
      }}
    />
  );
}
