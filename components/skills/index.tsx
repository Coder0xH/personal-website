'use client';

import { motion } from 'framer-motion';
import { PageLayout } from '@/components/layout';
import { SkillSection } from './SkillSection';
import { useSkillsData } from '@/hooks/useLocalizedData';

export function SkillsPage() {
  const skills = useSkillsData();

  return (
    <PageLayout>
      <div className="min-h-screen py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold font-mono mb-6 text-white">
              Skills.render()
            </h1>
            <div className="text-neutral-500 font-mono text-lg">
              <span className="text-blue-400">const</span>{' '}
              <span className="text-white">developer</span> = {'{'}
              <span className="text-green-400">type</span>:{' '}
              <span className="text-orange-400">&quot;Full-Stack + Web3&quot;</span>
              {'}'}
            </div>
          </motion.div>

          {skills.map((section, index) => (
            <SkillSection key={section.category} section={section} index={index} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export { SkillSection } from './SkillSection';
