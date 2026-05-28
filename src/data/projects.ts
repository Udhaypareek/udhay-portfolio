import type { AccentName } from '../theme/palette';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  accent: AccentName;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 'aahar-ai',
    title: 'Aahar AI',
    description:
      'AI-powered nutrition and fitness platform with personalized meal planning, image-based food analysis, and intelligent calorie tracking. Full PWA with JWT auth.',
    category: 'AI-POWERED PLATFORM',
    stack: ['React.js', 'TypeScript', 'Node.js', 'Gemini API', 'MongoDB'],
    liveUrl: 'https://aahar-ai-one.vercel.app/',
    githubUrl: 'https://github.com/Udhaypareek/Aahar-Ai',
    accent: 'flame',
    featured: true,
    metrics: [
      { label: 'AI FEATURES', value: '4+' },
      { label: 'TYPE', value: 'PWA' },
    ],
  },
  {
    id: 'career-community',
    title: 'Career Community Connector',
    description:
      'Professional networking platform with user profiles, auth, and real-time community features.',
    category: 'MERN STACK',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    liveUrl: 'https://careercommunityconnector.netlify.app/',
    githubUrl: 'https://github.com/Udhaypareek/Career-Community-Connector-Frontend',
    accent: 'azure',
  },
  {
    id: 'headline-harbor',
    title: 'HeadlineHarbor',
    description:
      'Real-time news aggregation platform with dynamic content rendering and live API feeds.',
    category: 'API INTEGRATION',
    stack: ['React.js', 'News API'],
    liveUrl: 'https://headlineharbor.netlify.app/',
    githubUrl: 'https://github.com/Udhaypareek/HeadlineHarbor',
    accent: 'cyan',
  },
  {
    id: 'hotel-website',
    title: 'King The Land Hotel',
    description:
      'Elegant hotel website with responsive design, booking interface, and smooth animations.',
    category: 'LANDING PAGE',
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://king-the-land-hotel.netlify.app/',
    githubUrl: 'https://github.com/Udhaypareek/Hotel-Website',
    accent: 'emerald',
  },
  {
    id: 'coffee-website',
    title: 'Coffee Website',
    description:
      'Modern coffee shop website with premium UI design and smooth interactive experience.',
    category: 'LANDING PAGE',
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://coffee-website-udhay.netlify.app/',
    githubUrl: 'https://github.com/Udhaypareek/Coffee-Website',
    accent: 'amber',
  },
];
