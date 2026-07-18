export interface SeoContent {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  ogImage: string;
  twitterHandle: string;
}

export const seoContent: SeoContent = {
  title: 'Samarth Patil | Software Engineer',
  description:
    'Portfolio of Samarth Patil, a Computer Science student engineering scalable web applications and AI-powered systems.',
  keywords: [
    'Samarth Patil',
    'Software Engineer',
    'Full Stack Developer',
    'AI Engineer',
    'Next.js',
    'React',
    'Portfolio',
  ],
  url: 'https://samarth.dev',
  ogImage: 'https://samarth.dev/og.png',
  twitterHandle: '@samarth',
};
