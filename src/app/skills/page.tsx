'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaJava, FaPython, FaReact, FaDocker, FaAws, FaGitAlt, FaLinux, FaEthereum } from 'react-icons/fa'
import { SiSolidity, SiRust, SiSpring, SiPostgresql, SiRedis, SiMysql, SiMongodb, SiKubernetes, SiTerraform, SiGraphql, SiTypescript, SiJavascript, SiGo, SiWeb3Dotjs } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Navbar from '@/components/Navbar'

const skills = [
  {
    category: 'Blockchain Development',
    items: [
      { name: 'Smart Contracts (Solidity)', icon: SiSolidity, level: 95 },
      { name: 'Web3.js/Ethers.js', icon: SiWeb3Dotjs, level: 90 },
      { name: 'Rust/Solana', icon: SiRust, level: 85 },
      { name: 'DeFi Protocols', icon: FaEthereum, level: 88 },
    ]
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Java/Spring Boot', icon: FaJava, level: 99 },
      { name: 'Python', icon: FaPython, level: 70 },
      { name: 'Rust', icon: SiGraphql, level: 45 },
      { name: 'Go', icon: SiGo, level: 65 },
    ]
  },
  {
    category: 'Frontend Development',
    items: [
      { name: 'React', icon: FaReact, level: 95 },
      { name: 'Next.js', icon: TbBrandNextjs, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 88 },
      { name: 'JavaScript', icon: SiJavascript, level: 92 },
    ]
  },
  {
    category: 'Database & Cache',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 92 },
      { name: 'Redis', icon: SiRedis, level: 88 },
      { name: 'MySQL', icon: SiMysql, level: 94 },
      { name: 'MongoDB', icon: SiMongodb, level: 82 },
    ]
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: FaDocker, level: 93 },
      { name: 'Kubernetes', icon: SiKubernetes, level: 85 },
      { name: 'AWS', icon: FaAws, level: 88 },
      { name: 'Terraform', icon: SiTerraform, level: 82 },
      { name: 'Linux', icon: FaLinux, level: 85 },
    ]
  }
]

const HexagonBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        >
          <div className="w-20 h-20 border-2 border-blue-400 rotate-45 opacity-20" />
        </div>
      ))}
    </div>
  )
}

const SkillBar = ({ name, level, icon: Icon }) => {
  const barRef = useRef(null)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative mb-8"
    >
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 text-blue-400 mr-2" />
        <span className="text-lg font-medium">{name}</span>
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
        />
      </div>
      <div className="absolute right-0 top-0 text-sm text-blue-400">
        {level}%
      </div>
    </motion.div>
  )
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Navbar />
      <HexagonBackground />
      
      <main className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Technical Expertise
          </span>
        </motion.h1>

        <div className="max-w-4xl mx-auto">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.items.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Constantly exploring new technologies and staying at the forefront of Web3 development, while maintaining expertise across the full stack.
          </p>
        </motion.div>
      </main>
    </div>
  )
}
