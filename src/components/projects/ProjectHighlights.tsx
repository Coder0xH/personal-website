interface ProjectHighlightsProps {
  highlights: string[];
}

export const ProjectHighlights = ({ highlights }: ProjectHighlightsProps) => (
  <div className="space-y-2 mb-6 font-mono text-sm">
    <div className="text-gray-400">{/* Key Features */}</div>
    {highlights.map((highlight) => (
      <div key={`highlight-${highlight}`} className="text-gray-300 flex items-start">
        <span className="text-purple-400 mr-2">→</span>
        {highlight}
      </div>
    ))}
  </div>
)
