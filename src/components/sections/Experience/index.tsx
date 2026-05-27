import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { experience } from '../../../data/experience';
import { FLAME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BORDER, SURFACE } from '../../../theme/palette';

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
          <SectionHeader number="04" title="Experience." accentWord="Experience." label="career" />
        </AnimatedItem>

        {experience.map((exp) => (
          <AnimatedItem key={exp.id}>
            <Box
              sx={{
                display: 'flex',
                gap: 5,
              }}
            >
              {/* Timeline marker */}
              <Box
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  flexDirection: 'column',
                  alignItems: 'center',
                  pt: 1,
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: FLAME,
                    boxShadow: `0 0 12px ${FLAME}40`,
                    flexShrink: 0,
                  }}
                />
                <Box
                  sx={{
                    width: '1px',
                    flex: 1,
                    background: `linear-gradient(to bottom, ${FLAME}40, transparent)`,
                    mt: 2,
                  }}
                />
              </Box>

              {/* Content */}
              <Box
                sx={{
                  flex: 1,
                  backgroundColor: SURFACE,
                  border: `0.5px solid ${BORDER}`,
                  borderRadius: '12px',
                  p: { xs: 5, md: 7 },
                }}
              >
                {/* Date */}
                <Box
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.6875rem',
                    color: TEXT_DIM,
                    letterSpacing: '0.08em',
                    mb: 3,
                  }}
                >
                  {exp.period}
                </Box>

                {/* Role & company */}
                <Box
                  sx={{
                    fontSize: '1.125rem',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    color: TEXT_PRIMARY,
                    mb: 1,
                  }}
                >
                  {exp.role}
                </Box>
                <Box
                  component="a"
                  href={exp.companyUrl}
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.8125rem',
                    color: FLAME,
                    textDecoration: 'none',
                    display: 'inline-block',
                    mb: 5,
                    transition: 'opacity 200ms ease',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                >
                  @ {exp.company}
                </Box>

                {/* Responsibilities */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {exp.responsibilities.map((resp, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        gap: 3,
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '0.8125rem',
                        lineHeight: 1.6,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: FLAME,
                          flexShrink: 0,
                          fontWeight: 600,
                        }}
                      >
                        ›
                      </Box>
                      <Box component="span" sx={{ color: TEXT_SECONDARY }}>
                        {resp}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </AnimatedItem>
        ))}
      </Container>
    </AnimatedSection>
  );
}
