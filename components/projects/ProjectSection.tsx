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
  description?: string;
}

export function ProjectSection({ title, projects, description }: ProjectSectionProps) {
  return (
    <div className="mb-24 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-baseline md:space-x-6 mb-8 border-b border-neutral-800 pb-4">
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-white tracking-tighter">
          {title}
        </h2>
        {description && (
          <p className="text-neutral-500 font-mono text-sm mt-2 md:mt-0">
            {description}
          </p>
        )}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
