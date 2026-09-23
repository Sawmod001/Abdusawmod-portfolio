'use client';

import { useEffect, useRef } from 'react';

type Variant = 'about' | 'experience' | 'projects' | 'skills' | 'certs' | 'contact';

const gradients: Record<Variant, string> = {
  about: 'radial-gradient(ellipse 78% 62% at 22% 18%, rgba(255,176,28,0.14), transparent 58%), radial-gradient(ellipse 68% 52% at 88% 84%, rgba(255,107,45,0.10), transparent 62%), linear-gradient(180deg, rgba(124,45,18,0.08), transparent 70%)',
  experience: 'radial-gradient(ellipse 80% 58% at 18% 14%, rgba(148,163,184,0.10), transparent 58%), radial-gradient(ellipse 62% 48% at 88% 90%, rgba(255,176,28,0.12), transparent 62%), linear-gradient(180deg, rgba(124,45,18,0.06), transparent 68%)',
  projects: 'radial-gradient(ellipse 82% 58% at 50% 0%, rgba(255,176,28,0.13), transparent 62%), radial-gradient(ellipse 70% 50% at 90% 88%, rgba(255,107,45,0.09), transparent 62%), linear-gradient(180deg, rgba(124,45,18,0.08), transparent 70%)',
  skills: 'radial-gradient(ellipse 72% 52% at 82% 18%, rgba(255,176,28,0.11), transparent 62%), radial-gradient(ellipse 62% 42% at 14% 88%, rgba(255,107,45,0.08), transparent 62%)',
  certs: 'radial-gradient(ellipse 80% 52% at 50% 0%, rgba(148,163,184,0.08), transparent 62%), radial-gradient(ellipse 62% 48% at 18% 92%, rgba(255,176,28,0.10), transparent 62%)',
  contact: 'radial-gradient(ellipse 74% 52% at 50% 0%, rgba(255,176,28,0.11), transparent 62%), radial-gradient(ellipse 58% 42% at 88% 84%, rgba(255,107,45,0.08), transparent 62%)',
};

export default function SectionBackground({ variant, id }: { variant: Variant; id: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const section = document.getElementById(id);
    if (!section) return;

    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      tx = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
      ty = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (el) {
        el.style.setProperty('--mx', `${cx}px`);
        el.style.setProperty('--my', `${cy}px`);
      }
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) raf = requestAnimationFrame(tick);
    };
    section.addEventListener('pointermove', onMove);
    return () => {
      section.removeEventListener('pointermove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [id]);

  const particles = Array.from({ length: variant === 'projects' ? 22 : variant === 'about' ? 18 : 14 }, (_, i) => i);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden" style={{ '--mx': '0px', '--my': '0px' } as React.CSSProperties}>
      {/* systematic gradient per section, visible */}
      <div className="absolute inset-0 motion-gradient" style={{ background: gradients[variant], opacity: 0.95 }} />
      {/* interactive shift layer */}
      <div className="absolute inset-0 transition-transform duration-300 ease-out" style={{ background: gradients[variant], opacity: 0.18, transform: 'translate3d(var(--mx), var(--my), 0)' }} />
      {/* orbs */}
      <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-[70px] orb-a" />
      <div className="absolute -bottom-32 -right-32 h-[460px] w-[460px] rounded-full bg-orange-500/10 blur-[80px] orb-b" />
      {variant === 'projects' && <div className="absolute top-1/2 left-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.05] blur-[90px] orb-c" />}
      {/* particle system per section */}
      <div className="absolute inset-0">
        {particles.map((i) => (
          <span
            key={i}
            className="absolute rounded-full bg-amber-400/40"
            style={{
              left: `${8 + (i * 67) % 84}%`,
              top: `${12 + (i * 41) % 78}%`,
              width: `${2 + (i % 3) * 0.9}px`,
              height: `${2 + (i % 3) * 0.9}px`,
              opacity: 0.28 + (i % 4) * 0.07,
              animation: `drift-a ${12 + (i % 5) * 2.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.45}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 opacity-[0.03] grain" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
}

