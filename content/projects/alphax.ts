import { ProjectCaseStudy } from './types';

export const alphax: ProjectCaseStudy = {
  id: 'alphax',
  title: 'AlphaX',
  tagline: 'A comprehensive trade analysis and discipline platform.',
  status: 'In Progress',
  summary: 'AlphaX is a commercial-grade analytical platform designed for traders to track their performance, journal their decisions, and enforce trading discipline through deep risk analysis.',
  problem: 'Traders often fail not because of a lack of strategy, but due to poor risk management and psychological indiscipline. Existing journaling tools are either too simplistic (spreadsheets) or overwhelmingly complex, failing to provide actionable insights into behavioral patterns.',
  solution: 'I built AlphaX to bridge the gap between raw data and actionable trading psychology. It acts as a decision support system, analyzing past trades to highlight risk management failures and providing a structured environment for maintaining trading discipline.',
  features: [
    { title: 'Trade Journaling', description: 'A structured workflow for logging trades, including entry/exit points, rationale, and emotional state.' },
    { title: 'Risk Analysis Engine', description: 'Calculates metrics such as win rate, risk-to-reward ratios, and maximum drawdown to evaluate strategy viability.' },
    { title: 'Decision Support', description: 'Highlights negative behavioral patterns (e.g., revenge trading) based on historical trade data.' },
  ],
  techStack: [
    { category: 'Frontend', technologies: ['React', 'Next.js', 'Tailwind CSS'] },
    { category: 'Backend', technologies: ['Node.js', 'TypeScript'] },
    { category: 'Database', technologies: ['PostgreSQL'] },
  ],
  architecture: 'The platform is built on a modern full-stack architecture using Next.js for server-side rendering and API routes. The database schema is highly relational, linking user profiles to complex trade entities, strategies, and journaling tags.',
  challenges: 'Designing a schema that could accurately represent the complexities of different financial instruments (options, stocks, crypto) while maintaining a unified analytical dashboard was a significant architectural challenge.',
  decisions: 'I chose a strictly typed full-stack TypeScript environment to ensure data integrity between the complex financial calculations on the backend and the charting libraries on the frontend.',
  lessonsLearned: 'I gained significant experience in financial data modeling and the complexities of building data-heavy interactive dashboards.',
  futureScope: 'Implementation of automated broker integrations via APIs to pull trade data directly, eliminating the need for manual entry.',
  links: {
    github: 'https://github.com/Samarth11x/alphax',
  },
  order: 2,
  featured: true,
};
