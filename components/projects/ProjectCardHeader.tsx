import type { ReactNode } from 'react';

interface ProjectCardHeaderProps {
  icon: ReactNode;
}

export function ProjectCardHeader({ icon }: ProjectCardHeaderProps) {
  return (
    <div className="bg-neutral-900 px-4 py-2 flex items-center justify-between border-b border-neutral-800">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
        <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
        <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
      </div>
      <div className="font-mono text-sm text-neutral-500">project.execute()</div>
      <div className="text-neutral-500">{icon}</div>
    </div>
  );
}

