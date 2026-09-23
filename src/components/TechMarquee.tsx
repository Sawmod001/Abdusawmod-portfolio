const STACK = ['JavaScript','TypeScript','React','Next.js','Node.js','Express','MongoDB','PostgreSQL','Supabase','REST APIs','Tailwind CSS','Framer Motion'];

export default function TechMarquee() {
  const items = [...STACK, ...STACK];
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-5 backdrop-blur-[2px]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0c0a09] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0c0a09] to-transparent" />
      <div className="marquee-track flex w-max items-center">
        {items.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="mx-8 font-mono text-[11px] tracking-[0.22em] text-stone-400 uppercase">{item}</span>
            <span className="h-1 w-1 rounded-full bg-amber-400/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
