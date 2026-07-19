import { ProjectCaseStudy } from '@/content/projects';
import { ProjectSectionHeading } from './ProjectSectionHeading';

interface ProjectArchitectureProps {
  project: ProjectCaseStudy;
}

export function ProjectArchitecture({ project }: ProjectArchitectureProps) {
  if (!project.architecture && !project.decisions) return null;

  return (
    <section className="py-12 md:py-16 border-t border-border/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {project.architecture && (
          <div>
            <ProjectSectionHeading title="System Architecture" />
            <div className="prose prose-invert prose-lg text-foreground-muted">
              <p>{project.architecture}</p>
            </div>
          </div>
        )}

        {project.decisions && (
          <div>
            <ProjectSectionHeading title="Engineering Decisions" />
            <div className="prose prose-invert prose-lg text-foreground-muted">
              <p>{project.decisions}</p>
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
}
