import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { SURFACE, BORDER, FLAME, TEXT_DIM, AZURE } from '../../../theme/palette';
import { Mail, FileDown, ArrowUpRight } from 'lucide-react';

// Inline SVGs for brand icons
function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const contactMethods = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: '/in/udhaypareek',
    href: 'https://www.linkedin.com/in/udhaypareek/',
    icon: LinkedinIcon,
    color: '#0A66C2',
    status: 'Ready'
  },
  {
    id: 'github',
    label: 'GitHub',
    value: '@Udhaypareek',
    href: 'https://github.com/Udhaypareek',
    icon: GithubIcon,
    color: '#FFFFFF',
    status: 'Online'
  },
  {
    id: 'email',
    label: 'Email',
    value: 'udhaypareek@gmail.com',
    href: 'mailto:udhaypareek@gmail.com',
    icon: Mail,
    color: AZURE,
    status: 'Secured'
  },
  {
    id: 'resume',
    label: 'Resume',
    value: 'Download (v2.4)',
    href: '/Resume.pdf',
    icon: FileDown,
    color: FLAME,
    status: 'v2.4.0'
  },
];

interface FlyingIcon {
  id: string;
  x: number;
  y: number;
  Icon: any;
  color: string;
}

export default function Contact() {
  const [flyingIcons, setFlyingIcons] = useState<FlyingIcon[]>([]);

  const handleLaunch = (e: React.MouseEvent, method: typeof contactMethods[0]) => {
    // Prevent default if it's a real anchor, though we use Box onClick
    e.preventDefault();
    
    const rect = e.currentTarget.getBoundingClientRect();
    const newFlyingIcon: FlyingIcon = {
      id: Math.random().toString(36),
      x: rect.left + rect.width / 2 - 16, // Center the 32px icon
      y: rect.top + rect.height / 2 - 16,
      Icon: method.icon,
      color: method.color
    };

    setFlyingIcons(prev => [...prev, newFlyingIcon]);

    // Redirect after a shorter delay to avoid popup blockers while still showing animation
    if (method.href && method.href !== '#') {
      setTimeout(() => {
        const win = window.open(method.href, '_blank', 'noopener,noreferrer');
        if (win) win.focus();
      }, 1200); // Increased delay for the slower 2.5s animation
    }
  };

  return (
    <AnimatedSection id="contact">
      <Container maxWidth="md" sx={{ py: { xs: 16, md: 24 }, position: 'relative' }}>
        
        {/* The Launch Portal Effect */}
        <AnimatePresence>
          {flyingIcons.map(item => (
            <Box
              key={item.id}
              component={motion.div}
              initial={{ 
                left: item.x, 
                top: item.y, 
                opacity: 1, 
                scale: 1,
                filter: 'blur(0px)'
              }}
              animate={{ 
                top: -500, 
                opacity: [1, 1, 0],
                scale: [1, 3, 6],
                filter: ['blur(0px)', 'blur(4px)', 'blur(30px)'],
              }}
              transition={{ 
                duration: 2.5, 
                ease: [0.16, 1, 0.3, 1]
              }}
              onAnimationComplete={() => {
                setFlyingIcons(prev => prev.filter(p => p.id !== item.id));
              }}
              sx={{
                position: 'fixed',
                zIndex: 10000,
                color: item.color,
                pointerEvents: 'none',
                filter: `drop-shadow(0 0 15px ${item.color})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <item.Icon size={48} />
            </Box>
          ))}
        </AnimatePresence>

        <AnimatedItem>
          <SectionHeader number="09" title="Contact." accentWord="Contact." label="direct/uplink" />
          <Box sx={{ mb: 10, mt: 4 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 900, 
                fontSize: { xs: '3rem', md: '4.5rem' },
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: 'white',
              }}
            >
              Let's build<br/>
              <Box component="span" sx={{ 
                color: AZURE,
                background: `linear-gradient(90deg, ${AZURE}, ${FLAME})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>something epic.</Box>
            </Typography>
          </Box>
        </AnimatedItem>

        <Box sx={{ position: 'relative', py: 4 }}>
          {/* Central Beam Connector */}
          <Box 
            sx={{ 
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: `linear-gradient(to bottom, transparent, ${AZURE}40, ${FLAME}40, transparent)`,
              display: { xs: 'none', md: 'block' },
              transform: 'translateX(-50%)',
              zIndex: 0,
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '0',
                left: '50%',
                height: '100%',
                width: '10px',
                background: `linear-gradient(to bottom, transparent, ${AZURE}20, ${FLAME}20, transparent)`,
                filter: 'blur(8px)',
                transform: 'translateX(-50%)',
              }
            }}
          />

          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
            gap: { xs: 4, md: 12 },
            position: 'relative',
            zIndex: 1
          }}>
            {contactMethods.map((method, idx) => (
              <AnimatedItem key={method.id} delay={idx * 0.1}>
                <Box
                  onClick={(e) => handleLaunch(e, method)}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'flex-start', md: idx % 2 === 0 ? 'flex-end' : 'flex-start' },
                    textAlign: { xs: 'left', md: idx % 2 === 0 ? 'right' : 'left' },
                    p: { xs: 3, md: 4 },
                    cursor: 'pointer',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor: 'rgba(255,255,255,0.01)',
                    border: `1px solid ${BORDER}`,
                    borderRadius: '24px',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      borderColor: method.color,
                      '& .method-icon-container': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: method.color,
                        boxShadow: `0 0 30px ${method.color}40`,
                        borderColor: method.color,
                      },
                      '& .connector-dot': {
                        backgroundColor: method.color,
                        boxShadow: `0 0 15px ${method.color}`,
                        scale: 1.5
                      },
                      '& .launch-arrow': {
                        opacity: 1,
                        color: method.color,
                        transform: 'translate(2px, -2px)'
                      }
                    }
                  }}
                >
                  {/* Energy Connector Dot (Hidden on mobile) */}
                  <Box 
                    className="connector-dot"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      [idx % 2 === 0 ? 'right' : 'left']: { md: -66 },
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: BORDER,
                      display: { xs: 'none', md: 'block' },
                      transform: 'translateY(-50%)',
                      transition: 'all 0.3s ease',
                      zIndex: 2
                    }}
                  />

                  <Box 
                    className="method-icon-container"
                    sx={{ 
                      width: 50, 
                      height: 50, 
                      borderRadius: '14px', 
                      border: `1px solid ${BORDER}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: TEXT_DIM,
                      transition: 'all 0.4s ease',
                      backgroundColor: SURFACE,
                      mb: 1.5
                    }}
                  >
                    <method.icon size={22} />
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1, 
                    width: '100%',
                    justifyContent: { xs: 'space-between', md: 'inherit' }
                  }}>
                    <Typography 
                      sx={{ 
                        color: 'white', 
                        fontWeight: 800, 
                        fontSize: '1.4rem',
                        lineHeight: 1.2
                      }}
                    >
                      {method.label}
                    </Typography>
                    <ArrowUpRight 
                      className="launch-arrow"
                      size={20} 
                      style={{ 
                        opacity: 0.2, 
                        transition: 'all 0.3s ease' 
                      }} 
                    />
                  </Box>

                  <Typography 
                    sx={{ 
                      color: TEXT_DIM, 
                      fontSize: '0.85rem', 
                      fontFamily: "'IBM Plex Mono', monospace",
                      opacity: 0.6,
                      mt: 0.5
                    }}
                  >
                    {method.value}
                  </Typography>
                </Box>
              </AnimatedItem>
            ))}
          </Box>
        </Box>

        {/* Floating background elements for "Space" feel */}
        <Box 
          component={motion.div}
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            width: 400,
            height: 400,
            background: `radial-gradient(circle, ${AZURE}20 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(50px)',
            zIndex: -1
          }}
        />
        <Box 
          component={motion.div}
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '5%',
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${FLAME}15 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(40px)',
            zIndex: -1
          }}
        />
      </Container>
    </AnimatedSection>
  );
}

