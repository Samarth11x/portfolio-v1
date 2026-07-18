/**
 * @file types/project.ts
 * @description Types for portfolio project entries.
 */

/** Deployment / lifecycle status of a project. */
export type ProjectStatus = 'production' | 'beta' | 'wip' | 'archived';

/** Technology or category tag attached to a project. */
export type ProjectTag = string;

/** A single portfolio project card entry. */
export interface Project {
  /** Unique slug used as a URL key and React list key. */
  slug: string;
  /** Display title of the project. */
  title: string;
  /** One or two sentence description of what the project does. */
  description: string;
  /** Absolute or relative path to the preview screenshot. */
  image: string;
  /** Technology tags e.g. ["Next.js", "TypeScript", "Postgres"]. */
  tags: ProjectTag[];
  /** Current lifecycle status. */
  status: ProjectStatus;
  /** Live demo URL (optional). */
  liveUrl?: string;
  /** GitHub repository URL (optional). */
  githubUrl?: string;
  /** Whether to feature this project prominently at the top. */
  featured?: boolean;
}
