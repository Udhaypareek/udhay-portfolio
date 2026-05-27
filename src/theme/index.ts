import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { components } from './components';
import { BG, SURFACE, BORDER, FLAME, AZURE, VIOLET, CYAN, EMERALD, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM } from './palette';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: BG,
      paper: SURFACE,
    },
    primary: {
      main: FLAME,
      light: '#FF8F5E',
      dark: '#CC5724',
    },
    secondary: {
      main: AZURE,
      light: '#60A5FA',
      dark: '#2563EB',
    },
    info: {
      main: CYAN,
    },
    success: {
      main: EMERALD,
    },
    warning: {
      main: VIOLET,
    },
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
      disabled: TEXT_DIM,
    },
    divider: BORDER,
  },
  typography,
  components,
  spacing: 4,
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
