import { ReactNode } from 'react'

interface ProjectCardHeaderProps {
  icon: ReactNode;
}

export const ProjectCardHeader = ({ icon }: ProjectCardHeaderProps) => (
  <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700/50">
    <div className="flex items-center space-x-2">
      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
    </div>
    <div className="font-mono text-sm text-gray-400">project.execute()</div>
    {icon}
  </div>
)
