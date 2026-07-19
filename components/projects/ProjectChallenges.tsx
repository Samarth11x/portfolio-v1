import { ProjectCaseStudy } from '@/content/projects';
import { ProjectSectionHeading } from './ProjectSectionHeading';

interface ProjectChallengesProps {
  project: ProjectCaseStudy;
}

export function ProjectChallenges({ project }: ProjectChallengesProps) {
  if (!project.challenges && !project.lessonsLearned && !project.futureScope) return null;

  return (
    <section className="py-12 md:py-16 border-t border-border/30">
      <div className="space-y-16">
        
        {project.challenges && (
          <div>
            <ProjectSectionHeading title="Technical Challenges" />
            <p className="text-lg text-foreground-muted leading-relaxed max-w-4xl">
              {project.challenges}
            </p>
          </div>
        )}

        {project.lessonsLearned && (
          <div>
            <ProjectSectionHeading title="Lessons Learned" />
            <p className="text-lg text-foreground-muted leading-relaxed max-w-4xl">
              {project.lessonsLearned}
            </p>
          </div>
        )}

        {project.futureScope && (
          <div>
            <ProjectSectionHeading title="Future Scope" />
            <p className="text-lg text-foreground-muted leading-relaxed max-w-4xl">
              {project.futureScope}
            </p>
          </div>
        )}
        
      </div>
    </section>
  );
}
