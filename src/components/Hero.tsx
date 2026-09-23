'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import AnimatedName from '@/components/AnimatedName';
import Magnetic from '@/components/Magnetic';
import AmbientBackground from '@/components/AmbientBackground';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 20 });
  const sy = useSpring(my, { stiffness: 90, damping: 20 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 20);
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 20);
    };
    el.addEventListener('pointermove', onMove);
    return () => el.removeEventListener('pointermove', onMove as EventListener);
  }, [mx, my]);

  const socials = [
    { name: 'GitHub', href: 'https://github.com/Sawmod001', icon: <GithubIcon className="h-5 w-5" />, color: 'hover:text-white' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/abdusawmod-abolaji-b25604245', icon: <LinkedinIcon className="h-5 w-5" />, color: 'hover:text-[#0077b5]' },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[calc(100svh-4rem)] sm:min-h-[calc(100dvh-4rem)] items-center justify-center overflow-hidden py-20 sm:py-28"
    >
      <div className="absolute inset-0 -z-20 bg-[#0c0a09]" />
      <AmbientBackground />
      {/* layered glows: drift */}
      <motion.div style={{ x: sx, y: sy }} className="pointer-events-none absolute -z-10 top-0 right-0 h-[560px] w-[560px] rounded-full bg-amber-500/10 blur-[80px] translate-x-1/3 -translate-y-1/4 orb-a" />
      <motion.div style={{ x: sx, y: sy }} className="pointer-events-none absolute -z-10 bottom-0 left-0 h-[480px] w-[480px] rounded-full bg-orange-500/10 blur-[80px] -translate-x-1/4 translate-y-1/4 orb-b" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-[0.035]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(251,146,60,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-[#0c0a09]/40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-start justify-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="w-full">
            <h1 aria-label="Abolaji Abdusawmod Akande" className="mb-6">
              <AnimatedName />
            </h1>
            <p className="mt-5 font-mono text-sm sm:text-[15px] font-medium tracking-wide text-stone-400">
              Software / <span className="text-gradient-brand font-semibold">Full Stack Developer</span>
            </p>
            <p className="mt-6 max-w-2xl font-serif text-[18px] sm:text-[19px] leading-[1.75] tracking-[-0.015em] text-stone-300/90 font-light">
              Building <span className="font-medium text-white">reliable, scalable</span> and useful digital products, full-stack architecture, secure auth & payments, and practical AI. I ship end-to-end.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Magnetic className="w-full sm:w-auto" strength={0.28}>
                <a
                  href="#projects"
                  className="group relative inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3.5 text-sm font-semibold text-stone-950 shadow-lg shadow-amber-500/20 overflow-hidden transition-all hover:shadow-amber-500/30 hover:brightness-[1.04] active:scale-[0.98]"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center justify-center">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto" strength={0.28}>
                <a
                  href="/SAWMOD-RESUME.pdf"
                  download="SAWMOD-RESUME.pdf"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-md px-8 py-3.5 text-sm font-medium text-stone-200 hover:bg-white/[0.09] hover:border-white/15 transition-all active:scale-[0.98]"
                >
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Magnetic>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-6">
              {socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`text-stone-400 ${social.color} transition-colors flex-shrink-0 p-1.5 rounded-lg hover:bg-white/[0.04]`} title={social.name}>
                  {social.icon}
                </a>
              ))}
              <span className="font-mono text-xs text-stone-500">Connect →</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden flex-col items-center sm:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-2">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} className="flex h-10 w-6 justify-center rounded-full border border-white/10 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-stone-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

