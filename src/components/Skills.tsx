'use client';

import { motion } from 'framer-motion';
import { Database, ShieldCheck, Cpu, Code2, Network, Server } from 'lucide-react';

interface SkillItem {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Backend Engineering',
      icon: <Server className="h-6 w-6 text-indigo-500" />,
      description: 'Building modern, reliable server systems, modular middleware, and secure API gateways.',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 92 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'TypeScript', level: 85 },
      ],
    },
    {
      title: 'Databases & Design',
      icon: <Database className="h-6 w-6 text-emerald-500" />,
      description: 'Designing transactional database structures, optimizing indexing, and scaling queries.',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 90 },
        { name: 'SQL Schema Design', level: 85 },
        { name: 'Aggregation Pipelines', level: 82 },
      ],
    },
    {
      title: 'Security & Auth',
      icon: <ShieldCheck className="h-6 w-6 text-amber-500" />,
      description: 'Implementing robust security practices, encrypted communications, and token management.',
      skills: [
        { name: 'JWT Auth', level: 92 },
        { name: 'CORS & CORS Headers', level: 90 },
        { name: 'Hashing & Encryption', level: 88 },
        { name: 'Role-Based Access (RBAC)', level: 85 },
      ],
    },
    {
      title: 'Testing & QA',
      icon: <Cpu className="h-6 w-6 text-rose-500" />,
      description: 'Writing software with automated unit and integration tests to ensure code quality.',
      skills: [
        { name: 'TDD (Test-Driven Dev)', level: 88 },
        { name: 'Jest Framework', level: 85 },
        { name: 'Supertest API Testing', level: 85 },
        { name: 'Code Quality Assurance', level: 90 },
      ],
    },
    {
      title: 'Git & SDLC',
      icon: <Code2 className="h-6 w-6 text-blue-500" />,
      description: 'Utilizing version control conventions and software development lifecycle models.',
      skills: [
        { name: 'GitHub Flow', level: 95 },
        { name: 'Branching & Merge Reviews', level: 92 },
        { name: 'Agile & SDLC Models', level: 88 },
        { name: 'CI/CD Concepts', level: 80 },
      ],
    },
    {
      title: 'Networks & Protocols',
      icon: <Network className="h-6 w-6 text-violet-500" />,
      description: 'Understanding low-level connection frameworks, domain lookups, and protocol parameters.',
      skills: [
        { name: 'TCP/IP Model', level: 85 },
        { name: 'DNS Resolution', level: 90 },
        { name: 'HTTP/S Protocols', level: 92 },
        { name: 'Client-Server Architecture', level: 95 },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-grid-pattern relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary-glow blur-3xl opacity-50" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
            Technical Expertise
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-gray-400">
            A comprehensive overview of my backend skill set, databases, security concepts, and foundational software engineering methodologies.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="flex flex-col h-full rounded-2xl glass-panel p-6 hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-300 relative group"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-gray-805 border border-slate-200/50 dark:border-gray-800/60 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 dark:text-gray-400 mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills List */}
              <div className="space-y-4 mt-auto">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-gray-300 mb-1">
                      <span>{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-slate-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' as const, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
