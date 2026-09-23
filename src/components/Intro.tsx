'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const INTERVAL_MS = 3600;

export default function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), INTERVAL_MS);
    return () => clearTimeout(timer);
  }, []);

  if (reduce) return null;
  if (done) return null;

  return (
    <AnimatePresence onExitComplete={() => setDone(true)}>
      {show && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-10 bg-[#0c0a09]"
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.035]" />
          <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[130px]" />
          <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

          <div className="relative flex flex-col items-center overflow-hidden">
            {['Abolaji', 'Abdusawmod', 'Akande'].map((word, wi) => (
              <motion.span
                key={word}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.35 + wi * 0.32,
                }}
                className="font-display font-semibold text-[clamp(2rem,11vw,5.8rem)] leading-[0.92] tracking-[-0.04em] text-stone-50"
                style={{ fontFamily: 'var(--font-teko)' }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-mono text-[10px] tracking-[0.35em] text-stone-500 uppercase">Software Engineer</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-20 origin-center bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
