import { lazy, Suspense, useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { motion, AnimatePresence } from 'framer-motion';
import theme from './theme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { SplashScreen } from './components/common/SplashScreen';
import { CommandPalette } from './components/common/CommandPalette';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with internal scroll to top / link clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        if (id) {
          const target = document.getElementById(id);
          if (target) {
            lenis.scrollTo(target);
          }
        }
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <SplashScreen key="splash" onComplete={() => setIsLoaded(true)} />
        ) : (
          <Box
            key="content"
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            sx={{
              width: '100%',
              overflowX: 'hidden',
            }}
          >
            <Navbar />
            <ScrollToTop />
            <CommandPalette />
            <Box 
              component="main" 
              role="main"
              sx={{
                px: { xs: 2.5, sm: 4, md: 0 }, // Mobile horizontal margins
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
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
          </Box>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
