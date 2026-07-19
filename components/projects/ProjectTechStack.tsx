import { TechStackCategory } from '@/content/projects';
import { ProjectSectionHeading } from './ProjectSectionHeading';
import { Badge } from '@/components/ui';

interface ProjectTechStackProps {
  stack: TechStackCategory[];
}

export function ProjectTechStack({ stack }: ProjectTechStackProps) {
  if (!stack || stack.length === 0) return null;

  return (
    <section className="py-12 md:py-16 border-t border-border/30">
      <ProjectSectionHeading title="Technical Stack" description="The core technologies utilized to build and deploy this system." />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stack.map((group, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-surface border border-border/50">
            <h4 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-4">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.technologies.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
