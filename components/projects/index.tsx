'use client';

import { motion } from 'framer-motion';
import { FaEthereum, FaCode } from 'react-icons/fa';
import { PageLayout } from '@/components/layout';
import { ProjectSection } from './ProjectSection';
import { blockchainProjects, fullStackProjects } from '@/data/projects';

export function ProjectsPage() {
  return (
    <PageLayout>
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold font-mono mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Projects.showcase()
          </h1>
          <div className="text-gray-400 font-mono text-lg">
            <span className="text-blue-400">const</span>{' '}
            <span className="text-purple-400">portfolio</span> = {'{'}
            <span className="text-green-400">type</span>:{' '}
            <span className="text-orange-400">&quot;Web3 + Full-Stack&quot;</span>
            {'}'}
          </div>
        </motion.div>

        <ProjectSection
          title="Blockchain Projects"
          projects={blockchainProjects}
          icon={<FaEthereum className="w-6 h-6 text-blue-400" />}
        />

        <ProjectSection
          title="Full-Stack Projects"
          projects={fullStackProjects}
          icon={<FaCode className="w-6 h-6 text-purple-400" />}
        />
      </div>
    </PageLayout>
  );
}

export { ProjectCard } from './ProjectCard';
export { ProjectSection } from './ProjectSection';
export { TechStack } from './TechStack';
export { ProjectStats } from './ProjectStats';
export { ProjectHighlights } from './ProjectHighlights';
export { ProjectCardHeader } from './ProjectCardHeader';
export { ProjectCardContent } from './ProjectCardContent';

