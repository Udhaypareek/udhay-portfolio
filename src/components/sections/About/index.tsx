import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { SURFACE, BORDER, FLAME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, EMERALD, AZURE, VIOLET } from '../../../theme/palette';
import {
  Network, Brain, CircleDot, Terminal, Crosshair, Palette
} from 'lucide-react';

const infoRows = [
  { label: 'LOCATION', value: 'Jaipur, Rajasthan, India' },
  { label: 'ROLE', value: 'Full Stack Developer' },
  { label: 'FOCUS', value: 'Backend · AI · Real-Time' },
  { label: 'STATUS', value: '● Open to work', isStatus: true },
  { label: 'INTERESTS', value: 'LLM Workflows, Distributed Systems, Linux' },
];

const interests = [
  { label: 'Backend Architecture', icon: Network, color: AZURE },
  { label: 'AI/LLM Systems', icon: Brain, color: VIOLET },
  { label: 'Real-Time Apps', icon: CircleDot, color: FLAME },
  { label: 'Linux & DevOps', icon: Terminal, color: EMERALD },
  // { label: 'System Design', icon: GitBranch, color: CYAN },
  { label: 'API Design', icon: Crosshair, color: AZURE },
  { label: 'UI Engineering', icon: Palette, color: VIOLET },
  // { label: 'Open Source', icon: BookOpen, color: FLAME },
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
                My approach is engineering-first clean architecture, modular design,
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
                border: `1px solid ${BORDER}`,
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px -20px rgba(0,0,0,0.5)',
              }}
            >
              {/* Terminal Title Bar */}
              <Box
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderBottom: `1px solid ${BORDER}`,
                  px: 4,
                  py: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27C93F' }} />
                <Box
                  sx={{
                    ml: 2,
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.65rem',
                    color: TEXT_DIM,
                    letterSpacing: '0.1em',
                  }}
                >
                  guest@udhay: ~
                </Box>
              </Box>

              <Box sx={{ p: 5, fontFamily: "'IBM Plex Mono', monospace" }}>
                {infoRows.map((row) => (
                  <Box
                    key={row.label}
                    sx={{
                      display: 'flex',
                      gap: 4,
                      py: 2.5,
                      borderBottom: `1px solid rgba(255,255,255,0.03)`,
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
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
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
            </Box>
          </AnimatedItem>
        </Box>

        {/* Interests grid */}
        <Box sx={{ mt: 12 }}>
          <AnimatedItem>
            <Box
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.8rem',
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
            {interests.map((item, _index) => {
              const Icon = item.icon;
              return (
                <AnimatedItem key={item.label}>
                  <Box
                    component={motion.div}
                    whileHover="hover"
                    initial="initial"
                    sx={{
                      position: 'relative',
                      backgroundColor: SURFACE,
                      border: `1px solid ${BORDER}`,
                      borderRadius: '12px',
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 3,
                      height: '120px',
                      cursor: 'default',
                      overflow: 'hidden',
                      transition: 'border-color 0.3s ease',
                      '&:hover': {
                        borderColor: item.color,
                      },
                    }}
                  >
                    {/* Linux "Process" bar background effect */}
                    <Box
                      component={motion.div}
                      variants={{
                        initial: { scaleX: 0, opacity: 0 },
                        hover: { scaleX: 1, opacity: 0.05 }
                      }}
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: item.color,
                        transformOrigin: 'left',
                        zIndex: 0,
                      }}
                    />

                    <Box 
                      className="interest-icon" 
                      component={motion.div}
                      variants={{
                        initial: { y: 0, color: TEXT_DIM },
                        hover: { y: -5, color: item.color }
                      }}
                      sx={{ 
                        zIndex: 1,
                        transition: 'color 0.3s ease'
                      }}
                    >
                      <Icon size={24} strokeWidth={1.5} />
                    </Box>

                    <Box
                      sx={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.7rem',
                        color: TEXT_SECONDARY,
                        letterSpacing: '0.02em',
                        textAlign: 'center',
                        zIndex: 1,
                        lineHeight: 1.2
                      }}
                    >
                      {item.label}
                    </Box>

                    {/* Linux-style corner accent */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '24px',
                        height: '24px',
                        background: `linear-gradient(225deg, ${item.color}33 50%, transparent 50%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        '.MuiBox-root:hover &': {
                          opacity: 1,
                        }
                      }}
                    />
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
