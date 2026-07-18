export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export interface ProjectsContent {
  featured: Project[];
}

export const projectsContent: ProjectsContent = {
  featured: [
    {
      title: 'JARVIS OS',
      description: 'AI-powered assistant system.',
      tags: ['Python', 'AI', 'OpenAI'],
      links: {},
    },
    {
      title: 'AlphaX',
      description: 'Trading platform and analytical tool.',
      tags: ['TypeScript', 'React', 'Node.js'],
      links: {},
    },
  ],
};
