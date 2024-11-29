import { ReactNode } from 'react'

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
  icon: ReactNode;
}
