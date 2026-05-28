import {  useState } from 'react';
import { Box, Fab, useScrollTrigger } from '@mui/material';
import { TiArrowUpThick } from 'react-icons/ti';
import { motion, AnimatePresence } from 'framer-motion';

const SURFACE = '#0D0D0F';
const AZURE = '#3B82F6';

export const ScrollToTop = () => {
  const [hovered, setHovered] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  });

  const handleClick = () => {
    // If Lenis is being used globally, window.scrollTo might be intercepted or need to be handled.
    // However, native scrollTo usually works if Lenis is configured correctly.
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {trigger && (
        <Box
            onClick={handleClick}
          component={motion.div}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          sx={{
            position: 'fixed',
            bottom: { xs: 90, md: 40 }, // Higher on mobile to clear the navbar
            right: { xs: 20, md: 40 },
            zIndex: 1000,
          }}
        >
          <Fab
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
              backgroundColor: SURFACE,
              color: 'white',
              border: `1px solid rgba(59, 130, 246, 0.3)`,
              width: { xs: 45, md: 56 },
              height: { xs: 45, md: 56 },
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              '&:hover': {
                backgroundColor: SURFACE,
                borderColor: AZURE,
                boxShadow: `0 0 20px ${AZURE}40`,
                transform: 'translateY(-5px)',
              },
            }}
          >
            <motion.div
              animate={hovered ? { y: -3 } : { y: 0 }}
              transition={{ repeat: Infinity, duration: 0.6, repeatType: 'reverse' }}
              style={{ display: 'flex' }}
            >
              <TiArrowUpThick size={24} />
            </motion.div>
          </Fab>
          
          {/* Subtle ring animation */}
          <Box
            component={motion.div}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            sx={{
              position: 'absolute',
              inset: -5,
              border: `1px solid ${AZURE}`,
              borderRadius: '50%',
              pointerEvents: 'none'
            }}
          />
        </Box>
      )}
    </AnimatePresence>
  );
};
