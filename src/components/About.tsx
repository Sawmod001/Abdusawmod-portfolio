'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Database, Server, Shield, Brain } from 'lucide-react';

const focuses = [
  {
    title: 'Backend Architecture',
    description: 'Designing scalable and robust REST APIs, MVC patterns, and managing rate limiting.',
    icon: <Server className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Database Systems',
    description: 'Modeling schemas and optimizing queries across MongoDB, PostgreSQL, and MySQL.',
    icon: <Database className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Secure Systems',
    description: 'Implementing JWT, RBAC, OAuth, and adhering to OWASP fundamentals for data protection.',
    icon: <Shield className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Applied AI',
    description: 'Integrating Python, LangChain, and RAG pipelines to build intelligent features.',
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0c0a09] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] mix-blend-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary font-semibold tracking-wider uppercase">
            Who I am
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mt-2">About Me</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio — Stylish Pro Typography */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* subtle accent line */}
            <div className="absolute -left-4 top-0 bottom-0 hidden lg:block w-px bg-gradient-to-b from-amber-500/40 via-amber-500/10 to-transparent" />
            <div className="space-y-6">
              {/* Eyebrow + quote mark */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono tracking-[0.2em] text-amber-300 uppercase">Executive Summary</span>
                <span className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent" />
              </div>

              <div className="relative">
                <span className="absolute -left-2 -top-6 select-none font-serif text-6xl leading-none text-amber-500/20" aria-hidden>“</span>
                <p className="relative font-serif text-[17px] sm:text-[19px] leading-[1.85] tracking-[-0.015em] text-stone-200 font-light antialiased">
                  Full stack software developer with <span className="font-medium text-white">2+ years</span> of experience across <span className="font-medium text-white">frontend, backend, cloud infrastructure</span> and <span className="font-medium text-white">database design</span> building interfaces in <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent font-semibold">React/Next.js</span>, APIs in <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent font-semibold">Node.js/Express</span> and deploying on <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-xs font-sans font-semibold tracking-wide text-amber-300 align-middle">AWS <span className="text-amber-300">◆</span> Certified Cloud Practitioner</span>.
                </p>
              </div>

              <p className="font-sans text-[15.5px] sm:text-[16px] leading-[1.9] tracking-[-0.01em] text-gray-300/90 font-light">
                I build <span className="font-medium text-white">reliable, production-ready products end-to-end</span>: architecting and engineering system, secure payment, auth workflows and so on Also <em className="font-serif text-stone-100 not-italic font-normal">love creativity and problem solving</em>.
              </p>

              <div className="relative rounded-xl border border-amber-500/15 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 p-4 sm:p-5">
                <p className="font-serif text-[15px] sm:text-[16px] leading-relaxed tracking-[-0.01em] text-stone-300 font-light italic">
                  “Social impact advocate who believes <span className="not-italic font-medium text-white">talent built anywhere</span> deserves a shot at global standards.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* Identity card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="group relative overflow-hidden rounded-3xl border border-gray-800 bg-stone-900/40">
              {/* gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

              <div className="relative p-6 sm:p-8">
{/* Portrait */}
                <div className="relative mx-auto w-44 sm:w-52">
                  <div className="rounded-[1.35rem] bg-gradient-to-br from-gray-600 via-gray-900 to-gray-600 p-[3px] shadow-2xl">
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.15rem] bg-gray-800">
                      <Image
                        src="/photo.jpg"
                        alt="Portrait of Abolaji Abdusawmod Akande"
                        fill
                        sizes="(max-width: 640px) 176px, 208px"
                        priority={false}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <div className="mx-auto mt-3 h-px w-3/4 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </div>

                {/* Identity */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-white">Abolaji Abdusawmod Akande</h3>
                  <p className="mt-1 text-sm font-medium text-amber-300">
Software Engineer | Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Focus areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {focuses.map((focus) => (
            <div
              key={focus.title}
              className="p-6 rounded-2xl glass-panel border border-gray-800 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {focus.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{focus.title}</h3>
              <p className="text-sm text-gray-400">{focus.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}