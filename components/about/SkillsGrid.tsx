'use client';

import { motion, type Variants } from 'framer-motion';
import { SiSpring, SiCloudfoundry, SiNextdotjs, SiVite, SiSolana } from 'react-icons/si';
import { PiPianoKeysFill, PiPaintBrushBold } from 'react-icons/pi';
import type { ReactNode } from 'react';

interface TechnicalSkill {
  icon: ReactNode;
  name: string;
  category: string;
  color: string;
}

interface ArtisticSkill {
  icon: ReactNode;
  title: string;
  level: string;
  description: string;
}

const technicalSkills: TechnicalSkill[] = [
  {
    icon: <SiSpring className="w-6 h-6" />,
    name: 'Spring Boot',
    category: 'Backend Framework',
    color: 'text-green-400',
  },
  {
    icon: <SiCloudfoundry className="w-6 h-6" />,
    name: 'Foundry',
    category: 'Smart Contract Development',
    color: 'text-yellow-400',
  },
  {
    icon: <SiNextdotjs className="w-6 h-6" />,
    name: 'Next.js',
    category: 'Frontend Framework',
    color: 'text-white',
  },
  {
    icon: <SiVite className="w-6 h-6" />,
    name: 'Vite',
    category: 'Build Tool',
    color: 'text-purple-400',
  },
  {
    icon: <SiSolana className="w-6 h-6" />,
    name: 'Anchor',
    category: 'Solana Development',
    color: 'text-blue-400',
  },
];

const artisticSkills: ArtisticSkill[] = [
  {
    icon: <PiPianoKeysFill className="w-8 h-8" />,
    title: 'Piano Performance',
    level: 'Level 10 Certification',
    description:
      'Advanced certification in piano performance, specializing in classical music interpretation and composition.',
  },
  {
    icon: <PiPaintBrushBold className="w-8 h-8" />,
    title: 'Visual Arts',
    level: 'Professional Artist',
    description:
      'Skilled in drawing and sketching, focusing on detailed artistic expression and creative visualization.',
  },
];

interface SkillsGridProps {
  itemVariants: Variants;
  glowVariants: Variants;
}

export function TechnicalSkillsGrid({ itemVariants, glowVariants }: SkillsGridProps) {
  return (
    <motion.section className="mb-24" variants={itemVariants}>
      <h2 className="text-3xl font-bold text-center mb-12 font-mono">
        <span className="text-white">
          Technical.expertise()
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {technicalSkills.map((skill) => (
          <motion.div
            key={skill.name}
            className="group relative p-6 rounded-xl border border-neutral-800 bg-black"
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            variants={glowVariants}
          >
            <div className="flex flex-col items-center space-y-3">
              <div className={`p-3 rounded-lg group-hover:bg-neutral-900 ${skill.color}`}>
                {skill.icon}
              </div>
              <div className="text-center">
                <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                <p className="text-xs text-neutral-500">{skill.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

interface ArtisticSkillsProps {
  itemVariants: Variants;
}

export function ArtisticSkillsSection({ itemVariants }: ArtisticSkillsProps) {
  return (
    <motion.section className="mb-24" variants={itemVariants}>
      <h2 className="text-3xl font-bold text-center mb-12 font-mono">
        <span className="text-white">
          Artistic.talents()
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {artisticSkills.map((skill, index) => (
          <motion.div
            key={skill.title || index}
            className="relative p-6 rounded-xl border border-neutral-800 bg-black"
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-neutral-900">{skill.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{skill.title}</h3>
                <p className="text-neutral-500 mb-3">{skill.level}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

