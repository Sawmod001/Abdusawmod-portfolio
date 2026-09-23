'use client';

import { motion } from 'framer-motion';
import { experienceData } from '@/data/experience';
import SectionBackground from '@/components/SectionBackground';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 bg-[#0c0a09] relative overflow-hidden">
      <SectionBackground variant="experience" id="experience" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-12">
          <h2 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] font-semibold leading-none tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>Experience</h2>
          <p className="mt-3 max-w-[62ch] font-serif text-[15px] leading-relaxed text-stone-400 font-light">Where shipped systems were owned, not observed.</p>
          <div className="mt-5 h-px w-16 bg-amber-400/60" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/10 to-transparent -translate-x-1/2" />
          <div className="space-y-8">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div key={exp.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.06 }} className={`relative flex flex-col sm:flex-row ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                  <div className="absolute left-4 sm:left-1/2 top-6 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(12,10,9,1),0_0_0_7px_rgba(251,191,36,0.18)] -translate-x-1/2 z-10" />
                  <div className={`hidden sm:block w-1/2 ${isEven ? 'text-left pl-8' : 'text-right pr-8'} pt-5`}>
                    <span className="font-mono text-xs tracking-wide text-stone-500">{exp.date}</span>
                  </div>
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-8' : 'sm:pl-8'} pl-10 sm:pl-0`}>
                    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.24)] hover:border-white/15 transition-colors">
                      <span className="sm:hidden font-mono text-xs text-stone-500 block mb-2">{exp.date}</span>
                      <h3 className="text-[15px] font-semibold tracking-tight text-white leading-tight">{exp.role}</h3>
                      <p className="mt-1 font-mono text-xs tracking-wide text-amber-300">{exp.company}</p>
                      <ul className="mt-4 space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-2 text-[13.5px] leading-relaxed text-stone-300">
                            <span className="mt-[0.6em] h-1 w-1 flex-shrink-0 rounded-full bg-stone-500" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </section>
  );
}
