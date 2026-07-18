export interface PhilosophyValue {
  title: string;
  description: string;
}

export const philosophyContent: PhilosophyValue[] = [
  {
    title: 'Learning by Building',
    description: 'The best way to understand a complex system is to construct one from scratch. Theory is foundational, but implementation drives true understanding.',
  },
  {
    title: 'Consistency over Perfection',
    description: 'Showing up every day compounds over time. I focus on writing reliable, functional code today, and refactoring it for perfection tomorrow.',
  },
  {
    title: 'Solve Real Problems',
    description: 'Software is a tool. I prioritize building applications that provide actual utility, rather than engineering systems without a clear use case.',
  },
  {
    title: 'Write Maintainable Software',
    description: 'Code is read more often than it is written. I value clean architecture, strict typing, and clarity over clever, unreadable hacks.',
  }
];
