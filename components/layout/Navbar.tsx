'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { useScroll } from '@/hooks';
import { useLanguage } from '@/lib/context/LanguageContext';

interface NavItem {
  href: string;
  label: string;
}

export function Navbar() {
  const isScrolled = useScroll({ threshold: 20 });
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems: NavItem[] = [
    { href: '/home', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/skills', label: t('nav.skills') },
    { href: '/projects', label: t('nav.projects') },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
      className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div
        className={`
          pointer-events-auto
          relative flex items-center justify-between
          px-4 sm:px-6 py-3
          rounded-full
          border border-white/10
          transition-all duration-300 ease-in-out
          ${isScrolled ? 'bg-black/90 backdrop-blur-xl scale-[0.98]' : 'bg-black/60 backdrop-blur-lg scale-100'}
          w-full max-w-[95%] sm:max-w-3xl
        `}
      >
        {/* Logo / Brand - Minimalist Black/White */}
        <Link href="/home" className="flex items-center space-x-3 mr-2 sm:mr-6 group shrink-0">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white group-hover:scale-105 transition-transform duration-300">
            <span className="font-mono text-sm font-bold text-black">DE</span>
          </div>
          <span className="hidden md:block font-bold text-sm tracking-wide text-white transition-colors">
            Dexter<span className="text-neutral-500">.AI</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center justify-center flex-1 min-w-0">
          <div className="flex items-center space-x-1 px-2 py-1 bg-neutral-900/50 rounded-full border border-white/5 overflow-x-auto scrollbar-hide max-w-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className="relative shrink-0">
                  <div 
                    className={`
                      relative z-10 px-3 sm:px-5 py-1.5 
                      text-xs sm:text-sm font-medium transition-colors duration-300
                      ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}
                    `}
                  >
                    {item.label}
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4 ml-2 sm:ml-6 shrink-0">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 text-xs font-mono font-medium text-neutral-400 hover:text-white transition-all uppercase border border-transparent hover:border-white/10"
          >
            {language}
          </button>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors hidden sm:block p-1.5 hover:bg-white/10 rounded-full"
          >
            <FaGithub size={18} />
          </a>

          <div className="relative group">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div className="absolute top-full right-0 mt-2 w-max px-2 py-1 bg-neutral-900 border border-white/10 rounded text-[10px] text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Open to Work
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
