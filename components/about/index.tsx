'use client';

import { motion, type Variants } from 'framer-motion';
import { HeroSection } from './HeroSection';
import { TechnicalSkillsGrid, ArtisticSkillsSection } from './SkillsGrid';
import { ProjectsPreview } from './ProjectsPreview';

const animations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.3,
      },
    },
  } as Variants,
  item: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  } as Variants,
  glow: {
    initial: { opacity: 0.7 },
    animate: {
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  } as Variants,
};

export function AboutPage() {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="min-h-screen py-24 px-4 flex items-center justify-center">
        <motion.div
          variants={animations.container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto w-full"
        >
          <HeroSection variants={animations.item} />
          <TechnicalSkillsGrid itemVariants={animations.item} glowVariants={animations.glow} />
          <ArtisticSkillsSection itemVariants={animations.item} />
          <ProjectsPreview variants={animations.item} />
        </motion.div>
      </div>
    </div>
  );
}

export { HeroSection } from './HeroSection';
export { TechnicalSkillsGrid, ArtisticSkillsSection } from './SkillsGrid';
export { ProjectsPreview } from './ProjectsPreview';

