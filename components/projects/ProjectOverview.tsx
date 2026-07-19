import { ProjectCaseStudy } from '@/content/projects';
import { ProjectSectionHeading } from './ProjectSectionHeading';

interface ProjectOverviewProps {
  project: ProjectCaseStudy;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Executive Summary & Problem */}
        <div className="space-y-12">
          <div>
            <ProjectSectionHeading title="Executive Summary" />
            <p className="text-lg text-foreground-muted leading-relaxed">
              {project.summary}
            </p>
          </div>
          
          <div>
            <ProjectSectionHeading title="The Problem" />
            <p className="text-lg text-foreground-muted leading-relaxed">
              {project.problem}
            </p>
          </div>
        </div>

        {/* Solution & Features */}
        <div className="space-y-12">
          <div>
            <ProjectSectionHeading title="The Solution" />
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              {project.solution}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-6">Key Features</h3>
            <ul className="space-y-6">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="font-semibold text-foreground mb-1">{feature.title}</span>
                  <span className="text-foreground-muted leading-relaxed">{feature.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
