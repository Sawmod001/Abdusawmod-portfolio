export interface ProjectDetail {
  label: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Featured' | 'Full Stack' | 'Backend' | 'API' | 'AI' | 'Other';
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
    id: 'aurashop',
    title: 'AuraShop',
    category: 'API',
    description: 'Modular MVC REST API for an e-commerce product catalog and checkout system. Demonstrates structured backend architecture and validated CRUD operations.',
    githubUrl: 'https://github.com/Sawmod001/AURASHOP',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API', 'MVC'],
  },
  {
    id: 'trackapp',
    title: 'TrackApp',
    category: 'API',
    description: 'REST API for job-application and expense tracking, focusing on API development, data validation, and handling structured CRUD workflows.',
    githubUrl: 'https://github.com/Sawmod001/TrackApp-Node-API',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
  },
  {
    id: 'training-center',
    title: 'Training Center Management API',
    category: 'Backend',
    description: 'REST API with JWT authentication and capacity-validated enrollment. Features real-time payment tracking to replace manual reporting.',
    githubUrl: 'https://github.com/Sawmod001/TRAINING-CENTER-MANAGEMENT',
    tags: ['Node.js', 'Express', 'Prisma', 'MongoDB', 'JWT'],
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
