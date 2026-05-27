import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Menu, X, Terminal } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { BORDER, FLAME, TEXT_SECONDARY, TEXT_PRIMARY, SURFACE } from '../../theme/palette';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#techstack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Status', href: '#system-status' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { scrolled } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? `rgba(10, 10, 10, 0.85)` : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `0.5px solid ${BORDER}` : '0.5px solid transparent',
          transition: 'all 300ms ease',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: '1200px',
            width: '100%',
            mx: 'auto',
            px: { xs: 4, md: 6 },
            py: 2,
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Terminal size={18} color={FLAME} />
            <Box
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: TEXT_PRIMARY,
                letterSpacing: '0.02em',
              }}
            >
              {'>'}_
            </Box>
          </Box>

          {/* Desktop nav */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: activeSection === item.href.slice(1) ? FLAME : TEXT_SECONDARY,
                  letterSpacing: '0.04em',
                  px: 3,
                  py: 2,
                  cursor: 'pointer',
                  transition: 'color 200ms ease',
                  position: 'relative',
                  '&:hover': {
                    color: TEXT_PRIMARY,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: activeSection === item.href.slice(1) ? '16px' : '0px',
                    height: '2px',
                    backgroundColor: FLAME,
                    borderRadius: '1px',
                    transition: 'width 200ms ease',
                  },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{
              display: { md: 'none' },
              color: TEXT_PRIMARY,
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { md: 'none' },
          '& .MuiDrawer-paper': {
            width: '260px',
            backgroundColor: SURFACE,
            borderLeft: `0.5px solid ${BORDER}`,
            pt: 16,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItemButton
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              sx={{
                py: 3,
                px: 6,
                '&:hover': {
                  backgroundColor: `${FLAME}10`,
                },
              }}
            >
              <Box
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.8125rem',
                  color: activeSection === item.href.slice(1) ? FLAME : TEXT_SECONDARY,
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                }}
              >
                {item.label}
              </Box>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
