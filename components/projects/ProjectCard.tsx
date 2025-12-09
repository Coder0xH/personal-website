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
      className="relative overflow-hidden rounded-xl border border-gray-700/50 
                 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
                 group transition-all duration-300"
    >
      <ProjectCardHeader icon={project.icon} />
      <ProjectCardContent project={project} />

      {/* Animated gradient border */}
      <div
        className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 
                    transition-colors duration-300"
      />
    </motion.div>
  );
}

