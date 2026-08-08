'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 160, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 160, damping: 22, mass: 0.5 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 24);
      y.set(e.clientY - 24);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-12 w-12 rounded-full mix-blend-screen will-change-transform [@media(pointer:coarse)]:hidden lg:block"
      style={{
        x: sx,
        y: sy,
        background:
          'radial-gradient(circle, rgba(251, 191, 36, 0.32) 0%, rgba(251, 191, 36, 0) 70%)',
        transform: 'translateZ(0)',
      }}
    />
  );
}