export interface Resource {
  title: string;
  type: 'Book' | 'Course' | 'Community' | 'Documentation' | 'Research';
  status: 'Reading' | 'Completed' | 'Active';
}

export const learningResources: Resource[] = [
  { title: 'Designing Data-Intensive Applications', type: 'Book', status: 'Reading' },
  { title: 'Clean Architecture', type: 'Book', status: 'Completed' },
  { title: 'Next.js 14 Official Documentation', type: 'Documentation', status: 'Active' },
  { title: 'System Design Interview (Alex Xu)', type: 'Book', status: 'Reading' },
  { title: 'Docker Mastery', type: 'Course', status: 'Completed' },
  { title: 'Y Combinator Startup School', type: 'Community', status: 'Active' },
  { title: 'Agentic AI Workflows', type: 'Research', status: 'Active' }
];
