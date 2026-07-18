import { generateMetadata } from '@/lib/metadata';
import { Header, Footer, Container } from '@/components/layout';
import { recruiterContent } from '@/content/recruiter';

import { RecruiterOverview } from '@/components/recruiter/RecruiterOverview';
import { RecruiterSnapshot } from '@/components/recruiter/RecruiterSnapshot';
import { ResumeCard } from '@/components/recruiter/ResumeCard';
import { ContactGrid } from '@/components/recruiter/ContactGrid';
import { AvailabilityCard } from '@/components/recruiter/AvailabilityCard';
import { RecruiterFAQ } from '@/components/recruiter/RecruiterFAQ';
import { PortfolioMetadata } from '@/components/recruiter/PortfolioMetadata';
import { SocialLinks } from '@/components/recruiter/SocialLinks';
import { FinalCTA } from '@/components/recruiter/FinalCTA';

export const metadata = generateMetadata({ 
  title: 'Contact & Recruiter Info',
  description: 'Everything you need to know about my background, current availability, and how to get in touch.'
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <Container>
          
          {/* Header */}
          <div className="max-w-3xl mb-12 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
              {recruiterContent.header.title}
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
              {recruiterContent.header.description}
            </p>
          </div>

          <div className="space-y-6 md:space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-2">
                <RecruiterOverview title="Overview">
                  <RecruiterSnapshot />
                </RecruiterOverview>
                
                <RecruiterOverview title="Professional Background" description="Download my full curriculum vitae or review the high-level summary.">
                  <ResumeCard />
                </RecruiterOverview>
              </div>

              <div className="lg:col-span-1 border-t border-border/30 pt-12 lg:pt-0 lg:border-t-0 space-y-8 lg:space-y-12">
                <RecruiterOverview title="Connect">
                  <ContactGrid />
                  <div className="mt-8">
                    <p className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-4">Elsewhere</p>
                    <SocialLinks />
                  </div>
                </RecruiterOverview>
                
                <RecruiterOverview title="Availability">
                  <AvailabilityCard />
                </RecruiterOverview>
              </div>
            </div>

            <RecruiterOverview title="Frequently Asked Questions" description="Answers to common questions I receive from technical recruiters.">
              <RecruiterFAQ />
            </RecruiterOverview>

            <RecruiterOverview title="Portfolio Telemetry" description="A transparent look at the engineering standards behind this application.">
              <PortfolioMetadata />
            </RecruiterOverview>

            <div className="pt-12 md:pt-24 pb-8 animate-fade-in">
              <FinalCTA />
            </div>

          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
