import { ProjectCaseStudy } from './types';

export const frontendProjects: ProjectCaseStudy = {
  id: 'frontend-cluster',
  title: 'Frontend Fundamentals Cluster',
  tagline: 'A collection of foundational web development builds.',
  status: 'Maintenance',
  summary: 'This cluster represents my early journey into web development. Rather than listing each as an inflated standalone product, they are grouped here as a testament to the rigorous practice required to master frontend fundamentals.',
  problem: 'Learning syntax is easy; mastering layout, state, and DOM manipulation requires relentless repetition across varied use cases.',
  solution: 'I built dozens of targeted applications—ranging from complex UI clones to interactive utilities—to systematically conquer different aspects of HTML, CSS, and JavaScript.',
  features: [
    { title: 'UI Clones', description: 'Amazon Clone, Myntra Clone, and a Restaurant Site focusing on complex CSS layouts (Flexbox/Grid) and responsive design.' },
    { title: 'Interactive Utilities', description: 'Todo App, Calculator, and Date/Time Display focusing on DOM manipulation and event handling.' },
    { title: 'System Interfaces', description: 'User Management and Bank Management interfaces focusing on basic state management and data flows.' },
    { title: 'Game Logic', description: 'Number Guessing Game focusing on conditional logic and user feedback loops.' },
  ],
  techStack: [
    { category: 'Core', technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)'] },
    { category: 'Design', technologies: ['Responsive Web Design'] },
  ],
  architecture: 'These projects are intentionally simple, operating primarily on the client side without complex build steps or heavy frameworks. They utilize vanilla JavaScript to interact directly with the Document Object Model.',
  challenges: 'Achieving pixel-perfect responsiveness across various device sizes on the complex UI clones required a deep understanding of CSS media queries and relative units.',
  decisions: 'I decided to avoid using React or Tailwind for these early projects to ensure I had a solid, unshakeable foundation in vanilla web technologies before abstracting them away.',
  lessonsLearned: 'I learned that frameworks come and go, but a deep understanding of the underlying core web technologies is what makes an engineer truly adaptable.',
  futureScope: 'Archived for reference. Future iterations of these concepts are built within larger, full-stack applications.',
  links: {
    github: 'https://github.com/Samarth11x', // Link to general repos
  },
  order: 7,
  featured: false,
};
