import type { IconType } from 'react-icons';

export interface SkillItem {
  name: string;
  icon: IconType;
  level: number;
  color: string;
  docs: string;
  quickStart: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: SkillItem[];
}

export interface SkillBarProps {
  name: string;
  level: number;
  icon: IconType;
  color: string;
  docs: string;
  quickStart: string;
}

