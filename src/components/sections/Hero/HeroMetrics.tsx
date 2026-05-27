import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import { SURFACE, BORDER, TEXT_SECONDARY, TEXT_PRIMARY, FLAME } from '../../../theme/palette';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface Metric {
  label: string;
  value: string;
  accent?: string;
}

const metrics: Metric[] = [
  { label: 'PROJECTS', value: '05', accent: FLAME },
  { label: 'STACK', value: 'MERN', accent: FLAME },
  { label: 'AI APIS', value: '02+', accent: FLAME },
];

export function HeroMetrics() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        gap: 3,
        width: { xs: '100%', md: 'auto' },
        justifyContent: { xs: 'center', md: 'flex-start' },
      }}
    >
      {metrics.map((metric, i) => {
        const content = (
          <Box
            key={metric.label}
            sx={{
              backgroundColor: SURFACE,
              border: `0.5px solid ${BORDER}`,
              borderRadius: '10px',
              px: 5,
              py: 4,
              minWidth: { xs: '90px', md: '130px' },
              textAlign: 'center',
              transition: 'border-color 200ms ease, transform 200ms ease',
              '&:hover': {
                borderColor: `${FLAME}40`,
                transform: 'scale(1.02)',
              },
            }}
          >
            <Box
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.5625rem',
                color: TEXT_SECONDARY,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              {metric.label}
            </Box>
            <Box
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 700,
                color: metric.accent || TEXT_PRIMARY,
              }}
            >
              {metric.value}
            </Box>
          </Box>
        );

        if (prefersReducedMotion) return content;

        return (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.8 + i * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {content}
          </motion.div>
        );
      })}
    </Box>
  );
}
