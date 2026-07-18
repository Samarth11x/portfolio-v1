'use client';

/**
 * @file hooks/useMediaQuery.ts
 * @description SSR-safe hook for matching CSS media queries in React.
 *
 * Returns `false` during SSR to avoid hydration mismatches. Attaches
 * a `MediaQueryList` listener on the client and updates reactively.
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 767px)');
 * const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
 */

import { useEffect, useState } from 'react';

/**
 * Tracks whether a CSS media query currently matches.
 *
 * @param query - A valid CSS media query string.
 * @returns `true` if the query matches, `false` otherwise.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Sync initial value asynchronously to avoid cascading renders
    const initialMatch = mediaQueryList.matches;
    if (initialMatch) {
      setTimeout(() => {
        setMatches(true);
      }, 0);
    }

    const handler = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener('change', handler);

    return () => {
      mediaQueryList.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
}
