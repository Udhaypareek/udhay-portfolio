import Box from '@mui/material/Box';
import { useTypewriter } from '../../hooks/useTypewriter';
import { FLAME, TEXT_PRIMARY } from '../../theme/palette';

interface TypewriterEffectProps {
  words: string[];
  prefix?: string;
}

export function TypewriterEffect({ words, prefix = '' }: TypewriterEffectProps) {
  const { text } = useTypewriter({
    words,
    typeSpeed: 90,
    deleteSpeed: 20,
    pauseDuration: 1500,
  });

  return (
    <Box
      sx={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: { xs: '0.875rem', md: '1rem' },
        color: TEXT_PRIMARY,
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        minHeight: '28px',
      }}
    >
      {prefix && (
        <Box component="span" sx={{ color: FLAME, mr: 1 }}>
          {prefix}
        </Box>
      )}
      <Box component="span">{text}</Box>
      <Box
        component="span"
        sx={{
          width: '2px',
          height: '1.2em',
          backgroundColor: FLAME,
          display: 'inline-block',
          animation: 'blink 1s step-end infinite',
          '@keyframes blink': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        }}
      />
    </Box>
  );
}
