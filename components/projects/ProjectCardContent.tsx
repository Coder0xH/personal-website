'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/types/project';
import { TechStack } from './TechStack';
import { ProjectStats } from './ProjectStats';
import { ProjectHighlights } from './ProjectHighlights';
import type { ReactNode } from 'react';

interface ProjectWithIcon extends Omit<Project, 'icon'> {
  icon: ReactNode;
}

interface ProjectCardContentProps {
  project: ProjectWithIcon;
}

export function ProjectCardContent({ project }: ProjectCardContentProps) {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {project.title}
        </h3>
      </div>

      <p className="text-gray-300 mb-4 font-mono">{project.description}</p>

      <TechStack tech={project.tech} />
      <ProjectStats stats={project.stats} />
      <ProjectHighlights highlights={project.highlights} />

      <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-mono"
        whileHover={{ x: 5 }}
      >
        <span>view_project</span>
        <span className="text-gray-400">()</span>
        <span>→</span>
      </motion.a>
    </div>
  );
}

