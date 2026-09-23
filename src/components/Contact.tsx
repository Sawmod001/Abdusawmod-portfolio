'use client';

import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon, XIcon } from '@/components/icons';
import SectionBackground from '@/components/SectionBackground';

export default function Contact() {
  const socials = [
    { name: 'GitHub', username: 'Sawmod001', href: 'https://github.com/Sawmod001', icon: <GithubIcon className="h-5 w-5 text-stone-200" /> },
    { name: 'LinkedIn', username: 'Abdusawmod Abolaji', href: 'https://www.linkedin.com/in/abdusawmod-abolaji-b25604245/', icon: <LinkedinIcon className="h-5 w-5 text-[#0077b5]" /> },
    { name: 'X', username: '@Abolajisawmod', href: 'https://x.com/Abolajisawmod', icon: <XIcon className="h-5 w-5 text-stone-200" /> },
    { name: 'Facebook', username: 'Sawmod Abolaji', href: 'https://web.facebook.com/sawmodabolaji', icon: <FacebookIcon className="h-5 w-5 text-[#1877f2]" /> },
    { name: 'Instagram', username: '@abdusawmod_abolaji', href: 'https://www.instagram.com/abdusawmod_abolaji/', icon: <InstagramIcon className="h-5 w-5 text-[#e1306c]" /> },
  ];

  return (
    <section id="contact" className="py-24 sm:py-28 bg-[#09080a] relative overflow-hidden">
      <SectionBackground variant="contact" id="contact" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="mb-8">
          <h2 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] font-semibold leading-none tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>Contact</h2>
          <p className="mt-3 max-w-[58ch] font-serif text-[15px] leading-relaxed text-stone-400 font-light">A direct line, email or socials, your call.</p>
          <div className="mt-5 h-px w-16 bg-amber-400/60" />
        </motion.div>

        <div className="rounded-[16px] border border-white/10 bg-white/[0.03] p-5 sm:p-6 shadow-[0_10px_28px_rgba(0,0,0,0.22)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {socials.map((s, i) => (
              <motion.a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }} className="flex items-center justify-between rounded-[14px] border border-white/10 bg-white/[0.03] p-4 hover:border-white/15 hover:bg-white/[0.05] transition-colors group">
                <div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] group-hover:bg-white/[0.06] transition-colors">{s.icon}</div><div><h3 className="text-[13.5px] font-semibold text-white">{s.name}</h3><p className="font-mono text-xs text-stone-500">{s.username}</p></div></div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-stone-500 group-hover:text-amber-300 group-hover:border-amber-500/20 transition text-xs">→</span>
              </motion.a>
            ))}
            <motion.a href="mailto:sawmodabolaji@gmail.com" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }} className="sm:col-span-2 lg:col-span-3 flex items-center justify-between rounded-[14px] border border-amber-500/20 bg-amber-500/10 p-4 hover:bg-amber-500/15 transition group">
              <div><p className="font-mono text-xs tracking-wide text-amber-300">Email</p><p className="mt-1 font-mono text-sm text-white break-all">sawmodabolaji@gmail.com</p></div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-stone-900 group-hover:translate-x-0.5 transition-transform text-sm">→</span>
            </motion.a>
          </div>
          <p className="mt-4 font-mono text-[11px] text-stone-500">Response typically within a day.</p>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </section>
  );
}

