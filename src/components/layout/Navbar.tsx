import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { motion, LayoutGroup } from 'framer-motion';
import { User, Layers, Briefcase, Folder, Mail, GitGraph, Heart, Home , Activity, Command  } from 'lucide-react';
import { BORDER, SURFACE, FLAME, TEXT_SECONDARY, TEXT_PRIMARY, AZURE, CYAN, VIOLET } from '../../theme/palette';
import { Typography } from '@mui/material';

const navItems = [
  { label: 'Home', href: '#hero', icon: Home, color: TEXT_PRIMARY },
  { label: 'About', href: '#about', icon: User, color: FLAME },
  { label: 'Stack', href: '#techstack', icon: Layers, color: AZURE },
  { label: 'Experience', href: '#experience', icon: Briefcase, color: VIOLET },
  { label: 'Projects', href: '#projects', icon: Folder, color: CYAN },
  { label: 'Hobbies', href: '#hobbies', icon: Heart, color: FLAME },
  { label: 'System Status', href: '#system-status', icon: Activity, color: AZURE },
  { label: 'GitHub', href: '#github-stats', icon: GitGraph, color: TEXT_PRIMARY },
  { label: 'Contact', href: '#contact', icon: Mail, color: AZURE },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -25% 0px', // More generous margin for better detection
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      // Find the most prominent intersecting section
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // If there are multiple, stick with the first one detected to avoid flickering
        setActiveSection(visibleEntries[0].target.id);
      }
    }, observerOptions);

    const checkAndObserve = () => {
      navItems.forEach((item) => {
        const id = item.href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    };

    // Initial check
    checkAndObserve();
    
    // Periodically re-check for lazy-loaded sections
    const interval = setInterval(checkAndObserve, 1500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      // If Lenis is active, window.scrollTo usually handles it if they aren't using scrollIntoView
      // but let's just trigger a click so App.tsx Lenis listener catches it
      const anchor = document.createElement('a');
      anchor.href = href;
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  };

  return (
    <LayoutGroup id="navbar-group">
      <Box
        component={motion.nav}
        initial={{ y: 150, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ 
          type: 'spring', 
          stiffness: 260, 
          damping: 20, 
          delay: 0.1 
        }}
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 32 },
          left: '50%',
          zIndex: 1100,
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 0.5, md: 2 },
          padding: { xs: '6px 8px', md: '12px 20px' },
          backgroundColor: 'rgba(13, 13, 15, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid rgba(255, 255, 255, 0.08)`,
          borderRadius: '100px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
          maxWidth: '95vw',
        }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.slice(1);
          
          return (
            <Tooltip 
              title={item.label} 
              key={item.label} 
              placement="top" 
              arrow
              slotProps={{
                tooltip: {
                  sx: {
                    backgroundColor: SURFACE,
                    color: TEXT_PRIMARY,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    border: `1px solid ${BORDER}`,
                    px: 1.5,
                    py: 0.75,
                    display: { xs: 'none', md: 'block' }
                  }
                },
                arrow: {
                  sx: { color: SURFACE }
                }
              }}
            >
              <Box
                component={motion.a}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                whileHover={{ 
                  scale: isMobile ? 1.1 : 1.3,
                  y: isMobile ? -4 : -8,
                }}
                whileTap={{ scale: 0.9 }}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: { xs: '40px', md: '52px' },
                  height: { xs: '40px', md: '52px' },
                  borderRadius: '50%',
                  color: isActive ? item.color : TEXT_SECONDARY,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: `${item.color} !important`,
                  }
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <Icon 
                    size={isMobile ? (isActive ? 20 : 18) : (isActive ? 24 : 22)} 
                    strokeWidth={isActive ? 2.5 : 2} 
                  />
                </Box>
                
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    style={{
                      position: 'absolute',
                      bottom: isMobile ? 2 : 5,
                      width: isMobile ? '5px' : '6px',
                      height: isMobile ? '5px' : '6px',
                      borderRadius: '50%',
                      backgroundColor: item.color,
                      boxShadow: `0 0 15px ${item.color}, 0 0 5px white`,
                      zIndex: 10,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      mass: 1
                    }}
                  />
                )}
              </Box>
            </Tooltip>
          );
        })}

        {/* Command Palette Trigger Hint */}
        {!isMobile && (
          <>
            <Box sx={{ width: '1px', height: 24, backgroundColor: 'rgba(255,255,255,0.1)', mx: 1 }} />
            <Tooltip title="Fuzzy Search (Ctrl/Cmd + K)" arrow placement="top">
              <Box
                onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 1.5,
                  height: 36,
                  borderRadius: '100px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.4)',
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    color: TEXT_PRIMARY,
                  }
                }}
              >
                <Command size={14} />
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>
                  K
                </Typography>
              </Box>
            </Tooltip>
          </>
        )}
      </Box>
    </LayoutGroup>
  );
}
