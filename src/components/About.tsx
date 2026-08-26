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
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-lg prose-invert text-gray-400"
          >
            <p>
              I&apos;m a software engineer specializing in full-stack development with a strong focus on backend systems, API architecture and database design.
            </p>
            <p>
              I build reliable products that solve real problems, architecting end-to-end marketplaces, engineering secure payment workflows and applying AI to healthcare triage. Solving problems is what pulls me into a project in the first place and I care as much about the code being clean and production-ready as I do about who it actually serves.
            </p>
            <p>
              I&apos;m also a social impact advocate at heart. I love volunteering and I believe talent built anywhere deserves a shot at global standards. I&apos;ve spent the last two years building, leading and turning local potential into global-standard quality.
            </p>
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