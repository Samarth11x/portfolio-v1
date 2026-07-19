import { notFound } from 'next/navigation';
import { generateMetadata as baseGenerateMetadata } from '@/lib/metadata';
import { Header, Footer, Container } from '@/components/layout';
import { allProjects } from '@/content/projects';
import { ProjectHero } from '@/components/projects/ProjectHero';
import { ProjectOverview } from '@/components/projects/ProjectOverview';
import { ProjectArchitecture } from '@/components/projects/ProjectArchitecture';
import { ProjectChallenges } from '@/components/projects/ProjectChallenges';
import { ProjectTechStack } from '@/components/projects/ProjectTechStack';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = allProjects.find((p) => p.id === params.slug);
  if (!project) return baseGenerateMetadata({ title: 'Project Not Found' });

  return baseGenerateMetadata({
    title: `${project.title} | Case Study`,
    description: project.tagline,
  });
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <Container>
          <div className="max-w-5xl mx-auto animate-fade-in">
            <ProjectHero project={project} />
            <ProjectOverview project={project} />
            <ProjectArchitecture project={project} />
            <ProjectTechStack stack={project.techStack} />
            <ProjectChallenges project={project} />
            <ProjectGallery project={project} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
