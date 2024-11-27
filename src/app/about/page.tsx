'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaEthereum, FaTelegram } from 'react-icons/fa'
import { SiSolidity, SiWeb3Dotjs, SiBlockchaindotcom } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Navbar from '@/components/Navbar'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const techStackItems = [
    { icon: <FaEthereum className="w-8 h-8" />, label: "Ethereum" },
    { icon: <SiSolidity className="w-8 h-8" />, label: "Solidity" },
    { icon: <SiWeb3Dotjs className="w-8 h-8" />, label: "Web3.js" },
    { icon: <TbBrandNextjs className="w-8 h-8" />, label: "Next.js" },
    { icon: <SiBlockchaindotcom className="w-8 h-8" />, label: "Blockchain" }
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-gray-100 pt-40 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <div className="text-center space-y-8 mb-16">
            <motion.h1 
              className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block w-full"
              variants={itemVariants}
            >
              Dexter Ellis
            </motion.h1>
            <motion.p 
              className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block w-full"
              variants={itemVariants}
            >
              Blockchain Developer
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-6"
              variants={itemVariants}
            >
              {[
                { href: "https://github.com/Coder0xH", icon: <FaGithub className="h-8 w-8" /> },
                { href: "https://t.me/memejump_bot/memejump?startapp=GZEMUAGT", icon: <FaTelegram className="h-8 w-8" /> }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transform hover:scale-110 transition-all"
                  whileHover={{ y: -2 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Tech Stack Section */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {techStackItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                  whileHover={{ scale: 1.1 }}
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                >
                  <div className="p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.section 
            variants={itemVariants}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Infa Labs Website",
                  description: "Corporate website built with Three.js + React",
                  link: "https://infalabs.io/",
                  linkText: "Visit Website"
                },
                {
                  title: "MemeJump GameFi",
                  description: "Telegram mini-app game platform with Play-to-Earn mechanics",
                  link: "https://t.me/memejump_bot/memejump?startapp=GZEMUAGT",
                  linkText: "Play Game"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <span>{project.linkText}</span>
                    <span>→</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Timeline */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Full Stack Developer & Project Manager",
                  company: "Shenzhen Yizhan Yuan Technology Co., Ltd",
                  period: "2024.6 - Present",
                  achievements: [
                    "Led development of TON GameFi platform with 300k+ users",
                    "Developed Telegram mini-apps for gaming and short video content",
                    "Managed team of 7 developers and coordinated project timelines"
                  ]
                },
                {
                  title: "Backend Developer",
                  company: "Nanjing Huasu Technology Co., Ltd",
                  period: "2023.12 - 2024.06",
                  achievements: [
                    "Developed core modules for green energy consumption calculation system",
                    "Designed and optimized database structures for high-performance data processing"
                  ]
                }
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-blue-400 before:to-purple-500"
                >
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <p className="text-blue-400 mb-4">{experience.company} | {experience.period}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </>
  )
}
