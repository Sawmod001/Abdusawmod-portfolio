'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TiltCard({ children, max = 4, className = '' }: { children: ReactNode; max?: number; className?: string }) {
  const clamped = Math.min(max, 5);
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [clamped, -clamped]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-clamped, clamped]), { stiffness: 180, damping: 20 });
  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => { px.set(0.5); py.set(0.5); };
  return <motion.div ref={ref} onPointerMove={handleMove} onPointerLeave={handleLeave} style={{ rotateX, rotateY, transformPerspective: 1100 }} className={`will-change-transform ${className}`}>{children}</motion.div>;
}
