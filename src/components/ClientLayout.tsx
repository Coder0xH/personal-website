'use client'

import { useEffect, useState } from 'react'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function ClientLayout({
  children
}: {
  readonly children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <>
      <AnimatedBackground />
      {children}
    </>
  )
}
