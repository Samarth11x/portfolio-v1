import { generateMetadata } from '@/lib/metadata';
import { Header, Footer, Container } from '@/components/layout';
import { allProjects } from '@/content/projects';
import Link from 'next/link';
import { Badge } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export const metadata = generateMetadata({ 
  title: 'Engineering Case Studies',
  description: 'Deep dives into system architecture, technical decisions, and lessons learned from my core engineering projects.'
});

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <Container>
          <div className="max-w-3xl mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Engineering Case Studies
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              This is not a simple gallery of screenshots. These are deep dives into system architecture, technical decisions, and lessons learned from my core engineering projects.
            </p>
          </div>

          <div className="flex flex-col space-y-12 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {allProjects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`}
                className="group block"
              >
                <article className="p-8 md:p-10 rounded-3xl bg-surface border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h2>
                        <Badge variant={project.status === 'Completed' ? 'success' : 'default'}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-lg text-foreground-muted font-medium">
                        {project.tagline}
                      </p>
                    </div>
                    <div className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-background border border-border/50 group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-colors text-foreground-muted">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-border/30">
                    {project.techStack.flatMap(ts => ts.technologies).slice(0, 6).map(tech => (
                      <span key={tech} className="text-sm font-medium px-3 py-1 rounded-full bg-background text-foreground-subtle border border-border/50">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.flatMap(ts => ts.technologies).length > 6 && (
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-background text-foreground-subtle border border-border/50">
                        +{project.techStack.flatMap(ts => ts.technologies).length - 6} more
                      </span>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
