'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TbBrandNextjs, TbCurrencySolana } from "react-icons/tb"
import { FaJava, FaEthereum } from "react-icons/fa"
import { SiBitcoin, SiRust, SiTon } from "react-icons/si"

// Logo组件数据
const logos = [
  {
    id: 'next',
    element: <TbBrandNextjs className="w-3/4 h-3/4" />,
    color: '#ffffff',
    bgColor: 'rgba(0, 0, 0, 0.8)'
  },
  {
    id: 'java',
    element: <FaJava className="w-3/4 h-3/4" />,
    color: '#ffffff',
    bgColor: 'rgba(0, 116, 150, 0.8)'
  },
  {
    id: 'bitcoin',
    element: <SiBitcoin className="w-3/4 h-3/4" />,
    color: '#F7931A',
    bgColor: 'rgba(247, 147, 26, 0.15)'
  },
  {
    id: 'solana',
    element: <TbCurrencySolana className="w-3/4 h-3/4" />,
    color: '#00FFA3',
    bgColor: 'rgba(0, 255, 163, 0.15)'
  },
  {
    id: 'ethereum',
    element: <FaEthereum className="w-3/4 h-3/4" />,
    color: '#627EEA',
    bgColor: 'rgba(98, 126, 234, 0.15)'
  },
  {
    id: 'ton',
    element: <SiTon className="w-3/4 h-3/4" />,
    color: '#0098EA',
    bgColor: 'rgba(0, 152, 234, 0.15)'
  },
  {
    id: 'rust',
    element: <SiRust className="w-3/4 h-3/4" />,
    color: '#ffffff',
    bgColor: 'rgba(230, 100, 50, 0.8)'
  }
]

const LogoWithBackground = ({ logo }: { logo: typeof logos[0] }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div
      className="absolute inset-0 rounded-full"
      style={{
        backgroundColor: logo.bgColor,
        boxShadow: `0 0 20px 2px ${logo.bgColor}`
      }}
    />
    <div
      className="relative z-10 flex items-center justify-center w-full h-full"
      style={{ color: logo.color }}
    >
      {logo.element}
    </div>
  </div>
)

export default function AnimatedBackground() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getRandomPosition = () => {
    const padding = 100
    const maxX = (windowSize.width / 2) - padding
    const maxY = (windowSize.height / 2) - padding
    return {
      x: Math.random() * maxX * (Math.random() > 0.5 ? 1 : -1),
      y: Math.random() * maxY * (Math.random() > 0.5 ? 1 : -1)
    }
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {windowSize.width > 0 && logos.map((logo) => {
        const positions = Array(4).fill(0).map(getRandomPosition)
        return (
          <motion.div
            key={logo.id}
            className="absolute left-1/2 top-1/2 w-20 h-20 opacity-90 hover:opacity-100 transition-all duration-300"
            style={{
              x: positions[0].x,
              y: positions[0].y,
            }}
            animate={{
              x: positions.map(p => p.x),
              y: positions.map(p => p.y),
              rotate: [0, 360]
            }}
            transition={{
              duration: 30 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              times: [0, 0.25, 0.5, 0.75],
              rotate: {
                duration: 40 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <LogoWithBackground logo={logo} />
          </motion.div>
        )
      })}
    </div>
  )
}
