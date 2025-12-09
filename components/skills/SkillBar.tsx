'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTerminal } from 'react-icons/fa';
import type { SkillBarProps } from '@/types/skill';

export function SkillBar({ name, level, icon: Icon, color, docs, quickStart }: SkillBarProps) {
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
              type: 'spring',
              stiffness: 50,
              damping: 15,
            }}
            className="h-full relative"
            style={{
              background: `linear-gradient(90deg, ${color}66 0%, ${color} 100%)`,
              boxShadow: isHovered ? `0 0 10px ${color}` : 'none',
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
                <button
                  className="text-xs bg-gradient-to-r from-gray-900 to-gray-800 rounded p-2 border border-gray-700/50 hover:border-gray-600 transition-colors w-full text-left"
                  onClick={() => copyToClipboard(quickStart)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      copyToClipboard(quickStart);
                    }
                  }}
                  aria-label="Copy quick start command"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-green-400">$ Quick Start Command</span>
                    <span className="text-gray-500 text-xs">Click to copy</span>
                  </div>
                  <code className="text-orange-400">{quickStart}</code>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

