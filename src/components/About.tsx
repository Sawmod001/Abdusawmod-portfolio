'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Database, Server, Shield, Brain, Palette } from 'lucide-react';
import SectionBackground from '@/components/SectionBackground';

const focuses = [
  { title: 'Frontend Engineering', description: 'Responsive interfaces in React, Next.js, Tailwind, Framer Motion, accessible and fast by default.', icon: <Palette className="h-5 w-5 text-amber-400" /> },
  { title: 'Backend Architecture', description: 'Scalable REST APIs, MVC, rate limiting and contract first design.', icon: <Server className="h-5 w-5 text-amber-400" /> },
  { title: 'Database Systems', description: 'Schemas and query tuning across MongoDB, PostgreSQL, MySQL.', icon: <Database className="h-5 w-5 text-amber-400" /> },
  { title: 'Secure Systems', description: 'JWT, RBAC, OAuth, OWASP fundamentals, data protection by default.', icon: <Shield className="h-5 w-5 text-amber-400" /> },
  { title: 'Applied AI', description: 'Python, LangChain, RAG, intelligent features that ship.', icon: <Brain className="h-5 w-5 text-amber-400" /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 bg-[#09080a] relative overflow-hidden">
      <SectionBackground variant="about" id="about" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_20%,black_50%,transparent_80%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-12">
          <h2 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] font-semibold leading-none tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>About</h2>
          <p className="mt-3 max-w-[62ch] font-sans text-[16px] leading-relaxed text-stone-400">Engineer who owns the whole build, schema to payment to deploy.</p>
          <div className="mt-5 h-px w-16 bg-amber-400/60" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.08 }} className="relative">
            <div className="absolute -left-4 top-0 bottom-0 hidden lg:block w-px bg-gradient-to-b from-amber-400/30 via-white/5 to-transparent" />
            <div className="space-y-6 max-w-[68ch]">
              <p className="font-sans text-[16.5px] sm:text-[18px] leading-[1.85] tracking-[-0.01em] text-stone-100 font-normal antialiased">
                Full stack software developer with 2+ years of experience across frontend, backend, cloud infrastructure and database design building interfaces in <span className="font-medium text-amber-300">React/Next.js</span>, APIs in <span className="font-medium text-amber-300">Node.js/Express</span> and deploying on AWS <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-xs font-medium text-amber-300">Certified Cloud Practitioner</span>. I build reliable, production-ready products end to end: architecting marketplaces and FinOps tools, engineering secure payment and auth workflows, and love problem solving.
              </p>
              <div className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_6px_18px_rgba(0,0,0,0.22)]">
                <p className="font-sans text-[14.5px] leading-relaxed text-stone-300 font-medium">Social impact advocate who believes talent built anywhere deserves a shot at global standards.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.14 }}>
            <div className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-stone-900/40 shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.06] via-transparent to-white/[0.02] pointer-events-none" />
              <div className="relative p-6 sm:p-7">
                <div className="relative mx-auto w-44 sm:w-48">
                  <div className="rounded-[14px] border border-white/10 bg-stone-800 p-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.32)]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] bg-stone-800">
                      <Image src="/photo.jpg" alt="Portrait of Abolaji Abdusawmod Akande" fill sizes="(max-width: 640px) 176px, 192px" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-[15px] font-semibold tracking-tight text-white">Abolaji Abdusawmod Akande</h3>
                  <p className="mt-1 font-mono text-xs tracking-wide text-stone-400">Software Engineer, Full Stack</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
              <div className="px-6 py-3 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {focuses.map((f) => (
            <div key={f.title} className="rounded-[14px] border border-white/10 bg-stone-900/30 p-5 shadow-[0_6px_18px_rgba(0,0,0,0.18)] hover:border-amber-500/15 transition-colors group">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] mb-3 group-hover:bg-amber-500/10 transition-colors">{f.icon}</div>
              <h3 className="text-[13.5px] font-semibold tracking-tight text-white">{f.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-stone-400">{f.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/10 to-transparent pointer-events-none" />
    </section>
  );
}
