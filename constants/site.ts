/**
 * @file constants/site.ts
 * @description Static, non-personalised site constants.
 *
 * Personal data lives in `@/data/site.ts` — NOT here.
 * This file holds magic-value-free literals used across the codebase.
 */

/** Number of projects shown per page in the grid. */
export const PROJECTS_PER_PAGE = 6 as const;

/** Breakpoint widths in pixels matching Tailwind defaults. */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/** Animation duration presets in milliseconds. */
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 800,
} as const;

/** Stagger delay between list items in Framer Motion sequences (seconds). */
export const STAGGER_DELAY = 0.08 as const;

/** Site-wide metadata */
export const SITE_NAME = 'Samarth Portfolio' as const;
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samarth.dev';
