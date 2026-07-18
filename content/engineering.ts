export interface Principle {
  title: string;
  description: string;
  application: string;
}

export const engineeringPrinciples: Principle[] = [
  {
    title: 'Learn by building.',
    description: 'Theory is a foundation, but true comprehension comes from implementation. I prioritize creating working software over endless tutorials.',
    application: 'Instead of just reading about vector databases, I built a Retrieval-Augmented Generation (RAG) system in JARVIS OS to understand the challenges of embedding search firsthand.'
  },
  {
    title: 'Design before implementation.',
    description: 'Writing code is the most expensive way to solve a problem. Architectural planning and system design save countless hours of refactoring.',
    application: 'Before starting this portfolio, I defined a rigorous Sprint structure, created a complete design system in Tailwind, and mapped out data schemas.'
  },
  {
    title: 'Consistency beats intensity.',
    description: 'Massive weekend coding sprints lead to burnout. Daily, disciplined progress compounds into substantial engineering achievements.',
    application: 'Maintaining a daily commit streak across multiple repositories, gradually evolving side projects into robust applications.'
  },
  {
    title: 'Readable code over clever code.',
    description: 'Code is read far more often than it is written. Explicitness, proper typing, and clear naming conventions always trump obscure one-liners.',
    application: 'Using strict TypeScript interfaces for all data contracts to ensure the entire codebase is self-documenting.'
  },
  {
    title: 'Small improvements compound.',
    description: 'No system is perfect on day one. Shipping a minimum viable product and iterating based on real-world friction is the fastest path to quality.',
    application: 'Refactoring this portfolio from a monolithic structure to a completely decoupled Content + UI architecture over multiple sprints.'
  }
];
