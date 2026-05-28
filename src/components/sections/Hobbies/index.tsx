import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { hobbies } from '../../../data/hobbies';
import { accentMap, SURFACE, BORDER, TEXT_DIM } from '../../../theme/palette';
import type { LucideIcon } from 'lucide-react';
import {
  Terminal, Brain, Music, Film, MapPin, Palette, Network, GitBranch, Cpu, Activity,
  ChevronLeft, ChevronRight, ScanLine, 
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Terminal, Brain, Music, Film, MapPin, Palette, Network, GitBranch, Cpu, Activity
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
    rotateY: direction < 0 ? 45 : -45,
  }),
};

export default function Hobbies() {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentIndex = ((page % hobbies.length) + hobbies.length) % hobbies.length;
  const hobby = hobbies[currentIndex];
  const { color } = accentMap[hobby.accent];
  const Icon = iconMap[hobby.icon] || Terminal;

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  return (
    <AnimatedSection id="hobbies">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader 
            number="06" 
            title="Beyond Code." 
            accentWord="Code." 
            label="visuals/interests" 
          />
        </AnimatedItem>

        <Box sx={{ position: 'relative', height: { xs: 500, md: 600 }, mt: 8 }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) paginate(1);
                else if (swipe > 10000) paginate(-1);
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                cursor: 'grab',
              }}
            >
              <Box
                onClick={() => paginate(1)}
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: SURFACE,
                  border: `1px solid ${BORDER}`,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.4)`,
                }}
              >
                {/* Background Image with Overlay */}
                <Box
                  component="img"
                  src={hobby.image}
                  alt={hobby.label}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.6,
                    filter: 'grayscale(0.5) contrast(1.1)',
                  }}
                />
                
                {/* Gradient Gradient Vignette */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to top, rgba(13,13,15,0.95) 0%, rgba(13,13,15,0.4) 50%, transparent 100%)`,
                  }}
                />

                {/* Technical HUD Overlays */}
                <Box sx={{ position: 'absolute', inset: 0, p: 4, pointerEvents: 'none' }}>
                  {/* Top Left: Meta Info */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                    <Box sx={{ p: 1, borderRadius: '8px', backgroundColor: `${color}20`, color: color }}>
                      <Icon size={24} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '16px', color: color, fontWeight: 700, fontFamily: "'IBM Plex Mono', monospace" }}>
                        DATA_STREAM://{hobby.id.toUpperCase()}
                      </Typography>
                      {/* <Typography sx={{ fontSize: '12px', color: 'white', fontWeight: 500 }}>
                        MODULE_{String(currentIndex + 1).padStart(2, '0')}
                      </Typography> */}
                    </Box>
                  </Box>

                  {/* Bottom Right: Description */}
                  <Box sx={{ position: 'absolute', bottom: 40, left: 40, right: 40, maxWidth: 600 }}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, color: 'white' }}>
                        {hobby.label}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: '80%' }}>
                        {hobby.subtext}
                      </Typography>
                    </motion.div>
                  </Box>

                  {/* Floating Elements (Decorative) */}
                  <Box sx={{ position: 'absolute', top: 40, right: 40, opacity: 0.3 }}>
                    <ScanLine size={100} strokeWidth={0.5} style={{ color: color }} />
                  </Box>
                </Box>

                {/* Corner Accents */}
                <Box sx={{ position: 'absolute', top: 20, right: 20, display: 'flex', gap: 1 }}>
                   {[1, 2, 3].map(i => (
                     <Box key={i} sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: i === 3 ? color : BORDER }} />
                   ))}
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <Box
            sx={{
              position: 'absolute',
              bottom: -60,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}
          >
            <IconButton 
              onClick={() => paginate(-1)}
              sx={{ color: TEXT_DIM, '&:hover': { color: 'white' } }}
            >
              <ChevronLeft size={24} />
            </IconButton>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {hobbies.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setPage([i, i > currentIndex ? 1 : -1])}
                  sx={{
                    width: i === currentIndex ? 32 : 8,
                    height: 8,
                    borderRadius: '4px',
                    backgroundColor: i === currentIndex ? color : `${BORDER}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': { backgroundColor: i === currentIndex ? color : 'white' }
                  }}
                />
              ))}
            </Box>

            <IconButton 
              onClick={() => paginate(1)}
              sx={{ color: TEXT_DIM, '&:hover': { color: 'white' } }}
            >
              <ChevronRight size={24} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </AnimatedSection>
  );
}
