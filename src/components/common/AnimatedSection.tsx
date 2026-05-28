import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import type { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  delay?: number;
  sx?: object;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function AnimatedSection({ children, id, delay = 0, sx = {} }: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Box component="section" id={id} sx={sx}>
        {children}
      </Box>
    );
  }

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
      transition={{ delay }}
      style={sx as React.CSSProperties}
    >
      {children}
    </motion.section>
  );
}

// Export for child elements to use stagger
export function AnimatedItem({ 
  children, 
  sx = {}, 
  delay = 0 
}: { 
  children: ReactNode; 
  sx?: object;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Box sx={sx}>{children}</Box>;
  }

  return (
    <motion.div 
      variants={itemVariants} 
      transition={{ delay }}
      style={sx as React.CSSProperties}
    >
      {children}
    </motion.div>
  );
}

export { containerVariants, itemVariants };
