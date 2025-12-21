'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeDataEn, resumeDataZh } from '@/data/resume';
import { useLanguage } from '@/lib/context/LanguageContext';
import { VscJson, VscChevronRight, VscChevronDown, VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear, VscBell, VscPreview, VscCode } from 'react-icons/vsc';
import { SiTypescript } from 'react-icons/si';
import { PlainResume } from './PlainResume';

// Syntax highlighting colors (One Dark Pro inspired - Adjusted for better contrast)
const colors = {
  keyword: 'text-[#c678dd]', // Purple
  string: 'text-[#98c379]',  // Green
  number: 'text-[#d19a66]',  // Orange
  boolean: 'text-[#56b6c2]', // Cyan
  key: 'text-[#e06c75]',     // Red
  comment: 'text-[#7f848e]', // Grey
  punctuation: 'text-[#abb2bf]', // White-ish
  plain: 'text-[#abb2bf]',   // White-ish
  function: 'text-[#61afef]', // Blue
};

const JsonViewer = ({ data, level = 0 }: { data: any; level?: number }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  if (data === null) return <span className={colors.keyword}>null</span>;
  if (data === undefined) return <span className={colors.keyword}>undefined</span>;
  
  if (Array.isArray(data)) {
    if (data.length === 0) return <span className={colors.punctuation}>[]</span>;
    
    const isSimple = data.every((item: any) => ['string', 'number', 'boolean'].includes(typeof item));
    if (isSimple && JSON.stringify(data).length < 80) {
       return (
         <span>
           <span className={colors.punctuation}>[</span>
           {data.map((item: any, i: number) => (
             <React.Fragment key={i}>
               {i > 0 && <span className={colors.punctuation}>, </span>}
               <span className={typeof item === 'string' ? colors.string : colors.number}>
                 {JSON.stringify(item)}
               </span>
             </React.Fragment>
           ))}
           <span className={colors.punctuation}>]</span>
         </span>
       );
    }

    return (
      <span>
        <span 
          className="cursor-pointer inline-flex items-center hover:bg-[#3e4451] rounded px-1 -ml-1 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className={colors.punctuation}>[</span>
          {!isExpanded && <span className={colors.comment}> ... {data.length} items ]</span>}
        </span>
        
        {isExpanded && (
          <>
            {data.map((item: any, i: number) => (
              <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: '1px solid #3e4451' }} className="ml-1">
                 <JsonViewer data={item} level={0} />
                 {i < data.length - 1 && <span className={colors.punctuation}>,</span>}
              </div>
            ))}
            <div><span className={colors.punctuation}>]</span></div>
          </>
        )}
      </span>
    );
  }

  if (typeof data === 'object') {
    const keys = Object.keys(data);
    if (keys.length === 0) return <span className={colors.punctuation}>{'{ }'}</span>;

    return (
      <span>
        <span 
          className="cursor-pointer inline-flex items-center hover:bg-[#3e4451] rounded px-1 -ml-1 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className={colors.punctuation}>{'{'}</span>
          {!isExpanded && <span className={colors.comment}> ... </span>}
        </span>
        
        {isExpanded && (
          <>
            {keys.map((key, i) => (
              <div key={key} style={{ paddingLeft: '1.5rem', borderLeft: '1px solid #3e4451' }} className="ml-1">
                <span className={colors.key}>"{key}"</span>
                <span className={colors.punctuation}>: </span>
                <JsonViewer data={data[key]} level={0} />
                {i < keys.length - 1 && <span className={colors.punctuation}>,</span>}
              </div>
            ))}
            <div><span className={colors.punctuation}>{'}'}</span></div>
          </>
        )}
        {!isExpanded && <span className={colors.punctuation}>{'}'}</span>}
      </span>
    );
  }

  if (typeof data === 'string') {
    return <span className={colors.string}>"{data}"</span>;
  }

  if (typeof data === 'number') {
    return <span className={colors.number}>{data}</span>;
  }

  if (typeof data === 'boolean') {
    return <span className={colors.boolean}>{data.toString()}</span>;
  }

  return <span className={colors.plain}>{String(data)}</span>;
};

