import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion';
import { User, Layers, Briefcase, Folder, Activity, Mail } from 'lucide-react';
import { BORDER, SURFACE, FLAME, TEXT_SECONDARY, TEXT_PRIMARY, AZURE, CYAN, EMERALD, VIOLET } from '../../theme/palette';

const navItems = [
  { label: 'About', href: '#about', icon: User, color: FLAME },
  { label: 'Stack', href: '#techstack', icon: Layers, color: AZURE },
  { label: 'Experience', href: '#experience', icon: Briefcase, color: VIOLET },
  { label: 'Projects', href: '#projects', icon: Folder, color: CYAN },
  { label: 'Status', href: '#system-status', icon: Activity, color: EMERALD },
  { label: 'Contact', href: '#contact', icon: Mail, color: FLAME },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the overlapping sections and set active to the most visible one
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by visibility ratio and pick the highest
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: '-10% 0px -40% 0px' }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
        gap: { xs: 1, md: 2 },
        padding: { xs: '8px 12px', md: '12px 20px' },
        backgroundColor: 'rgba(15, 15, 15, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid rgba(255, 255, 255, 0.08)`,
        borderRadius: '100px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
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
                scale: 1.4, 
                y: -12,
                transition: { type: 'spring', stiffness: 400, damping: 15 }
              }}
              whileTap={{ scale: 0.9 }}
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '44px', md: '52px' },
                height: { xs: '44px', md: '52px' },
                borderRadius: '50%',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                color: isActive ? item.color : TEXT_SECONDARY,
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: `${item.color} !important`,
                  boxShadow: `0 10px 20px -10px ${item.color}`,
                }
              }}
            >
              <Icon 
                size={22} 
                strokeWidth={isActive ? 2.5 : 2} 
              />
              
              {isActive && (
                <Box
                  component={motion.div}
                  layoutId="activeNavIndicator"
                  sx={{
                    position: 'absolute',
                    bottom: { xs: 4, md: 6 },
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    boxShadow: `0 0 8px ${item.color}`,
                  }}
                />
              )}
            </Box>
          </Tooltip>
        );
      })}
    </Box>
  );
}
