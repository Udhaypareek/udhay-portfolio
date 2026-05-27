import type { TypographyVariantsOptions } from '@mui/material/styles';
import { TEXT_PRIMARY, TEXT_SECONDARY } from './palette';

export const typography: TypographyVariantsOptions = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  // Display — hero name
  h1: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '3.25rem', // 52px
    fontWeight: 700,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
    color: TEXT_PRIMARY,
  },
  // Section headings
  h2: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '2rem', // 32px
    fontWeight: 700,
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
    color: TEXT_PRIMARY,
  },
  // Sub-headings
  h3: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1.375rem', // 22px
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1.3,
    color: TEXT_PRIMARY,
  },
  // Card titles
  h4: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1.125rem', // 18px
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1.4,
    color: TEXT_PRIMARY,
  },
  // Small headings
  h5: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1rem', // 16px
    fontWeight: 600,
    lineHeight: 1.4,
    color: TEXT_PRIMARY,
  },
  h6: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.875rem', // 14px
    fontWeight: 600,
    lineHeight: 1.5,
    color: TEXT_PRIMARY,
  },
  // Body text
  body1: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    lineHeight: 1.7,
    color: TEXT_SECONDARY,
  },
  body2: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.8125rem', // 13px
    fontWeight: 400,
    lineHeight: 1.6,
    color: TEXT_SECONDARY,
  },
  // Mono / terminal text
  subtitle1: {
    fontFamily: "'IBM Plex Mono', 'Fira Code', monospace",
    fontSize: '0.8125rem', // 13px
    fontWeight: 400,
    lineHeight: 1.6,
    color: TEXT_SECONDARY,
  },
  // Mono small (labels, tags)
  subtitle2: {
    fontFamily: "'IBM Plex Mono', 'Fira Code', monospace",
    fontSize: '0.75rem', // 12px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.04em',
    color: TEXT_SECONDARY,
  },
  // Captions
  caption: {
    fontFamily: "'IBM Plex Mono', 'Fira Code', monospace",
    fontSize: '0.625rem', // 10px
    fontWeight: 400,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: TEXT_SECONDARY,
  },
  // Overline
  overline: {
    fontFamily: "'IBM Plex Mono', 'Fira Code', monospace",
    fontSize: '0.6875rem', // 11px
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: TEXT_SECONDARY,
  },
  button: {
    fontFamily: "'IBM Plex Mono', 'Fira Code', monospace",
    fontSize: '0.8125rem',
    fontWeight: 500,
    letterSpacing: '0.02em',
    textTransform: 'none',
  },
};
