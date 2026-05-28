import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { experience } from '../../../data/experience';
import { FLAME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BORDER, SURFACE } from '../../../theme/palette';
import { Terminal,  Calendar, Building2 } from 'lucide-react';

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 16, md: 24 },
        }}
      >
        <AnimatedItem>
          <SectionHeader number="04" title="Career Log" accentWord="Log" label="experience" />
        </AnimatedItem>

        <Box sx={{ position: 'relative', mt: 10 }}>
          {/* Vertical "Git Branch" Line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: 40 },
              top: 0,
              bottom: 0,
              width: '2px',
              background: `linear-gradient(to bottom, ${FLAME}, ${FLAME}40 50%, transparent)`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -20,
                width: 10,
                height: 10,
                border: `2px solid ${FLAME}40`,
                transform: 'rotate(45deg)',
              }
            }}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {experience.map((exp, idx) => (
              <Box
                key={exp.id}
                component={motion.div}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                sx={{
                  display: 'flex',
                  gap: { xs: 4, md: 10 },
                  position: 'relative',
                  pl: { xs: 8, md: 16 },
                }}
              >
                {/* Node Marker */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 11, md: 31 },
                    top: 10,
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component={motion.div}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      boxShadow: [`0 0 0px ${FLAME}00`, `0 0 20px ${FLAME}60`, `0 0 0px ${FLAME}00`]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      backgroundColor: '#0A0A0A',
                      border: `3px solid ${FLAME}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: FLAME }} />
                  </Box>
                </Box>

                {/* Main Content Card */}
                <Box
                  sx={{
                    flex: 1,
                    backgroundColor: SURFACE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '24px',
                    p: { xs: 4, md: 8 },
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      borderColor: FLAME,
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      transform: 'translateY(-5px)',
                      boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
                      '& .exp-icon': { color: FLAME },
                      '& .exp-branch': { opacity: 1 }
                    }
                  }}
                >
                  {/* Decorative "Branch" line to card */}
                  <Box
                    className="exp-branch"
                    sx={{
                      position: 'absolute',
                      left: { xs: -32, md: -60 },
                      top: 20,
                      width: { xs: 32, md: 60 },
                      height: '2px',
                      backgroundColor: BORDER,
                      opacity: 0.5,
                      transition: 'opacity 0.3s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        right: 0,
                        top: -3,
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: BORDER,
                      }
                    }}
                  />

                  {/* Header Info */}
                  <Box sx={{ mb: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Calendar size={12} className="exp-icon" style={{ color: TEXT_DIM, transition: 'color 0.3s' }} />
                      <Typography
                        sx={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.8rem',
                          color: TEXT_DIM,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 800,
                        color: TEXT_PRIMARY,
                        lineHeight: 1.1,
                        mb: 2,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {exp.role}
                    </Typography>

                    <Box 
                      component="a" 
                      href={exp.companyUrl}
                      sx={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: 2,
                        textDecoration: 'none',
                        px: 3,
                        py: 1,
                        backgroundColor: 'rgba(255,109,46,0.05)',
                        border: `1px solid ${FLAME}20`,
                        borderRadius: '100px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: FLAME,
                          backgroundColor: 'rgba(255,109,46,0.1)',
                        }
                      }}
                    >
                      <Building2 size={16} color={FLAME} />
                      <Typography
                        sx={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '0.9rem',
                          color: FLAME,
                          fontWeight: 600,
                        }}
                      >
                        {exp.company}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Responsibilities with "Code Diff" style */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 3,
                      borderLeft: `2px solid ${BORDER}`,
                      pl: { xs: 3, md: 5 },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, opacity: 0.5, mb: 1 }}>
                      <Terminal size={14} />
                      <Typography sx={{ fontSize: '0.7rem', fontFamily: "'IBM Plex Mono', monospace" }}>
                        commit_details.diff
                      </Typography>
                    </Box>

                    {exp.responsibilities.map((resp, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: 'flex',
                          gap: 3,
                          transition: 'transform 0.2s ease',
                          '&:hover': { transform: 'translateX(10px)' }
                        }}
                      >
                        <Typography
                          sx={{
                            color: '#27C93F',
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '1rem',
                            fontWeight: 700,
                            lineHeight: 1.6,
                          }}
                        >
                          +
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            color: TEXT_SECONDARY,
                            lineHeight: 1.6,
                            fontWeight: 450,
                          }}
                        >
                          {resp}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Decorative Meta Background */}
                  <Typography
                    sx={{
                      position: 'absolute',
                      top: 40,
                      right: 40,
                      fontSize: '8rem',
                      fontWeight: 900,
                      color: 'white',
                      opacity: 0.02,
                      pointerEvents: 'none',
                      lineHeight: 1,
                      fontFamily: "'Inter', sans-serif",
                      display: { xs: 'none', md: 'block' }
                    }}
                  >
                    {idx + 1}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </AnimatedSection>
  );
}
