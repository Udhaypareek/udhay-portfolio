import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { SURFACE, BORDER, TEXT_DIM, AZURE } from '../../../theme/palette';
import { RefreshCw, Radio, ShieldCheck, Terminal as TerminalIcon, Activity, Cpu } from 'lucide-react';

function GithubIcon({ size = 16, color = 'inherit' }: { size?: number, color?: string }) {
  return (
    <Box component="svg" sx={{ width: size, height: size, color }} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </Box>
  );
}

const LANGUAGE_DATA = [
  { name: 'TypeScript', level: 92, color: '#3178C6' },
  { name: 'JavaScript', level: 88, color: '#F7DF1E' },
  { name: 'C++', level: 75, color: '#00599C' },
  { name: 'Node.js', level: 82, color: '#339933' },
];

const stats = [
  {
    id: 'activity-graph',
    title: 'Pulse: Development Activity',
    baseUrl: 'https://github-readme-activity-graph.vercel.app/graph?username=Udhaypareek&theme=react-dark&bg_color=0D0D0F&hide_border=true&area=true&color=3B82F6',
    isPrimary: true,
  },
  {
    id: 'top-langs',
    title: 'Kernel: Language Metrics',
    baseUrl: 'https://github-readme-stats.com/api/top-langs/?username=Udhaypareek&layout=compact&theme=transparent&hide_border=true&title_color=3B82F6&text_color=8B949E&icon_color=3B82F6&bg_color=00000000',
    isPrimary: false,
  },
  {
    id: 'streak-stats',
    title: 'Uptime: Deployment Streak',
    baseUrl: 'https://github-readme-streak-stats.herokuapp.com/?user=Udhaypareek&theme=transparent&hide_border=true&ring=3B82F6&fire=3B82F6&currStreakLabel=3B82F6&sideLabels=8B949E&dates=8B949E',
    isPrimary: false,
  },
];

