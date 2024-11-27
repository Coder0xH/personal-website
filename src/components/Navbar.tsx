'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-2xl mx-auto">
        <div className={`rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/85 backdrop-blur-sm shadow-lg shadow-black/20' 
            : 'bg-black/70'
        }`}>
          <div className="flex items-center justify-center h-12">
            <div className="flex items-baseline space-x-8">
              <Link
                href="/"
                className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/'
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/about'
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                About
              </Link>
              <Link
                href="/skills"
                className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/skills'
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className={`nav-link px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === '/projects'
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
