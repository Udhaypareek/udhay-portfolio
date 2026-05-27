import type { AccentName } from '../theme/palette';

export interface HobbyItem {
  id: string;
  label: string;
  subtext: string;
  icon: string;
  accent: AccentName;
}

export const hobbies: HobbyItem[] = [
  {
    id: 'linux',
    label: 'Linux Customization',
    subtext: 'Hyprland, dotfiles, ricing workflows',
    icon: 'Terminal',
    accent: 'flame',
  },
  {
    id: 'ai-exploration',
    label: 'AI Exploration',
    subtext: 'LLMs, agents, intelligent tooling',
    icon: 'Brain',
    accent: 'violet',
  },
  {
    id: 'music',
    label: 'Music',
    subtext: 'Focus playlists, genres across moods',
    icon: 'Music',
    accent: 'azure',
  },
  {
    id: 'movies',
    label: 'Movies',
    subtext: 'Sci-fi, thrillers, directors\' cuts',
    icon: 'Film',
    accent: 'cyan',
  },
  {
    id: 'travelling',
    label: 'Travelling',
    subtext: 'Exploring cities, cultures, architecture',
    icon: 'MapPin',
    accent: 'emerald',
  },
  {
    id: 'ui-experiments',
    label: 'UI Experiments',
    subtext: 'Frontend design systems, visual R&D',
    icon: 'Palette',
    accent: 'flame',
  },
  {
    id: 'system-design',
    label: 'System Design',
    subtext: 'Architecture thinking as a hobby',
    icon: 'Network',
    accent: 'azure',
  },
  {
    id: 'open-source',
    label: 'Open Source',
    subtext: 'Contributing, learning from codebases',
    icon: 'GitBranch',
    accent: 'violet',
  },
];
