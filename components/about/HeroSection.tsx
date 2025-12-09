'use client';

import { motion, type Variants } from 'framer-motion';
import { FaGithub, FaTelegram } from 'react-icons/fa';

interface HeroSectionProps {
  variants: Variants;
}

export function HeroSection({ variants }: HeroSectionProps) {
  return (
    <motion.section className="text-center mb-24" variants={variants}>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Dexter Ellis
      </h1>
      <div className="flex flex-col items-center space-y-4">
        <p className="text-2xl md:text-3xl text-gray-300">
          <span className="text-blue-400">function</span>{' '}
          <span className="text-purple-400">developer</span>
          <span className="text-gray-400">(</span>
          <span className="text-orange-400">&quot;blockchain&quot;</span>
          <span className="text-gray-400">)</span>{' '}
          <span className="text-blue-400">extends</span>{' '}
          <span className="text-purple-400">artist</span>
        </p>
        <div className="flex space-x-4">
          <motion.a
            href="https://github.com/Coder0xH"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-800/30 transition-colors"
            whileHover={{ y: -2 }}
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://t.me/memejump_bot/memejump?startapp=GZEMUAGT"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-gray-800/30 transition-colors"
            whileHover={{ y: -2 }}
          >
            <FaTelegram className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

