'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { GithubIcon } from '@/components/icons';
import TiltCard from '@/components/TiltCard';
import { projectsData, type Project } from '@/data/projects';
import SectionBackground from '@/components/SectionBackground';

const categoryStyles: Record<Project['category'], { chip: string; gradient: string; glow: string }> = {
  Featured: { chip: 'bg-amber-500/10 text-amber-300 border-amber-500/20', gradient: 'from-amber-500/20 via-orange-500/10 to-transparent', glow: 'group-hover:shadow-amber-500/10' },
  'Full Stack': { chip: 'bg-sky-500/10 text-sky-300 border-sky-500/20', gradient: 'from-sky-500/20 via-cyan-500/10 to-transparent', glow: 'group-hover:shadow-sky-500/10' },
  Backend: { chip: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent', glow: 'group-hover:shadow-emerald-500/10' },
  API: { chip: 'bg-amber-500/10 text-amber-300 border-amber-500/20', gradient: 'from-amber-500/20 via-orange-500/10 to-transparent', glow: 'group-hover:shadow-amber-500/10' },
  AI: { chip: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20', gradient: 'from-fuchsia-500/20 via-pink-500/10 to-transparent', glow: 'group-hover:shadow-fuchsia-500/10' },
  Frontend: { chip: 'bg-violet-500/10 text-violet-300 border-violet-500/20', gradient: 'from-violet-500/20 via-purple-500/10 to-transparent', glow: 'group-hover:shadow-violet-500/10' },
  Other: { chip: 'bg-slate-500/10 text-slate-300 border-slate-500/20', gradient: 'from-slate-500/20 via-gray-500/10 to-transparent', glow: 'group-hover:shadow-slate-500/10' },
};

const dedicated = new Set(['clockhost', 'nairaguard']);

export default function Projects() {
  const flagshipProject = projectsData.find((p) => p.id === 'clockhost');
  const selectedProjects = projectsData.filter((p) => p.id !== 'clockhost');

  return (
    <section id="projects" className="py-24 sm:py-28 bg-[#09080a] relative overflow-hidden">
      <SectionBackground variant="projects" id="projects" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="font-display text-[clamp(1.9rem,5vw,2.8rem)] font-semibold leading-none tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>Projects</h2>
          <p className="mt-3 max-w-[60ch] font-serif text-[15px] leading-relaxed text-stone-400 font-light">Flagship builds and selected work, production, not prototypes.</p>
          <div className="mt-5 h-px w-16 bg-amber-400/60" />
        </motion.div>

        {flagshipProject && (
          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="group relative mb-10 overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.03] shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-1/2 group-hover:translate-x-1/2" />
            </div>
            <span className="absolute left-6 top-6 z-10 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-mono text-xs font-medium text-amber-300">Flagship Project</span>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="order-2 flex flex-col justify-center p-8 lg:order-1 lg:col-span-6 lg:p-10">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>{flagshipProject.title}</h3>
                <p className="mt-3 font-serif text-[15.5px] leading-relaxed text-stone-300 font-light">{flagshipProject.description}</p>
                {flagshipProject.highlights && (
                  <ul className="mt-6 space-y-2.5">
                    {flagshipProject.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-stone-300"><span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />{point}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/projects/clockhost" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-100 transition">View case study <ArrowRight className="h-4 w-4" /></Link>
                  <a href={flagshipProject.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-stone-200 hover:bg-white/[0.08] transition"><ExternalLink className="h-4 w-4" /> Live</a>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative lg:col-span-6 min-h-[300px]">
                <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.12]" />
                <div className="absolute inset-8 sm:inset-10 flex items-center justify-center">
                  <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-stone-900/70 shadow-2xl backdrop-blur">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-red-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-green-400/80" /><span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-[10px] text-stone-500">clockhost.vercel.app</span></div>
                    <div className="p-5">
                      <div className="mb-4 flex items-center justify-between"><div className="h-3 w-16 rounded-full bg-white/10" /><div className="flex gap-1.5"><div className="h-2.5 w-2.5 rounded-full bg-white/10" /><div className="h-2.5 w-2.5 rounded-full bg-white/10" /></div></div>
                      <div className="grid grid-cols-2 gap-3"><div className="col-span-2 h-20 rounded-lg bg-gradient-to-br from-amber-400/40 to-orange-400/30" /><div className="h-16 rounded-lg bg-white/5" /><div className="h-16 rounded-lg bg-white/5" /></div>
                      <div className="mt-4 flex items-center justify-between"><div className="space-y-2"><div className="h-2.5 w-28 rounded-full bg-white/10" /><div className="h-2.5 w-20 rounded-full bg-white/5" /></div><div className="h-8 w-24 rounded-lg bg-amber-400" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }} className="mb-6">
          <h3 className="font-display text-lg font-semibold tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>Selected Work</h3>
          <div className="mt-2 h-px w-12 bg-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProjects.map((project, index) => {
            const style = categoryStyles[project.category] ?? categoryStyles.Other;
            const isDedicated = dedicated.has(project.id);
            return (
              <TiltCard key={project.id} max={4} className="h-full">
                <motion.article initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.45, delay: index * 0.05 }} className={`group flex h-full flex-col overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.03] shadow-[0_8px_20px_rgba(0,0,0,0.18)] hover:border-white/15 transition-colors ${style.glow}`}>
                  <div className={`relative h-36 flex-shrink-0 overflow-hidden border-b border-white/10 ${project.id === 'nairaguard' || project.id === 'hakeela' ? 'bg-black' : `bg-gradient-to-br ${style.gradient}`}`}>
                    {project.id === 'nairaguard' || project.id === 'hakeela' ? (
                      <>
                        <Image src={project.id === 'nairaguard' ? '/nairaguard-preview.png' : '/photo_2026-09-21_11-59-31.jpg'} alt={project.title} fill className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <span className="absolute left-3 top-3 font-mono text-2xl font-bold text-white/90 drop-shadow">{project.id === 'nairaguard' ? '02' : '03'}</span>
                        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2"><span className={`rounded-full border px-2.5 py-1 text-[10px] font-mono font-medium backdrop-blur bg-black/40 ${style.chip}`}>{project.category}</span></div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[radial-gradient(rgba(120,120,140,0.12)_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                        <span className="absolute left-4 top-4 font-mono text-3xl font-bold text-white/10 group-hover:text-amber-400/20 transition-colors">{String(index + 2).padStart(2, '0')}</span>
                        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2"><span className={`rounded-full border px-2.5 py-1 text-[10px] font-mono font-medium ${style.chip}`}>{project.category}</span>{project.inProgress && <span className="rounded-full bg-orange-900/30 px-2.5 py-1 text-[10px] uppercase tracking-wider text-orange-400">In Progress</span>}</div>
                      </>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h4 className="text-[17px] font-semibold tracking-tight text-white transition-colors group-hover:text-amber-300">{project.title}</h4>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-stone-400 line-clamp-3">{project.description}</p>
                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {project.highlights.slice(0, 2).map((point) => (
                          <li key={point} className="flex items-start gap-2 text-xs leading-relaxed text-stone-300"><span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-amber-400" />{point}</li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-stone-400">{tag}</span>)}
                      {project.tags.length > 4 && <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-stone-400">+{project.tags.length - 4}</span>}
                    </div>
                    <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
                      {isDedicated ? (
                        <Link href={`/projects/${project.id}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-xs font-semibold text-stone-900 hover:bg-stone-100 transition">View case study <ArrowRight className="h-3.5 w-3.5" /></Link>
                      ) : project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-3.5 py-2.5 text-xs font-semibold text-stone-950 shadow-sm hover:brightness-[1.04] transition"><ExternalLink className="h-3.5 w-3.5" /> Live</a>
                      ) : null}
                      {project.githubUrl && !isDedicated && !project.liveUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3.5 py-2.5 text-xs font-medium text-stone-300 hover:border-amber-500/30 hover:text-amber-300 transition"><GithubIcon className="h-4 w-4" /> Code</a>}
                      {isDedicated && project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 px-3.5 py-2.5 text-xs font-medium text-stone-300 hover:text-white transition"><ExternalLink className="h-3.5 w-3.5" /> Live</a>}
                    </div>
                  </div>
                </motion.article>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

