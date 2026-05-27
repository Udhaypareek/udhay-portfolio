import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { hobbies } from '../../../data/hobbies';
import { accentMap, SURFACE, BORDER, TEXT_SECONDARY, TEXT_DIM } from '../../../theme/palette';
import type { LucideIcon } from 'lucide-react';
import {
  Terminal, Brain, Music, Film, MapPin, Palette, Network, GitBranch, Cpu, Activity
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Terminal, Brain, Music, Film, MapPin, Palette, Network, GitBranch, Cpu, Activity
};

export default function Hobbies() {
  return (
    <AnimatedSection id="hobbies">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader number="06" title="Beyond Code." accentWord="Code." label="hobbies" />
        </AnimatedItem>

        <Box 
          sx={{ 
            backgroundColor: '#0D0D0F',
            border: `1px solid ${BORDER}`,
            borderRadius: '12px',
            overflow: 'hidden',
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          {/* Linux Terminal Header */}
          <Box
            sx={{
              px: 3,
              py: 1.5,
              backgroundColor: '#1A1A1E',
              borderBottom: `1px solid ${BORDER}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F56' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27C93F' }} />
            </Box>
            <Typography sx={{ fontSize: '0.65rem', color: TEXT_DIM, fontWeight: 500 }}>
              bash — htop — 80x24
            </Typography>
            <Box sx={{ width: 30 }} />
          </Box>

          {/* Process List Content */}
          <Box sx={{ p: 4 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '40px 140px 1fr 100px 80px',
                gap: 2,
                pb: 2,
                borderBottom: `1px solid ${BORDER}`,
                mb: 2,
              }}
            >
              {['PID', 'USER', 'COMMAND', 'STATUS', 'MEM%'].map((head) => (
                <Typography key={head} sx={{ fontSize: '0.7rem', color: TEXT_DIM, fontWeight: 700 }}>
                  {head}
                </Typography>
              ))}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {hobbies.map((hobby, index) => {
                const { color } = accentMap[hobby.accent];
                const Icon = iconMap[hobby.icon] || Terminal;
                const pid = 1000 + index * 42;

                return (
                  <Box
                    key={hobby.id}
                    component={motion.div}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '40px 140px 1fr 100px 80px',
                      gap: 2,
                      py: 1.5,
                      px: 2,
                      borderRadius: '4px',
                      alignItems: 'center',
                      transition: 'all 0.2s ease',
                      borderLeft: '2px solid transparent',
                      '&:hover': {
                        borderLeft: `2px solid ${color}`,
                      }
                    }}
                  >
                    <Typography sx={{ fontSize: '0.75rem', color: TEXT_DIM }}>{pid}</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: color, fontWeight: 600 }}>guest@portfolio</Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ color: color, display: 'flex' }}>
                        <Icon size={14} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '0.8rem', color: TEXT_SECONDARY, fontWeight: 600 }}>
                          {hobby.label}
                        </Typography>
                        <Typography sx={{ fontSize: '0.65rem', color: TEXT_DIM }}>
                          {hobby.subtext}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          width: 8, 
                          height: 8, 
                          borderRadius: '50%', 
                          backgroundColor: color,
                          boxShadow: `0 0 8px ${color}80`
                        }} 
                      />
                      <Typography sx={{ fontSize: '0.7rem', color: TEXT_DIM }}>RUNNING</Typography>
                    </Box>

                    <Typography sx={{ fontSize: '0.75rem', color: TEXT_DIM }}>0.{index + 4}%</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Terminal Footer */}
          <Box
            sx={{
              p: 2,
              backgroundColor: '#1A1A1E',
              borderTop: `1px solid ${BORDER}`,
              display: 'flex',
              gap: 3,
              overflowX: 'auto'
            }}
          >
            {['F1 Help', 'F2 Setup', 'F3 Search', 'F4 Filter', 'F5 Tree', 'F6 SortBy', 'F10 Quit'].map((btn) => (
              <Typography 
                key={btn} 
                sx={{ 
                  fontSize: '0.65rem', 
                  color: TEXT_DIM,
                  whiteSpace: 'nowrap',
                  '& span': { color: '#27C93F', fontWeight: 700, mr: 0.5 }
                }}
              >
                <span>{btn.split(' ')[0]}</span>{btn.split(' ')[1]}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </AnimatedSection>
  );
}
