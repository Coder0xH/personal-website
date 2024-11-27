import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'DeFi Protocol',
    description: 'A decentralized finance protocol built with Solidity and React, featuring yield farming and liquidity pools.',
    tech: ['Solidity', 'React', 'Web3.js', 'Hardhat'],
    github: '#',
    live: '#'
  },
  {
    title: 'NFT Marketplace',
    description: 'A full-stack NFT marketplace with minting capabilities, built using Next.js and Rust.',
    tech: ['Next.js', 'Rust', 'IPFS', 'PostgreSQL'],
    github: '#',
    live: '#'
  },
  {
    title: 'Blockchain Explorer',
    description: 'Custom blockchain explorer for tracking transactions and smart contracts on multiple networks.',
    tech: ['Java', 'Spring Boot', 'Redis', 'React'],
    github: '#',
    live: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <FaExternalLinkAlt className="text-xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
