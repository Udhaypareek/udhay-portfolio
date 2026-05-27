import type { AccentName } from '../theme/palette';

export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  title: string;
  accent: AccentName;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    title: 'FRONTEND',
    accent: 'azure',
    items: [
      { name: 'React.js', icon: 'Code2' },
      { name: 'TypeScript', icon: 'FileType' },
      { name: 'Next.js', icon: 'Layers' },
      { name: 'HTML5', icon: 'Globe' },
      { name: 'CSS3', icon: 'Palette' },
      { name: 'Material UI', icon: 'Component' },
    ],
  },
  {
    title: 'BACKEND',
    accent: 'emerald',
    items: [
      { name: 'Node.js', icon: 'Server' },
      { name: 'Express.js', icon: 'Route' },
      { name: 'MongoDB', icon: 'Database' },
      { name: 'Redis', icon: 'HardDrive' },
      { name: 'REST APIs', icon: 'ArrowLeftRight' },
      { name: 'WebSockets', icon: 'Radio' },
    ],
  },
  {
    title: 'AI & APIS',
    accent: 'violet',
    items: [
      { name: 'Gemini API', icon: 'Sparkles' },
      { name: 'OpenAI', icon: 'Brain' },
      { name: 'LLM Workflows', icon: 'Workflow' },
      { name: 'RAG Pipelines', icon: 'GitBranch' },
      { name: 'Async Pipelines', icon: 'RefreshCw' },
    ],
  },
  {
    title: 'TOOLS',
    accent: 'cyan',
    items: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'Linux', icon: 'Terminal' },
      { name: 'Docker', icon: 'Box' },
      { name: 'VS Code', icon: 'Code' },
      { name: 'Postman', icon: 'Send' },
      { name: 'Vercel', icon: 'Triangle' },
    ],
  },
];
