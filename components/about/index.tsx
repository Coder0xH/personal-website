'use client';

import { CoderResume } from './CoderResume';

export function AboutPage() {
  return (
    <div className="h-[calc(100vh-7rem)] w-full pb-4 px-2 md:px-4 flex flex-col items-center justify-center bg-black overflow-hidden">
      <CoderResume />
    </div>
  );
}

export { HeroSection } from './HeroSection';
export { TechnicalSkillsGrid, ArtisticSkillsSection } from './SkillsGrid';
export { ProjectsPreview } from './ProjectsPreview';
export { ResumeViewer } from './ResumeViewer';
