import { ProjectCaseStudy } from './types';

export const kpKurtiePoints: ProjectCaseStudy = {
  id: 'kp-kurtie-points',
  title: 'KP Kurtie Points',
  tagline: 'A commercial e-commerce platform tailored for a retail clothing business.',
  status: 'Completed',
  summary: 'KP Kurtie Points is a bespoke commercial platform built for a local clothing business, enabling them to transition from offline sales to a digital storefront with structured product browsing.',
  problem: 'The business relied heavily on direct messaging and physical visits, which limited their reach and made inventory browsing chaotic for customers.',
  solution: 'I developed a digital storefront that organizes their inventory into logical categories, standardizes pricing displays, and provides a professional commercial presence to scale their customer base.',
  features: [
    { title: 'Product Catalog', description: 'A structured display of clothing items with detailed imagery and pricing.' },
    { title: 'Customer Browsing', description: 'Intuitive navigation and filtering to help users find specific styles.' },
    { title: 'Business Workflow', description: 'Streamlined inquiry and purchasing flows tailored to the specific operational needs of the business.' },
  ],
  techStack: [
    { category: 'Frontend', technologies: ['React', 'CSS'] },
  ],
  architecture: 'The frontend is designed as a Single Page Application (SPA) to provide a fluid browsing experience, pre-fetching catalog data to ensure fast transitions between product categories.',
  challenges: 'Designing a user interface that felt premium yet remained accessible and highly intuitive for a diverse, non-technical customer base.',
  decisions: 'I focused heavily on image optimization and mobile responsiveness, as analytics indicated that over 80% of the target audience would be browsing on mobile devices.',
  lessonsLearned: 'I learned how to translate real-world business requirements into software features and the importance of UX in driving commercial conversions.',
  futureScope: 'Full integration with a secure payment gateway and an admin dashboard for dynamic inventory management.',
  links: {
    github: 'https://github.com/Samarth11x/kp-kurtie-points',
  },
  order: 5,
  featured: false,
};
