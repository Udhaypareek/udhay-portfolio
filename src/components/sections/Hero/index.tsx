import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroMetrics } from './HeroMetrics';
import { TypewriterEffect } from '../../common/TypewriterEffect';
import { TechTag } from '../../common/TechTag';
import { useAppStore } from '../../../store/useAppStore';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { FLAME, EMERALD, TEXT_SECONDARY, TEXT_PRIMARY, TEXT_DIM } from '../../../theme/palette';
import type { AccentName } from '../../../theme/palette';
import { ArrowRight, FileDown } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'AI Systems Engineer',
  'Backend Architect',
  'MERN Stack Developer',
];

const tags: { label: string; accent: AccentName }[] = [
  { label: 'Backend Systems', accent: 'flame' },
  { label: 'AI Workflows', accent: 'violet' },
  { label: 'MERN Stack', accent: 'azure' },
  { label: 'Real-Time', accent: 'cyan' },
  { label: 'Linux', accent: 'emerald' },
];

function FadeUp({ children, delay = 0, reduced }: { children: React.ReactNode; delay?: number; reduced: boolean }) {
  if (reduced) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const setIsLowEnd = useAppStore((s) => s.setIsLowEnd);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const isLowEnd =
      navigator.hardwareConcurrency < 4 || window.devicePixelRatio > 2.5;
    setIsLowEnd(isLowEnd);
  }, [setIsLowEnd]);

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 20, md: 0 },
        pb: { xs: 16, md: 0 },
      }}
    >
      <HeroBackground />

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 10, md: 6 },
          }}
        >
          {/* Left content */}
          <Box sx={{ flex: '1 1 60%', maxWidth: { md: '65%' } }}>
            {/* Status bar */}
            <FadeUp delay={0} reduced={prefersReducedMotion}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mb: 6,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: EMERALD,
                    boxShadow: `0 0 8px ${EMERALD}80`,
                    animation: 'heroPulse 2s ease-in-out infinite',
                    '@keyframes heroPulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.5 },
                    },
                  }}
                />
                <Box
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.625rem',
                    color: TEXT_SECONDARY,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  AVAILABLE FOR OPPORTUNITIES &nbsp;·&nbsp; JAIPUR, IN
                </Box>
              </Box>
            </FadeUp>

            {/* Terminal intro */}
            <FadeUp delay={0.1} reduced={prefersReducedMotion}>
              <Box
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.8125rem',
                  color: TEXT_DIM,
                  mb: 4,
                  lineHeight: 1.8,
                }}
              >
                <Box component="span" sx={{ color: TEXT_SECONDARY }}>
                  ~/portfolio
                </Box>{' '}
                <Box component="span" sx={{ color: FLAME, fontWeight: 600 }}>
                  $
                </Box>{' '}
                cat about.md
                <br />
                &nbsp;&nbsp;Initializing system profile...
              </Box>
            </FadeUp>

            {/* Name */}
            <FadeUp delay={0.2} reduced={prefersReducedMotion}>
              <Box
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                <Box component="span" sx={{ color: TEXT_PRIMARY }}>
                  Udhay
                </Box>
                <br />
                <Box component="span" sx={{ color: FLAME }}>
                  Pareek.
                </Box>
              </Box>
            </FadeUp>

            {/* Typewriter */}
            <FadeUp delay={0.3} reduced={prefersReducedMotion}>
              <Box sx={{ mb: 4 }}>
                <TypewriterEffect words={roles} />
              </Box>
            </FadeUp>

            {/* Description */}
            <FadeUp delay={0.4} reduced={prefersReducedMotion}>
              <Box
                sx={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  color: TEXT_SECONDARY,
                  lineHeight: 1.7,
                  mb: 5,
                  maxWidth: '480px',
                }}
              >
                Full Stack Developer building AI-enabled systems,
                <br />
                scalable backends, and real-time architectures.
              </Box>
            </FadeUp>

            {/* Tags */}
            <FadeUp delay={0.5} reduced={prefersReducedMotion}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  mb: 6,
                }}
              >
                {tags.map((tag) => (
                  <TechTag key={tag.label} label={tag.label} accent={tag.accent} />
                ))}
              </Box>
            </FadeUp>

            {/* CTA buttons */}
            <FadeUp delay={0.6} reduced={prefersReducedMotion}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                <Button
                  variant="contained"
                  onClick={() =>
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    gap: 2,
                    '&:hover': {
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  ./view_projects
                  <ArrowRight size={14} />
                </Button>
                <Button
                  variant="outlined"
                  component="a"
                  href="#"
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    gap: 2,
                  }}
                >
                  <FileDown size={14} />
                  → Resume.pdf
                </Button>
                <Button
                  variant="outlined"
                  onClick={() =>
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  Contact
                </Button>
              </Box>
            </FadeUp>
          </Box>

          {/* Right metrics */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              alignItems: 'center',
              flex: '0 0 auto',
            }}
          >
            <HeroMetrics />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
