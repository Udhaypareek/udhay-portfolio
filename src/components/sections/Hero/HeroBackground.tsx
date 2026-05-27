import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Box from '@mui/material/Box';
import { useAppStore } from '../../../store/useAppStore';
import { FLAME, AZURE } from '../../../theme/palette';

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 180;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const flameColor = new THREE.Color(FLAME);
    const azureColor = new THREE.Color(AZURE);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const mix = Math.random();
      const c = flameColor.clone().lerp(azureColor, mix);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return { positions, colors };
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.02;
    meshRef.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
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
        size={1.2}
        vertexColors
        transparent
        opacity={0.4}
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
