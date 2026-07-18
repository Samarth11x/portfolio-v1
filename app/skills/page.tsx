import { generateMetadata } from '@/lib/metadata';
import { Header, Footer, Container } from '@/components/layout';
import { TechnicalToolbox } from '@/components/toolbox/TechnicalToolbox';
import { TechCategory } from '@/components/toolbox/TechCategory';
import { TechLegend } from '@/components/toolbox/TechLegend';
import { LearningRoadmap } from '@/components/toolbox/LearningRoadmap';
import { CertificationGrid } from '@/components/toolbox/CertificationGrid';
import { WorkflowSection } from '@/components/toolbox/WorkflowSection';
import { DeveloperEnvironment } from '@/components/toolbox/DeveloperEnvironment';
import { techStackContent } from '@/content/techstack';

export const metadata = generateMetadata({ 
  title: 'Technical Toolbox',
  description: 'An overview of my engineering capabilities, developer environment, and current learning roadmap.'
});

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <Container>
          
          {/* Header */}
          <div className="max-w-3xl mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Technical Toolbox
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              A transparent look at the technologies I use to build scalable software, the tools in my daily workflow, and the concepts I am actively mastering.
            </p>
          </div>

          <div className="flex flex-col space-y-12 md:space-y-16 max-w-4xl mx-auto">
            
            {/* Core Stack */}
            <TechnicalToolbox 
              title="Core Stack & Capabilities" 
              description="Rather than claiming arbitrary expertise, I classify technologies by my current relationship with them."
            >
              <div className="mb-10">
                <TechLegend />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {techStackContent.map((category) => (
                  <TechCategory key={category.category} {...category} />
                ))}
              </div>
            </TechnicalToolbox>

            {/* Learning Roadmap */}
            <TechnicalToolbox 
              title="Learning Roadmap" 
              description="Engineering is a continuous pursuit of knowledge. Here is what I am actively studying and what is next on my horizon."
            >
              <LearningRoadmap />
            </TechnicalToolbox>

              {/* Developer Environment */}
              <TechnicalToolbox 
                title="Developer Environment" 
                description="The tools I rely on daily to write, test, and ship code efficiently."
              >
                <DeveloperEnvironment />
              </TechnicalToolbox>

              {/* Engineering Workflow */}
              <TechnicalToolbox 
                title="Engineering Workflow" 
                description="How I approach transforming a problem into a production-ready solution."
              >
                <WorkflowSection />
              </TechnicalToolbox>

            {/* Certifications */}
            <TechnicalToolbox 
              title="Certifications & Credentials" 
              description="Formal education and verified credentials supporting my practical experience."
            >
              <CertificationGrid />
            </TechnicalToolbox>

          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
