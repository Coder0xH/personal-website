export interface ProjectStats {
  [key: string]: string | number;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  stats: ProjectStats;
  highlights: string[];
  link: string;
  icon: string; // icon name string instead of ReactNode for pure data
}

export type ProjectCategory = 'ton' | 'ethereum' | 'bitcoin' | 'corporate';

export interface ProjectsByCategory {
  [key: string]: Project[];
}

