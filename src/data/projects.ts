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
    id: 'hostme',
    title: 'HostMe — Multi-Vertical Booking Marketplace',
    category: 'Featured',
    description: 'An end-to-end marketplace connecting users to venues, housing viewings, and food pre-orders across Nigeria. Features responsive booking/listing screens, dual booking engines for exclusive/capacity-based reservations, and a split-settlement payment workflow.',
    githubUrl: 'https://github.com/Sawmod001/HOSTME',
    liveUrl: 'https://hostme-xbhx.vercel.app/',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Supabase', 'Clerk', 'Cloudinary', 'Paystack'],
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
    id: 'one-event',
    title: 'ONE EVENT',
    category: 'Backend',
    description: 'Experimental/In-progress secure event management and ticketing backend. Built to explore heavy concurrent request loads and role-based access controls.',
    githubUrl: 'https://github.com/Sawmod001/ONE-EVENT',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API'],
    inProgress: true,
  },
  {
    id: 'mongodb-integration',
    title: 'MongoDB Database Integration',
    category: 'Backend',
    description: 'Technical project demonstrating complex MongoDB queries, schema design, and database integration workflows within a Node.js environment.',
    githubUrl: 'https://github.com/Sawmod001/MONGODB-DATABASE-INTEGRATION',
    tags: ['MongoDB', 'Node.js', 'Mongoose', 'Database Design'],
  }
];
