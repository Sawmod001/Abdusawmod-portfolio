'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 });

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id);
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <motion.div className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left bg-gradient-to-r from-amber-400 to-orange-500" style={{ scaleX: progressScale }} aria-hidden="true" />
      <div className={`transition-all duration-500 ${scrolled ? 'glass-nav' : 'border-b border-transparent bg-transparent backdrop-blur-[2px]'}`}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[64px] items-center justify-between">
            <a href="#home" className="group flex items-center gap-2" aria-label="Home">
              <span className="font-display text-[22px] font-semibold tracking-tight text-stone-100 group-hover:text-amber-300 transition-colors" style={{ fontFamily: 'var(--font-teko)' }}>
                Abolaji<span className="text-amber-400">.dev</span>
              </span>
              <span className="hidden sm:inline-flex h-1.5 w-1.5 rounded-full bg-amber-400/80 mt-1" />
            </a>

            <div className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 backdrop-blur">
              {navItems.map((item) => {
                const active = activeSection === item.id;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={active ? 'true' : undefined}
                    className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide transition-colors duration-200 ${active ? 'text-stone-900' : 'text-stone-400 hover:text-stone-100'}`}
                  >
                    {active && <motion.span layoutId="nav-active" className="absolute inset-0 rounded-full bg-amber-400 shadow-sm" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                    <span className="relative">{item.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-white text-stone-900 px-4 py-2 text-xs font-semibold hover:bg-stone-100 transition-colors">Contact</a>
            </div>

            <div className="flex md:hidden items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-stone-300 cursor-pointer" aria-label="Toggle mobile menu" aria-expanded={isMobileMenuOpen} aria-controls="mobile-nav">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div key="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.26 }} className="md:hidden border-b border-white/10 bg-[#0c0a09]/95 backdrop-blur-xl overflow-hidden" id="mobile-nav">
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navItems.map((item, i) => (
                <motion.a key={item.name} href={item.href} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i, duration: 0.2 }} onClick={() => setIsMobileMenuOpen(false)} className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${activeSection === item.id ? 'text-amber-300 bg-amber-400/10' : 'text-stone-300 hover:bg-white/[0.06] hover:text-white'}`}>
                  {item.name}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-stone-900">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
