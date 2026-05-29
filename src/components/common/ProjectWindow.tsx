import { Box, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square, type LucideIcon } from 'lucide-react';
import { SURFACE, BORDER, TEXT_PRIMARY, TEXT_SECONDARY } from '../../theme/palette';

interface ProjectWindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  color?: string;
}

export const ProjectWindow = ({ isOpen, onClose, title, children, icon: Icon, color = '#64FFDA' }: ProjectWindowProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none', // Allow clicking through to the backdrop
            p: { xs: 0, sm: 4 }, // No padding on mobile for full screen
          }}
        >
          {/* Backdrop */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(4px)',
              pointerEvents: 'auto',
            }}
          />

          {/* Window */}
          <Box
            component={motion.div}
            drag={true} // Enabled drag
            dragMomentum={false}
            dragListener={true}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            sx={{
              width: { xs: '100%', sm: '90%', md: '800px' },
              height: { xs: '100%', sm: 'auto' },
              maxHeight: { xs: '100%', sm: '80vh' },
              backgroundColor: SURFACE,
              border: { xs: 'none', sm: `1px solid ${BORDER}` },
              borderRadius: { xs: 0, sm: 1.5 },
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              pointerEvents: 'auto',
              // Constraint drag to viewport roughly
              position: 'relative',
              zIndex: 1301,
            }}
          >
            {/* Title Bar (Drag Handle) */}
            <Box
              sx={{
                p: { xs: 1.5, sm: 1 },
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderBottom: `1px solid ${BORDER}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'grab',
                '&:active': { cursor: 'grabbing' },
                userSelect: 'none',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ml: 1 }}>
                {Icon && <Icon size={16} color={color} />}
                <Typography 
                  sx={{ 
                    color: TEXT_PRIMARY, 
                    fontSize: '0.85rem', 
                    fontWeight: 600,
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: 0.5
                  }}
                >
                  {title}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <IconButton size="small" sx={{ color: TEXT_SECONDARY, opacity: 0.5 }} disabled>
                  <Minus size={14} />
                </IconButton>
                <IconButton size="small" sx={{ color: TEXT_SECONDARY, opacity: 0.5 }} disabled>
                  <Square size={12} />
                </IconButton>
                <IconButton 
                  size="small" 
                  onClick={onClose}
                  sx={{ 
                    color: TEXT_SECONDARY,
                    '&:hover': { color: '#FF5F56', backgroundColor: 'rgba(255, 95, 86, 0.1)' }
                  }}
                >
                  <X size={16} />
                </IconButton>
              </Box>
            </Box>

            {/* Window Content */}
            <Box 
              sx={{ 
                flex: 1, 
                overflowY: 'auto',
                p: { xs: 2.5, sm: 4 },
                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': { width: '6px' },
                '&::-webkit-scrollbar-thumb': { backgroundColor: BORDER, borderRadius: '10px' }
              }}
            >
              {children}
            </Box>
            
            {/* Status Bar */}
            <Box 
              sx={{ 
                p: 0.8, 
                px: 2, 
                backgroundColor: 'rgba(0,0,0,0.2)', 
                borderTop: `1px solid ${BORDER}`,
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <Typography variant="caption" sx={{ color: TEXT_SECONDARY, fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace' }}>
                Mode: Read-Only
              </Typography>
              <Typography variant="caption" sx={{ color: TEXT_SECONDARY, fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace' }}>
                UTF-8
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
};