export function CoderResume() {
  const { language } = useLanguage();
  const [viewMode, setViewMode] = useState<'code' | 'plain'>('code');
  const resumeData = language === 'zh' ? resumeDataZh : resumeDataEn;
  const fileName = language === 'zh' ? 'resume.zh.ts' : 'resume.ts';

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 w-full max-w-[95vw] xl:max-w-[1400px] mx-auto bg-black rounded-xl overflow-hidden shadow-2xl border border-neutral-800 font-mono text-sm md:text-base flex flex-col h-[85vh] md:h-auto md:min-h-[800px]"
    >
      {/* Title Bar */}
      <div className="bg-neutral-900 h-10 flex items-center justify-between px-4 border-b border-neutral-800 select-none shrink-0">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2 group">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] group-hover:bg-[#ff5f56]/80 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] group-hover:bg-[#ffbd2e]/80 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] group-hover:bg-[#27c93f]/80 transition-colors" />
          </div>
          <div className="hidden md:flex text-gray-500 text-xs space-x-4 ml-4">
            <span className="hover:text-white cursor-pointer">File</span>
            <span className="hover:text-white cursor-pointer">Edit</span>
            <span className="hover:text-white cursor-pointer">View</span>
            <span className="hover:text-white cursor-pointer">Go</span>
            <span className="hover:text-white cursor-pointer">Run</span>
            <span className="hover:text-white cursor-pointer">Terminal</span>
            <span className="hover:text-white cursor-pointer">Help</span>
          </div>
        </div>
        
        {/* View Toggle */}
        <div className="flex items-center space-x-2 bg-black rounded-lg p-0.5 border border-neutral-800">
          <button
            onClick={() => setViewMode('code')}
            className={`px-2 py-0.5 rounded text-xs flex items-center space-x-1 transition-colors ${
              viewMode === 'code' ? 'bg-neutral-800 text-white' : 'text-gray-500 hover:text-white'
            }`}
          >
            <VscCode />
            <span className="hidden sm:inline">Code</span>
          </button>
          <button
            onClick={() => setViewMode('plain')}
            className={`px-2 py-0.5 rounded text-xs flex items-center space-x-1 transition-colors ${
              viewMode === 'plain' ? 'bg-neutral-800 text-white' : 'text-gray-500 hover:text-white'
            }`}
          >
            <VscPreview />
            <span className="hidden sm:inline">Preview</span>
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-neutral-900 flex flex-col items-center py-4 space-y-6 text-gray-500 border-r border-neutral-800 hidden md:flex shrink-0">
          <VscFiles className={`w-6 h-6 cursor-pointer border-l-2 pl-2 -ml-2 transition-colors ${viewMode === 'code' ? 'text-white border-white' : 'text-gray-500 border-transparent hover:text-white'}`} onClick={() => setViewMode('code')} />
          <VscPreview className={`w-6 h-6 cursor-pointer border-l-2 pl-2 -ml-2 transition-colors ${viewMode === 'plain' ? 'text-white border-white' : 'text-gray-500 border-transparent hover:text-white'}`} onClick={() => setViewMode('plain')} />
          <div className="flex-1" />
          <VscSettingsGear className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
        </div>

        {/* Sidebar (Only visible in Code View) */}
        {viewMode === 'code' && (
          <div className="w-64 bg-black hidden lg:block border-r border-neutral-800 shrink-0">
            <div className="flex items-center justify-between px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <span>Explorer</span>
              <span className="hover:bg-neutral-800 rounded p-1 cursor-pointer">...</span>
            </div>
            <div className="mt-2">
              <div className="px-2 py-1 flex items-center text-gray-300 hover:bg-neutral-900 cursor-pointer font-bold text-xs">
                <VscChevronDown className="mr-1" />
                <span>PORTFOLIO</span>
              </div>
              <div className="pl-4">
                <div className="py-1 flex items-center text-white bg-neutral-900 cursor-pointer border-l-2 border-blue-500 pl-2">
                  <SiTypescript className="mr-2 w-4 h-4 text-blue-400" />
                  {fileName}
                </div>
                <div className="py-1 flex items-center text-gray-500 hover:bg-neutral-900 cursor-pointer pl-2.5 border-l-2 border-transparent">
                  <VscJson className="mr-2 w-4 h-4 text-yellow-500" />
                  package.json
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 bg-[#1e1e1e] flex flex-col overflow-hidden relative">
          <AnimatePresence mode="wait">
            {viewMode === 'code' ? (
              <motion.div
                key="code"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col h-full bg-black"
              >
                {/* Tabs */}
                <div className="flex bg-neutral-900 h-9 shrink-0 overflow-x-auto scrollbar-hide">
                  <div className="flex items-center px-4 bg-black text-white text-sm border-t-2 border-blue-500 min-w-fit pr-8 relative group cursor-pointer">
                    <SiTypescript className="mr-2 text-blue-400 w-4 h-4" />
                    {fileName}
                    <span className="absolute right-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:bg-neutral-800 rounded-full p-0.5">×</span>
                  </div>
                </div>

                {/* Breadcrumbs */}
                <div className="flex items-center px-4 h-8 text-xs text-gray-500 border-b border-neutral-800 shrink-0 bg-black">
                  src <VscChevronRight className="mx-1" /> data <VscChevronRight className="mx-1" /> {fileName}
                  <div className="flex-1" />
                  <span className="mr-4">Ln 1, Col 1</span>
                  <span className="mr-4">UTF-8</span>
                  <span className="mr-4">TypeScript React</span>
                  <VscBell className="cursor-pointer hover:text-white" />
                </div>

                {/* Code Editor */}
                <div className="flex-1 overflow-auto custom-scrollbar p-4 bg-black">
                  <div className="font-mono text-sm md:text-base leading-relaxed">
                    <div className="text-gray-500 italic mb-4">
                      // Welcome to my interactive resume. <br/>
                      // Switch to "Preview" mode for a readable version.
                    </div>
                    <span className={colors.keyword}>export const </span>
                    <span className={colors.function}>resume </span>
                    <span className={colors.punctuation}>= </span>
                    <JsonViewer data={resumeData} />
                    <span className={colors.punctuation}>;</span>
                  </div>
                  <div className="h-32" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="plain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 overflow-auto custom-scrollbar bg-[#1e1e1e] p-0"
              >
                <PlainResume data={resumeData} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
