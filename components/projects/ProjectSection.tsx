'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/types/project';
import type { ReactNode } from 'react';

interface ProjectWithIcon extends Omit<Project, 'icon'> {
  icon: ReactNode;
}

interface ProjectSectionProps {
  title: string;
  projects: ProjectWithIcon[];
  icon: ReactNode;
}

export function ProjectSection({ title, projects, icon }: ProjectSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <div className="flex items-center space-x-3 mb-6">
        {icon}
        <h2 className="text-2xl font-bold font-mono">
          <span className="text-gray-400">const</span>{' '}
          <span className="text-purple-400">{title}</span>{' '}
          <span className="text-gray-400">=</span>{' '}
          <span className="text-blue-400">projects</span>
          <span className="text-gray-400">.filter()</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.section>
  );
}

