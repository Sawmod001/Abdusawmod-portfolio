export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MVC']
  },
  {
    title: 'Security',
    skills: ['JWT', 'Refresh Tokens', 'RBAC', 'Rate Limiting', 'bcrypt', 'OWASP fundamentals']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Mongoose', 'Prisma']
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Docker', 'Git/GitHub', 'Vercel', 'Postman', 'Cloudinary', 'Clerk', 'Paystack']
  }
];
