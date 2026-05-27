import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { SURFACE, BORDER, FLAME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, EMERALD } from '../../../theme/palette';
import {
  Network, Brain, CircleDot, Terminal, GitBranch, Crosshair, Palette, BookOpen
} from 'lucide-react';

const infoRows = [
  { label: 'LOCATION', value: 'Jaipur, Rajasthan, India' },
  { label: 'ROLE', value: 'Full Stack Developer' },
  { label: 'FOCUS', value: 'Backend · AI · Real-Time' },
  { label: 'STATUS', value: '● Open to work', isStatus: true },
  { label: 'INTERESTS', value: 'LLM Workflows, Distributed Systems, Linux' },
];

const interests = [
  { label: 'Backend Architecture', icon: Network },
  { label: 'AI/LLM Systems', icon: Brain },
  { label: 'Real-Time Apps', icon: CircleDot },
  { label: 'Linux & DevOps', icon: Terminal },
  { label: 'System Design', icon: GitBranch },
  { label: 'API Design', icon: Crosshair },
  { label: 'UI Engineering', icon: Palette },
  { label: 'Open Source', icon: BookOpen },
];

export default function About() {
  return (
    <AnimatedSection id="about">
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 16, md: 24 },
        }}
      >
        <AnimatedItem>
          <SectionHeader number="02" title="About." accentWord="About." label="about" />
        </AnimatedItem>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 8,
          }}
        >
          {/* Left — bio */}
          <AnimatedItem>
            <Box
              sx={{
                fontSize: '0.9375rem',
                fontFamily: "'Inter', sans-serif",
                color: TEXT_SECONDARY,
                lineHeight: 1.8,
                '& strong': {
                  color: TEXT_PRIMARY,
                  fontWeight: 600,
                },
              }}
            >
              <p>
                I'm a <strong>Full Stack Developer</strong> with a strong focus on building{' '}
                <strong>AI-enabled systems</strong>, scalable backend architectures, and
                real-time web applications. I specialize in the <strong>MERN stack</strong>{' '}
                and have hands-on experience integrating AI APIs like Gemini and OpenAI into
                production workflows.
              </p>
              <br />
              <p>
                My approach is engineering-first — clean architecture, modular design,
                and performance-aware development. When I'm not coding, you'll find me
                ricing my Linux setup or exploring new AI tooling.
              </p>
            </Box>
          </AnimatedItem>

          {/* Right — terminal info panel */}
          <AnimatedItem>
            <Box
              sx={{
                backgroundColor: SURFACE,
                border: `0.5px solid ${BORDER}`,
                borderLeft: `2px solid ${FLAME}`,
                borderRadius: '10px',
                p: 5,
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {infoRows.map((row) => (
                <Box
                  key={row.label}
                  sx={{
                    display: 'flex',
                    gap: 4,
                    py: 2,
                    borderBottom: `0.5px solid ${BORDER}`,
                    '&:last-child': { borderBottom: 'none' },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: '0.6875rem',
                      color: TEXT_DIM,
                      letterSpacing: '0.08em',
                      minWidth: '100px',
                      flexShrink: 0,
                      pt: '2px',
                    }}
                  >
                    {row.label}
                  </Box>
                  <Box
                    sx={{
                      fontSize: '0.8125rem',
                      color: row.isStatus ? EMERALD : TEXT_PRIMARY,
                      fontWeight: row.isStatus ? 500 : 400,
                    }}
                  >
                    {row.value}
                  </Box>
                </Box>
              ))}
            </Box>
          </AnimatedItem>
        </Box>

        {/* Interests grid */}
        <Box sx={{ mt: 12 }}>
          <AnimatedItem>
            <Box
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.6875rem',
                color: TEXT_DIM,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 5,
              }}
            >
              // interests
            </Box>
          </AnimatedItem>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 3,
            }}
          >
            {interests.map((item) => {
              const Icon = item.icon;
              return (
                <AnimatedItem key={item.label}>
                  <Box
                    sx={{
                      backgroundColor: SURFACE,
                      border: `0.5px solid ${BORDER}`,
                      borderRadius: '8px',
                      p: 4,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                      transition: 'all 200ms ease',
                      cursor: 'default',
                      '&:hover': {
                        borderLeft: `2px solid ${FLAME}`,
                        backgroundColor: '#161616',
                        '& .interest-icon': {
                          color: FLAME,
                        },
                      },
                    }}
                  >
                    <Box className="interest-icon" sx={{ color: TEXT_DIM, transition: 'color 200ms ease', flexShrink: 0 }}>
                      <Icon size={16} />
                    </Box>
                    <Box
                      sx={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.6875rem',
                        color: TEXT_SECONDARY,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.label}
                    </Box>
                  </Box>
                </AnimatedItem>
              );
            })}
          </Box>
        </Box>
      </Container>
    </AnimatedSection>
  );
}
