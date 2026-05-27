import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { hobbies } from '../../../data/hobbies';
import { accentMap, SURFACE, BORDER, TEXT_SECONDARY, TEXT_DIM } from '../../../theme/palette';
import type { LucideIcon } from 'lucide-react';
import {
  Terminal, Brain, Music, Film, MapPin, Palette, Network, GitBranch
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Terminal, Brain, Music, Film, MapPin, Palette, Network, GitBranch,
};

export default function Hobbies() {
  return (
    <AnimatedSection id="hobbies">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader number="06" title="Beyond Code." accentWord="Code." label="hobbies" />
        </AnimatedItem>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {hobbies.map((hobby) => {
            const { color } = accentMap[hobby.accent];
            const Icon = iconMap[hobby.icon] || Terminal;

            return (
              <AnimatedItem key={hobby.id}>
                <Box
                  sx={{
                    backgroundColor: SURFACE,
                    border: `0.5px solid ${BORDER}`,
                    borderRadius: '10px',
                    p: 5,
                    height: '100%',
                    transition: 'all 200ms ease',
                    cursor: 'default',
                    '&:hover': {
                      borderLeft: `2px solid ${color}`,
                      backgroundColor: '#161616',
                      '& .hobby-icon': {
                        color: color,
                      },
                    },
                  }}
                >
                  <Box
                    className="hobby-icon"
                    sx={{
                      color: TEXT_DIM,
                      transition: 'color 200ms ease',
                      mb: 3,
                    }}
                  >
                    <Icon size={20} />
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.8125rem',
                      color: TEXT_SECONDARY,
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    {hobby.label}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.6875rem',
                      color: TEXT_DIM,
                      lineHeight: 1.5,
                    }}
                  >
                    {hobby.subtext}
                  </Box>
                </Box>
              </AnimatedItem>
            );
          })}
        </Box>
      </Container>
    </AnimatedSection>
  );
}
