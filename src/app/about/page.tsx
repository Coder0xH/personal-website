'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaEthereum, FaTelegram } from 'react-icons/fa'
import { SiSolidity } from 'react-icons/si'
import Navbar from '@/components/Navbar'

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-gray-100 pt-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Dexter Ellis</h1>
              <p className="text-xl text-blue-400">Blockchain Developer</p>
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/Coder0xH" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaGithub className="h-8 w-8" />
                </a>
                <a href="https://t.me/memejump_bot/memejump?startapp=GZEMUAGT" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <FaTelegram className="h-8 w-8" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
              <div>
                <p>📧 Email: coder0xh@gmail.com</p>
              </div>
              <div>
                <p>🌍 Location: Shenzhen, China</p>
                <p>🎂 Age: 28</p>
              </div>
            </div>

            {/* Featured Projects */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="bg-gray-800 p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Infa Labs Website</h3>
                  <p className="text-gray-300 mb-4">Corporate website built with Three.js + React</p>
                  <a href="https://infalabs.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Visit Website →
                  </a>
                </motion.div>

                <motion.div 
                  className="bg-gray-800 p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2">MemeJump GameFi</h3>
                  <p className="text-gray-300 mb-4">Telegram mini-app game platform with Play-to-Earn mechanics</p>
                  <a href="https://t.me/memejump_bot/memejump?startapp=GZEMUAGT" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Play Game →
                  </a>
                </motion.div>

                <motion.div 
                  className="bg-gray-800 p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2">MemeShorts Platform</h3>
                  <p className="text-gray-300 mb-4">Telegram mini-app for short videos built with Next.js</p>
                  <a href="https://t.me/MemeShorts_bot/memeshort" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    View Platform →
                  </a>
                </motion.div>

                <motion.div 
                  className="bg-gray-800 p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2">Saluki Token</h3>
                  <p className="text-gray-300 mb-4">Token minting platform with custom Solidity smart contracts</p>
                  <a href="https://saluki.me/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    Visit Platform →
                  </a>
                </motion.div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Blockchain</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Deep understanding of BTC, ETH, SOL, TON</li>
                    <li>Smart Contract Development (Solidity, FunC)</li>
                    <li>Web3.js, Ethers.js integration</li>
                    <li>DeFi & GameFi development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Development</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Java, Spring Boot, Python</li>
                    <li>React, Next.js, Three.js</li>
                    <li>PostgreSQL, MySQL, Redis</li>
                    <li>Docker, Jenkins, AWS</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold">Full Stack Developer & Project Manager</h3>
                  <p className="text-blue-400">Shenzhen Yizhan Yuan Technology Co., Ltd | 2024.6 - Present</p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                    <li>Led development of TON GameFi platform with 300k+ users</li>
                    <li>Developed Telegram mini-apps for gaming and short video content</li>
                    <li>Managed team of 7 developers and coordinated project timelines</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Backend Developer</h3>
                  <p className="text-blue-400">Nanjing Huasu Technology Co., Ltd | 2023.12 - 2024.06</p>
                  <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
                    <li>Developed core modules for green energy consumption calculation system</li>
                    <li>Designed and optimized database structures for high-performance data processing</li>
                  </ul>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  )
}
