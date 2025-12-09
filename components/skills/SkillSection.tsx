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
      className="relative mb-16 p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg border border-gray-700/50"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-mono font-semibold mb-2 text-blue-400">{section.category}</h2>
        <p className="text-gray-400 font-mono text-sm">{section.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

