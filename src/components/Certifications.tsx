'use client';

import { motion } from 'framer-motion';
import { certificationsData } from '@/data/certifications';
import { leadershipData } from '@/data/leadership';
import TiltCard from '@/components/TiltCard';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#0c0a09] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] mix-blend-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-primary font-semibold tracking-wider uppercase">
            Proof of work
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mt-2">
            Certifications, Leadership & Community
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Certifications */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Certifications & Recognition</h3>
            <div className="h-1 w-12 bg-primary mt-3 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificationsData.map((cert, index) => (
              <TiltCard key={cert.id} max={6} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex h-full flex-col p-5 rounded-xl glass-panel border border-slate-200 dark:border-gray-800 hover:border-primary/30 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-gray-100 leading-snug">{cert.title}</h4>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-medium text-primary">{cert.issuer}</span>
                    {cert.description && (
                      <span className="shrink-0 font-mono text-[10px] text-slate-400 dark:text-gray-500">{cert.description}</span>
                    )}
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Leadership & Community */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Leadership & Community</h3>
              <span className="text-xs font-mono text-slate-400 dark:text-gray-500">{leadershipData.length} roles</span>
            </div>
            <div className="h-1 w-12 bg-primary mt-3 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {leadershipData.map((role, index) => (
              <TiltCard key={role.id} max={5} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex h-full flex-col p-4 rounded-xl glass-panel border border-slate-200 dark:border-gray-800 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-gray-100 leading-snug">{role.role}</h4>
                    <span className="shrink-0 font-mono text-[11px] text-primary">{role.date}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-500 dark:text-gray-400">{role.organization}</p>

                  {role.highlights && role.highlights.length > 0 ? (
                    <ul className="mt-3 space-y-1.5">
                      {role.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-gray-300">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : role.description ? (
                    <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-gray-400">{role.description}</p>
                  ) : null}
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}