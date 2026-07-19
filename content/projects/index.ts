import { ProjectCaseStudy } from './types';
import { jarvis } from './jarvis';
import { alphax } from './alphax';
import { zeneraTrips } from './zenera-trips';
import { habitTracker } from './habit-tracker';
import { kpKurtiePoints } from './kp-kurtie-points';
import { battleRoyale } from './battle-royale';
import { frontendProjects } from './frontend-projects';

export const allProjects: ProjectCaseStudy[] = [
  jarvis,
  alphax,
  zeneraTrips,
  habitTracker,
  kpKurtiePoints,
  battleRoyale,
  frontendProjects,
].sort((a, b) => a.order - b.order);

export const featuredProjects = allProjects.filter(p => p.featured);

export * from './types';
