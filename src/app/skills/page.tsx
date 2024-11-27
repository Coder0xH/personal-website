'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaJava, FaPython, FaReact, FaDocker, FaAws, FaLinux, FaEthereum, FaExternalLinkAlt, FaTerminal } from 'react-icons/fa'
import { SiSolidity, SiRust, SiPostgresql, SiRedis, SiMysql, SiMongodb, SiKubernetes, SiTerraform, SiTypescript, SiJavascript, SiGo, SiWeb3Dotjs } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import PageLayout from '@/components/PageLayout'

const skills = [
  {
    category: 'Blockchain Development',
    description: '// Smart contract development and Web3 integration',
    items: [
      { 
        name: 'Smart Contracts (Solidity)', 
        icon: SiSolidity, 
        level: 95, 
        color: '#627EEA',
        docs: 'https://docs.soliditylang.org/',
        quickStart: 'npx create-eth-app my-eth-app'
      },
      { 
        name: 'Web3.js/Ethers.js', 
        icon: SiWeb3Dotjs, 
        level: 90, 
        color: '#F16822',
        docs: 'https://docs.ethers.org/',
        quickStart: 'npm init web3-app'
      },
      { 
        name: 'Rust/Solana', 
        icon: SiRust, 
        level: 85, 
        color: '#FF8A00',
        docs: 'https://spl_governance.crates.io/',
        quickStart: 'cargo new my-solana-app'
      },
      { 
        name: 'DeFi Protocols', 
        icon: FaEthereum, 
        level: 88, 
        color: '#627EEA',
        docs: 'https://ethereum.org/defi/',
        quickStart: 'git clone https://github.com/aave/aave-v3-core'
      },
    ]
  },
  {
    category: 'Backend Development',
    description: '// Building scalable server-side applications',
    items: [
      { 
        name: 'Java/Spring Boot', 
        icon: FaJava, 
        level: 99, 
        color: '#E32C2E',
        docs: 'https://spring.io/projects/spring-boot',
        quickStart: 'spring init --dependencies=web,data-jpa my-spring-app'
      },
      { 
        name: 'Python', 
        icon: FaPython, 
        level: 70, 
        color: '#3776AB',
        docs: 'https://docs.python.org/',
        quickStart: 'python -m venv venv && pip install django'
      },
      { 
        name: 'Rust', 
        icon: SiRust, 
        level: 45, 
        color: '#FF8A00',
        docs: 'https://www.rust-lang.org/learn',
        quickStart: 'cargo new my-rust-app'
      },
      { 
        name: 'Go', 
        icon: SiGo, 
        level: 65, 
        color: '#00ADD8',
        docs: 'https://golang.org/doc/',
        quickStart: 'go mod init my-go-app'
      },
    ]
  },
  {
    category: 'Frontend Development',
    description: '// Creating responsive and interactive UIs',
    items: [
      { 
        name: 'React', 
        icon: FaReact, 
        level: 95, 
        color: '#61DAFB',
        docs: 'https://reactjs.org/',
        quickStart: 'npx create-react-app my-react-app'
      },
      { 
        name: 'Next.js', 
        icon: TbBrandNextjs, 
        level: 90, 
        color: '#000000',
        docs: 'https://nextjs.org/',
        quickStart: 'npx create-next-app my-next-app'
      },
      { 
        name: 'TypeScript', 
        icon: SiTypescript, 
        level: 88, 
        color: '#3178C6',
        docs: 'https://www.typescriptlang.org/',
        quickStart: 'tsc --init'
      },
      { 
        name: 'JavaScript', 
        icon: SiJavascript, 
        level: 92, 
        color: '#F7DF1E',
        docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        quickStart: 'node -v'
      },
    ]
  },
  {
    category: 'Database & Cache',
    description: '// Managing data storage and optimization',
    items: [
      { 
        name: 'PostgreSQL', 
        icon: SiPostgresql, 
        level: 92, 
        color: '#336791',
        docs: 'https://www.postgresql.org/docs/',
        quickStart: 'psql -U postgres'
      },
      { 
        name: 'Redis', 
        icon: SiRedis, 
        level: 88, 
        color: '#DC382D',
        docs: 'https://redis.io/docs/',
        quickStart: 'redis-server'
      },
      { 
        name: 'MySQL', 
        icon: SiMysql, 
        level: 94, 
        color: '#4479A1',
        docs: 'https://dev.mysql.com/doc/',
        quickStart: 'mysql -u root'
      },
      { 
        name: 'MongoDB', 
        icon: SiMongodb, 
        level: 82, 
        color: '#47A248',
        docs: 'https://docs.mongodb.com/',
        quickStart: 'mongod'
      },
    ]
  },
  {
    category: 'DevOps & Cloud',
    description: '// Infrastructure and deployment automation',
    items: [
      { 
        name: 'Docker', 
        icon: FaDocker, 
        level: 93, 
        color: '#2496ED',
        docs: 'https://docs.docker.com/',
        quickStart: 'docker run -it ubuntu bash'
      },
      { 
        name: 'Kubernetes', 
        icon: SiKubernetes, 
        level: 85, 
        color: '#326CE5',
        docs: 'https://kubernetes.io/docs/',
        quickStart: 'minikube start'
      },
      { 
        name: 'AWS', 
        icon: FaAws, 
        level: 88, 
        color: '#FF9900',
        docs: 'https://docs.aws.amazon.com/',
        quickStart: 'aws configure'
      },
      { 
        name: 'Terraform', 
        icon: SiTerraform, 
        level: 82, 
        color: '#7B42BC',
        docs: 'https://www.terraform.io/docs',
        quickStart: 'terraform init'
      },
      { 
        name: 'Linux', 
        icon: FaLinux, 
        level: 85, 
        color: '#FCC624',
        docs: 'https://www.linux.org/docs/',
        quickStart: 'sudo apt-get update'
      },
    ]
  }
]

