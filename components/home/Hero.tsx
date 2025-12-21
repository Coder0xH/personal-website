'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiPython, SiGo, SiDocker, SiTensorflow, SiPytorch, SiOpenai } from 'react-icons/si';
import { useLanguage } from '@/lib/context/LanguageContext';
import { ContactModal } from './ContactModal';
import Link from 'next/link';

/**
 * CodeCard Component
 * Simplified, clean version.
 */
const CodeCard = () => {
  const { t } = useLanguage();

  return (
    <div className="relative group w-full">
      {/* Clean border, no glow */}
      <div className="relative bg-black rounded-xl border border-white/10 p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed shadow-sm">
        {/* Window Controls - Grayscale/Subtle */}
        <div className="flex items-center space-x-2 mb-4 border-b border-white/10 pb-4">
          <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
          <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
          <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
          <div className="ml-auto text-xs text-neutral-500 font-sans">quant_agent.py</div>
        </div>

        {/* Code Content */}
        <div className="text-gray-300 overflow-x-auto scrollbar-hide">
          <div className="whitespace-pre">
            <div><span className="text-purple-400">class</span> <span className="text-yellow-400">AlphaAgent</span><span className="text-gray-500">(</span><span className="text-green-400">Agent</span><span className="text-gray-500">):</span></div>
            <div className="pl-4 py-1">
              <span className="text-gray-600">{t('home.hero.code.comment1')}</span>
            </div>
            <div className="pl-4">
              <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span><span className="text-gray-500">(</span><span className="text-cyan-400">self</span>, <span className="text-cyan-400">strategy</span><span className="text-gray-500">):</span>
            </div>
            <div className="pl-8">
              <span className="text-cyan-400">self</span>.strategy = strategy
              <br />
              <span className="text-cyan-400">self</span>.risk_level = <span className="text-green-400">"HIGH_FREQUENCY"</span>
            </div>
            
            <div className="pl-4 mt-3">
              <span className="text-purple-400">async def</span> <span className="text-blue-400">execute_trade</span><span className="text-gray-500">(</span><span className="text-cyan-400">self</span>, <span className="text-cyan-400">market_data</span><span className="text-gray-500">):</span>
            </div>
            <div className="pl-8">
              <span className="text-gray-600">{t('home.hero.code.comment2')}</span>
              <br />
              <span className="text-purple-400">if</span> <span className="text-cyan-400">self</span>.analyze(market_data) &gt; <span className="text-orange-400">0.85</span>:
              <br />
              <span className="text-purple-400">await</span> <span className="text-cyan-400">self</span>.order(<span className="text-green-400">"{t('home.hero.code.mission')}"</span>)
            </div>
            <div><span className="text-gray-500"></span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Hero() {
  const { t } = useLanguage();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-7rem)] flex items-center justify-center overflow-hidden py-8 sm:py-0 bg-black">
      {/* Removed background blobs and noise for a clean look */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Badge - Simplified */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-neutral-300 text-xs sm:text-sm font-medium tracking-wide">{t('home.hero.badge')}</span>
            </motion.div>
            
            {/* Main Title - Solid Color, No Gradient */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                {t('home.hero.title_prefix')} <br className="hidden lg:block" />
                <span className="text-white">
                  {t('home.hero.title_highlight')}
                </span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-light text-neutral-400 max-w-2xl mx-auto lg:mx-0">
              {t('home.hero.subtitle_prefix')} <strong className="text-white font-semibold">{t('home.hero.subtitle_name')}</strong>, {t('home.hero.subtitle_role')} 
              {t('home.hero.subtitle_desc')}
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
               <Link 
                 href="/projects" 
                 className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 text-center"
               >
                 {t('home.hero.cta_projects')}
               </Link>
               <button 
                 onClick={() => setIsContactOpen(true)}
                 className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-neutral-700 text-white font-medium text-sm uppercase tracking-wider hover:bg-neutral-900 hover:border-neutral-500 transition-all duration-300"
               >
                 {t('home.hero.cta_contact')}
               </button>
            </div>

            {/* Social Links & Tech Stack */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between border-t border-neutral-800 gap-6">
              <div className="flex space-x-4">
                 <a href="https://github.com/Coder0xH" className="text-neutral-400 hover:text-white transition-colors transform hover:-translate-y-1"><FaGithub size={24} /></a>
                 <a href="https://twitter.com" className="text-neutral-400 hover:text-white transition-colors transform hover:-translate-y-1"><FaTwitter size={24} /></a>
                 <a href="https://linkedin.com" className="text-neutral-400 hover:text-white transition-colors transform hover:-translate-y-1"><FaLinkedin size={24} /></a>
              </div>
              <div className="flex items-center space-x-4 text-neutral-500">
                <SiGo size={22} className="hover:text-white transition-colors" title="Go" />
                <SiPython size={22} className="hover:text-white transition-colors" title="Python" />
                <SiTensorflow size={22} className="hover:text-white transition-colors" title="TensorFlow" />
                <SiPytorch size={22} className="hover:text-white transition-colors" title="PyTorch" />
                <SiDocker size={24} className="hover:text-white transition-colors" title="Docker" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Element */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95, x: 20 }}
             animate={{ opacity: 1, scale: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative w-full max-w-lg mx-auto lg:max-w-none mt-8 lg:mt-0"
          >
             {/* Simplified backing - no colored glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] -z-10"></div>
             
             <CodeCard />

             {/* Floating 3D-like Icons - Grayscale/Subtle */}
             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 z-20 hidden sm:flex"
             >
               <div className="w-16 h-16 bg-black rounded-xl border border-neutral-800 shadow-lg flex items-center justify-center">
                 <SiOpenai size={32} className="text-neutral-300" />
               </div>
             </motion.div>

             <motion.div 
               animate={{ y: [10, -10, 10] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-6 -left-6 z-20 hidden sm:flex"
             >
               <div className="w-14 h-14 bg-black rounded-xl border border-neutral-800 shadow-lg flex items-center justify-center">
                 <SiGo size={30} className="text-neutral-300" />
               </div>
             </motion.div>
          </motion.div>
          
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  );
}
