'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';
import SectionBackground from '@/components/SectionBackground';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 bg-[#0c0a09] relative overflow-hidden">
      <SectionBackground variant="skills" id="skills" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] font-semibold leading-none tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>Skills</h2>
          <p className="mt-3 max-w-[60ch] font-serif text-[15px] leading-relaxed text-stone-400 font-light">Tools chosen for shipping, not showing.</p>
          <div className="mt-5 h-px w-16 bg-amber-400/60" />
        </motion.div>

        {/* Impeccable: not same-size lazy cards, wrap list with varied density, compact pills */}
        <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 shadow-[0_10px_28px_rgba(0,0,0,0.22)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillsData.map((cat, index) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} className="min-w-0">
                <h3 className="font-mono text-xs tracking-[0.14em] text-amber-300 uppercase">{cat.title}</h3>
                <div className="mt-3 h-px bg-white/10" />
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span key={s} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs tracking-wide text-stone-300 hover:border-amber-500/20 hover:text-amber-200 transition-colors cursor-default">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
            <span className="font-mono text-[11px] tracking-wide text-stone-500">Stack highlights</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="font-mono text-xs text-stone-400">Next.js 16 · React 19 · Node · PostgreSQL · Supabase · Prisma</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </section>
  );
}

