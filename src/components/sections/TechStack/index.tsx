import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { SURFACE, BORDER, TEXT_SECONDARY, TEXT_DIM, TEXT_PRIMARY, FLAME, AZURE, VIOLET, CYAN, EMERALD } from '../../../theme/palette';
import {  ChevronRight, Layout, Database, Cpu, Wrench, Sparkles } from 'lucide-react';
import { 
  SiReact, SiTypescript, SiNodedotjs, SiExpress, 
  SiMongodb, SiRedis, SiDocker, SiGit, SiLinux, 
  SiPostman, SiVscodium, SiGooglegemini, SiTailwindcss, SiJavascript,
  SiFramer, SiMui, SiThreedotjs, SiSocketdotio
} from 'react-icons/si';

const allTechLabels = ['Frontend', 'Backend', 'Database', 'AI', 'Tools'] as const;
type CategoryType = typeof allTechLabels[number];

const categoryIcons: Record<CategoryType, any> = {
  'Frontend': Layout,
  'Backend': Cpu,
  'Database': Database,
  'AI': Sparkles,
  'Tools': Wrench,
};

const categoryColors: Record<CategoryType, string> = {
  'Frontend': AZURE,
  'Backend': VIOLET,
  'Database': EMERALD,
  'AI': FLAME,
  'Tools': CYAN,
};

