import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Box from '@mui/material/Box';
import { useTheme, useMediaQuery } from '@mui/material';
import { useAppStore } from '../../../store/useAppStore';
import { FLAME, AZURE } from '../../../theme/palette';

function ParticleField() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const meshRef = useRef<THREE.Points>(null);
  
  // Dynamic count for mobile performance
  const count = isMobile ? 1500 : 4000; 

  const { positions, colors, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speeds = new Float32Array(count * 3);
    
    const flameColor = new THREE.Color(FLAME);
    const azureColor = new THREE.Color(AZURE);
    const violetColor = new THREE.Color('#8B5CF6'); // Gemini/cosmic accent

    for (let i = 0; i < count; i++) {
      // Adjusted spread for mobile vs desktop
      positions[i * 3] = (Math.random() - 0.5) * (isMobile ? 15 : 30);
      positions[i * 3 + 1] = (Math.random() - 0.5) * (isMobile ? 30 : 20);
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      // Drift
      speeds[i * 3] = (Math.random() - 0.5) * 0.002;
      speeds[i * 3 + 1] = Math.random() * 0.004 + 0.001; 
      speeds[i * 3 + 2] = (Math.random() - 0.5) * 0.002;

      const mix = Math.random();
      let c;
      if (mix < 0.33) {
        c = flameColor.clone().lerp(violetColor, Math.random());
      } else if (mix < 0.66) {
        c = azureColor.clone().lerp(violetColor, Math.random());
      } else {
        c = azureColor.clone().lerp(flameColor, Math.random());
      }

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return { positions, colors, speeds };
  }, [count, isMobile]);

  // Create a round particle texture to avoid the "square box" look
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.arc(16, 16, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const positionsAttr = meshRef.current.geometry.attributes.position;
    const posArray = positionsAttr.array as Float32Array;

    const xBound = isMobile ? 7.5 : 15;
    const yBound = isMobile ? 15 : 10;

    for (let i = 0; i < count; i++) {
      posArray[i * 3] += speeds[i * 3];
      posArray[i * 3 + 1] += speeds[i * 3 + 1];
      posArray[i * 3 + 2] += speeds[i * 3 + 2];

      // Wrap top to bottom and side to side gracefully
      if (posArray[i * 3 + 1] > yBound) posArray[i * 3 + 1] = -yBound;
      if (posArray[i * 3] > xBound) posArray[i * 3] = -xBound;
      if (posArray[i * 3] < -xBound) posArray[i * 3] = xBound;
    }

    positionsAttr.needsUpdate = true;
    
    // Very subtle camera-like slow pan/breathing
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          key={count}
          attach="attributes-position"
          count={count}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isMobile ? 0.06 : 0.04}
        vertexColors
        map={circleTexture}
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function CSSGridFallback() {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,109,46,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,109,46,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at 80% 20%, rgba(59,130,246,0.05), transparent 60%)`,
        },
      }}
    />
  );
}

export function HeroBackground() {
  const isLowEnd = useAppStore((s) => s.isLowEnd);

  if (isLowEnd) {
    return <CSSGridFallback />;
  }

  return (
    <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <CSSGridFallback />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        style={{
          position: 'absolute',
          inset: 0,
        }}
      >
        <ParticleField />
      </Canvas>
    </Box>
  );
}
