export interface ProjectDetail {
  label: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Featured' | 'Full Stack' | 'Backend' | 'API' | 'AI' | 'Frontend' | 'Other';
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  inProgress?: boolean;
  highlights?: string[];
  details?: ProjectDetail[];
}

export const projectsData: Project[] = [
  {
    id: 'clockhost',
    title: 'ClockHost',
    category: 'Featured',
    description: 'A Nigerian two-sided marketplace connecting people looking for places to book with hosts who have spaces or short-term accommodation to offer.',
    liveUrl: 'https://clockhost.vercel.app/',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Clerk', 'Paystack', 'Google Gemini', 'Zod'],
    highlights: [
      'Role-based accounts: Guest, Venue Host, Shortlet Host, Admin',
      'Capacity, Exclusive, Shortlet & Group booking engines',
      'Paystack payments in Nigerian Naira with webhook verification',
      'AI-powered assistant via Google Gemini + WhatsApp Bot',
      'Full admin dashboard with user/listing/verification management',
    ],
    details: [
      {
        label: 'Tech Stack',
        items: [
          'Frontend: Next.js 16, React 19, Tailwind CSS 4, Lucide React, Framer Motion',
          'Backend: Next.js API Routes, Zod 4.4.3, Node.js',
          'Database: Supabase PostgreSQL, PostGIS, 30+ relational tables',
          'Auth: Clerk + jose JWT/JWKS verification',
          'Payments: Paystack (init, verify, webhooks, refunds)',
          'AI: Google Gemini API',
          'WhatsApp: WhatsApp Bot + Gemini',
          'Deployment: Vercel + Vercel Cron',
          'Security: JWT, CSRF, security headers, SQL-injection protection, webhook HMAC',
          'Timezone/Currency: Africa/Lagos (WAT), Nigerian Naira (kobo)',
        ],
      },
      {
        label: 'Core Features',
        items: [
          'Listings: Venues, Outdoor Spaces, Shortlet Apartments',
          'Listing Management: Draft, submission, review, approval, suspension',
          'Availability Engine: Weekly schedules, special dates, blocked dates, time slots',
          'Capacity Booking: Book spaces based on capacity',
          'Exclusive Booking: Reserve an entire space for a period',
          'Shortlet Booking: Monthly/nightly accommodation booking',
          'Group Booking: One organizer pays for a group',
          'Soft Holds: Temporarily reserve capacity before approval/payment',
          'Pricing Engine: Rates, headcount, duration, add-ons, discounts, fees',
          'Search & Discovery: Location-based search, proximity, activities, categories',
          'Notifications: Booking and system notifications with preferences',
          'Messaging: Conversations and messages',
          'Reviews: Reviews after completed bookings',
          'Trust & Safety: Verification, reports, disputes, audit logs',
        ],
      },
      {
        label: 'How It Works',
        items: [
          'Guest: Sign up → Complete profile → Discover → Select listing → Check availability → Hold slot → Host approves → Pay with Paystack → Booking confirmed → Check-in → Complete → Review',
          'Host: Sign up → Choose host type → Create listing → Submit → Admin approves → Set availability → Manage bookings → Earn',
          'Payment: Booking → Payment initialization → Paystack checkout → Webhook verification → Payment confirmed → Booking confirmed',
        ],
      },
    ],
  },
  {
    id: 'nairaguard',
    title: 'NairaGuard',
    category: 'Full Stack',
    description: 'Naira-aware AWS FinOps intelligence platform that helps Nigerian startups and professionals understand AWS spending, identify credible cloud-waste opportunities, and translate potential savings into estimated Naira impact, Demo-First with deterministic FX translation.',
    liveUrl: 'https://nairaguard-ng.vercel.app',
    githubUrl: 'https://github.com/Sawmod001/NAIRAGUARD',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth 5', 'Tailwind CSS', 'Zod', 'Vitest'],
    highlights: [
      'Demo-First FinOps: 5 realistic scenarios with Cost Optimization Hub & Compute Optimizer evidence, no AWS credentials required',
      'Deterministic Naira translation: USD × timestamped FX rate (e.g. $118.70 × ₦1,550 = ₦183,985 est.), AI explains, never invents savings',
      'Provider abstraction: interchangeable Demo & Live AWS providers without rewriting business logic',
      'Evidence-led recommendations: source, freshness, effort/risk/restart/rollback context for every opportunity',
      'Tenant-isolated, read-only MVP with full traceability, every number has a source',
    ],
    details: [
      {
        label: 'Tech Stack',
        items: [
          'Frontend: Next.js 16.3.5 (App Router), React 19.2.3, Tailwind CSS 4.1',
          'Backend: Next.js API Routes, Zod 4.6.5, server-only, Node.js',
          'Database: Prisma 6.14 + PostgreSQL, pnpm + Vercel deployment',
          'Auth: NextAuth 5.0 (Auth.js beta.32) + @auth/prisma-adapter + bcryptjs',
          'Testing: Vitest 5 (unit / contract / integration / e2e)',
          'Domain: AWS Billing + Cost Optimization Hub + Compute Optimizer evidence model',
        ],
      },
      {
        label: 'Core Features',
        items: [
          'SEE: current spend, period comparison, service & regional breakdown, cost trend & drivers',
          'SAVE: rightsizing, idle, storage & commitment recommendations with est. monthly savings',
          'PROTECT: USD cost + estimated NGN equivalent with explicit FX rate / timestamp / source',
          'Recommendation detail: current vs recommended config, est. cost/savings, savings %, effort, restart & rollback',
          'AI explanation layer: summarizes & prioritizes evidence, never creates savings numbers',
          'Demo Mode: 5 scenarios (Balanced, Waste-heavy, EC2-heavy, Storage-heavy, FX Pressure), clearly labelled synthetic data',
        ],
      },
      {
        label: 'How It Works',
        items: [
          'Flow: Connect → Normalize (provider → consistent model) → Calculate (deterministic) → Explain (AI on evidence)',
          'User journey: Sign in → Dashboard → Inspect spend → Identify drivers → Inspect savings → See USD + est. NGN → Decide next action',
          'Principles: deterministic financial truth, tenant isolation on server, business logic separated from UI, provider abstraction',
        ],
      },
    ],
  },
  {
    id: 'hakeela',
    title: 'Hakeela',
    category: 'Full Stack',
    description: '"Building the Future of Tech Inclusion one community at a time", Using AI + Empathy to create an inclusive and sustainable future of edtech for young Africans that are marginalized, underprivileged, and specially assisted.',
    liveUrl: 'https://www.hakeela.org',
    tags: ['AI', 'EdTech', 'Social Impact', 'Community'],
  },
  {
    id: 'bolaji-3d',
    title: 'Stunning 3D Website',
    category: 'Frontend',
    description: 'Immersive 3D portfolio experience built with HTML, CSS & Spline, blending interactive 3D scenes, smooth animations, and responsive layout for a stunning visual storytelling.',
    liveUrl: 'https://bolaji-inky.vercel.app/',
    githubUrl: 'https://github.com/Sawmod001/BOLAJI',
    tags: ['HTML', 'CSS', 'Spline', '3D', 'Responsive'],
  },
  {
    id: 'card-validation-api',
    title: 'Card Validation API',
    category: 'API',
    description: 'A single POST endpoint that determines whether a card number is structurally valid, via the Luhn checksum, card-network prefix (IIN) matching, and network-specific length rules, run as an ordered validation pipeline. Live on Render.',
    liveUrl: 'https://card-number-validation-api-op27.onrender.com',
    githubUrl: 'https://github.com/Sawmod001/card-number-validation-api',
    tags: ['Node.js', 'Express', 'REST API', 'Luhn', 'Render'],
    highlights: [
      'POST /cards/validate { cardNumber: "4111111111111111" } → { valid: true, scheme: "visa" }',
      'Ordered pipeline: Luhn checksum → IIN prefix → length rules',
      'Auto-deploy from main on Render',
    ],
  }
];

