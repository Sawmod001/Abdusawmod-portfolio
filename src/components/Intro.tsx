'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const INTERVAL_MS = 2100;

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
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[#0c0a09]"
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 mix-blend-overlay" />
          <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

          <div className="relative flex flex-col items-center gap-3 overflow-hidden">
            {['Abolaji', 'Abdusawmod', 'Akande'].map((word, wi) => (
              <motion.span
                key={word}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.25 + wi * 0.35,
                }}
                className="font-display font-bold text-3xl sm:text-5xl text-stone-100"
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.45, duration: 0.4 }}
            className="relative flex items-end gap-2 text-xs font-mono uppercase tracking-[0.4em] text-stone-500"
          >
            Loading
            <span className="mt-px mb-0.5 inline-flex w-3 gap-0.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                  className="h-3 w-0.5 bg-primary"
                />
              ))}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}