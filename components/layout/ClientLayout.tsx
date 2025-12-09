'use client';

import type { ReactNode } from 'react';
import { useMounted } from '@/hooks';
import { AnimatedBackground } from './AnimatedBackground';

interface ClientLayoutProps {
  readonly children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const mounted = useMounted();

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatedBackground />
      {children}
    </>
  );
}

