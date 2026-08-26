const STACK = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Supabase',
  'REST APIs',
  'Tailwind CSS',
  'Framer Motion',
];

export default function TechMarquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0c0a09]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0c0a09]" />

      <div className="marquee-track flex w-max items-center">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-stone-400"
          >
            <span className="mx-8">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
          </span>
        ))}
      </div>
    </div>
  );
}