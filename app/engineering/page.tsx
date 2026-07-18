import { generateMetadata } from '@/lib/metadata';
import { Header, Footer, Container } from '@/components/layout';
import { EngineeringOverview } from '@/components/engineering/EngineeringOverview';
import { EngineeringPrinciples } from '@/components/engineering/EngineeringPrinciples';
import { DevelopmentWorkflow } from '@/components/engineering/DevelopmentWorkflow';
import { ArchitectureThinking } from '@/components/engineering/ArchitectureThinking';
import { QualityStandards } from '@/components/engineering/QualityStandards';
import { EngineeringRoadmap } from '@/components/engineering/EngineeringRoadmap';
import { LearningResources } from '@/components/engineering/LearningResources';
import { EngineeringValues } from '@/components/engineering/EngineeringValues';

export const metadata = generateMetadata({ 
  title: 'Engineering',
  description: 'An overview of my engineering philosophy, architecture thinking, and software development lifecycle.'
});

export default function EngineeringPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <Container>
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              Proof of Engineering
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              This is not a list of frameworks. This is an engineering handbook documenting how I design systems, maintain quality, and approach the craft of software development.
            </p>
          </div>

          <div className="flex flex-col space-y-12 md:space-y-16 max-w-4xl mx-auto">
            
            <EngineeringOverview title="Engineering Philosophy" description="The core principles that guide every technical decision I make.">
              <EngineeringPrinciples />
            </EngineeringOverview>

            <EngineeringOverview title="Core Values">
              <EngineeringValues />
            </EngineeringOverview>

            <EngineeringOverview title="Development Workflow" description="The rigorous lifecycle applied to transforming an idea into production-ready software.">
              <DevelopmentWorkflow />
            </EngineeringOverview>

            <EngineeringOverview title="Architectural Thinking" description="Patterns and decisions actively employed to build scalable, maintainable systems.">
              <ArchitectureThinking />
            </EngineeringOverview>

            <EngineeringOverview title="Quality Standards" description="Non-negotiable benchmarks that define what 'done' means.">
              <QualityStandards />
            </EngineeringOverview>

            <EngineeringOverview title="Engineering Roadmap" description="Where my attention is focused today and the systems I am building towards tomorrow.">
              <EngineeringRoadmap />
            </EngineeringOverview>

            <EngineeringOverview title="Continuous Learning" description="The resources shaping my engineering perspective.">
              <LearningResources />
            </EngineeringOverview>

          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
