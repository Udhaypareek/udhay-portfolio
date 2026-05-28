import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../../data/projects';
import { SURFACE, BORDER, TEXT_DIM } from '../../../theme/palette';

export default function Projects() {
  return (
    <AnimatedSection id="projects">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader number="05" title="Source Files." accentWord="Files." label="projects" />
        </AnimatedItem>

        {/* Project Terminal Interface */}
        <Box
          sx={{
            backgroundColor: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 24px 48px -12px rgba(0,0,0,0.5)',
          }}
        >
          {/* Terminal Header */}
          <Box
            sx={{
              px: 3,
              py: 2,
              backgroundColor: '#1a1a1a',
              borderBottom: `1px solid ${BORDER}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#27c93f' }} />
            </Box>
            <Box
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.75rem',
                color: TEXT_DIM,
                letterSpacing: '0.05em',
              }}
            >
              projects.sh — 128x64
            </Box>
            <Box sx={{ width: 48 }} /> {/* Spacer to balance */}
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              minHeight: '600px',
            }}
          >
            {/* Sidebar / File Tree */}
            <Box
              sx={{
                borderRight: { md: `1px solid ${BORDER}` },
                backgroundColor: '#0d0d0d',
                p: 4,
              }}
            >
              <Box
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  color: TEXT_DIM,
                  mb: 4,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Directories
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {['root', 'featured', 'archive', 'experimental'].map((dir, i) => (
                  <Box
                    key={dir}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.875rem',
                      color: i === 0 ? '#fff' : TEXT_DIM,
                      cursor: 'pointer',
                      '&:hover': { color: '#fff' },
                    }}
                  >
                    <Box component="span" sx={{ color: i === 0 ? '#3b82f6' : 'inherit' }}>
                      {i === 0 ? '▼' : '▶'}
                    </Box>
                    {dir}/
                  </Box>
                ))}
              </Box>

              <Box sx={{ mt: 8 }}>
                <Box
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#4ade80',
                    mb: 2,
                  }}
                >
                  [SYSTEM STATUS]
                </Box>
                <Box sx={{ fontSize: '0.75rem', color: TEXT_DIM, fontFamily: "'IBM Plex Mono', monospace" }}>
                  Uptime: 247d 12h
                  <br />
                  Active Repos: {projects.length}
                </Box>
              </Box>
            </Box>

            {/* Main Content Area - Scrollable Grid */}
            <Box
              sx={{
                p: { xs: 4, md: 8 },
                maxHeight: '800px',
                overflowY: 'auto',
                backgroundColor: '#0a0a0a',
                '&::-webkit-scrollbar': { width: '8px' },
                '&::-webkit-scrollbar-thumb': { backgroundColor: `${BORDER}`, borderRadius: '4px' },
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                  gap: 4,
                }}
              >
                {projects.map((project, i) => (
                  <AnimatedItem key={project.id} delay={i * 0.1}>
                    <ProjectCard project={project} />
                  </AnimatedItem>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </AnimatedSection>
  );
}
