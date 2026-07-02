export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  isDark?: boolean;
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  description: string;
  badge: string;
  badgeColor: 'blue' | 'purple' | 'indigo';
}

export interface MediaItem {
  id: string;
  title: string;
  image: string;
  accounts: { handle: string; link: string }[];
}
