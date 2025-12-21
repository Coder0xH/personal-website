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
    <div className="mb-20 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-baseline md:space-x-6 mb-8 border-b border-neutral-800 pb-4">
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-white tracking-tighter">
          {section.category}
        </h2>
        <p className="text-neutral-500 font-mono text-sm mt-2 md:mt-0">
          {section.description}
        </p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
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
      </motion.div>
    </div>
  );
}
