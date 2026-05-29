import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing Kernel...');

  const modules = [
    'Loading Compositor...',
    'Mounting Modules...',
    'Restoring Workspace...',
    'Launching System...',
  ];

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const p = (currentStep / steps) * 100;
      setProgress(p);

      if (p > 25 && p < 50) setStatus(modules[0]);
      if (p >= 50 && p < 75) setStatus(modules[1]);
      if (p >= 75 && p < 95) setStatus(modules[2]);
      if (p >= 95) setStatus(modules[3]);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0D0D0F',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(255,109,46,0.05) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'pulseGlow 4s infinite alternate ease-in-out',
          '@keyframes pulseGlow': {
            '0%': { transform: 'scale(1)', opacity: 0.5 },
            '100%': { transform: 'scale(1.5)', opacity: 0.8 },
          },
        }}
      />

      {/* Center Logo Area */}
      <Box sx={{ position: 'relative', mb: 8 }}>
        {/* Orbits */}
        <Box
          component={motion.div}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          sx={{
            position: 'absolute',
            inset: -40,
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '50%',
          }}
        />
        <Box
          component={motion.div}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          sx={{
            position: 'absolute',
            inset: -60,
            border: '1px dashed rgba(255,109,46,0.1)',
            borderRadius: '50%',
          }}
        />

        {/* The Core Logo */}
        <Box
          sx={{
            width: 100,
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 700,
              color: '#FF6D2E',
              textShadow: '0 0 20px rgba(255,109,46,0.5)',
              zIndex: 2,
            }}
          >
            U
          </Typography>
          {/* Internal Pulse */}
          <Box
            component={motion.div}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(255,109,46,0.1)',
              borderRadius: '24px',
              border: '2px solid rgba(255,109,46,0.3)',
              transform: 'rotate(45deg)',
            }}
          />
        </Box>
      </Box>

      {/* Progress Bar Area */}
      <Box sx={{ width: '280px', position: 'relative' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.4)',
            mb: 1.5,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          <Box>{status}</Box>
          <Box>{Math.round(progress)}%</Box>
        </Box>

        {/* Custom Rice-inspired Progress Bar */}
        <Box
          sx={{
            height: 6,
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderRadius: 1,
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <Box
            component={motion.div}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            sx={{
              height: '100%',
              background: 'linear-gradient(90deg, #FF6D2E, #FF9E6A)',
              boxShadow: '0 0 10px rgba(255,109,46,0.5)',
            }}
          />
        </Box>
        
        {/* Modules status below */}
        <Box
          sx={{
            mt: 3,
            display: 'flex',
            gap: 1,
            justifyContent: 'center',
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <Box
              key={i}
              sx={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                backgroundColor: progress > (i + 1) * 20 ? '#FF6D2E' : 'rgba(255,255,255,0.1)',
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Boot footer info */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.6rem',
          color: 'rgba(255,255,255,0.2)',
          textAlign: 'center',
          letterSpacing: '0.2em',
        }}
      >
        LOADER v4.2.0
      </Box>
    </Box>
  );
}
