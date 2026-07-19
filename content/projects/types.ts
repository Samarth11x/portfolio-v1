export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned' | 'Maintenance';

export interface TechStackCategory {
  category: string;
  technologies: string[];
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  docs?: string;
}

export interface ProjectCaseStudy {
  id: string; // The slug for the URL
  title: string;
  tagline: string;
  status: ProjectStatus;
  summary: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  techStack: TechStackCategory[];
  architecture?: string;
  challenges?: string;
  decisions?: string;
  lessonsLearned?: string;
  futureScope?: string;
  links: ProjectLinks;
  images?: string[]; // Array of image paths
  order: number;
  featured: boolean;
}
