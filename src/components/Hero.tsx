'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { useMounted } from '@/hooks/use-mounted';

// Subtle Text Reveal Effect (Aceternity style)
const TextReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
        hidden: {},
      }}
      className="inline-block"
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  const mounted = useMounted();

  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/Sawmod001',
      icon: <GithubIcon className="h-5 w-5" />,
      color: 'hover:text-black dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/abdusawmod-abolaji-b25604245',
      icon: <LinkedinIcon className="h-5 w-5" />,
      color: 'hover:text-[#0077b5]',
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20 sm:py-28"
    >
      {/* Sophisticated Dark Background (Aceternity inspired) */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-slate-50 dark:bg-[#030712]" />
      
      {/* Very subtle noise/grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-grid-pattern opacity-50 mix-blend-overlay" />
      
      {/* Ambient gradient spotlight */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] dark:bg-primary/5 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px] dark:bg-accent/5 -translate-x-1/3 translate-y-1/3" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-start justify-center max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono font-medium text-primary dark:text-indigo-300 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-900 dark:text-white mb-4">
              <span className="block text-2xl sm:text-3xl font-medium text-slate-500 dark:text-slate-400 mb-2">ABOLAJI ABDUSAWMOD AKANDE</span>
              {mounted && <TextReveal text="Software Engineer | Full Stack Developer" />}
              {!mounted && <span>Software Engineer | Full Stack Developer</span>}
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-gray-400 max-w-2xl font-light">
              Building reliable, scalable, and useful digital products. Focused on full-stack architecture, secure authentication systems, and practical AI integrations.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-white overflow-hidden transition-all hover:scale-[1.02] active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="/resume.pdf"
                download="Abolaji_Abdusawmod_Akande_CV.pdf"
                className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 dark:border-gray-800 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md px-8 py-3.5 text-sm font-medium text-slate-700 dark:text-gray-200 hover:bg-slate-100 dark:hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95"
              >
                Download CV
                <Download className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex items-center gap-6">
              <a href="mailto:sawmodabolaji@gmail.com" className="text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors flex items-center gap-2 text-sm font-mono">
                <Mail className="h-5 w-5" />
                sawmodabolaji@gmail.com
              </a>
              <div className="h-4 w-px bg-slate-300 dark:bg-gray-700" />
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-500 dark:text-gray-400 ${social.color} transition-colors`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border border-slate-300 dark:border-gray-700 flex justify-center p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
