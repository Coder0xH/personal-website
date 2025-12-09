'use client';

import { useState, useEffect } from 'react';

interface UseScrollOptions {
  threshold?: number;
}

/**
 * Hook to detect scroll position
 * @param options - Options for scroll detection
 * @returns Whether the page has scrolled past the threshold
 */
export function useScroll(options: UseScrollOptions = {}): boolean {
  const { threshold = 20 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}

