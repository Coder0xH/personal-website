'use client';

import { motion } from 'framer-motion';
import { PageLayout } from '@/components/layout';
import { SkillSection } from './SkillSection';
import { skills } from '@/data/skills';

export function SkillsPage() {
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
            Skills.render()
          </h1>
          <div className="text-gray-400 font-mono text-lg">
            <span className="text-blue-400">const</span>{' '}
            <span className="text-purple-400">developer</span> = {'{'}
            <span className="text-green-400">type</span>:{' '}
            <span className="text-orange-400">&quot;Full-Stack + Web3&quot;</span>
            {'}'}
          </div>
        </motion.div>

        {skills.map((section, index) => (
          <SkillSection key={section.category} section={section} index={index} />
        ))}
      </div>
    </PageLayout>
  );
}

export { SkillBar } from './SkillBar';
export { SkillSection } from './SkillSection';

