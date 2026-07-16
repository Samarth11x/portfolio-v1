'use client';

/**
 * @file hooks/useScrollPosition.ts
 * @description Tracks the window scroll Y position with throttling.
 *
 * Used to drive sticky-header visibility logic and scroll-progress indicators.
 * Throttled with `requestAnimationFrame` to avoid layout thrashing.
 *
 * @example
 * const scrollY = useScrollPosition();
 * const isScrolled = scrollY > 80;
 */

import { useEffect, useState } from 'react';

/**
 * Returns the current `window.scrollY` position, updated on scroll.
 *
 * @returns The vertical scroll position in pixels (0 on SSR).
 */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = (): void => {
      // Cancel any pending animation frame to throttle updates
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return scrollY;
}