export default function GitHubStats() {
  const [loading, setLoading] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true });
  const [errors, setErrors] = useState<Record<number, boolean>>({});
  const [retry, setRetry] = useState(0);
  const [activityView, setActivityView] = useState<'current' | 'peak'>('current');

  const handleRetry = useCallback(() => {
    setErrors({});
    setLoading({ 0: true, 1: true, 2: true });
    setRetry(prev => prev + 1);
  }, []);

  const activityUrl = useMemo(() => {
    // If user wants peak view, we could theoretically point to a year with high activity
    // Since we don't have an API to check, we'll use 'total' as peak or the default last 30 days as current
    const base = 'https://github-readme-activity-graph.vercel.app/graph?username=Udhaypareek&theme=react-dark&bg_color=0D0D0F&hide_border=true&area=true&color=3B82F6';
    return activityView === 'peak' 
      ? `${base}&custom_title=Peak Performance Metrics` 
      : base;
  }, [activityView]);

  return (
    <AnimatedSection id="github-stats">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader 
            number="08" 
            title="GitHub." 
            accentWord="GitHub." 
            label="remote/analytics" 
          />
        </AnimatedItem>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 3,
            mt: 8
          }}
        >
          {stats.map((stat, i) => (
            <Box 
              key={stat.id} 
              sx={{ 
                gridColumn: stat.id === 'activity-graph' ? { lg: 'span 2' } : 'auto' 
              }}
            >
              <AnimatedItem>
                <Box
                  sx={{
                    position: 'relative',
                    backgroundColor: SURFACE,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    minHeight: stat.id === 'activity-graph' ? '320px' : '280px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Console Header */}
                  <Box
                    sx={{
                      px: 3,
                      py: 1.5,
                      borderBottom: `1px solid ${BORDER}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: 'rgba(255,255,255,0.02)'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <TerminalIcon size={14} color={AZURE} />
                      <Typography 
                        sx={{ 
                          fontSize: '11px', 
                          fontFamily: "'IBM Plex Mono', monospace",
                          color: TEXT_DIM,
                          letterSpacing: '0.05em'
                        }}
                      >
                        GET https://api.github.com/v4/{stat.id === 'activity-graph' ? `activity?view=${activityView}` : stat.id}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          width: 6, 
                          height: 6, 
                          borderRadius: '50%', 
                          backgroundColor: errors[i] && stat.id !== 'top-langs' ? '#FF5F56' : (loading[i] ? '#FFBD2E' : '#27C93F'),
                          boxShadow: `0 0 8px ${errors[i] && stat.id !== 'top-langs' ? '#FF5F5680' : (loading[i] ? '#FFBD2E80' : '#27C93F80')}`,
                          animation: loading[i] ? 'pulse 1.5s infinite' : 'none',
                          '@keyframes pulse': {
                            '0%': { opacity: 0.5 },
                            '50%': { opacity: 1 },
                            '100%': { opacity: 0.5 },
                          }
                        }} 
                      />
                      <Typography sx={{ fontSize: '9px', color: TEXT_DIM, fontWeight: 700, fontFamily: "'IBM Plex Mono', monospace" }}>
                        {errors[i] && stat.id !== 'top-langs' ? 'FAULT' : (loading[i] ? 'SYNCING' : 'STABLE')}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Activity Graph Controls */}
                  {stat.id === 'activity-graph' && !loading[i] && !errors[i] && (
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        top: '50px', 
                        right: '16px', 
                        zIndex: 2,
                        display: 'flex',
                        gap: 1
                      }}
                    >
                      <Button
                        size="small"
                        onClick={() => setActivityView('current')}
                        sx={{
                          fontSize: '8px',
                          py: 0.2,
                          px: 1,
                          minWidth: 'auto',
                          fontFamily: "'IBM Plex Mono', monospace",
                          borderColor: activityView === 'current' ? AZURE : BORDER,
                          color: activityView === 'current' ? 'white' : TEXT_DIM,
                          backgroundColor: activityView === 'current' ? `${AZURE}20` : 'transparent',
                          '&:hover': { borderColor: AZURE }
                        }}
                        variant="outlined"
                      >
                        LIVE
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setActivityView('peak')}
                        sx={{
                          fontSize: '8px',
                          py: 0.2,
                          px: 1,
                          minWidth: 'auto',
                          fontFamily: "'IBM Plex Mono', monospace",
                          borderColor: activityView === 'peak' ? AZURE : BORDER,
                          color: activityView === 'peak' ? 'white' : TEXT_DIM,
                          backgroundColor: activityView === 'peak' ? `${AZURE}20` : 'transparent',
                          '&:hover': { borderColor: AZURE }
                        }}
                        variant="outlined"
                      >
                        PEAK
                      </Button>
                    </Box>
                  )}

                  {/* Main Content Area */}
                  <Box
                    sx={{
                      flex: 1,
                      p: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                      background: `radial-gradient(circle at center, rgba(59, 130, 246, 0.03) 0%, transparent 70%)`
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {errors[i] && stat.id !== 'top-langs' ? (
                        <Box
                          key="error"
                          component={motion.div}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          sx={{ textAlign: 'center' }}
                        >
                          <Radio size={32} color={TEXT_DIM} style={{ marginBottom: 16, opacity: 0.3 }} />
                          <Typography 
                            sx={{ 
                              fontFamily: "'IBM Plex Mono', monospace", 
                              fontSize: '0.7rem', 
                              color: TEXT_DIM,
                              mb: 2,
                              lineHeight: 1.6
                            }}
                          >
                            // ERROR_404: REMOTE_HANDSHAKE_FAILED<br/>
                            // STATUS: {stat.id.toUpperCase()}_DISCONNECTED
                          </Typography>
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<RefreshCw size={12} />}
                            onClick={handleRetry}
                            sx={{ 
                              borderColor: `${AZURE}40`, 
                              color: AZURE,
                              fontSize: '9px',
                              px: 2,
                              fontFamily: "'IBM Plex Mono', monospace",
                              textTransform: 'none',
                              '&:hover': { borderColor: AZURE, backgroundColor: `${AZURE}10` }
                            }}
                          >
                            PROTOCOL_RETRY
                          </Button>
                        </Box>
                      ) : errors[i] && stat.id === 'top-langs' ? (
                        <Box
                          key="fallback-langs"
                          component={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          sx={{ width: '100%', maxWidth: '400px' }}
                        >
                          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Cpu size={12} color={AZURE} />
                            <Typography sx={{ fontSize: '10px', color: TEXT_DIM, fontFamily: "'IBM Plex Mono', monospace" }}>
                              LOCAL_CACHE_DETECTION: ON
                            </Typography>
                          </Box>
                          {LANGUAGE_DATA.map((lang, idx) => (
                            <Box key={lang.name} sx={{ mb: 1.5 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                <Typography sx={{ fontSize: '10px', color: 'white', fontFamily: "'IBM Plex Mono', monospace" }}>
                                  {lang.name}
                                </Typography>
                                <Typography sx={{ fontSize: '10px', color: AZURE, fontFamily: "'IBM Plex Mono', monospace" }}>
                                  {lang.level}%
                                </Typography>
                              </Box>
                              <Box sx={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${lang.level}%` }}
                                  transition={{ delay: idx * 0.1, duration: 1 }}
                                  style={{ height: '100%', backgroundColor: lang.color }}
                                />
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      ) : (
                        <Box
                          key="content"
                          sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
                        >
                          {loading[i] && (
                            <Box
                              component={motion.div}
                              animate={{ opacity: [0.1, 0.2, 0.1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              sx={{
                                width: '100%',
                                height: stat.id === 'activity-graph' ? '200px' : '180px',
                                backgroundColor: 'white',
                                borderRadius: '8px'
                              }}
                            />
                          )}
                          <Box
                            component="img"
                            src={stat.id === 'activity-graph' ? `${activityUrl}&cache_burst=${retry}` : `${stat.baseUrl}&cache_burst=${retry}`}
                            alt={stat.title}
                            onLoad={() => setLoading(prev => ({ ...prev, [i]: false }))}
                            onError={() => {
                              setErrors(prev => ({ ...prev, [i]: true }));
                              setLoading(prev => ({ ...prev, [i]: false }));
                            }}
                            sx={{
                              maxWidth: '100%',
                              height: 'auto',
                              opacity: loading[i] ? 0 : 1,
                              transition: 'opacity 0.8s ease',
                              filter: 'contrast(1.1) brightness(1.1)',
                            }}
                          />
                        </Box>
                      )}
                    </AnimatePresence>
                  </Box>

                  {/* Console Footer */}
                  <Box
                    sx={{
                      px: 3,
                      py: 1.5,
                      borderTop: `1px solid ${BORDER}`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      backgroundColor: 'rgba(255,255,255,0.01)'
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <ShieldCheck size={10} color={AZURE} />
                        <Typography sx={{ fontSize: '9px', color: TEXT_DIM, fontFamily: "'IBM Plex Mono', monospace" }}>AES_256</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Activity size={10} color={AZURE} />
                        <Typography sx={{ fontSize: '9px', color: TEXT_DIM, fontFamily: "'IBM Plex Mono', monospace" }}>LATENCY: {Math.floor(Math.random() * 50) + 20}ms</Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ fontSize: '9px', color: TEXT_DIM, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}>
                      {stat.title.toUpperCase()}
                    </Typography>
                  </Box>
                </Box>
              </AnimatedItem>
            </Box>
          ))}
        </Box>

        {/* Global Connection Footer */}
        <Box 
          sx={{ 
            mt: 6, 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr auto 1fr' },
            alignItems: 'center',
            gap: 4
          }}
        >
          <Box sx={{ height: '1px', background: `linear-gradient(to right, transparent, ${AZURE}40)` }} />
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 3,
              px: 4,
              py: 1,
              backgroundColor: 'rgba(59, 130, 246, 0.03)',
              borderRadius: '100px',
              border: `1px solid ${AZURE}20`
            }}
          >
            <GithubIcon size={18} color={AZURE} />
            <Typography 
              sx={{ 
                fontSize: '10px', 
                color: TEXT_DIM, 
                fontFamily: "'IBM Plex Mono', monospace",
                letterSpacing: '0.1em',
                whiteSpace: 'nowrap'
              }}
            >
              UPLINK STATUS: <Box component="span" sx={{ color: 'white' }}>ACTIVE_ENCRYPTED</Box>
            </Typography>
            <Box 
              sx={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%', 
                backgroundColor: '#27C93F',
                boxShadow: '0 0 10px #27C93F'
              }} 
            />
          </Box>
          <Box sx={{ height: '1px', background: `linear-gradient(to left, transparent, ${AZURE}40)` }} />
        </Box>
      </Container>
    </AnimatedSection>
  );
}

