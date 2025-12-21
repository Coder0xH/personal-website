'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { FaPrint, FaDownload } from 'react-icons/fa';
import { useLanguage } from '@/lib/context/LanguageContext';

interface ResumeViewerProps {
    content: string;
}

export function ResumeViewer({ content }: ResumeViewerProps) {
    const { t } = useLanguage();

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 md:px-0">
            {/* Controls */}
            <div className="flex justify-end mb-6 space-x-4">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrint}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg backdrop-blur-sm border border-blue-500/20 transition-all"
                >
                    <FaPrint />
                    <span>{t('resume.print')}</span>
                </motion.button>
                <motion.a
                    href="/resume.pdf" // Assuming we might have a PDF later, or just print
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-500/20 transition-all"
                >
                    <FaDownload />
                    <span>{t('resume.download')}</span>
                </motion.a>
            </div>

            {/* Resume Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1a1f2e] rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden relative"
            >
                {/* Decorative Top Bar */}
                <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                <div className="p-8 md:p-12">
                    <div className={`prose prose-invert prose-lg max-w-none 
            prose-headings:text-gray-100 prose-headings:font-bold 
            prose-h1:text-4xl prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b prose-h1:border-gray-700
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-blue-400 prose-h2:flex prose-h2:items-center
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-li:text-gray-300 prose-li:marker:text-blue-500
            prose-strong:text-white prose-strong:font-semibold
            prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
            print:prose-p:text-black print:prose-headings:text-black`}
                    >
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </div>
            </motion.div>

            {/* Print Styles */}
            <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .prose, .prose * {
            visibility: visible;
            color: black !important;
          }
          .prose {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 20px;
          }
          nav, button {
            display: none !important;
          }
        }
      `}</style>
        </div>
    );
}
