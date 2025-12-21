'use client';

import { motion } from 'framer-motion';
import { ProjectCardHeader } from './ProjectCardHeader';
import { ProjectCardContent } from './ProjectCardContent';
import type { Project } from '@/types/project';
import type { ReactNode } from 'react';

interface ProjectWithIcon extends Omit<Project, 'icon'> {
  icon: ReactNode;
}

interface ProjectCardProps {
  project: ProjectWithIcon;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-xl border border-neutral-800 
                 bg-black
                 group transition-all duration-300 hover:border-neutral-600"
    >
      <ProjectCardHeader icon={project.icon} />
      <ProjectCardContent project={project} />
    </motion.div>
  );
}

