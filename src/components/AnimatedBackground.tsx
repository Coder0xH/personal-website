'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const getPosition = (pathname: string) => {
  switch (pathname) {
    case '/':
      return {
        first: { x: "-20%", y: "-20%" },
        second: { x: "20%", y: "20%" }
      }
    case '/about':
      return {
        first: { x: "-30%", y: "0%" },
        second: { x: "30%", y: "0%" }
      }
    case '/projects':
      return {
        first: { x: "0%", y: "-25%" },
        second: { x: "0%", y: "25%" }
      }
    case '/skills':
      return {
        first: { x: "-25%", y: "25%" },
        second: { x: "25%", y: "-25%" }
      }
    default:
      return {
        first: { x: "-20%", y: "-20%" },
        second: { x: "20%", y: "20%" }
      }
  }
}

export default function AnimatedBackground() {
  const pathname = usePathname()
  const positions = getPosition(pathname)

  const transition = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  }

  const breathingAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
  }

  const breathingTransition = {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }

  return (
    <div className="fixed inset-0 z-0">
      {/* 主要圆形 */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: positions.first.x,
          y: positions.first.y,
        }}
        transition={transition}
      />
      <motion.div
        className="absolute right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: positions.second.x,
          y: positions.second.y,
        }}
        transition={transition}
      />

      {/* 呼吸灯效果 */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          ...breathingAnimation,
          x: positions.first.x,
          y: positions.first.y,
        }}
        transition={{
          ...transition,
          scale: breathingTransition,
          opacity: breathingTransition,
        }}
      />
      <motion.div
        className="absolute right-0 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          ...breathingAnimation,
          x: positions.second.x,
          y: positions.second.y,
        }}
        transition={{
          ...transition,
          scale: {
            ...breathingTransition,
            delay: 2,
          },
          opacity: {
            ...breathingTransition,
            delay: 2,
          },
        }}
      />
    </div>
  )
}
