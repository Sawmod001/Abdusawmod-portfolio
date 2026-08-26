'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';

const NAME_WORDS = ['Abolaji', 'Abdusawmod', 'Akande'];

const WORD_FACTORS = [
  { x: 16, y: 12, rot: 6 },
  { x: 26, y: 18, rot: 9 },
  { x: 36, y: 24, rot: 12 },
];

const LETTER_SPRING = { stiffness: 210, damping: 19, mass: 0.7 } as const;
const MAGNETIC_SPRING = { stiffness: 130, damping: 18, mass: 0.4 } as const;

const letterVariants = {
  hidden: { y: '105%', opacity: 0, rotateX: -65 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      ...LETTER_SPRING,
      delay: 0.12 + i * 0.032,
    },
  }),
};

function MagneticWord({
  pX,
  pY,
  factor,
  children,
}: {
  pX: MotionValue<number>;
  pY: MotionValue<number>;
  factor: number;
  children: ReactNode;
}) {
  const x = useSpring(useTransform(pX, (v) => v * factor), MAGNETIC_SPRING);
  const y = useSpring(useTransform(pY, (v) => v * factor * 0.55), MAGNETIC_SPRING);
  const rot = useSpring(
    useTransform(pX, (v) => v * factor * 0.28),
    MAGNETIC_SPRING
  );

  return (
    <motion.div
      style={{ x, y, rotate: rot, transformPerspective: 900 }}
      className="block will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default function AnimatedName() {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const pX = useMotionValue(0);
  const pY = useMotionValue(0);

  useEffect(() => {
    if (reduce) {
      pX.set(0);
      pY.set(0);
    }
  }, [reduce, pX, pY]);

  const handleMove = (e: React.PointerEvent) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    pX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    pY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handleLeave = () => {
    pX.set(0);
    pY.set(0);
  };

  const lengths = NAME_WORDS.map((word) => word.length);
  const startIndex = lengths.map(
    (_, i) => lengths.slice(0, i).reduce<number>((a, b) => a + b, 0)
  );

  const base = 'font-display font-extrabold leading-[1.02] tracking-[-0.035em] text-stone-50';

  if (reduce) {
    return (
      <div className={base}>
        {NAME_WORDS.map((word) => (
          <div key={word} className="block whitespace-nowrap text-[clamp(2.5rem,10.5vw,7.5rem)]">
            {word}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={frameRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={base}
      aria-hidden="true"
    >
      <motion.div initial="hidden" animate="visible" className="flex flex-col">
        {NAME_WORDS.map((word, wi) => (
          <MagneticWord key={word} pX={pX} pY={pY} factor={WORD_FACTORS[wi].x}>
            <span className="block whitespace-nowrap text-[clamp(2.5rem,10.5vw,7.5rem)]">
              {word.split('').map((char, ci) => (
                <motion.span
                  key={ci}
                  custom={startIndex[wi] + ci}
                  variants={letterVariants}
                  whileHover={{
                    y: '-6%',
                    scale: 1.08,
                    textShadow: '0 6px 28px rgba(251, 191, 36, 0.55)',
                  }}
                  className="inline-block cursor-default will-change-transform"
                  style={{ transformPerspective: 800, transformOrigin: '50% 100%' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </MagneticWord>
        ))}
      </motion.div>
    </div>
  );
}