const SkillBar = ({ name, level, icon: Icon, color, docs, quickStart }) => {
  const [isHovered, setIsHovered] = useState(false)
  const barRef = useRef(null)

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      // 可以添加一个提示动画
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative mb-8 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 mr-2" style={{ color }} />
        <span className="text-lg font-mono">{name}</span>
        <div className="ml-auto space-x-2 flex items-center">
          <span className="font-mono text-sm">
            <span className="text-green-400">level: </span>
            <span className="text-purple-400">{level}</span>
          </span>
        </div>
      </div>
      <div className="relative">
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700 group-hover:border-gray-600 transition-colors">
          <motion.div
            initial={false}
            animate={{ width: `${level}%` }}
            transition={{ 
              duration: 1.5, 
              ease: [0.4, 0.0, 0.2, 1],
              type: "spring",
              stiffness: 50,
              damping: 15
            }}
            className="h-full relative"
            style={{ 
              background: `linear-gradient(90deg, ${color}66 0%, ${color} 100%)`,
              boxShadow: isHovered ? `0 0 10px ${color}` : 'none'
            }}
          />
        </div>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="absolute left-0 right-0 mt-2 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700/50 shadow-xl"
              style={{ zIndex: 1000 }}
            >
              <div className="p-3 text-sm font-mono">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-5 h-5" style={{ color }} />
                    <span className="text-gray-300">{name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href={docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-2 py-1 rounded bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-blue-400 transition-all text-xs"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>Docs</span>
                    </a>
                    <button
                      onClick={() => copyToClipboard(quickStart)}
                      className="flex items-center space-x-1 px-2 py-1 rounded bg-gray-700/50 hover:bg-gray-700 text-gray-300 hover:text-green-400 transition-all text-xs"
                      title="Copy Quick Start Command"
                    >
                      <FaTerminal className="w-3 h-3" />
                      <span>Quick Start</span>
                    </button>
                  </div>
                </div>
                <div 
                  className="text-xs bg-gradient-to-r from-gray-900 to-gray-800 rounded p-2 border border-gray-700/50 cursor-pointer hover:border-gray-600 transition-colors"
                  onClick={() => copyToClipboard(quickStart)}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-green-400">$ Quick Start Command</span>
                    <span className="text-gray-500 text-xs">Click to copy</span>
                  </div>
                  <code className="text-orange-400">
                    {quickStart}
                  </code>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function SkillsPage() {
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
            Skills.render()
          </h1>
          <div className="text-gray-400 font-mono text-lg">
            <span className="text-blue-400">const</span> <span className="text-purple-400">developer</span> = {'{'}
            <span className="text-green-400">type</span>: <span className="text-orange-400">"Full-Stack + Web3"</span>
            {'}'}
          </div>
        </motion.div>

        {skills.map((section, index) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative mb-16 p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg border border-gray-700/50"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-mono font-semibold mb-2 text-blue-400">
                {section.category}
              </h2>
              <p className="text-gray-400 font-mono text-sm">{section.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  color={skill.color}
                  docs={skill.docs}
                  quickStart={skill.quickStart}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  )
}
