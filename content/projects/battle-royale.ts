import { ProjectCaseStudy } from './types';

export const battleRoyale: ProjectCaseStudy = {
  id: 'battle-royale',
  title: 'Battle Royale Terminal Game',
  tagline: 'A C++ terminal-based game exploring core computer science fundamentals.',
  status: 'Completed',
  summary: 'Battle Royale is a terminal-based game engineered entirely in C++. It serves as a foundational exploration into core programming concepts, moving beyond web development into memory management and system-level logic.',
  problem: 'Modern web frameworks abstract away the underlying mechanics of computer science. I wanted to build a project that required a deep understanding of object-oriented programming, manual memory management, and game loop architecture.',
  solution: 'I built a text-based Battle Royale game that runs directly in the terminal, utilizing C++ to handle complex state management, input handling, and procedural logic without the safety net of high-level abstractions.',
  features: [
    { title: 'Game Loop Architecture', description: 'A continuous execution loop handling user input, state updates, and rendering in real-time.' },
    { title: 'Object-Oriented Design', description: 'Extensive use of classes, inheritance, and polymorphism to model game entities.' },
    { title: 'Input Handling', description: 'Robust parsing of terminal commands to drive game actions.' },
  ],
  techStack: [
    { category: 'Language', technologies: ['C++'] },
    { category: 'Environment', technologies: ['Terminal / CLI'] },
  ],
  architecture: 'The architecture is built around a central Game Engine class that orchestrates the initialization of entities, the evaluation of the game state, and the rendering of text outputs to the standard console.',
  challenges: 'Managing raw pointers and avoiding memory leaks while dynamically spawning and destroying game entities was a strict departure from garbage-collected languages.',
  decisions: 'I specifically chose C++ over a managed language like Java or C# to force myself to confront and understand low-level memory allocation and hardware constraints.',
  lessonsLearned: 'I gained a profound appreciation for how high-level languages work under the hood, fundamentally improving my approach to algorithmic efficiency and state management in all languages.',
  futureScope: 'Implementing an advanced AI opponent using basic finite state machines (FSM).',
  links: {
    github: 'https://github.com/Samarth11x/Battle-Royale',
  },
  order: 6,
  featured: false,
};
