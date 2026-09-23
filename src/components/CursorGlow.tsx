'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 180, damping: 24, mass: 0.45 });
  const sy = useSpring(y, { stiffness: 180, damping: 24, mass: 0.45 });
  const [hovering, setHovering] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const move = (e: PointerEvent) => { x.set(e.clientX - 28); y.set(e.clientY - 28); };
    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a,button,[data-cursor-hover]')) setHovering(true); else setHovering(false);
    };
    const down = () => setActive(true);
    const up = () => setActive(false);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-14 w-14 rounded-full mix-blend-screen will-change-transform lg:block [@media(pointer:coarse)]:hidden"
      style={{
        x: sx, y: sy,
        scale: hovering ? 1.35 : active ? 0.9 : 1,
        opacity: hovering ? 0.95 : 0.72,
        background: hovering
          ? 'radial-gradient(circle, rgba(251,191,36,0.38) 0%, rgba(251,146,60,0.14) 42%, transparent 72%)'
          : 'radial-gradient(circle, rgba(251,191,36,0.28) 0%, rgba(251,146,60,0.06) 48%, transparent 70%)',
        transform: 'translateZ(0)',
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    />
  );
}
