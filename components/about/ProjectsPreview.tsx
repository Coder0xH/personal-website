'use client';

import { motion, type Variants } from 'framer-motion';

interface FeaturedProject {
  id: number;
  title: string;
  role: string;
  tech: string;
  description: string;
  link: string;
  linkText: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: 'Infa Labs Website',
    role: 'Lead Developer',
    tech: 'Three.js, React',
    description: 'Corporate website with immersive 3D visualizations',
    link: 'https://infalabs.io/',
    linkText: 'View Project',
  },
  {
    id: 2,
    title: 'MemeJump GameFi',
    role: 'Full Stack Developer',
    tech: 'Web3, Telegram Bot API',
    description: 'Play-to-Earn gaming platform integrated with Telegram',
    link: 'https://t.me/memejump_bot/memejump?startapp=GZEMUAGT',
    linkText: 'Try Game',
  },
];

interface ProjectsPreviewProps {
  variants: Variants;
}

export function ProjectsPreview({ variants }: ProjectsPreviewProps) {
  return (
    <motion.section variants={variants}>
      <h2 className="text-3xl font-bold text-center mb-12 font-mono">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Projects.showcase()
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id || project.title}
            className="group relative p-6 rounded-xl border border-gray-700/50 bg-gradient-to-br from-slate-900 via-gray-900 to-purple-900/40 overflow-hidden"
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-xl font-semibold text-gray-200 mb-1">{project.title}</h3>
            <p className="text-blue-400 text-sm mb-2">{project.role}</p>
            <p className="text-purple-400 text-sm mb-3">{project.tech}</p>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>{project.linkText}</span>
              <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

