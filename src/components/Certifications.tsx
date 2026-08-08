'use client';

import { motion } from 'framer-motion';
import { certificationsData } from '@/data/certifications';
import { leadershipData } from '@/data/leadership';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#030712] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] mix-blend-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Certifications & Recognitions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications & Recognition</h2>
              <div className="h-1 w-16 bg-primary mt-4 rounded-full" />
            </motion.div>

            <div className="space-y-4">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl glass-panel border border-slate-200 dark:border-gray-800 hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-base font-semibold text-slate-900 dark:text-gray-100">{cert.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-primary">{cert.issuer}</span>
                    {cert.description && (
                      <span className="text-xs text-slate-500 dark:text-gray-500">{cert.description}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership & Community */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Leadership & Community</h2>
              <div className="h-1 w-16 bg-primary mt-4 rounded-full" />
            </motion.div>

            <div className="space-y-4">
              {leadershipData.map((role, index) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl glass-panel border border-slate-200 dark:border-gray-800 hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-base font-semibold text-slate-900 dark:text-gray-100">{role.role}</h3>
                  <div className="flex items-center justify-between mt-1 mb-3 gap-3">
                    <span className="text-sm font-medium text-slate-600 dark:text-gray-400">{role.organization}</span>
                    <span className="text-xs font-mono text-primary flex-shrink-0">{role.date}</span>
                  </div>
                  {role.description && (
                    <p className="text-sm text-slate-500 dark:text-gray-400">{role.description}</p>
                  )}
                  {role.highlights && role.highlights.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {role.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-gray-300">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
