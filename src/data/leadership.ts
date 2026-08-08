export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  date: string;
  description?: string;
  highlights?: string[];
}

export const leadershipData: LeadershipRole[] = [
  {
    id: 'insu-sec',
    role: 'General Secretary',
    organization: 'INSU UNILORIN',
    date: 'Sep 2025 – Jun 2026',
    description:
      'Led institutional documentation, reporting, and administrative operations. Awarded Most Outstanding Executive of the Year.',
    highlights: [
      'Founded Unfiltered Yoruba — a cultural and intellectual platform on "Yoruba Identity Beyond the Narrative"',
      'Prepared and coordinated 100+ official letters, notices, invitations, sponsorship requests, and courtesy-visit correspondence',
      'Managed 80+ documents and coordinated 300+ participants across events',
      'Grew membership to 600+ and served as department representative for the council',
    ],
  },
  {
    id: 'awc-coordinator',
    role: 'Welfare & Volunteer Coordinator',
    organization: 'AWC UNILORIN',
    date: 'Jun 2026 – Present',
    highlights: [
      'Oversee 400+ members and coordinate a team of 50+ volunteers',
      'Record and coordinate weekly workforce meeting attendance',
      'Organize weekly games and fun activities',
      'Drove member engagement up by 70%',
    ],
  },
  {
    id: 'cytobiz-lead',
    role: 'Management Team Lead',
    organization: 'Cytobiz Medical Market',
    date: 'Feb 2026 – Jun 2026',
    description: 'Coordinated 7 cross-functional projects across 9 departments.',
  },
  {
    id: 'campus-ambassador',
    role: 'Campus Career Champion Ambassador (North-Central)',
    organization: 'Project1000CareerSessions',
    date: '2026',
    description: 'Represented and promoted career sessions across the North-Central region.',
  },
  {
    id: 'ufsc-pro',
    role: 'Public Relations Officer I',
    organization: 'UFSC',
    date: '2024',
    description: 'Led publicity and internal communication efforts to drive participation and visibility.',
  },
  {
    id: 'tis-unicorn',
    role: 'Ethics Challenge — Team Unicorn',
    organization: 'The Investment Society (TIS), UNILORIN',
    date: '2026',
    description: 'Won 2nd position in the TIS Ethics Challenge.',
  },
  {
    id: 'honourable-rep',
    role: 'Honourable Representative',
    organization: 'Department of Science Education',
    date: '2025',
    description: 'Represented the department as its official union representative.',
  },
  {
    id: 'jci-unilorin',
    role: 'Harmony Academy Participant',
    organization: 'JCI UNILORIN',
    date: "'26 Cohort",
    description: 'Selected participant in the JCI Unilorin Harmony Academy class of 2026.',
  },
];