'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-primary font-semibold tracking-wider uppercase">
            What I work with
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mt-2">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-panel border border-slate-200 dark:border-gray-800"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-gray-800 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-gray-300 border border-slate-200 dark:border-gray-700 transition-colors hover:border-primary/50 dark:hover:border-primary/50 hover:text-primary dark:hover:text-primary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
