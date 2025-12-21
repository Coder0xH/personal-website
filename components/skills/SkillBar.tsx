'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaCopy, FaCheck } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface SkillBarProps {
  name: string;
  level: number;
  icon: IconType;
  color: string;
  docs: string;
  quickStart: string;
}

export function SkillBar({ name, level, icon: Icon, color, docs, quickStart }: SkillBarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="group relative bg-black border border-neutral-800 rounded-lg p-4 transition-all duration-300 hover:border-neutral-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-md bg-neutral-900 ${color.replace('text-', 'bg-opacity-10 ')}`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <div>
            <h3 className="text-white font-mono font-medium">{name}</h3>
            <div className="flex items-center space-x-2 mt-1">
               <span className="text-xs text-neutral-500 font-mono">
                 {level >= 90 ? 'Expert' : level >= 80 ? 'Advanced' : 'Proficient'}
               </span>
            </div>
          </div>
        </div>

        {/* Actions - Visible on hover or touch */}
        <div className={`flex items-center space-x-2 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <a
              href={docs}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
              title="Documentation"
            >
              <FaExternalLinkAlt size={12} />
            </a>
            <button
              onClick={() => copyToClipboard(quickStart)}
              className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
              title="Copy Install Command"
            >
              {copied ? <FaCheck size={12} className="text-green-500" /> : <FaCopy size={12} />}
            </button>
        </div>
      </div>
    </div>
  );
}
