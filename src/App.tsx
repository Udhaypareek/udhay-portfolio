import { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Lazy-load all sections for performance
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const TechStack = lazy(() => import('./components/sections/TechStack'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Hobbies = lazy(() => import('./components/sections/Hobbies'));
const SystemStatus = lazy(() => import('./components/sections/SystemStatus'));
const GitHubStats = lazy(() => import('./components/sections/GitHubStats'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Minimal loading fallback
function SectionFallback() {
  return (
    <Box
      sx={{
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box component="main" role="main">
        <Suspense fallback={<SectionFallback />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Hobbies />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <SystemStatus />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GitHubStats />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
