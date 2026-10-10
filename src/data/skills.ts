export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages & Backend',
    skills: ['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'MERN Stack', 'REST APIs', 'API Design & Integration']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Three.js', 'GSAP', 'HTML5/CSS3']
  },
  {
    title: 'AI',
    skills: ['Google Gemini', 'Model Context Protocol (MCP)', 'LangGraph', 'RAG', 'Agentic AI', 'AI assistants']
  },
  {
    title: 'Security',
    skills: ['JWT', 'Refresh Tokens', 'RBAC', 'Rate Limiting', 'bcrypt', 'OWASP']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma ORM', 'Mongoose']
  },
  {
    title: 'Practices',
    skills: ['Workflow Automation', 'Performance Optimization & QA', 'MVC architecture']
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Docker', 'Git/GitHub', 'Vercel', 'Postman', 'Clerk', 'Paystack', 'Cloudinary']
  }
];
