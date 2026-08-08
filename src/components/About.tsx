'use client';

import { motion } from 'framer-motion';
import { MapPin, Database, Server, Shield, Brain, FolderGit2, GraduationCap, HeartHandshake, Briefcase } from 'lucide-react';

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

const stats = [
  { label: 'Projects', value: '6', icon: <FolderGit2 className="h-4 w-4" /> },
  { label: 'Internships', value: '2', icon: <Briefcase className="h-4 w-4" /> },
  { label: 'Leadership Roles', value: '8', icon: <HeartHandshake className="h-4 w-4" /> },
  { label: 'CGPA', value: '4.10', icon: <GraduationCap className="h-4 w-4" /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#030712] relative">
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
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mt-2">About Me</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-lg dark:prose-invert text-slate-600 dark:text-gray-400"
          >
            <p>
              I am a Software Engineer based in Ilorin, Nigeria, specializing in full-stack development with a strong focus on backend systems, API architecture, and database design.
            </p>
            <p>
              I build reliable digital products that solve real problems. Whether it&apos;s developing an end-to-end booking marketplace, engineering secure payment workflows, or integrating applied AI for healthcare triage, I focus on delivering clean, maintainable, and production-ready code.
            </p>
            <p>
              Currently pursuing a B.Sc. in Science Education at the University of Ilorin (CGPA: 4.10), I balance my academic rigor with practical software engineering experience and community leadership.
            </p>
          </motion.div>

          {/* Identity card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-gray-800 bg-slate-50/80 dark:bg-gray-900/40">
              {/* gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

              <div className="relative p-6 sm:p-8">
                {/* Portrait */}
                <div className="relative mx-auto w-44 sm:w-56">
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary via-accent to-transparent opacity-60 blur-sm transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] border-2 border-white/80 dark:border-gray-800/80 bg-slate-200 dark:bg-gray-800 shadow-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/photo.jpg"
                      alt="Portrait of Abolaji Abdusawmod Akande"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Identity */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Abolaji Abdusawmod Akande</h3>
                  <p className="mt-1 text-sm font-medium text-primary dark:text-indigo-300">
                    Software Engineer | Full Stack Developer
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary dark:text-indigo-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available for opportunities
                  </span>
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
                    <MapPin className="h-3.5 w-3.5" />
                    Ilorin, Nigeria
                  </div>
                </div>

                {/* Quick stats */}
                <div className="mt-6 grid grid-cols-4 gap-2 border-t border-slate-200/70 pt-5 dark:border-gray-800">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {stat.icon}
                      </div>
                      <div className="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</div>
                      <div className="text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
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
              className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {focus.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{focus.title}</h3>
              <p className="text-sm text-slate-500 dark:text-gray-400">{focus.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}