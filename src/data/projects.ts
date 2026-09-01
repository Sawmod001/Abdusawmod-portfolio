export interface Project {
  id: string;
  title: string;
  category: 'Featured' | 'Full Stack' | 'Backend' | 'API' | 'AI' | 'Other';
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  inProgress?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'clockhost',
    title: 'ClockHost — Two-Sided Booking Marketplace',
    category: 'Featured',
    description: 'A Nigerian two-sided marketplace connecting people looking for places to book with hosts who have spaces or short-term accommodation to offer. Features role-based accounts, capacity/exclusive/shortlet/group booking engines, Paystack payments in Naira, AI-powered assistant, messaging, reviews, and a full admin dashboard — built around Africa/Lagos timezone.',
    liveUrl: 'https://clockhost.vercel.app/',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Clerk', 'Paystack', 'Google Gemini', 'Zod'],
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
