import { ProjectCaseStudy } from '@/content/projects';
import { Badge, Button } from '@/components/ui';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectHeroProps {
  project: ProjectCaseStudy;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <div className="py-12 md:py-20 border-b border-border/30">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {project.title}
            </h1>
            <Badge variant={project.status === 'Completed' ? 'success' : 'default'}>
              {project.status}
            </Badge>
          </div>
          <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed font-medium">
            {project.tagline}
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 pt-2 shrink-0">
          {project.links.github && (
            <Button variant="secondary" href={project.links.github} external>
              <Github className="w-5 h-5 mr-2" />
              Source Code
            </Button>
          )}
          {project.links.live && (
            <Button variant="primary" href={project.links.live} external>
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
