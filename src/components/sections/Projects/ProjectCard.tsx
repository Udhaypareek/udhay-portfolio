import Box from '@mui/material/Box';
import { TechTag } from '../../common/TechTag';
import type { Project } from '../../../data/projects';
import { accentMap, SURFACE, BORDER, TEXT_PRIMARY, TEXT_SECONDARY } from '../../../theme/palette';
import { ExternalLink } from 'lucide-react';

function GithubIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { color } = accentMap[project.accent];

  return (
    <Box
      sx={{
        backgroundColor: SURFACE,
        border: `0.5px solid ${BORDER}`,
        borderRadius: '12px',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 200ms ease',
        '&:hover': {
          backgroundColor: '#161616',
          borderColor: `${color}40`,
          transform: 'scale(1.008)',
        },
      }}
    >
      <Box
        sx={{
          height: '2px',
          background: `linear-gradient(90deg, ${color}, ${color}40)`,
        }}
      />

      <Box sx={{ p: { xs: 5, md: 6 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.6875rem',
            color: color,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            mb: 3,
          }}
        >
          {project.category}
        </Box>

        <Box
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.125rem',
            fontWeight: 600,
            color: TEXT_PRIMARY,
            mb: 2,
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
        </Box>

        <Box
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8125rem',
            color: TEXT_SECONDARY,
            lineHeight: 1.7,
            mb: 5,
            flex: 1,
          }}
        >
          {project.description}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 5 }}>
          {project.stack.map((tech) => (
            <TechTag key={tech} label={tech} accent={project.accent} />
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 3, mt: 'auto' }}>
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
              fontSize: '0.6875rem',
              fontWeight: 500,
              color: color,
              backgroundColor: `${color}15`,
              px: 3,
              py: 2,
              borderRadius: '6px',
              textDecoration: 'none',
              transition: 'all 200ms ease',
              '&:hover': {
                backgroundColor: `${color}25`,
                transform: 'translateY(-1px)',
              },
            }}
          >
            <ExternalLink size={12} />
            Live
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
              fontSize: '0.6875rem',
              fontWeight: 500,
              color: TEXT_SECONDARY,
              border: `0.5px solid ${BORDER}`,
              px: 3,
              py: 2,
              borderRadius: '6px',
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
    </Box>
  );
}
