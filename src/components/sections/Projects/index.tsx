import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../../data/projects';
import { ProjectWindow } from '../../common/ProjectWindow';
import { SURFACE, BORDER, TEXT_DIM, TEXT_PRIMARY, TEXT_SECONDARY, AZURE } from '../../../theme/palette';
import { ChevronRight, FileCode, Terminal as TerminalIcon, Layout } from 'lucide-react';

export default function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(projects[0]?.id || null);
  const [selectedProjectForWindow, setSelectedProjectForWindow] = useState<typeof projects[0] | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleProjectClick = (project: typeof projects[0]) => {
    if (isMobile) {
      setExpandedProjectId(expandedProjectId === project.id ? null : project.id);
    } else {
      setSelectedProjectForWindow(project);
    }
  };

  const MobileProjectShutter = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {projects.map((project, _i) => {
        const isOpen = expandedProjectId === project.id;
        return (
          <Box
            key={project.id}
            sx={{
              backgroundColor: '#0d0d0d',
              border: `1px solid ${isOpen ? `${AZURE}40` : BORDER}`,
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
          >
            <Box
              onClick={() => setExpandedProjectId(isOpen ? null : project.id)}
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                cursor: 'pointer',
                backgroundColor: isOpen ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
              }}
            >
              <FileCode size={16} color={isOpen ? AZURE : TEXT_DIM} />
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.85rem',
                  color: isOpen ? TEXT_PRIMARY : TEXT_SECONDARY,
                  flex: 1,
                }}
              >
                {project.title.toLowerCase().replace(/\s+/g, '_')}.js
              </Typography>
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                <ChevronRight size={14} color={TEXT_DIM} />
              </motion.div>
            </Box>

            <AnimatePresence initial={false}>
              {isOpen && (
                <Box
                  component={motion.div}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box sx={{ p: 2, borderTop: `1px solid ${BORDER}`, backgroundColor: '#0a0a0a' }}>
                    <ProjectCard project={project} />
                  </Box>
                </Box>
              )}
            </AnimatePresence>
          </Box>
        );
      })}
    </Box>
  );

  return (
    <AnimatedSection id="projects">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader number="05" title="Source Files." accentWord="Files." label="projects" />
        </AnimatedItem>

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
              px: { xs: 2.5, md: 3 },
              py: 2,
              backgroundColor: '#1a1a1a',
              borderBottom: `1px solid ${BORDER}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27c93f' }} />
            </Box>
            <Box
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: { xs: '0.65rem', md: '0.75rem' },
                color: TEXT_DIM,
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <TerminalIcon size={12} />
              projects.sh — {isMobile ? 'mobile' : '128x64'}
            </Box>
            <Box sx={{ width: { xs: 30, md: 48 } }} />
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              minHeight: { xs: 'auto', md: '600px' },
            }}
          >
            {/* Sidebar / File Tree - Hidden on mobile, or merged */}
            <Box
              sx={{
                borderRight: { md: `1px solid ${BORDER}` },
                backgroundColor: '#0d0d0d',
                p: { xs: 3, md: 4 },
                display: { xs: 'none', md: 'block' }
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

            {/* Main Content Area */}
            <Box
              sx={{
                p: { xs: 2.5, md: 8 },
                maxHeight: { xs: 'auto', md: '800px' },
                overflowY: 'auto',
                backgroundColor: '#0a0a0a',
                '&::-webkit-scrollbar': { width: '8px' },
                '&::-webkit-scrollbar-thumb': { backgroundColor: `${BORDER}`, borderRadius: '4px' },
              }}
            >
              {isMobile ? (
                <MobileProjectShutter />
              ) : (
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                    gap: 4,
                  }}
                >
                  {projects.map((project, i) => (
                    <AnimatedItem key={project.id} delay={i * 0.1}>
                      <Box 
                        onClick={() => handleProjectClick(project)}
                        sx={{ cursor: 'pointer', height: '100%' }}
                      >
                        <ProjectCard project={project} />
                      </Box>
                    </AnimatedItem>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Draggable Desktop Window */}
      <ProjectWindow
        isOpen={!!selectedProjectForWindow}
        onClose={() => setSelectedProjectForWindow(null)}
        title={selectedProjectForWindow ? `${selectedProjectForWindow.title.toLowerCase().replace(/\s+/g, '_')}.sh` : 'project.sh'}
        icon={Layout}
      >
        {selectedProjectForWindow && (
          <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
            <ProjectCard project={selectedProjectForWindow} fullWidth />
            <Box sx={{ mt: 4, p: { xs: 2.5, sm: 4 }, border: `1px solid ${BORDER}`, borderRadius: 1.5, backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <Typography sx={{ color: TEXT_PRIMARY, fontWeight: 600, mb: 1, fontFamily: 'JetBrains Mono, monospace' }}>
                Technical Overview
              </Typography>
              <Typography sx={{ color: TEXT_SECONDARY, fontSize: '0.9rem', lineHeight: 1.7 }}>
                This project was architecturalized with scalability and performance in mind. Utilizing modern patterns such as {selectedProjectForWindow.stack.join(', ')}, it achieves high concurrency and clean modularity.
              </Typography>
              <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {selectedProjectForWindow.stack.map(tag => (
                  <Box 
                    key={tag}
                    sx={{ 
                      px: 1.5, 
                      py: 0.5, 
                      bgcolor: 'rgba(255,255,255,0.05)', 
                      border: `1px solid ${BORDER}`,
                      borderRadius: '4px',
                      fontSize: '0.7rem',
                      color: TEXT_SECONDARY,
                      fontFamily: 'JetBrains Mono, monospace'
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </ProjectWindow>
    </AnimatedSection>
  );
}
