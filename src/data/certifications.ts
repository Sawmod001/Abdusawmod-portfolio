export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description?: string;
}

export const certificationsData: Certification[] = [
  {
    id: 'boycode-africa',
    title: 'BoyCode Africa Gold Ticket Recipient',
    issuer: 'Software Development Residential Bootcamp',
    description: 'Top 3.75% of 2,000+ applicants'
  },
  {
    id: 'alveum-malhub',
    title: 'Alveum × MALhub Tech Talent Acceleration Scholar',
    issuer: 'Alveum × MALhub',
    description: 'Top 5% of 300+ applicants'
  },
  {
    id: 'm4ace-mentee',
    title: 'M4ACE Backend Development Mentee (2026)',
    issuer: 'TrybeFuse Mentorship Cohort 3.0'
  },
  {
    id: 'data-analyst',
    title: 'Certified Data Analyst, Python Level 3',
    issuer: 'CPN/NSQ'
  },
  {
    id: 'meta-ai',
    title: 'Meta AI Developer Academy',
    issuer: 'RAIN'
  },
  {
    id: 'aws-cloud',
    title: 'Certificate Of Completion AWS Cloud Training',
    issuer: 'AWS STUDENT BUILDERS UNILORIN'
  },
  {
    id: 'backend-techvoto',
    title: 'Backend Development Certification',
    issuer: 'Techvoto'
  }
];
