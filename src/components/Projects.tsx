'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Lock, Folder, Code } from 'lucide-react';
import { projectsData, Project } from '@/data/projects';
import { GithubIcon } from '@/components/icons';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'All' | 'Featured' | 'Individual' | 'Team'>('All');

  // Filter projects based on tab
  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'All') return true;
    return project.category === activeTab;
  });

  // Sort projects to ensure ONE EVENT is always first
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.id === 'one-event') return -1;
    if (b.id === 'one-event') return 1;
    return 0;
  });

  const tabs: ('All' | 'Featured' | 'Individual' | 'Team')[] = ['All', 'Featured', 'Individual', 'Team'];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-slate-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
            Projects & Assignments
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-gray-400">
            A showcase of my recent backend APIs, team collaborations, software methodologies documentation, and network engineering assignments.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl p-1 bg-slate-200/60 dark:bg-gray-900/60 border border-slate-300/30 dark:border-gray-800/40 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'text-white shadow'
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-lg bg-primary -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {tab === 'Individual' ? 'Individual Assignments' : tab === 'Team' ? 'Team Collaborations' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Projects */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full rounded-2xl glass-panel hover:shadow-xl hover:border-primary/20 dark:hover:border-primary/20 hover:translate-y-[-4px] transition-all duration-300 overflow-hidden relative group"
              >
                {/* Visual Accent Top Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${
                  project.id === 'one-event' 
                    ? 'from-indigo-500 via-purple-500 to-pink-500' 
                    : 'from-primary to-accent'
                }`} />

                <div className="p-6 flex flex-col flex-grow">
                  {/* Category / Subcategory Badge */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-flex items-center rounded-md bg-badge-bg px-2.5 py-0.5 text-xs font-medium text-badge-text">
                      {project.subCategory}
                    </span>
                    {project.inProgress && (
                      <span className="inline-flex items-center rounded-md bg-amber-500/10 dark:bg-amber-500/5 px-2 py-0.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
                        In Progress
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.id === 'one-event' ? <Code className="h-5 w-5 text-indigo-500" /> : <Folder className="h-5 w-5 text-primary" />}
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center text-xs px-2 py-1 rounded bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-400 border border-slate-200/50 dark:border-gray-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="mt-auto pt-4 border-t border-slate-200/40 dark:border-gray-800/50 flex items-center justify-between gap-4">
                    {/* View Repository Button (required for every project) */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-primary hover:text-accent dark:hover:text-accent transition-colors py-2 px-3 rounded-lg border border-primary/20 hover:border-accent/40 bg-primary/5 cursor-pointer"
                      >
                        <GithubIcon className="mr-1.5 h-4 w-4" />
                        View Repository
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-xs font-semibold text-slate-400 dark:text-gray-500 bg-slate-100/50 dark:bg-gray-900/50 py-2 px-3 rounded-lg border border-slate-200/50 dark:border-gray-800/50">
                        <Lock className="mr-1.5 h-3.5 w-3.5" />
                        Private Repository
                      </span>
                    )}

                    {/* Demo button (hidden when unavailable, as specified by PRD) */}
                    {/* Since there are no demo links in the specs, we do not render any Demo button, satisfying 'Hide demo button when unavailable' */}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
