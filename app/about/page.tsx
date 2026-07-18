import { generateMetadata } from '@/lib/metadata';
import { Header, Footer, Container } from '@/components/layout';
import { AboutSection } from '@/components/about/AboutSection';
import { JourneyTimeline } from '@/components/about/JourneyTimeline';
import { EducationCard } from '@/components/about/EducationCard';
import { StatsGrid } from '@/components/about/StatsGrid';
import { LearningPhilosophy } from '@/components/about/LearningPhilosophy';
import { InterestGrid } from '@/components/about/InterestGrid';
import { aboutContent } from '@/content/about';

export const metadata = generateMetadata({ 
  title: 'About & Journey',
  description: 'Learn more about my engineering journey, philosophy, and education.'
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 md:pt-32">
        <Container>
          
          {/* Hero / Intro */}
          <div className="max-w-3xl mb-12 md:mb-20 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-foreground">
              Building with curiosity.
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-foreground-muted leading-relaxed">
              <p>{aboutContent.whoIAm}</p>
              <p>{aboutContent.howILearn}</p>
              <p>{aboutContent.longTermInterest}</p>
            </div>
          </div>

          <StatsGrid />

          <div className="flex flex-col space-y-16 lg:space-y-24 py-12 md:py-24 max-w-4xl mx-auto">
            <AboutSection title="My Journey" className="py-0 md:py-0">
              <JourneyTimeline />
            </AboutSection>

            <AboutSection title="Education" className="py-0 md:py-0">
              <EducationCard />
            </AboutSection>
            
            <AboutSection title="Core Philosophy" className="py-0 md:py-0">
              <LearningPhilosophy />
            </AboutSection>

            <AboutSection title="Current Focus" className="py-0 md:py-0">
              <InterestGrid />
            </AboutSection>
          </div>

        </Container>
      </main>
      <Footer />
    </>
  );
}
