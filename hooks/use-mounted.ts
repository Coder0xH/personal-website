'use client';

import { useEffect, useState } from 'react';

/**
 * Hook to check if the component is mounted on the client side
 * Useful for avoiding hydration mismatches
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

