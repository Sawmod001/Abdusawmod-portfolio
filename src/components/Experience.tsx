'use client';

import { motion } from 'framer-motion';
import { experienceData } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-stone-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-mono text-primary font-semibold tracking-wider uppercase">
            Career journey
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mt-2">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 sm:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-[#0c0a09] -translate-x-1/2 z-10" />

                  {/* Date (Desktop) */}
                  <div className={`hidden sm:block w-1/2 ${isEven ? 'text-left pl-8' : 'text-right pr-8'}`}>
                    <span className="text-sm font-mono font-medium text-primary">{exp.date}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-8' : 'sm:pl-8'} pl-10 sm:pl-0 mt-4 sm:mt-0`}>
                    <div className="p-6 rounded-2xl glass-panel border border-gray-800 hover:border-primary/30 transition-colors shadow-sm">
                      {/* Date (Mobile) */}
                      <span className="sm:hidden text-xs font-mono font-medium text-primary block mb-2">{exp.date}</span>
                      
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-gray-400 font-medium mb-4">{exp.company}</p>
                      
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex text-sm text-gray-300">
                            <span className="mr-2 text-primary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
