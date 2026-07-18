export interface Value {
  title: string;
  description: string;
}

export const engineeringValues: Value[] = [
  { title: 'Build things that solve problems.', description: 'Software should exist to reduce friction, automate the mundane, or create new capabilities.' },
  { title: 'Write software people can maintain.', description: 'Code is a liability. Writing it clearly ensures the next engineer (or myself in six months) can easily modify it.' },
  { title: 'Keep learning.', description: 'Technology evolves rapidly. The ability to quickly assimilate new paradigms is more important than mastering a single legacy framework.' },
  { title: 'Ship consistently.', description: 'Perfection is the enemy of progress. Delivering working software iteratively builds momentum and exposes real-world edge cases.' },
  { title: 'Stay curious.', description: 'Always ask how the underlying abstractions work. Understanding the "magic" beneath frameworks separates coders from engineers.' }
];
