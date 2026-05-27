import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { SURFACE, BORDER, FLAME, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM } from '../../../theme/palette';
import { Mail, FileDown } from 'lucide-react';

// Inline SVGs for brand icons (lucide-react doesn't include brand icons)
function LinkedinIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GithubIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const contactMethods = [
  {
    label: 'LinkedIn',
    value: '/in/udhaypareek',
    href: 'https://www.linkedin.com/in/udhaypareek/',
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: '@Udhaypareek',
    href: 'https://github.com/Udhaypareek',
    icon: GithubIcon,
  },
  {
    label: 'Email',
    value: 'udhaypareek@gmail.com',
    href: 'mailto:udhaypareek@gmail.com',
    icon: Mail,
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: '#',
    icon: FileDown,
  },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader number="09" title="Contact." accentWord="Contact." label="connect" />
        </AnimatedItem>

        <AnimatedItem>
          <Box sx={{ mb: 10 }}>
            <Box
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.875rem',
                display: 'flex',
                gap: 2,
                mb: 3,
              }}
            >
              <Box component="span" sx={{ color: FLAME, fontWeight: 600 }}>❯</Box>
              <Box component="span" sx={{ color: TEXT_SECONDARY }}>contact.init()</Box>
            </Box>
            <Box
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 700,
                color: TEXT_PRIMARY,
                letterSpacing: '-0.02em',
                pl: 5,
              }}
            >
              "Let's build something{' '}
              <Box component="span" sx={{ color: FLAME }}>
                intelligent.
              </Box>
              "
            </Box>
          </Box>
        </AnimatedItem>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <AnimatedItem key={method.label}>
                <Box
                  component="a"
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  sx={{
                    display: 'block',
                    backgroundColor: SURFACE,
                    border: `0.5px solid ${BORDER}`,
                    borderRadius: '10px',
                    p: 5,
                    textDecoration: 'none',
                    transition: 'all 200ms ease',
                    cursor: 'pointer',
                    '&:hover': {
                      borderLeft: `2px solid ${FLAME}`,
                      backgroundColor: '#161616',
                      '& .contact-icon': {
                        color: FLAME,
                        transform: 'scale(1.1)',
                      },
                      '& .contact-label': {
                        color: FLAME,
                      },
                    },
                  }}
                >
                  <Box
                    className="contact-icon"
                    sx={{
                      color: TEXT_DIM,
                      transition: 'all 200ms ease',
                      mb: 3,
                    }}
                  >
                    <Icon size={22} />
                  </Box>
                  <Box
                    className="contact-label"
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      color: TEXT_PRIMARY,
                      transition: 'color 200ms ease',
                      mb: 1,
                    }}
                  >
                    {method.label}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.6875rem',
                      color: TEXT_DIM,
                    }}
                  >
                    {method.value}
                  </Box>
                </Box>
              </AnimatedItem>
            );
          })}
        </Box>
      </Container>
    </AnimatedSection>
  );
}
