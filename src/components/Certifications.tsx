'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { certificationsData } from '@/data/certifications';
import { leadershipData } from '@/data/leadership';
import TiltCard from '@/components/TiltCard';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#0c0a09] relative overflow-hidden">
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
          <h2 className="text-3xl font-bold text-white sm:text-4xl mt-2">
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
            <h3 className="text-xl font-bold text-white">Certifications & Recognition</h3>
            <div className="h-1 w-12 bg-primary mt-3 rounded-full" />
          </motion.div>

          {/* Featured AWS Certified Cloud Practitioner - visual badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-lg shadow-amber-500/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 relative bg-[#1e293b] p-0 flex items-center justify-center min-h-[220px]">
                <Image
                  src="/aws-certified.svg"
                  alt="AWS Certified Cloud Practitioner - Abdusawmod Abolaji"
                  width={800}
                  height={450}
                  className="w-full h-auto object-contain"
                  priority={false}
                />
              </div>
              <div className="lg:col-span-2 p-6 sm:p-7 flex flex-col justify-center bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10">
                <span className="inline-flex w-fit items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[10px] font-mono font-medium tracking-wider text-amber-300">★ CERTIFIED</span>
                <h4 className="mt-3 text-lg font-bold text-white">AWS Certified Cloud Practitioner</h4>
                <p className="mt-1 text-xs font-medium tracking-widest text-amber-300">AMAZON WEB SERVICES</p>
                <div className="mt-4 space-y-2 rounded-xl border border-amber-500/20 bg-slate-900/60 p-3 overflow-hidden">
                  <p className="font-mono text-[11px] leading-relaxed text-gray-300 break-all"><span className="font-semibold text-white">Validation:</span> bb8f90d8690c4f40bc12966b01a1a61b</p>
                  <p className="font-mono text-[11px] text-gray-300 break-all"><span className="font-semibold text-white">Validate at:</span> <a href="https://aws.amazon.com/verification" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 underline underline-offset-2 break-all">aws.amazon.com/verification</a></p>
                  <div className="flex flex-wrap gap-3 pt-1 font-mono text-[11px] text-gray-400">
                    <span><span className="text-gray-200 font-semibold">Issued:</span> Sep 9, 2026</span>
                    <span><span className="text-gray-200 font-semibold">Expires:</span> Sep 9, 2029</span>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-gray-400">Abdusawmod Abolaji — globally validated by AWS Certification.</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificationsData.filter(c => c.id !== 'aws-cp').map((cert, index) => (
              <TiltCard key={cert.id} max={6} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex h-full flex-col p-5 rounded-xl glass-panel border border-gray-800 hover:border-primary/30 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-gray-100 leading-snug">{cert.title}</h4>
                  <p className="mt-2 text-xs font-medium text-primary">{cert.issuer}</p>
                  {cert.description && (
                    <p className="mt-1 font-mono text-[10px] text-gray-500">{cert.description}</p>
                  )}
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
              <h3 className="text-xl font-bold text-white">Leadership & Community</h3>
              <span className="text-xs font-mono text-gray-500">{leadershipData.length} roles</span>
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
                  className="flex h-full flex-col p-4 rounded-xl glass-panel border border-gray-800 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-gray-100 leading-snug">{role.role}</h4>
                    <span className="shrink-0 font-mono text-[11px] text-primary">{role.date}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-gray-400">{role.organization}</p>

                  {role.highlights && role.highlights.length > 0 ? (
                    <ul className="mt-3 space-y-1.5">
                      {role.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs leading-relaxed text-gray-300">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : role.description ? (
                    <p className="mt-2 text-xs leading-relaxed text-gray-400">{role.description}</p>
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