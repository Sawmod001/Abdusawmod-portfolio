export interface Project {
  id: string;
  title: string;
  category: 'Featured' | 'Individual' | 'Team';
  subCategory: 'Featured Project' | 'Educational' | 'Documentation' | 'Git workflow' | 'Collaboration';
  description: string;
  githubUrl?: string;
  tags: string[];
  inProgress?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'one-event',
    title: 'ONE EVENT',
    category: 'Featured',
    subCategory: 'Featured Project',
    description: 'A secure, high-performance event management and ticketing platform. Built to handle heavy concurrent request loads for reservation processing, complete with role-based access controls and real-time analytics dashboards.',
    githubUrl: undefined, // Private/In Progress
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'REST API', 'TDD'],
    inProgress: true,
  },
  {
    id: 'riddlebot',
    title: 'RiddleBot',
    category: 'Team',
    subCategory: 'Collaboration',
    description: 'An interactive chatbot engine featuring dynamic riddle generation, session state tracking, and collaborative generator logic for automated entertainment systems.',
    githubUrl: 'https://github.com/PsalamDev/RiddleBot/pull/new/feature/generator-logic',
    tags: ['Node.js', 'Express', 'GitHub Flow', 'Collaboration', 'JavaScript'],
  },
  {
    id: 'mini-todo-app',
    title: 'Mini Todo App',
    category: 'Team',
    subCategory: 'Collaboration',
    description: 'A streamlined, highly responsive task tracking application focusing on local state synchronization, responsive grid layouts, and clean API services.',
    githubUrl: 'https://github.com/PsalamDev/mini-Todo-App.git',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Git Collaboration', 'REST API'],
  },
  {
    id: 'oneevent-tdd',
    title: 'OneEvent TDD Documentation',
    category: 'Individual',
    subCategory: 'Documentation',
    description: 'Technical document illustrating robust backend testing paradigms, showing step-by-step TDD (Test-Driven Development) integration, unit coverage, and automated route testing.',
    githubUrl: 'https://github.com/Sawmod001/my-personal-journey/blob/my-goals/oneevent_TDD.md',
    tags: ['TDD', 'Jest', 'Supertest', 'Quality Assurance', 'Documentation'],
  },
  {
    id: 'internet-fundamentals',
    title: 'Internet Fundamentals Assignment',
    category: 'Individual',
    subCategory: 'Educational',
    description: 'A deep-dive research assignment breaking down low-level internet operations, including TCP/IP models, DNS resolution paths, HTTP/S request-response structures, and fundamental web security protocols.',
    githubUrl: 'https://github.com/Sawmod001/my-personal-journey/blob/main/internet_fundamentals_assignment.md',
    tags: ['TCP/IP', 'DNS', 'HTTP/S Protocols', 'Web Security', 'Computer Networks'],
  },
  {
    id: 'sdlc-assignment',
    title: 'SDLC Assignment',
    category: 'Individual',
    subCategory: 'Educational',
    description: 'Comprehensive analysis of Software Development Life Cycle (SDLC) models, comparing Agile, Waterfall, and DevOps methodologies while defining metrics for release engineering and developer velocity.',
    githubUrl: 'https://github.com/Sawmod001/my-personal-journey/blob/main/sdlc_assignment.md',
    tags: ['SDLC', 'Agile', 'Scrum', 'Project Management', 'DevOps'],
  },
  {
    id: 'prompt-library',
    title: 'Prompt Library Assignment',
    category: 'Individual',
    subCategory: 'Educational',
    description: 'An structured AI prompts repository designed to optimize context windows, control developer workflows, and system-prompt developer LLMs for automated code generation.',
    githubUrl: 'https://github.com/Sawmod001/my-personal-journey/blob/my-goals/prompt_library_assignment.md',
    tags: ['Prompt Engineering', 'LLM Optimization', 'Developer Tools', 'AI Workflows'],
  },
  {
    id: 'pull-request-1',
    title: 'Pull Request #1 (Git Workflow)',
    category: 'Individual',
    subCategory: 'Git workflow',
    description: 'Demonstration repository detailing clean Git practices: feature branching, handling merges, resolving conflicts, and documenting changes via a standardized pull request process.',
    githubUrl: 'https://github.com/Sawmod001/my-personal-journey/pull/1',
    tags: ['Git', 'GitHub Flow', 'Branching Strategy', 'Code Review'],
  }
];
