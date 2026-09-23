import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import { projectsData } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const allowed = new Set(['clockhost', 'nairaguard']);

export function generateStaticParams() {
  return [{ id: 'clockhost' }, { id: 'nairaguard' }];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = projectsData.find((x) => x.id === id);
  if (!p) return {};
  return { title: `${p.title}, Case Study`, description: p.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!allowed.has(id)) notFound();
  const project = projectsData.find((p) => p.id === id);
  if (!project) notFound();

  const isClock = id === 'clockhost';
  const isNaira = id === 'nairaguard';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#09090b] relative overflow-hidden">
        {/* premium motion gradient field */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_20%_12%,rgba(251,146,60,0.12),transparent_62%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_22%,rgba(251,191,36,0.08),transparent_62%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 relative">
          <Link href="/#projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-xs tracking-wide text-stone-300 hover:border-white/15 hover:text-white transition">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to projects
          </Link>

          {/* hero card */}
          <div className="mt-8 overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.32)]">
            <div className="relative p-7 sm:p-9">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.07] via-transparent to-orange-500/[0.06] pointer-events-none" />
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/10 blur-[70px] pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="font-mono text-[11px] tracking-[0.14em] text-amber-300 uppercase">{project.category}, Case Study</span>
                </div>
                <h1 className="mt-4 font-display text-[clamp(1.9rem,6vw,3.2rem)] font-semibold leading-none tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>{project.title}</h1>
                <p className="mt-4 max-w-3xl font-serif text-[16.5px] leading-relaxed text-stone-300 font-light">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((t) => <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-stone-300">{t}</span>)}
                </div>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-100 transition shadow-sm">Live, {new URL(project.liveUrl).hostname} <ExternalLink className="h-4 w-4 opacity-60" /></a>
                )}
                {/* keep pics showing, preview persists on detail page */}
                {isNaira && (
                  <div className="mt-7 overflow-hidden rounded-[12px] border border-white/10 bg-black">
                    <Image src="/nairaguard-preview.png" alt="NairaGuard preview, AWS FinOps with Naira" width={1200} height={675} className="w-full h-auto object-cover" priority />
                  </div>
                )}
                {isClock && (
                  <div className="mt-7 overflow-hidden rounded-[12px] border border-white/10 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-stone-900 p-4">
                    <div className="rounded-[10px] border border-white/10 bg-stone-900/70 overflow-hidden">
                      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2"><span className="h-2.5 w-2.5 rounded-full bg-red-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-green-400/80" /><span className="ml-2 font-mono text-[11px] text-stone-500">clockhost.vercel.app, live marketplace</span></div>
                      <div className="p-4 grid grid-cols-3 gap-3">
                        <div className="col-span-3 h-20 rounded-lg bg-gradient-to-br from-amber-400/30 to-orange-400/20" />
                        <div className="h-14 rounded-lg bg-white/5" />
                        <div className="h-14 rounded-lg bg-white/5" />
                        <div className="h-14 rounded-lg bg-white/5" />
                      </div>
                    </div>
                    <p className="mt-3 text-center font-mono text-xs text-stone-400">ClockHost preview, full marketplace + bookings + Paystack</p>
                  </div>
                )}
              </div>
            </div>

            {project.highlights && (
              <div className="border-t border-white/10 bg-white/[0.02] p-6 sm:p-7">
                <h2 className="font-mono text-xs tracking-[0.14em] text-stone-400 uppercase">What shipped</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2.5 rounded-[12px] border border-white/10 bg-white/[0.03] p-3.5 text-[13.5px] leading-relaxed text-stone-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />{h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.details && (
              <div className="border-t border-white/10 p-6 sm:p-7">
                <div className="grid gap-6">
                  {project.details.map((section) => (
                    <div key={section.label} className="rounded-[14px] border border-white/10 bg-stone-900/30 p-5 sm:p-6">
                      <h3 className="font-display text-[15px] font-semibold tracking-tight text-white uppercase" style={{ fontFamily: 'var(--font-teko)' }}>{section.label}</h3>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-2 text-[13px] leading-relaxed text-stone-400"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-stone-600" />{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isClock && (
              <div className="border-t border-white/10 p-6 sm:p-7 bg-gradient-to-br from-amber-500/[0.04] to-transparent">
                <h3 className="font-mono text-xs tracking-[0.14em] text-stone-400 uppercase">Flow</h3>
                <p className="mt-3 font-serif text-sm leading-relaxed text-stone-300">Guest → profile → discover → hold → host approves → Paystack → confirmed → check-in → review. Host → listing → submit → admin approves → availability → bookings → earn.</p>
              </div>
            )}
            {isNaira && (
              <div className="border-t border-white/10 p-6 sm:p-7 bg-gradient-to-br from-sky-500/[0.04] to-transparent">
                <h3 className="font-mono text-xs tracking-[0.14em] text-stone-400 uppercase">Principles</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-400">Deterministic truth · Tenant-isolated · Provider abstraction (Demo ↔ Live AWS) · AI explains, never invents. Every number has a source, FX timestamp, freshness.</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-stone-200 hover:bg-white/[0.07]">More work <ArrowRight className="h-4 w-4" /></Link>
            <a href="mailto:sawmodabolaji@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 hover:bg-stone-100">Email <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

