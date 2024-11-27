'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaEthereum, FaTelegram, FaCode, FaServer, FaDatabase } from 'react-icons/fa'
import { SiSolidity, SiRust, SiWeb3Dotjs, SiBitcoin } from 'react-icons/si'
import Navbar from '@/components/Navbar'

interface ProjectStats {
  [key: string]: string | number;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  stats: ProjectStats;
  highlights: string[];
  link: string;
  icon: React.ReactNode;
}

const projects: { [key: string]: Project[] } = {
  ton: [
    {
      title: 'MemeJump GameFi Platform',
      description: 'A Play-to-Earn gaming platform built as a Telegram mini-app',
      tech: ['Three.js', 'Spring Boot', 'TON', 'AWS'],
      link: 'https://t.me/memejump_bot/memejump?startapp=GZEMUAGT',
      icon: <FaTelegram className="w-6 h-6" />,
      highlights: [
        'Three.js-powered jump game with Web3 integration',
        'High-concurrency Java Spring Boot backend',
        'Custodial wallet system with V4R2 implementation',
        'Multi-signature wallet system for platform fees'
      ],
      stats: {
        users: '300K+',
        transactions: '1M+',
        volume: '$500K+'
      }
    },
    {
      title: 'MemeShorts Platform',
      description: 'Short video platform built as a Telegram mini-app',
      tech: ['Next.js', 'Spring Boot', 'TON', 'OAuth 2.0'],
      link: 'https://t.me/MemeShorts_bot/memeshort',
      icon: <FaTelegram className="w-6 h-6" />,
      highlights: [
        'Next.js frontend with SSR',
        'Spring Boot microservices',
        'OAuth 2.0 social integration',
        'TON payment system'
      ],
      stats: {
        users: '50K+',
        videos: '100K+',
        daily: '10K+'
      }
    }
  ],
  ethereum: [
    {
      title: 'Saluki Token Platform',
      description: 'Token minting platform with advanced smart contracts',
      tech: ['Solidity', 'Hardhat', 'Create2', 'Uniswap'],
      link: 'https://saluki.me/',
      icon: <FaEthereum className="w-6 h-6" />,
      highlights: [
        'Custom Solidity smart contracts',
        'Factory contract with Create2',
        'Automated contract verification',
        'Uniswap integration'
      ],
      stats: {
        tokens: '1K+',
        tvl: '$1M+',
        trades: '50K+'
      }
    }
  ],
  bitcoin: [
    {
      title: 'Runes Optimization System',
      description: 'Advanced Runes transaction optimization system',
      tech: ['Rust', 'Python', 'Bitcoin', 'Chain-mint'],
      link: 'https://github.com/Coder0xH',
      icon: <SiRust className="w-6 h-6" />,
      highlights: [
        'Rust implementation of chain-mint',
        '30% cost reduction in minting',
        'Batch processing optimization',
        'Custom transaction construction'
      ],
      stats: {
        optimization: '30%',
        throughput: '1K TPS',
        savings: '$100K+'
      }
    }
  ],
  corporate: [
    {
      title: 'Infa Labs Website',
      description: 'Interactive corporate website showcasing blockchain technology',
      tech: ['Three.js', 'React', 'Tailwind CSS', 'Animation'],
      link: 'https://infalabs.io/',
      icon: <SiWeb3Dotjs className="w-6 h-6" />,
      highlights: [
        'Three.js 3D visualizations',
        'React interactive components',
        'Responsive design',
        'Modern animations'
      ],
      stats: {
        performance: '95+',
        animations: '20+',
        components: '50+'
      }
    }
  ]
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-xl border border-gray-700/50 backdrop-blur-sm
                 group transition-all duration-300"
    >
      {/* Terminal-like header */}
      <div className="bg-gray-900/80 px-4 py-2 flex items-center justify-between border-b border-gray-700/50">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="font-mono text-sm text-gray-400">project.execute()</div>
        {project.icon}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-300 mb-4 font-mono">{project.description}</p>
        
        {/* Tech stack with terminal style */}
        <div className="font-mono text-sm mb-4">
          <div className="text-green-400">$ tech.stack</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((tech) => (
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

        {/* Project stats with animation */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.entries(project.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-blue-400 font-mono text-lg">{value}</div>
              <div className="text-gray-400 text-xs uppercase">{key}</div>
            </div>
          ))}
        </div>

        {/* Highlights with code comment style */}
        <div className="space-y-2 mb-6 font-mono text-sm">
          <div className="text-gray-400">// Key Features</div>
          {project.highlights.map((highlight, index) => (
            <div key={index} className="text-gray-300 flex items-start">
              <span className="text-purple-400 mr-2">→</span>
              {highlight}
            </div>
          ))}
        </div>

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-mono"
          whileHover={{ x: 5 }}
        >
          <span>view_project</span>
          <span className="text-gray-400">()</span>
          <span>→</span>
        </motion.a>
      </div>

      {/* Animated gradient border */}
      <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/30 
                    transition-colors duration-300" />
    </motion.div>
  )
}

const ProjectSection = ({ title, projects, icon }: { title: string, projects: Project[], icon: React.ReactNode }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-16"
  >
    <div className="flex items-center space-x-3 mb-6">
      {icon}
      <h2 className="text-2xl font-bold font-mono">
        <span className="text-gray-400">const</span>{' '}
        <span className="text-purple-400">{title}</span>{' '}
        <span className="text-gray-400">=</span>{' '}
        <span className="text-blue-400">projects</span>
        <span className="text-gray-400">.filter()</span>
      </h2>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </motion.section>
)

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen text-gray-100 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold font-mono mb-4">
              <span className="text-gray-400">function</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                showcase_projects
              </span>
              <span className="text-gray-400">()</span>{' '}
              <span className="text-blue-400">{'{'}</span>
            </h1>
            <p className="text-gray-400 font-mono">
              // Exploring the intersection of blockchain and development
            </p>
          </motion.div>

          <ProjectSection 
            title="TON_PROJECTS" 
            projects={projects.ton} 
            icon={<FaTelegram className="w-6 h-6 text-blue-400" />} 
          />
          <ProjectSection 
            title="ETH_PROJECTS" 
            projects={projects.ethereum} 
            icon={<FaEthereum className="w-6 h-6 text-blue-400" />} 
          />
          <ProjectSection 
            title="BTC_PROJECTS" 
            projects={projects.bitcoin} 
            icon={<SiBitcoin className="w-6 h-6 text-orange-400" />} 
          />
          <ProjectSection 
            title="CORP_PROJECTS" 
            projects={projects.corporate} 
            icon={<FaCode className="w-6 h-6 text-purple-400" />} 
          />

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-16"
          >
            <span className="text-blue-400 font-mono">{'}'}</span>
          </motion.div>
        </div>
      </div>
    </>
  )
}
