export interface HeroContent {
  name: string;
  title: string;
  tagline: string;
  introduction: string;
  currentFocus: {
    projects: string[];
    learning: string[];
    careerGoal: string;
  };
  ctas: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
}

export const heroContent: HeroContent = {
  name: 'Samarth Patil',
  title: 'Computer Science Student',
  tagline: 'Building AI-powered applications, scalable software, and modern web experiences.',
  introduction:
    'I enjoy transforming ideas into real software. From AI assistants like JARVIS OS to trading platforms like AlphaX, I learn by building products that solve practical problems. Every project helps me become a better software engineer.',
  currentFocus: {
    projects: ['JARVIS OS', 'AlphaX', 'Personal Portfolio'],
    learning: [
      'Artificial Intelligence',
      'Backend Architecture',
      'Cloud Computing',
      'Modern Software Engineering',
    ],
    careerGoal: 'Software Engineering Internship',
  },
  ctas: {
    primary: {
      label: 'View Projects',
      href: '/projects',
    },
    secondary: {
      label: 'Download Resume',
      href: '/resume',
    },
  },
};
