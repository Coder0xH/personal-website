'use client';

import { CoderResume } from './CoderResume';

export function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-2 md:px-4 flex items-center justify-center bg-black">
      <CoderResume />
    </div>
  );
}

export { HeroSection } from './HeroSection';
export { TechnicalSkillsGrid, ArtisticSkillsSection } from './SkillsGrid';
export { ProjectsPreview } from './ProjectsPreview';
export { ResumeViewer } from './ResumeViewer';
