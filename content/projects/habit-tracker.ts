import { ProjectCaseStudy } from './types';

export const habitTracker: ProjectCaseStudy = {
  id: 'habit-tracker',
  title: 'Habit Tracker',
  tagline: 'A productivity application for building routines and tracking consistency.',
  status: 'Completed',
  summary: 'Habit Tracker is a focused productivity tool designed to help users build and maintain positive daily routines through visual streak tracking and accountability metrics.',
  problem: 'Building new habits is difficult because progress is often invisible in the short term. Users lose motivation without a clear, visual representation of their consistency.',
  solution: 'I built an application that gamifies personal discipline. By providing a clear visual calendar of streaks and routines, users are psychologically incentivized to maintain their consistency.',
  features: [
    { title: 'Streak Tracking', description: 'Visual indicators of consecutive days a habit has been completed.' },
    { title: 'Routine Management', description: 'Group habits into morning, afternoon, and evening routines.' },
    { title: 'Progress Analytics', description: 'Basic charting to show completion rates over time.' },
  ],
  techStack: [
    { category: 'Frontend', technologies: ['HTML', 'CSS', 'JavaScript'] },
    { category: 'Storage', technologies: ['Local Storage API'] },
  ],
  architecture: 'The application operates entirely client-side, utilizing the browser\'s Local Storage API to persist user data across sessions, ensuring high performance and absolute privacy.',
  challenges: 'Handling date math and timezone edge cases entirely on the client side to accurately determine if a "streak" was broken or maintained.',
  decisions: 'I decided to keep the architecture purely client-side for the initial version to guarantee zero latency and immediate feedback for the user, removing the complexity of backend authentication.',
  lessonsLearned: 'I developed a strong grasp of vanilla JavaScript DOM manipulation and browser storage APIs.',
  futureScope: 'Adding a backend synchronization layer to allow users to track their habits across multiple devices.',
  links: {
    github: 'https://github.com/Samarth11x/habit-tracker',
  },
  order: 4,
  featured: false,
};
