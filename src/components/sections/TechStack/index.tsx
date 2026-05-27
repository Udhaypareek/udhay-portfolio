import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { techStack } from '../../../data/techStack';
import { accentMap } from '../../../theme/palette';
import { TEXT_PRIMARY, TEXT_DIM } from '../../../theme/palette';
import type { LucideIcon } from 'lucide-react';
import {
  Code2, FileType, Layers, Globe, Palette, Component,
  Server, Route, Database, HardDrive, ArrowLeftRight, Radio,
  Sparkles, Brain, Workflow, GitBranch, RefreshCw,
  Terminal, Box as BoxIcon, Code, Send, Triangle
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code2, FileType, Layers, Globe, Palette, Component,
  Server, Route, Database, HardDrive, ArrowLeftRight, Radio,
  Sparkles, Brain, Workflow, GitBranch, RefreshCw,
  Terminal, Box: BoxIcon, Code, Send, Triangle,
};

export default function TechStack() {
  return (
    <AnimatedSection id="techstack">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader number="03" title="Tech Stack." accentWord="Stack." label="technologies" />
        </AnimatedItem>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 6,
          }}
        >
          {techStack.map((category) => {
            const { color } = accentMap[category.accent];
            return (
              <AnimatedItem key={category.title}>
                <Box>
                  <Box
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      color: color,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      mb: 5,
                      pb: 3,
                      borderBottom: `0.5px solid rgba(${color === '#3B82F6' ? '59,130,246' : color === '#10B981' ? '16,185,129' : color === '#8B5CF6' ? '139,92,246' : '6,182,212'}, 0.2)`,
                    }}
                  >
                    {category.title}
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {category.items.map((item) => {
                      const Icon = iconMap[item.icon] || Code2;
                      return (
                        <Box
                          key={item.name}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            py: 2.5,
                            px: 3,
                            borderRadius: '6px',
                            transition: 'all 200ms ease',
                            cursor: 'default',
                            '&:hover': {
                              backgroundColor: 'rgba(17,17,17,0.8)',
                              '& .tech-icon': {
                                color: color,
                                transform: 'scale(1.1)',
                              },
                              boxShadow: `0 0 20px ${color}15`,
                            },
                          }}
                        >
                          <Box
                            className="tech-icon"
                            sx={{
                              color: TEXT_DIM,
                              transition: 'all 200ms ease',
                              flexShrink: 0,
                            }}
                          >
                            <Icon size={16} />
                          </Box>
                          <Box
                            sx={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '0.8125rem',
                              color: TEXT_PRIMARY,
                              fontWeight: 400,
                            }}
                          >
                            {item.name}
                          </Box>
                        </Box>
                      );
                    })}
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
