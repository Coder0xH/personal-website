'use client'

import { motion } from 'framer-motion'
import { FaEthereum, FaCode } from 'react-icons/fa'
import PageLayout from '@/components/PageLayout'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Project } from '@/types/project'
import { blockchainProjects, fullStackProjects } from '@/data/projects'

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
    <PageLayout>
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold font-mono mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Projects.showcase()
          </h1>
          <div className="text-gray-400 font-mono text-lg">
            <span className="text-blue-400">const</span> <span className="text-purple-400">portfolio</span> = {'{'}
            <span className="text-green-400">type</span>: <span className="text-orange-400">"Web3 + Full-Stack"</span>
            {'}'}
          </div>
        </motion.div>

        <ProjectSection
          title="Blockchain Projects"
          projects={blockchainProjects}
          icon={<FaEthereum className="w-6 h-6 text-blue-400" />}
        />

        <ProjectSection
          title="Full-Stack Projects"
          projects={fullStackProjects}
          icon={<FaCode className="w-6 h-6 text-purple-400" />}
        />
      </div>
    </PageLayout>
  )
}
