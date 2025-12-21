'use client';

import { PageLayout } from '@/components/layout';
import { SkillSection } from './SkillSection';
import { useSkillsData } from '@/hooks/useLocalizedData';
import { useLanguage } from '@/lib/context/LanguageContext';

export function SkillsPage() {
  const skills = useSkillsData();
  const { t } = useLanguage();

  return (
    <PageLayout>
      <div className="min-h-screen py-24 px-4 bg-black selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-24">
            <h1 className="text-5xl md:text-7xl font-bold font-mono text-white mb-6 tracking-tighter">
              SKILLS
              <span className="animate-pulse">_</span>
            </h1>
            
            <div className="font-mono text-lg space-y-2 border-l-2 border-neutral-800 pl-6 text-neutral-400">
              <p>
                <span className="text-neutral-600">class</span> <span className="text-white">Developer</span> <span className="text-neutral-600">extends</span> <span className="text-white">Human</span> {'{'}
              </p>
              <p className="pl-4">
                <span className="text-neutral-600">public</span> stack: <span className="text-white">{t('skills.header.stack')}</span>;
              </p>
              <p className="pl-4">
                <span className="text-neutral-600">private</span> status: <span className="text-white">{t('skills.header.status')}</span>;
              </p>
              <p>{'}'}</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-4">
            {skills.map((section, index) => (
              <SkillSection key={section.category} section={section} index={index} />
            ))}
          </div>

          {/* Footer Decoration */}
          <div className="mt-32 border-t border-neutral-900 pt-8 text-center">
             <p className="text-neutral-700 font-mono text-sm">
               EOF: SKILLS_MATRIX_V2.0
             </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
