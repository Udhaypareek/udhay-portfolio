import React, { useState, useEffect, useCallback } from 'react';
import { Box, Modal, InputBase, Typography, List, ListItemButton, Divider, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight } from 'lucide-react';
import { SURFACE, BORDER, TEXT_PRIMARY, TEXT_SECONDARY, FLAME, AZURE, CYAN, VIOLET } from '../../theme/palette';
import { Home, User, Layers, Briefcase, Folder, Mail, GitGraph, Heart, Activity } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero', icon: Home, color: TEXT_PRIMARY, desc: 'Jump to the welcome screen' },
  { label: 'About', href: '#about', icon: User, color: FLAME, desc: 'Learn about my journey' },
  { label: 'Stack', href: '#techstack', icon: Layers, color: AZURE, desc: 'Technologies I use' },
  { label: 'Experience', href: '#experience', icon: Briefcase, color: VIOLET, desc: 'Career timeline' },
  { label: 'Projects', href: '#projects', icon: Folder, color: CYAN, desc: 'View my work' },
  { label: 'Hobbies', href: '#hobbies', icon: Heart, color: FLAME, desc: 'What I do in free time' },
  { label: 'System Status', href: '#system-status', icon: Activity, color: AZURE, desc: 'Monitoring metrics' },
  { label: 'GitHub', href: '#github-stats', icon: GitGraph, color: TEXT_PRIMARY, desc: 'Code activity' },
  { label: 'Contact', href: '#contact', icon: Mail, color: AZURE, desc: 'Get in touch' },
];

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredItems = navItems.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleClose = () => {
    setIsOpen(false);
    setSearch('');
    setSelectedIndex(0);
  };

  const navigateTo = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }

      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % filteredItems.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredItems[selectedIndex]) {
            navigateTo(filteredItems[selectedIndex].href);
          }
        } else if (e.key === 'Escape') {
          handleClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={handleClose}
          closeAfterTransition
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            pt: { xs: 8, md: 16 },
            px: 2,
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            sx={{
              width: '100%',
              maxWidth: 600,
              backgroundColor: SURFACE,
              border: `1px solid ${BORDER}`,
              borderRadius: 2,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              outline: 'none',
            }}
          >
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, borderBottom: `1px solid ${BORDER}` }}>
              <Search size={20} color={TEXT_SECONDARY} />
              <InputBase
                autoFocus
                fullWidth
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                sx={{
                  color: TEXT_PRIMARY,
                  fontSize: '1.1rem',
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              />
              <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', opacity: 0.5 }}>
                <Typography variant="caption" sx={{ color: TEXT_SECONDARY, border: `1px solid ${BORDER}`, px: 0.5, borderRadius: 0.5 }}>ESC</Typography>
              </Box>
            </Box>

            <List sx={{ maxHeight: 400, overflowY: 'auto', p: 1 }}>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <ListItemButton
                    key={item.href}
                    onClick={() => navigateTo(item.href)}
                    selected={selectedIndex === index}
                    sx={{
                      borderRadius: 1,
                      mb: 0.5,
                      gap: 2,
                      transition: 'all 0.2s',
                      borderLeft: `3px solid ${selectedIndex === index ? item.color : 'transparent'}`,
                      backgroundColor: selectedIndex === index ? 'rgba(255,255,255,0.03)' : 'transparent',
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.08)',
                        }
                      }
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        borderRadius: 1,
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <item.icon size={18} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          color: TEXT_PRIMARY,
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          fontFamily: 'JetBrains Mono, monospace'
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: TEXT_SECONDARY,
                          fontSize: '0.75rem'
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                    {selectedIndex === index && (
                      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                        <ArrowRight size={16} color={item.color} />
                      </motion.div>
                    )}
                  </ListItemButton>
                ))
              ) : (
                <Box sx={{ p: 4, textAlign: 'center' }}>
                  <Typography sx={{ color: TEXT_SECONDARY, fontFamily: 'JetBrains Mono, monospace' }}>
                    No results found for "{search}"
                  </Typography>
                </Box>
              )}
            </List>

            <Box
              sx={{
                p: 1.5,
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderTop: `1px solid ${BORDER}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Typography variant="caption" sx={{ color: TEXT_SECONDARY, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box component="span" sx={{ border: `1px solid ${BORDER}`, px: 0.6, py: 0.1, borderRadius: 0.5, fontSize: '0.65rem' }}>ENTER</Box> to select
                </Typography>
                <Typography variant="caption" sx={{ color: TEXT_SECONDARY, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box component="span" sx={{ border: `1px solid ${BORDER}`, px: 0.6, py: 0.1, borderRadius: 0.5, fontSize: '0.65rem' }}>↑↓</Box> to navigate
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: TEXT_SECONDARY, fontStyle: 'italic', opacity: 0.7 }}>
                Linux-Rofi Mode v1.0
              </Typography>
            </Box>
          </Box>
        </Modal>
      )}
    </AnimatePresence>
  );
};
