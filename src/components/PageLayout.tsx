'use client'

import { motion } from 'framer-motion'

interface PageLayoutProps {
  readonly children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-7xl mx-auto w-full"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
