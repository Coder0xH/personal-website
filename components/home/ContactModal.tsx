'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaTelegram, FaGithub, FaEnvelope, FaTimes } from 'react-icons/fa';
import { useLanguage } from '@/lib/context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-40%" }}
            className="fixed left-1/2 top-1/2 w-[90vw] sm:w-full max-w-md bg-black border border-neutral-800 rounded-xl p-0 shadow-2xl z-[100] overflow-hidden"
          >
            {/* Simple Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
              <h3 className="text-lg font-bold text-white">Contact Me</h3>
              <button
                onClick={onClose}
                className="text-neutral-500 hover:text-white transition-colors p-1"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-6 space-y-3">
              <a
                href="https://t.me/Coder0xH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:bg-neutral-900 hover:border-blue-500/50 transition-all group"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                  <FaTelegram size={22} />
                </div>
                <div className="ml-4 flex-1">
                  <div className="text-sm text-neutral-400 font-medium">Telegram</div>
                  <div className="text-white font-mono text-sm mt-0.5">@Coder0xH</div>
                </div>
                <div className="text-neutral-600 group-hover:text-blue-400 transition-colors">
                  ➜
                </div>
              </a>

              <a
                href="mailto:coder0xh@gmail.com"
                className="flex items-center p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:bg-neutral-900 hover:border-red-500/50 transition-all group"
              >
                <div className="p-3 bg-red-500/10 rounded-lg text-red-400 group-hover:scale-110 transition-transform">
                  <FaEnvelope size={22} />
                </div>
                <div className="ml-4 flex-1">
                  <div className="text-sm text-neutral-400 font-medium">Email</div>
                  <div className="text-white font-mono text-sm mt-0.5">coder0xh@gmail.com</div>
                </div>
                <div className="text-neutral-600 group-hover:text-red-400 transition-colors">
                  ➜
                </div>
              </a>

              <a
                href="https://github.com/Coder0xH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:bg-neutral-900 hover:border-white/50 transition-all group"
              >
                <div className="p-3 bg-white/10 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <FaGithub size={22} />
                </div>
                <div className="ml-4 flex-1">
                  <div className="text-sm text-neutral-400 font-medium">GitHub</div>
                  <div className="text-white font-mono text-sm mt-0.5">Coder0xH</div>
                </div>
                <div className="text-neutral-600 group-hover:text-white transition-colors">
                  ➜
                </div>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
