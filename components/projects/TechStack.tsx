interface TechStackProps {
  tech: string[];
}

export function TechStack({ tech }: TechStackProps) {
  return (
    <div className="font-mono text-sm mb-4">
      <div className="text-green-400">$ tech.stack</div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-gray-800/50 text-blue-400 rounded-full border border-gray-700/50
                     hover:border-blue-500/50 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

