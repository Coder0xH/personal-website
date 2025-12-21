'use client';

import { motion } from 'framer-motion';
import { SkillBar } from './SkillBar';
import type { SkillCategory } from '@/types/skill';

interface SkillSectionProps {
  section: SkillCategory;
  index: number;
}

export function SkillSection({ section, index }: SkillSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative mb-16"
    >
      <div className="mb-6 flex items-baseline space-x-4 border-b border-neutral-800 pb-4">
        <h2 className="text-2xl font-mono font-semibold text-white">{section.category}</h2>
        <p className="text-neutral-500 font-mono text-sm">// {section.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {section.items.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
            color={skill.color}
            docs={skill.docs}
            quickStart={skill.quickStart}
          />
        ))}
      </div>
    </motion.div>
  );
}

