import type { ProjectStats as ProjectStatsType } from '@/types/project';

interface ProjectStatsProps {
  stats: ProjectStatsType;
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} className="text-center">
          <div className="text-blue-400 font-mono text-lg">{value}</div>
          <div className="text-gray-400 text-xs uppercase">{key}</div>
        </div>
      ))}
    </div>
  );
}

