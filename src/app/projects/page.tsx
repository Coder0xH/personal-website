'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaEthereum, FaTelegram } from 'react-icons/fa'
import { SiSolidity, SiRust, SiWeb3Dotjs } from 'react-icons/si'
import Navbar from '@/components/Navbar'

const projects = {
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ]
}

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/30
               transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
      {project.icon}
    </div>
    
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

    <ul className="space-y-2 mb-6">
      {project.highlights.map((highlight, index) => (
        <li key={index} className="text-gray-400 flex items-start">
          <span className="text-blue-400 mr-2">•</span>
          {highlight}
        </li>
      ))}
    </ul>

    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-400 hover:text-blue-300"
    >
      View Project →
    </a>
  </motion.div>
)

const ProjectSection = ({ title, projects }) => (
  <section className="mb-16">
    <h2 className="text-2xl font-bold mb-6 text-blue-400">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
)

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-gray-100 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Blockchain Projects
            </span>
          </motion.h1>

          <ProjectSection title="TON Blockchain" projects={projects.ton} />
          <ProjectSection title="Ethereum" projects={projects.ethereum} />
          <ProjectSection title="Bitcoin" projects={projects.bitcoin} />
          <ProjectSection title="Corporate" projects={projects.corporate} />
        </div>
      </div>
    </>
  )
}
