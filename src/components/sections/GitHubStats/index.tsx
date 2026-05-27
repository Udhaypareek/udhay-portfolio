import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { SURFACE, BORDER, TEXT_DIM } from '../../../theme/palette';

const stats = [
  {
    title: 'GitHub Stats',
    src: 'https://github-readme-stats.vercel.app/api?username=Udhaypareek&theme=transparent&hide_border=true&bg_color=00000000&title_color=FF6D2E&text_color=8B949E&icon_color=3B82F6',
  },
  {
    title: 'GitHub Streak',
    src: 'https://github-readme-streak-stats.herokuapp.com/?user=Udhaypareek&theme=transparent&hide_border=true&ring=FF6D2E&fire=FF6D2E&currStreakLabel=FF6D2E',
  },
];

export default function GitHubStats() {
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  return (
    <AnimatedSection id="github-stats">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader number="08" title="GitHub." accentWord="GitHub." label="stats" />
        </AnimatedItem>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          {stats.map((stat, i) => (
            <AnimatedItem key={stat.title}>
              <Box
                sx={{
                  backgroundColor: SURFACE,
                  border: `0.5px solid ${BORDER}`,
                  borderRadius: '12px',
                  p: { xs: 3, md: 5 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '200px',
                }}
              >
                {errors[i] ? (
                  <Box
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.75rem',
                      color: TEXT_DIM,
                    }}
                  >
                    // stats temporarily unavailable
                  </Box>
                ) : (
                  <Box
                    component="img"
                    src={stat.src}
                    alt={stat.title}
                    loading="lazy"
                    width={450}
                    height={180}
                    onError={() => setErrors((prev) => ({ ...prev, [i]: true }))}
                    sx={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                )}
              </Box>
            </AnimatedItem>
          ))}
        </Box>
      </Container>
    </AnimatedSection>
  );
}
