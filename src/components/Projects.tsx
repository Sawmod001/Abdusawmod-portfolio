'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { projectsData, type Project } from '@/data/projects';

const categoryStyles: Record<Project['category'], { chip: string; gradient: string; glow: string }> = {
  Featured: {
    chip: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border-indigo-500/20',
    gradient: 'from-indigo-500/20 via-violet-500/10 to-transparent',
    glow: 'group-hover:shadow-indigo-500/10',
  },
  'Full Stack': {
    chip: 'bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/20',
    gradient: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    glow: 'group-hover:shadow-sky-500/10',
  },
  Backend: {
    chip: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    glow: 'group-hover:shadow-emerald-500/10',
  },
  API: {
    chip: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/20',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    glow: 'group-hover:shadow-amber-500/10',
  },
  AI: {
    chip: 'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-300 border-fuchsia-500/20',
    gradient: 'from-fuchsia-500/20 via-pink-500/10 to-transparent',
    glow: 'group-hover:shadow-fuchsia-500/10',
  },
  Other: {
    chip: 'bg-slate-500/10 text-slate-600 dark:text-slate-300 border-slate-500/20',
    gradient: 'from-slate-500/20 via-gray-500/10 to-transparent',
    glow: 'group-hover:shadow-slate-500/10',
  },
};

export default function Projects() {
  const flagshipProject = projectsData.find((p) => p.id === 'hostme');
  const selectedProjects = projectsData.filter((p) => p.id !== 'hostme');

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#030712] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] mix-blend-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary font-semibold tracking-wider uppercase">
            Selected engineering work
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl mt-2">Featured Work</h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
        </motion.div>

        {/* Flagship Showcase: HostMe */}
        {flagshipProject && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="group relative mb-24 overflow-hidden rounded-3xl border border-slate-200 dark:border-gray-800 bg-gradient-to-br from-slate-50 via-white to-indigo-50/50 dark:from-gray-900/60 dark:via-gray-950 dark:to-indigo-950/40 shadow-xl shadow-indigo-500/5"
          >
            {/* Animated spotlight sweep */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-1/2 group-hover:translate-x-1/2" />
            </div>

            {/* Category chip */}
            <span className="absolute left-6 top-6 z-10 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-300">
              Flagship Project
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Text content */}
              <div className="order-2 flex flex-col justify-center p-8 lg:order-1 lg:col-span-6 lg:p-12">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  {flagshipProject.title.split('—')[0].trim()}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600 dark:text-gray-400">
                  {flagshipProject.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {(
                    [
                      'Dual booking engines for exclusive-space and capacity-based reservations',
                      'MongoDB data layer for listings, bookings, payments, reviews and vendor roles',
                      'Split-settlement payment workflow with a booking-hold system to prevent double-booking',
                    ] as const
                  ).map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-600 dark:text-gray-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-gray-700 px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-gray-200 transition-all hover:border-primary/40 hover:text-primary dark:hover:text-indigo-300"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Repository
                  </a>
                  <a
                    href={flagshipProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Browser mockup preview */}
              <div className="order-1 lg:order-2 relative lg:col-span-6 min-h-[280px] sm:min-h-[360px]">
                <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.08] dark:opacity-[0.15]" />
                <div className="absolute inset-8 sm:inset-10 flex items-center justify-center">
                  <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200/70 dark:border-gray-700/60 bg-white/80 dark:bg-gray-900/70 shadow-2xl backdrop-blur">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 border-b border-slate-200/70 dark:border-gray-800 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                      <span className="ml-3 flex-1 truncate rounded-md bg-slate-100 dark:bg-gray-800 px-3 py-1 font-mono text-[10px] text-slate-400 dark:text-gray-500">
                        hostme-xbhx.vercel.app
                      </span>
                    </div>
                    {/* Mock UI */}
                    <div className="p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="h-3 w-16 rounded-full bg-slate-200 dark:bg-gray-700" />
                        <div className="flex gap-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-gray-700" />
                          <div className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-gray-700" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 h-20 rounded-lg bg-gradient-to-br from-indigo-400/40 to-violet-400/30" />
                        <div className="h-16 rounded-lg bg-slate-100 dark:bg-gray-800" />
                        <div className="h-16 rounded-lg bg-slate-100 dark:bg-gray-800" />
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="space-y-2">
                          <div className="h-2.5 w-28 rounded-full bg-slate-200 dark:bg-gray-700" />
                          <div className="h-2.5 w-20 rounded-full bg-slate-200/70 dark:bg-gray-800" />
                        </div>
                        <div className="h-8 w-24 rounded-lg bg-primary/90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Selected Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <span className="text-sm font-mono text-primary font-semibold tracking-wider uppercase">
              More engineering
            </span>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">Selected Work</h3>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProjects.map((project, index) => {
            const style = categoryStyles[project.category] ?? categoryStyles.Other;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg ${style.glow}`}
              >
                {/* Preview banner */}
                <div
                  className={`relative h-32 flex-shrink-0 overflow-hidden bg-gradient-to-br ${style.gradient} border-b border-slate-200/60 dark:border-gray-800/60`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(120,120,140,0.15)_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                  <span className="absolute left-4 top-4 font-mono text-3xl font-bold text-slate-900/10 dark:text-white/10 group-hover:text-primary/25 transition-colors">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2">
                    <span className={`rounded-full border px-2.5 py-1 text-[10px] font-mono font-medium ${style.chip}`}>
                      {project.category}
                    </span>
                    {project.inProgress && (
                      <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[10px] uppercase tracking-wider text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-6">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white transition-colors group-hover:text-primary dark:group-hover:text-indigo-300">
                    {project.title}
                  </h4>

                  <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2 py-1 font-mono text-[11px] text-slate-500 dark:bg-gray-800 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-[11px] text-slate-500 dark:bg-gray-800 dark:text-gray-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-gray-800">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-medium text-slate-600 dark:border-gray-700 dark:text-gray-300 transition-colors hover:border-primary/40 hover:text-primary dark:hover:text-indigo-300"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-primary/90"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}