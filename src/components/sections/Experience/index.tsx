import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme, useMediaQuery } from '@mui/material';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { experience } from '../../../data/experience';
import { FLAME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BORDER, SURFACE } from '../../../theme/palette';
import { Terminal,  Calendar, Building2, ChevronDown } from 'lucide-react';

export default function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (!isMobile) return;
    setExpandedId(expandedId === id ? null : id);
  };

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

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0, md: 12 } }}>
            {experience.map((exp, idx) => {
              const isExpanded = isMobile ? expandedId === exp.id : true;

              return (
                <Box
                  key={exp.id}
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => toggleExpand(exp.id)}
                  sx={{
                    display: 'flex',
                    gap: { xs: 4, md: 10 },
                    position: 'relative',
                    pl: { xs: 8, md: 16 },
                    cursor: isMobile ? 'pointer' : 'default',
                    // Overlapping logic for mobile
                    mb: isMobile ? (isExpanded ? 4 : -4) : 0, 
                    zIndex: isExpanded ? 50 : experience.length - idx,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
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
                        scale: isExpanded ? [1, 1.2, 1] : 1,
                        boxShadow: isExpanded ? [`0 0 0px ${FLAME}00`, `0 0 20px ${FLAME}60`, `0 0 0px ${FLAME}00`] : 'none'
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        backgroundColor: '#0A0A0A',
                        border: `3px solid ${isExpanded ? FLAME : BORDER}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'border-color 0.3s ease',
                      }}
                    >
                      <Box sx={{ 
                        width: 6, 
                        height: 6, 
                        borderRadius: '50%', 
                        backgroundColor: isExpanded ? FLAME : BORDER,
                        transition: 'background-color 0.3s ease',
                      }} />
                    </Box>
                  </Box>

                  {/* Main Content Card */}
                  <Box
                    sx={{
                      flex: 1,
                      backgroundColor: isMobile ? 'rgba(17, 17, 17, 0.75)' : SURFACE,
                      backdropFilter: isMobile ? 'blur(12px)' : 'none',
                      border: `1px solid ${isExpanded ? FLAME : BORDER}`,
                      // Add a "rim light" to the top edge for the stacked glass effect
                      borderTop: isMobile && !isExpanded ? `1px solid rgba(255, 255, 255, 0.1)` : undefined, 
                      borderRadius: '24px',
                      p: isMobile ? (isExpanded ? 4 : 3) : 8,
                      position: 'relative',
                      transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                      boxShadow: isExpanded 
                        ? `0 20px 40px rgba(0,0,0,0.4)` 
                        : isMobile ? `0 -5px 15px rgba(0,0,0,0.2)` : 'none',
                      '&:hover': {
                        borderColor: FLAME,
                        backgroundColor: isMobile ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                        transform: isMobile ? 'translateY(-2px)' : 'translateY(-5px)',
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
                        backgroundColor: isExpanded ? FLAME : BORDER,
                        opacity: isExpanded ? 0.8 : 0.5,
                        transition: 'all 0.3s ease',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          right: 0,
                          top: -3,
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: isExpanded ? FLAME : BORDER,
                        }
                      }}
                    />

                    {/* Header Info */}
                    <Box sx={{ mb: isExpanded ? 6 : 0, transition: 'margin 0.3s ease' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                            <Calendar size={12} className="exp-icon" style={{ color: isExpanded ? FLAME : TEXT_DIM, transition: 'color 0.3s' }} />
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
                              fontSize: { xs: '1.1rem', md: '2rem' },
                              fontWeight: 800,
                              color: isExpanded ? TEXT_PRIMARY : TEXT_SECONDARY,
                              lineHeight: 1.1,
                              mb: isExpanded ? 2 : 0,
                              transition: 'all 0.3s ease',
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {exp.role}
                          </Typography>

                          {!isExpanded && isMobile && (
                            <Typography
                              sx={{
                                fontSize: '0.85rem',
                                color: FLAME,
                                fontFamily: "'IBM Plex Mono', monospace",
                                mt: 0.5,
                                opacity: 0.8
                              }}
                            >
                              @ {exp.company}
                            </Typography>
                          )}
                        </Box>
                        
                        {isMobile && (
                          <Box
                            component={motion.div}
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            sx={{ mt: 1, color: isExpanded ? FLAME : TEXT_DIM }}
                          >
                            <ChevronDown size={20} />
                          </Box>
                        )}
                      </Box>

                      <AnimatePresence>
                        {isExpanded && (
                          <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                          >
                            <Box 
                              component="a" 
                              href={exp.companyUrl}
                              onClick={(e) => isMobile && e.stopPropagation()}
                              sx={{ 
                                display: 'inline-flex', 
                                alignItems: 'center', 
                                gap: 2,
                                mt: 2,
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
                        )}
                      </AnimatePresence>
                    </Box>

                    {/* Responsibilities with "Code Diff" style */}
                    <AnimatePresence>
                      {isExpanded && (
                        <Box
                          component={motion.div}
                          initial={isMobile ? { height: 0, opacity: 0 } : false}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          sx={{ overflow: 'hidden' }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 3,
                              borderLeft: `2px solid ${BORDER}`,
                              pl: { xs: 3, md: 5 },
                              mt: isMobile ? 4 : 0
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
                        </Box>
                      )}
                    </AnimatePresence>

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
              );
            })}
          </Box>
        </Box>
      </Container>
    </AnimatedSection>
  );
}
