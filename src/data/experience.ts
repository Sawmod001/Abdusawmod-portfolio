export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  responsibilities: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'hakeela',
    role: 'Full Stack Developer Intern',
    company: 'Hakeela.org (Remote)',
    date: 'Nov 2025 – Mar 2026',
    responsibilities: [
      'Built a JWT + refresh-token authorization system with scoped RBAC middleware to secure protected routes across the platform.',
      'Implemented sign-up, OTP verification, login, and password-reset flows, streamlining the user onboarding sequence.'
    ],
  },
  {
    id: 'awibi',
    role: 'Backend Developer Intern',
    company: 'AWIBI MedTech',
    date: 'Mar 2025 – Jan 2026',
    responsibilities: [
      'Built and maintained REST APIs for a live user base, optimizing queries to keep response times consistently fast.',
      'Designed MongoDB/MySQL schemas for patient records and clinical data, reducing duplication across collections.',
      'Built an AI healthcare assistant (Python, LangChain, RAG) to deliver guided symptom triage responses.'
    ],
  }
];
