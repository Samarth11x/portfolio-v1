import { ProjectCaseStudy } from './types';

export const zeneraTrips: ProjectCaseStudy = {
  id: 'zenera-trips',
  title: 'Zenera Trips',
  tagline: 'A seamless trip booking and travel discovery platform.',
  status: 'Completed',
  summary: 'Zenera Trips is a modern web application designed to streamline the travel booking process. It focuses heavily on user experience, offering intuitive travel discovery and a frictionless booking flow.',
  problem: 'Many travel booking sites suffer from cluttered interfaces, overwhelming users with too many options and dense information architectures that make discovering and booking trips a stressful experience.',
  solution: 'I developed Zenera Trips with a mobile-first, minimalist design philosophy. By prioritizing responsive UI and simplifying the booking funnel, the platform reduces cognitive load and enhances the excitement of travel discovery.',
  features: [
    { title: 'Travel Discovery', description: 'Visually rich destination browsing with dynamic filtering based on user preferences.' },
    { title: 'Frictionless Booking Flow', description: 'A multi-step, state-preserved booking process that guides the user intuitively from selection to confirmation.' },
    { title: 'Responsive Design', description: 'A fully responsive layout that provides a native-like experience on mobile devices.' },
  ],
  techStack: [
    { category: 'Frontend', technologies: ['React', 'CSS/SCSS', 'JavaScript'] },
    { category: 'Backend Integration', technologies: ['RESTful APIs'] },
  ],
  architecture: 'The frontend architecture heavily utilizes React Context for global state management during the booking flow, ensuring that user selections persist across different views without prop drilling.',
  challenges: 'Managing complex client-side state across a multi-step checkout process while handling asynchronous data fetching for availability and pricing.',
  decisions: 'I prioritized custom CSS/SCSS over utility frameworks for this project to maintain absolute control over the micro-animations and specific design aesthetic required for a premium travel brand.',
  lessonsLearned: 'I learned how to effectively manage complex user flows and the critical importance of micro-interactions in building trust during a checkout process.',
  futureScope: 'Integrating a real-time payment gateway and dynamic inventory management system.',
  links: {
    github: 'https://github.com/Samarth11x/zenera-trips',
  },
  order: 3,
  featured: false,
};