const allTech = [
  { name: 'React', icon: SiReact, color: '#61DAFB', size: 1, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', size: 2, category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', size: 2, category: 'Backend' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', size: 1, category: 'Frontend' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF', size: 1, category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', size: 2, category: 'Database' },
  { name: 'Redis', icon: SiRedis, color: '#FF4438', size: 1, category: 'Database' },
  { name: 'Gemini', icon: SiGooglegemini, color: '#412991', size: 1, category: 'AI' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', size: 1, category: 'Tools' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624', size: 2, category: 'Tools' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#FFFFFF', size: 1, category: 'Frontend' },
  { name: 'Framer', icon: SiFramer, color: '#0055FF', size: 1, category: 'Frontend' },
  { name: 'Material UI', icon: SiMui, color: '#007FFF', size: 1, category: 'Frontend' },
  { name: 'Git', icon: SiGit, color: '#F05032', size: 1, category: 'Tools' },
  { name: 'VS Code', icon: SiVscodium, color: '#007ACC', size: 1, category: 'Tools' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', size: 1, category: 'Tools' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', size: 1, category: 'Frontend' },
  { name: 'Socket.Io', icon: SiSocketdotio, color: '#58f71e', size: 1, category: 'Frontend' },
];

function TechCard({ tech, index, isHighlighted }: { tech: typeof allTech[0], index: number, isHighlighted: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 100 }}
      style={{
        gridColumn: { xs: 'span 1', sm: tech.size === 2 ? 'span 2' : 'span 1' } as any,
      }}
    >
      <Box
        component={motion.div}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX: isHighlighted ? 0 : rotateX, 
          rotateY: isHighlighted ? 0 : rotateY, 
          transformStyle: 'preserve-3d' 
        }}
        whileHover={{ scale: 1.02 }}
        animate={isHighlighted ? {
          scale: 1.05,
          borderColor: `${tech.color}80`,
          boxShadow: `0 0 30px ${tech.color}30`,
        } : { 
          scale: 1,
          borderColor: BORDER,
          boxShadow: 'none'
        }}
        sx={{
          position: 'relative',
          height: { xs: 100, md: 140 },
          backgroundColor: SURFACE,
          border: `1px solid`,
          borderRadius: { xs: '12px', md: '20px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 1, md: 2 },
          cursor: 'none',
          overflow: 'hidden',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            borderColor: `${tech.color}40`,
            '& .glow': { opacity: 0.6 },
            '& .tech-name': { opacity: 1, y: 0 },
            '& .tech-icon': { scale: 1.1, color: tech.color },
          }
        }}
      >
        {/* Dynamic Glow */}
        <Box 
          className="glow"
          sx={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`,
            opacity: isHighlighted ? 0.6 : 0,
            transition: 'opacity 0.5s ease',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <Box
          className="tech-icon"
          sx={{
            zIndex: 1,
            color: isHighlighted ? tech.color : TEXT_DIM,
            scale: isHighlighted ? 1.1 : 1,
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            fontSize: '2.5rem',
            display: 'flex',
          }}
        >
          <Icon />
        </Box>

        <Typography
          className="tech-name"
          sx={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.65rem',
            fontWeight: 600,
            color: TEXT_SECONDARY,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            opacity: isHighlighted ? 1 : 0.5,
            y: isHighlighted ? 0 : 5,
            transition: 'all 0.3s ease',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          {tech.name}
        </Typography>

        {/* Floating background name (artistic) */}
        <Typography
          sx={{
            position: 'absolute',
            bottom: -10,
            right: -10,
            fontSize: '3rem',
            fontWeight: 900,
            color: 'white',
            opacity: isHighlighted ? 0.05 : 0.02,
            pointerEvents: 'none',
            lineHeight: 1,
            zIndex: 0,
            fontFamily: "'Inter', sans-serif",
            display: { xs: 'none', md: 'block' } // Removed name tanks on mobile
          }}
        >
          {tech.name}
        </Typography>
      </Box>
    </motion.div>
  );
}

export default function TechStack() {
  const [highlightedCategory, setHighlightedCategory] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>('Frontend');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (highlightedCategory) {
      const timer = setTimeout(() => {
        setHighlightedCategory(null);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [highlightedCategory]);

  const DesktopView = () => (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { 
            sm: 'repeat(3, 1fr)', 
            md: 'repeat(5, 1fr)',
            lg: 'repeat(6, 1fr)' 
          },
          gap: 3,
          perspective: '2000px',
        }}
      >
        {allTech.map((tech, index) => (
          <TechCard 
            key={tech.name} 
            tech={tech} 
            index={index} 
            isHighlighted={highlightedCategory === tech.category}
          />
        ))}
      </Box>

      {/* Clickable Filter Strip */}
      <Box
        sx={{
          mt: 12,
          p: 4,
          borderRadius: '16px',
          backgroundColor: 'rgba(255,255,255,0.02)',
          border: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          flexWrap: 'wrap'
        }}
      >
        {allTechLabels.map((cat) => {
          const isActive = highlightedCategory === cat;
          return (
            <Box 
              key={cat} 
              onClick={() => setHighlightedCategory(cat)}
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                cursor: 'pointer',
                px: 3,
                py: 1.5,
                borderRadius: '100px',
                transition: 'all 0.3s ease',
                backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: `1px solid ${isActive ? FLAME : 'transparent'}`,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  '& .cat-dot': { backgroundColor: FLAME, boxShadow: `0 0 10px ${FLAME}` },
                }
              }}
            >
              <Box 
                className="cat-dot"
                sx={{ 
                  width: 6, 
                  height: 6, 
                  borderRadius: '50%', 
                  backgroundColor: isActive ? FLAME : TEXT_DIM,
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? `0 0 10px ${FLAME}` : 'none'
                }} 
              />
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: isActive ? TEXT_PRIMARY : TEXT_SECONDARY,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                {cat}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );

  const MobileView = () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {allTechLabels.map((cat) => {
        const isOpen = expandedCategory === cat;
        const Icon = categoryIcons[cat];
        const color = categoryColors[cat];
        const techs = allTech.filter(t => t.category === cat);

        return (
          <Box
            key={cat}
            sx={{
              backgroundColor: SURFACE,
              border: `1px solid ${isOpen ? color : BORDER}`,
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
          >
            <Box
              onClick={() => {
                if (navigator.vibrate) navigator.vibrate(10);
                setExpandedCategory(isOpen ? null : cat);
              }}
              sx={{
                p: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: '8px',
                    backgroundColor: `${color}10`,
                    color: color,
                    display: 'flex'
                  }}
                >
                  <Icon size={18} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: isOpen ? TEXT_PRIMARY : TEXT_SECONDARY,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}
                >
                  {cat}
                </Typography>
              </Box>
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                <ChevronRight size={18} color={TEXT_DIM} />
              </motion.div>
            </Box>

            <AnimatePresence initial={false}>
              {isOpen && (
                <Box
                  component={motion.div}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Box
                    sx={{
                      p: 2,
                      pt: 0,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: 2,
                      backgroundColor: 'rgba(0,0,0,0.2)',
                    }}
                  >
                    {techs.map((tech, idx) => (
                      <TechCard key={tech.name} tech={tech} index={idx} isHighlighted={false} />
                    ))}
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
    <AnimatedSection id="techstack">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader number="03" title="Tech Stack" accentWord="& Tools" label="technologies" />
        </AnimatedItem>

        {isMobile ? <MobileView /> : <DesktopView />}
      </Container>
    </AnimatedSection>
  );
}

