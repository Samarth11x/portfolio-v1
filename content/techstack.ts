export type Proficiency = 'comfortable' | 'learning' | 'exploring';

export interface TechItem {
  name: string;
  proficiency: Proficiency;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export const techStackContent: TechCategory[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', proficiency: 'comfortable' },
      { name: 'JavaScript', proficiency: 'comfortable' },
      { name: 'TypeScript', proficiency: 'comfortable' },
      { name: 'C', proficiency: 'comfortable' },
      { name: 'C++', proficiency: 'comfortable' },
      { name: 'Java', proficiency: 'comfortable' },
      { name: 'SQL', proficiency: 'comfortable' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', proficiency: 'comfortable' },
      { name: 'Next.js', proficiency: 'comfortable' },
      { name: 'HTML', proficiency: 'comfortable' },
      { name: 'CSS', proficiency: 'comfortable' },
      { name: 'Tailwind CSS', proficiency: 'comfortable' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', proficiency: 'comfortable' },
      { name: 'Express', proficiency: 'comfortable' },
      { name: 'REST APIs', proficiency: 'comfortable' },
      { name: 'FastAPI', proficiency: 'learning' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', proficiency: 'comfortable' },
      { name: 'PostgreSQL', proficiency: 'comfortable' },
      { name: 'MySQL', proficiency: 'comfortable' },
    ],
  },
  {
    category: 'Artificial Intelligence',
    items: [
      { name: 'Python', proficiency: 'comfortable' },
      { name: 'Prompt Engineering', proficiency: 'comfortable' },
      { name: 'OpenAI APIs', proficiency: 'comfortable' },
      { name: 'Agentic Systems', proficiency: 'comfortable' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'Git', proficiency: 'comfortable' },
      { name: 'GitHub', proficiency: 'comfortable' },
      { name: 'Linux', proficiency: 'comfortable' },
      { name: 'Docker', proficiency: 'learning' },
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'VS Code', proficiency: 'comfortable' },
      { name: 'GitHub', proficiency: 'comfortable' },
      { name: 'Postman', proficiency: 'comfortable' },
      { name: 'Figma', proficiency: 'learning' },
    ],
  },
];
