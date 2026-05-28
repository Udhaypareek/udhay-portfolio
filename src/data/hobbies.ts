import type { AccentName } from '../theme/palette';

export interface HobbyItem {
  id: string;
  label: string;
  subtext: string;
  icon: string;
  accent: AccentName;
  image: string;
}

export const hobbies: HobbyItem[] = [
  {
    id: 'linux',
    label: 'Linux Customization',
    subtext: 'Hyprland, dotfiles, ricing workflows',
    icon: 'Terminal',
    accent: 'flame',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1200',
  },
  {
    id: 'music',
    label: 'Music',
    subtext: 'Playlists, genres across moods',
    icon: 'Music',
    accent: 'azure',
    image: 'https://images.unsplash.com/photo-1606158816714-95c4404e8c52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWQlMjBzaGVlcmFufGVufDB8fDB8fHww',
  },
  {
    id: 'movies',
    label: 'Movies',
    subtext: 'Sci-fi, Mind Bending, fantasy adventures',
    icon: 'Film',
    accent: 'emerald',
    image: 'https://images.unsplash.com/photo-1716354188820-8d917d680c4a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'travelling',
    label: 'Travelling',
    subtext: 'Exploring cities, cultures, architecture',
    icon: 'MapPin',
    accent: 'cyan',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200',
  },
  {
    id: 'ai-exploration',
    label: 'AI Exploration',
    subtext: 'LLMs, agents, intelligent tooling',
    icon: 'Brain',
    accent: 'violet',
    image: 'https://plus.unsplash.com/premium_photo-1774451894653-36d06060c062?q=80&w=1054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'ui-experiments',
    label: 'UI Experiments',
    subtext: 'Frontend design systems, visual R&D',
    icon: 'Palette',
    accent: 'flame',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200',
  },
];
