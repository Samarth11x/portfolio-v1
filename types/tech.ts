/**
 * @file types/tech.ts
 * @description Types for technology stack entries.
 */

/** Grouping category for a technology. */
export type TechCategory =
  | 'language'
  | 'framework'
  | 'library'
  | 'database'
  | 'devops'
  | 'tool'
  | 'cloud';

/** A single technology or tool in the skills section. */
export interface TechStack {
  /** Display name of the technology. */
  name: string;
  /** Category grouping for filtering and display. */
  category: TechCategory;
  /**
   * Relative path to a local SVG/PNG icon, or a URL.
   * Prefer SVG for Lighthouse performance scores.
   */
  icon?: string;
  /** Proficiency level on a 1–5 scale. */
  proficiency?: 1 | 2 | 3 | 4 | 5;
}
