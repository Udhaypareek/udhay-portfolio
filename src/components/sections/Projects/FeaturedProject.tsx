import Box from '@mui/material/Box';
import { TechTag } from '../../common/TechTag';
import type { Project } from '../../../data/projects';
import { SURFACE, BORDER, FLAME, VIOLET, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM } from '../../../theme/palette';
import { ExternalLink } from 'lucide-react';

// Inline SVG for GitHub icon (lucide-react doesn't have brand icons)
function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <Box
      sx={{
        backgroundColor: SURFACE,
        border: `0.5px solid ${BORDER}`,
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'border-color 200ms ease',
        '&:hover': {
          borderColor: `${FLAME}40`,
        },
      }}
    >
      {/* Top accent gradient bar */}
      <Box
        sx={{
          height: '3px',
          background: `linear-gradient(90deg, ${FLAME}, ${VIOLET})`,
        }}
      />

      <Box sx={{ p: { xs: 5, md: 7 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 6,
          }}
        >
          {/* Left content */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 4 }}>
              <Box
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.6875rem',
                  color: FLAME,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {project.category}
              </Box>
              <Box
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.5625rem',
                  color: FLAME,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  backgroundColor: `${FLAME}15`,
                  px: 2.5,
                  py: 1,
                  borderRadius: '4px',
                  border: `0.5px solid ${FLAME}30`,
                }}
              >
                FEATURED
              </Box>
            </Box>

            <Box
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 700,
                color: TEXT_PRIMARY,
                mb: 3,
                letterSpacing: '-0.01em',
              }}
            >
              {project.title}
            </Box>

            <Box
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                color: TEXT_SECONDARY,
                lineHeight: 1.7,
                mb: 5,
                maxWidth: '520px',
              }}
            >
              {project.description}
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 5 }}>
              {project.stack.map((tech) => (
                <TechTag key={tech} label={tech} accent={project.accent} />
              ))}
            </Box>

            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box
                component="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  backgroundColor: FLAME,
                  px: 4,
                  py: 2.5,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: `0 0 24px ${FLAME}30`,
                  },
                }}
              >
                <ExternalLink size={13} />
                Live Demo
              </Box>
              <Box
                component="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: TEXT_SECONDARY,
                  border: `0.5px solid ${BORDER}`,
                  px: 4,
                  py: 2.5,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 200ms ease',
                  '&:hover': {
                    borderColor: TEXT_SECONDARY,
                    color: TEXT_PRIMARY,
                  },
                }}
              >
                <GithubIcon />
                GitHub
              </Box>
            </Box>
          </Box>

          {/* Right — metrics */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              gap: 3,
              justifyContent: { xs: 'flex-start', md: 'flex-start' },
              mt: { xs: 0, md: 6 },
            }}
          >
            {project.metrics?.map((metric) => (
              <Box
                key={metric.label}
                sx={{
                  border: `0.5px solid ${BORDER}`,
                  borderRadius: '10px',
                  px: 5,
                  py: 4,
                  textAlign: 'center',
                  minWidth: '120px',
                }}
              >
                <Box
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.5625rem',
                    color: TEXT_DIM,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    mb: 2,
                  }}
                >
                  {metric.label}
                </Box>
                <Box
                  sx={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: FLAME,
                  }}
                >
                  {metric.value}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
