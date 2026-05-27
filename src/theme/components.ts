import type { Components, Theme } from '@mui/material/styles';
import { BG, SURFACE, SURFACE_RAISED, BORDER, BORDER_ACTIVE, FLAME, TEXT_PRIMARY, TEXT_SECONDARY } from './palette';

export const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        backgroundColor: BG,
        color: TEXT_PRIMARY,
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: BG,
        },
        '&::-webkit-scrollbar-thumb': {
          background: BORDER_ACTIVE,
          borderRadius: '3px',
        },
      },
      '::selection': {
        backgroundColor: `${FLAME}33`,
        color: TEXT_PRIMARY,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        backgroundColor: SURFACE,
        border: `0.5px solid ${BORDER}`,
        borderRadius: '10px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        backgroundColor: SURFACE,
        border: `0.5px solid ${BORDER}`,
        borderRadius: '12px',
        transition: 'background-color 200ms ease-out, border-color 200ms ease-out, transform 200ms ease-out',
        '&:hover': {
          backgroundColor: '#161616',
          borderColor: BORDER_ACTIVE,
          transform: 'scale(1.008)',
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.8125rem',
        fontWeight: 500,
        textTransform: 'none',
        borderRadius: '8px',
        padding: '10px 24px',
        letterSpacing: '0.02em',
        transition: 'all 200ms ease-out',
      },
      contained: {
        backgroundColor: FLAME,
        color: '#FFFFFF',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#E5612A',
          boxShadow: `0 0 24px ${FLAME}30`,
        },
      },
      outlined: {
        borderColor: BORDER_ACTIVE,
        color: TEXT_SECONDARY,
        '&:hover': {
          borderColor: TEXT_SECONDARY,
          backgroundColor: `${SURFACE_RAISED}80`,
          color: TEXT_PRIMARY,
        },
      },
      text: {
        color: TEXT_SECONDARY,
        '&:hover': {
          backgroundColor: `${SURFACE_RAISED}80`,
          color: TEXT_PRIMARY,
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '0.6875rem',
        fontWeight: 500,
        letterSpacing: '0.04em',
        borderRadius: '6px',
        height: '28px',
        border: 'none',
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: '1200px !important',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: BORDER,
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        color: TEXT_SECONDARY,
        textDecoration: 'none',
        transition: 'color 200ms ease',
        '&:hover': {
          color: FLAME,
        },
      },
    },
  },
};
