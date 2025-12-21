'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import type { ResumeData } from '@/data/resume';

interface PlainResumeProps {
  data: ResumeData;
}

export function PlainResume({ data }: PlainResumeProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto bg-[#1e1e1e] text-gray-300 p-8 md:p-12 shadow-xl font-sans min-h-full"
    >
      {/* Header */}
      <header className="border-b border-gray-700 pb-8 mb-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
              {data.profile.name}
            </h1>
            <div className="text-xl text-gray-200 font-medium mb-6">
              {data.profile.title}
            </div>
          </div>
          {/* Optional: Add Download Button here if needed */}
        </div>
        
        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
          {data.profile.email && (
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <FaEnvelope className="text-white" />
              <a href={`mailto:${data.profile.email}`}>{data.profile.email}</a>
            </div>
          )}
          {data.profile.phone && (
            <div className="flex items-center gap-2">
              <FaPhone className="text-white" />
              <span>{data.profile.phone}</span>
            </div>
          )}
          {data.profile.location && (
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-white" />
              <span>{data.profile.location}</span>
            </div>
          )}
        </div>
        
        {/* Attributes/Summary */}
        {data.profile.attributes && data.profile.attributes.length > 0 && (
          <div className="mt-6 text-gray-300 leading-relaxed border-l-2 border-gray-600 pl-4 italic">
            {data.profile.attributes.map((attr, i) => (
              <p key={i} className="mb-1">{attr}</p>
            ))}
          </div>
        )}
      </header>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-6 flex items-center gap-2 text-white">
          <span className="text-gray-500">#</span> EXPERIENCE
        </h2>
        <div className="space-y-10">
          {data.experience.map((exp, index) => (
            <div key={index} className="relative pl-6 border-l border-gray-700">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <span className="text-gray-400 font-mono text-sm bg-[#2d2d2d] px-2 py-1 rounded">{exp.period}</span>
              </div>
              <div className="text-gray-200 font-medium mb-4">{exp.role}</div>
              
              {exp.description && (
                <ul className="list-disc list-outside ml-4 text-gray-400 space-y-2 mb-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed">{desc}</li>
                  ))}
                </ul>
              )}

              {/* Nested Projects within Experience */}
              {exp.projects && (
                <div className="space-y-6 mt-4">
                  {exp.projects.map((proj, i) => (
                    <div key={i} className="bg-[#252526] p-4 rounded-lg border border-gray-700">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-bold text-white">{proj.name}</h4>
                        {proj.period && <span className="text-xs text-gray-500">{proj.period}</span>}
                      </div>
                      <p className="text-xs text-gray-400 font-mono mb-3">
                        {`[ ${proj.techStack.join(' | ')} ]`}
                      </p>
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{proj.description}</p>
                      {proj.responsibilities && (
                        <ul className="space-y-1">
                          {proj.responsibilities.map((resp, j) => (
                            <li key={j} className="text-sm text-gray-400 flex items-start">
                              <span className="mr-2 text-white">-</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-6 flex items-center gap-2 text-white">
          <span className="text-gray-500">#</span> SKILLS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#252526] p-5 rounded-lg border border-gray-700">
            <h3 className="font-bold text-white mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.languages.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-[#3e3e3e] text-gray-200 text-sm rounded font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#252526] p-5 rounded-lg border border-gray-700">
            <h3 className="font-bold text-white mb-3">Blockchain</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.blockchain.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-[#3e3e3e] text-gray-200 text-sm rounded font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#252526] p-5 rounded-lg border border-gray-700">
            <h3 className="font-bold text-white mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.backend.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-[#3e3e3e] text-gray-200 text-sm rounded font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#252526] p-5 rounded-lg border border-gray-700">
            <h3 className="font-bold text-white mb-3">DevOps & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.devops.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-[#3e3e3e] text-gray-200 text-sm rounded font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects */}
      {data.personalProjects && data.personalProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-6 flex items-center gap-2 text-white">
            <span className="text-gray-500">#</span> PROJECTS
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {data.personalProjects.map((project, index) => (
              <div key={index} className="bg-[#252526] p-5 rounded-lg border border-gray-700 hover:border-white transition-colors group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">{project.name}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-white hover:underline bg-[#1e1e1e] px-2 py-1 rounded">
                      View ↗
                    </a>
                  )}
                </div>
                <p className="text-xs text-gray-400 font-mono mb-3">
                  {project.techStack.join(' • ')}
                </p>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                {project.responsibilities && (
                  <ul className="space-y-1">
                    {project.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start">
                        <span className="mr-2 text-white text-xs">›</span>
                        {resp}
                      </li>
                    ))}
                  </ul>

                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}
