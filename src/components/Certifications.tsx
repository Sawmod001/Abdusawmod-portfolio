'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { certificationsData } from '@/data/certifications';
import { leadershipData } from '@/data/leadership';
import TiltCard from '@/components/TiltCard';
import SectionBackground from '@/components/SectionBackground';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-28 bg-[#0c0c0e] relative overflow-hidden">
      <SectionBackground variant="certs" id="certifications" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] font-semibold leading-none tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>Proof</h2>
          <p className="mt-3 max-w-[60ch] font-serif text-[15px] leading-relaxed text-stone-400 font-light">Certifications, leadership and community, verified, not claimed.</p>
          <div className="mt-5 h-px w-16 bg-amber-400/60" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.03] shadow-[0_10px_28px_rgba(0,0,0,0.22)]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="lg:col-span-3 relative bg-[#0f172a] flex items-center justify-center min-h-[240px] p-0">
              <Image src="/aws-certified.svg" alt="AWS Certified Cloud Practitioner" width={800} height={450} className="w-full h-auto object-contain" />
            </div>
            <div className="lg:col-span-2 p-6 sm:p-7 flex flex-col justify-center">
              <span className="inline-flex w-fit rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] tracking-wide text-amber-300">★ CERTIFIED</span>
              <h3 className="mt-3 text-[16px] font-semibold tracking-tight text-white">AWS Certified Cloud Practitioner</h3>
              <p className="mt-1 font-mono text-xs tracking-widest text-amber-300">AMAZON WEB SERVICES</p>
              <div className="mt-4 rounded-[12px] border border-white/10 bg-stone-900/40 p-3">
                <p className="font-mono text-[11px] leading-relaxed text-stone-300 break-all"><span className="font-semibold text-white">Validation:</span> bb8f90d8690c4f40bc12966b01a1a61b</p>
                <p className="font-mono text-[11px] text-stone-400 break-all"><span className="font-semibold text-white">Validate:</span> <a href="https://aws.amazon.com/verification" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 underline underline-offset-2">aws.amazon.com/verification</a></p>
                <div className="mt-2 flex flex-wrap gap-3 font-mono text-[11px] text-stone-400"><span>Issued Sep 9 2026</span><span>Expires Sep 9 2029</span></div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {certificationsData.filter(c => c.id !== 'aws-cp').map((cert, index) => (
            <TiltCard key={cert.id} max={3} className="h-full">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }} className="flex h-full flex-col rounded-[14px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:border-white/15 transition-colors">
                <h4 className="text-[13.5px] font-semibold leading-snug text-white">{cert.title}</h4>
                <p className="mt-1.5 font-mono text-xs text-amber-300">{cert.issuer}</p>
                {cert.description && <p className="mt-1 font-mono text-[11px] leading-relaxed text-stone-500">{cert.description}</p>}
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="mt-10">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-lg font-semibold tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>Leadership & Community</h3>
            <span className="font-mono text-xs text-stone-500">{leadershipData.length} roles</span>
          </div>
          <div className="mt-2 h-px bg-white/10" />
          <div className="mt-4 flex flex-wrap gap-2.5">
            {leadershipData.map((role, index) => (
              <motion.div key={role.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.03 }} className="flex-1 min-w-[240px] rounded-[14px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_6px_18px_rgba(0,0,0,0.14)]">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-[13.5px] font-semibold leading-snug text-white pr-2">{role.role}</h4>
                  <span className="shrink-0 font-mono text-[11px] text-stone-500">{role.date}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-stone-500">{role.organization}</p>
                {role.highlights && <ul className="mt-3 space-y-1">{role.highlights.map((h) => <li key={h} className="flex gap-1.5 text-xs leading-relaxed text-stone-300"><span className="mt-1.5 h-1 w-1 rounded-full bg-stone-500 shrink-0" />{h}</li>)}</ul>}
                {!role.highlights && role.description && <p className="mt-2 text-xs leading-relaxed text-stone-400">{role.description}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </section>
  );
}

