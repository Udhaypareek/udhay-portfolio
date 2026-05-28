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
];
