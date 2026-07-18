export interface RoadmapCategory {
  category: string;
  items: string[];
}

export const engineeringRoadmap: RoadmapCategory[] = [
  {
    category: 'Current Focus',
    items: ['Portfolio Architecture', 'JARVIS OS Integration', 'AlphaX Development', 'FastAPI Microservices', 'Docker Containerization', 'System Design Fundamentals']
  },
  {
    category: 'Next Goals',
    items: ['AWS Infrastructure', 'CI/CD Pipelines', 'Kubernetes Orchestration', 'Distributed Systems', 'Advanced Database Sharding']
  }
];
