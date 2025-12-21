'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import type { Project } from '@/types/project';
import type { ReactNode } from 'react';

interface ProjectWithIcon extends Omit<Project, 'icon'> {
  icon: ReactNode;
}

interface ProjectCardProps {
  project: ProjectWithIcon;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-black border border-neutral-800 hover:border-white transition-colors duration-300 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header: Icon & Title */}
      <div className="p-6 pb-4 flex justify-between items-start border-b border-neutral-900 group-hover:border-neutral-800 transition-colors">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-neutral-900 rounded-none group-hover:bg-neutral-800 transition-colors">
            <div className="text-2xl text-neutral-500 group-hover:text-white transition-colors duration-300">
              {project.icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold font-mono text-white tracking-tight">{project.title}</h3>
            <p className="text-xs text-neutral-500 font-mono mt-1">
              // {project.tech.slice(0, 3).join(' + ')}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div className="mb-6">
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-mono">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mb-6">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <li key={i} className="flex items-start text-xs text-neutral-500 font-mono">
                <span className="mr-2 text-neutral-700 group-hover:text-white transition-colors">→</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 py-4 border-t border-neutral-900 group-hover:border-neutral-800 transition-colors mb-4">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-white font-mono text-sm font-bold">{value}</div>
              <div className="text-neutral-600 text-[10px] uppercase tracking-wider">{key}</div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full p-3 bg-neutral-900 hover:bg-white hover:text-black transition-all duration-300 group/btn"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-wider">
            View Project
          </span>
          <FaArrowRight className="w-3 h-3 transform group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
