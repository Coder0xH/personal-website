'use client';

import { useState } from 'react';
import { FaExternalLinkAlt, FaTerminal, FaCheck } from 'react-icons/fa';
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
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(quickStart);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-black border border-neutral-800 hover:border-white transition-colors duration-300 p-5 min-h-[140px] flex flex-col justify-between">
      {/* Top Row: Icon & Actions */}
      <div className="flex justify-between items-start mb-4">
        <div className="relative">
          {/* Icon: Grayscale by default, color on hover */}
          <div className="transition-all duration-300 filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100">
            <Icon className={`w-8 h-8 ${color}`} />
          </div>
        </div>
        
        {/* Actions: Visible on hover */}
        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={copyToClipboard}
            className="p-1.5 text-neutral-500 hover:text-white border border-transparent hover:border-neutral-700 transition-colors"
            title="Copy Quick Start"
          >
            {copied ? <FaCheck size={12} className="text-green-500" /> : <FaTerminal size={12} />}
          </button>
          <a
            href={docs}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-neutral-500 hover:text-white border border-transparent hover:border-neutral-700 transition-colors"
            title="Documentation"
          >
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>

      {/* Bottom Row: Info */}
      <div>
        <h3 className="text-white font-mono text-lg font-bold mb-2 tracking-tight">{name}</h3>
        
        {/* Progress Bar Container */}
        <div className="w-full bg-neutral-900 h-1 overflow-hidden">
          {/* Progress Bar: Expands on hover */}
          <div 
            className="h-full bg-white transition-transform duration-500 ease-out origin-left transform scale-x-0 group-hover:scale-x-100"
            style={{ width: `${level}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center mt-2">
           <span className="text-xs text-neutral-600 font-mono group-hover:text-neutral-400 transition-colors">
             {level}% PROFICIENCY
           </span>
        </div>
      </div>
    </div>
  );
}
