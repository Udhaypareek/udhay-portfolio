import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Command } from 'lucide-react';
import { BORDER, SURFACE, TEXT_PRIMARY, TEXT_SECONDARY } from '../../theme/palette';

export const HintToast = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 2 seconds, hide after 7 seconds (5s total visibility)
    const showTimer = setTimeout(() => setIsVisible(true), 2500);
    const hideTimer = setTimeout(() => setIsVisible(false), 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          sx={{
            position: 'fixed',
            bottom: { xs: 80, md: 32 }, // Above mobile navbar
            right: { xs: 16, md: 32 },
            zIndex: 2000,
            display: { xs: 'none', md: 'flex' }, // Mostly for desktop command palette
            alignItems: 'center',
            gap: 1.5,
            p: 1.5,
            px: 2,
            backgroundColor: `${SURFACE}90`,
            backdropFilter: 'blur(10px)',
            border: `1px solid ${BORDER}`,
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            pointerEvents: 'none',
          }}
        >
          <Box sx={{ color: TEXT_PRIMARY, opacity: 0.8 }}>
            <Command size={18} />
          </Box>
          <Box>
            <Typography sx={{ color: TEXT_PRIMARY, fontSize: '0.8rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>
              PRO TIP
            </Typography>
            <Typography variant="caption" sx={{ color: TEXT_SECONDARY, fontSize: '0.7rem' }}>
              Press <Box component="span" sx={{ border: `1px solid ${BORDER}`, px: 0.6, py: 0.1, borderRadius: 0.5 }}>Ctrl + K</Box> to search anything
            </Typography>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
};
