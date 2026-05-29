export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'creative-upaay',
    role: 'Full Stack Developer Intern',
    company: 'Creative Upaay',
    companyUrl: '#',
    period: 'Apr 2025 - Oct 2025',
    responsibilities: [
      'Built scalable multi-tenant backend systems with secure tenant-aware APIs',
      'Developed AI-assisted workflows with LLM APIs and async processing pipelines',
      'Implemented real-time communication with WebSockets and event-driven architecture',
      'Designed modular backend with controller-service-repository architecture',
      'Built RBAC and secure authentication systems',
    ],
  },
  {
    id: 'betazen-infotech',
    role: 'MERN Developer Intern',
    company: 'BetaZen InfoTech',
    companyUrl: '#',
    period: 'Jun 2024 - Jul 2024',
    responsibilities: [
      'Developed a comprehensive CRM management system using the MERN stack',
      'Created high-converting landing pages focused on React and CSS optimization',
      'Maintained high standards of quality for web applications and deliverables',
      'Collaborated on scalable backend services and responsive frontend components',
    ],
  },
  {
    id: 'chegg-india',
    role: 'Subject Matter Expert',
    company: 'Chegg India',
    companyUrl: '#',
    period: 'Mar 2023 - Apr 2023',
    responsibilities: [
      'Provided structured problem-solving support and detailed technical explanations on Chegg’s online platform',
      'Strengthened analytical thinking and communication skills in a remote, deadline-oriented environment',
      'Simplified complex technical concepts to deliver high-quality, accurate solutions for students',
    ],
  },
];
