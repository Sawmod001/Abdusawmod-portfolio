'use client';

import { motion } from 'framer-motion';
import { Database, Server, Shield, Brain } from 'lucide-react';

export default function About() {
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

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#030712] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] mix-blend-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">About Me</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {focuses.map((focus, index) => (
              <div 
                key={index}
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
      </div>
    </section>
  );
}
