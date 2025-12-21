'use client';

import { PageLayout } from '@/components/layout';
import { ProjectSection } from './ProjectSection';
import { useProjectsData } from '@/hooks/useLocalizedData';
import { useLanguage } from '@/lib/context/LanguageContext';

export function ProjectsPage() {
  const projects = useProjectsData();
  const { t } = useLanguage();

  const blockchainProjects = [
    ...projects.ton,
    ...projects.ethereum,
    ...projects.bitcoin,
  ];

  const backendProjects = [...projects.backend];
  const fullStackProjects = [...projects.corporate];

  return (
    <PageLayout>
      <div className="min-h-screen py-24 px-4 bg-black selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-24">
            <h1 className="text-5xl md:text-7xl font-bold font-mono text-white mb-6 tracking-tighter">
              PROJECTS
              <span className="animate-pulse">_</span>
            </h1>
            
            <div className="font-mono text-lg space-y-2 border-l-2 border-neutral-800 pl-6 text-neutral-400">
              <p>
                <span className="text-neutral-600">const</span> <span className="text-white">Portfolio</span> <span className="text-neutral-600">=</span> <span className="text-white">new Array(3)</span>;
              </p>
              <p className="pl-4">
                <span className="text-neutral-600">Portfolio</span>[0] = <span className="text-white">{t('projects.header.backend')}</span>;
              </p>
              <p className="pl-4">
                <span className="text-neutral-600">Portfolio</span>[1] = <span className="text-white">{t('projects.header.blockchain')}</span>;
              </p>
              <p className="pl-4">
                <span className="text-neutral-600">Portfolio</span>[2] = <span className="text-white">{t('projects.header.fullstack')}</span>;
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <ProjectSection
              title="Backend Infrastructure"
              description="// Scalable Microservices & Architecture"
              projects={backendProjects}
            />

            <ProjectSection
              title="Blockchain & Web3"
              description="// Decentralized Applications & Smart Contracts"
              projects={blockchainProjects}
            />

            <ProjectSection
              title="Full-Stack Solutions"
              description="// Interactive Web Applications"
              projects={fullStackProjects}
            />
          </div>

          {/* Footer Decoration */}
          <div className="mt-32 border-t border-neutral-900 pt-8 text-center">
             <p className="text-neutral-700 font-mono text-sm">
               EOF: PROJECT_CATALOG_V2.0
             </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
