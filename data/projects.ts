/**
 * @file data/projects.ts
 * @description Portfolio project entries.
 *
 * ⚠️  Replace with your real projects in Sprint 1.
 */

import type { Project } from '@/types';

/**
 * All portfolio projects. Featured projects appear first in the grid.
 * Add new projects by appending to this array — no other file needs changing.
 */
export const projects: Project[] = [
  // Projects will be added in Sprint 1.
];

/** Returns only featured projects for the homepage spotlight. */
export const featuredProjects = projects.filter((p) => p.featured);
