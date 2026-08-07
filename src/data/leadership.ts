export interface LeadershipRole {
  id: string;
  role: string;
  organization: string;
  date: string;
  description: string;
}

export const leadershipData: LeadershipRole[] = [
  {
    id: 'insu-sec',
    role: 'General Secretary',
    organization: 'INSU UNILORIN',
    date: 'Sep 2025 – Jun 2026',
    description: 'Managed 80+ documents and coordinated 300+ participants across events; grew membership to 600+. Awarded Most Outstanding Executive Of The Year.'
  },
  {
    id: 'awc-coordinator',
    role: 'Welfare & Volunteer Coordinator',
    organization: 'AWC UNILORIN',
    date: 'Jun 2026 – Present',
    description: 'Oversee 400+ members and coordinate 50+ volunteers.'
  },
  {
    id: 'cytobiz-lead',
    role: 'Management Team Lead',
    organization: 'Cytobiz Medical Market',
    date: 'Feb 2026 – Jun 2026',
    description: 'Coordinated 7 cross-functional projects across 9 departments.'
  },
  {
    id: 'campus-ambassador',
    role: 'Campus Career Champion Ambassador For (North-Central)',
    organization: 'Project1000CareerSessions',
    date: '2026',
    description: 'Represented and promoted career sessions across the North-Central region.'
  }
];
