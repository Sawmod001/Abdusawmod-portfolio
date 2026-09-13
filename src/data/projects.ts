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
    id: 'bolaji-3d',
    title: 'Stunning 3D Website',
    category: 'Frontend',
    description: 'Immersive 3D portfolio experience built with HTML, CSS & Spline — blending interactive 3D scenes, smooth animations, and responsive layout for a stunning visual storytelling.',
    liveUrl: 'https://bolaji-inky.vercel.app/',
    githubUrl: 'https://github.com/Sawmod001/BOLAJI',
    tags: ['HTML', 'CSS', 'Spline', '3D', 'Responsive'],
  },
  {
    id: 'card-validation-api',
    title: 'Card Validation API',
    category: 'API',
    description: 'A single POST endpoint that determines whether a card number is structurally valid — via the Luhn checksum, card-network prefix (IIN) matching, and network-specific length rules — run as an ordered validation pipeline. Live on Render.',
    liveUrl: 'https://card-number-validation-api-op27.onrender.com',
    githubUrl: 'https://github.com/Sawmod001/card-number-validation-api',
    tags: ['Node.js', 'Express', 'REST API', 'Luhn', 'Render'],
    highlights: [
      'POST /cards/validate { cardNumber: "4111111111111111" } → { valid: true, scheme: "visa" }',
      'Ordered pipeline: Luhn checksum → IIN prefix → length rules',
      'Auto-deploy from main on Render',
    ],
  },
  {
    id: 'hakeela',
    title: 'Hakeela',
    category: 'Other',
    description: '"Building the Future of Tech Inclusion one community at a time" — Using AI + Empathy to create an inclusive and sustainable future of edtech for young Africans that are marginalized, underprivileged, and specially assisted.',
    liveUrl: 'https://www.hakeela.org',
    tags: ['AI', 'EdTech', 'Social Impact', 'Community'],
  }
];
