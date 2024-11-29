interface TechStackProps {
  tech: string[];
}

export const TechStack = ({ tech }: TechStackProps) => (
  <div className="font-mono text-sm mb-4">
    <div className="text-green-400">$ tech.stack</div>
    <div className="flex flex-wrap gap-2 mt-2">
      {tech.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-gray-800/50 text-blue-400 rounded-full border border-gray-700/50
                   hover:border-blue-500/50 transition-colors cursor-default"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)
