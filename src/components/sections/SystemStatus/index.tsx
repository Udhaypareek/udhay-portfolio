import { useState, useEffect, useRef, useCallback } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { TerminalBlock } from '../../common/TerminalBlock';
import { TechTag } from '../../common/TechTag';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { FLAME, EMERALD, TEXT_PRIMARY, TEXT_SECONDARY, TEXT_DIM, BORDER } from '../../../theme/palette';

interface TerminalLine {
  type: 'command' | 'output' | 'status' | 'tags';
  text?: string;
  items?: string[];
}

const leftColumn: TerminalLine[] = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'Udhay Pareek' },
  { type: 'output', text: 'Full Stack Developer · Jaipur, India' },
  { type: 'command', text: 'cat focus.log' },
  { type: 'output', text: '› Backend Architecture' },
  { type: 'output', text: '› Real-Time Systems' },
  { type: 'output', text: '› LLM Workflows' },
  { type: 'command', text: 'cat stack.conf' },
  { type: 'tags', items: ['MERN', 'AI APIs', 'WebSockets', 'Redis'] },
];

const rightColumn: TerminalLine[] = [
  { type: 'command', text: 'cat learning.md' },
  { type: 'output', text: '› Distributed Systems' },
  { type: 'output', text: '› AI-Orchestrated Pipelines' },
  { type: 'output', text: '› Scalable Architectures' },
];

function TerminalColumn({ lines, startDelay = 0 }: { lines: TerminalLine[]; startDelay?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const [visibleLines, setVisibleLines] = useState<number>(prefersReducedMotion ? lines.length : 0);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const startedRef = useRef(false);

  const typeCommand = useCallback((text: string): Promise<void> => {
    return new Promise((resolve) => {
      let i = 0;
      setIsTyping(true);
      const interval = setInterval(() => {
        if (i <= text.length) {
          setTypingText(text.substring(0, i));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setTypingText('');
          resolve();
        }
      }, 40);
    });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || startedRef.current) return;
    startedRef.current = true;

    const animate = async () => {
      await new Promise(r => setTimeout(r, startDelay));
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].type === 'command') {
          await typeCommand(lines[i].text || '');
        }
        setVisibleLines(i + 1);
        await new Promise(r => setTimeout(r, lines[i].type === 'command' ? 300 : 150));
      }
    };
    animate();
  }, [lines, startDelay, prefersReducedMotion, typeCommand]);

  return (
    <Box>
      {lines.slice(0, visibleLines).map((line, i) => (
        <Box key={i} sx={{ mb: 1.5 }}>
          {line.type === 'command' && (
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box component="span" sx={{ color: FLAME, fontWeight: 600 }}>❯</Box>
              <Box component="span" sx={{ color: TEXT_SECONDARY }}>
                {i === visibleLines - 1 && isTyping ? typingText : line.text}
              </Box>
            </Box>
          )}
          {line.type === 'output' && (
            <Box sx={{ color: TEXT_PRIMARY, pl: 4, fontSize: '0.8125rem' }}>
              {line.text}
            </Box>
          )}
          {line.type === 'status' && (
            <Box sx={{ color: EMERALD, pl: 4, fontSize: '0.8125rem', fontWeight: 500 }}>
              {line.text}
            </Box>
          )}
          {line.type === 'tags' && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, pl: 4, mt: 1 }}>
              {line.items?.map((item) => (
                <TechTag key={item} label={item} accent="flame" />
              ))}
            </Box>
          )}
        </Box>
      ))}

      {visibleLines >= lines.length && (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 3 }}>
          <Box component="span" sx={{ color: FLAME, fontWeight: 600 }}>❯</Box>
          <Box
            component="span"
            sx={{
              width: '8px',
              height: '16px',
              backgroundColor: FLAME,
              display: 'inline-block',
              animation: 'termBlink 1s step-end infinite',
              '@keyframes termBlink': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0 },
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
}

export default function SystemStatus() {
  return (
    <AnimatedSection id="system-status">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader number="07" title="System Status." accentWord="Status." label="system_status" />
        </AnimatedItem>

        <AnimatedItem>
          <TerminalBlock>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 6,
              }}
            >
              <TerminalColumn lines={leftColumn} startDelay={500} />
              <TerminalColumn lines={rightColumn} startDelay={2500} />
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 4,
                mt: 8,
                pt: 5,
                borderTop: `0.5px solid ${BORDER}`,
              }}
            >
              {[
                { label: 'PROJECTS', value: '20+', color: FLAME },
                { label: 'AI INTEGRATIONS', value: '3+', color: FLAME },
                { label: 'STACK', value: 'MERN', color: FLAME },
              ].map((stat) => (
                <Box
                  key={stat.label}
                  sx={{
                    textAlign: 'center',
                    border: `0.5px solid ${BORDER}`,
                    borderRadius: '8px',
                    py: 4,
                    px: 3,
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: '0.8rem',
                      color: TEXT_DIM,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      mb: 2,
                    }}
                  >
                    {stat.label}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: stat.color,
                    }}
                  >
                    {stat.value}
                  </Box>
                </Box>
              ))}
            </Box>
          </TerminalBlock>
        </AnimatedItem>
      </Container>
    </AnimatedSection>
  );
}
