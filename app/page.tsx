import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

import { Header, Footer, Section, Container } from '@/components/layout';
import { Button, Card, CardHeader, CardBody, Badge, Tag, Divider } from '@/components/ui';

import { heroContent } from '@/content/hero';
import { socialContent } from '@/content/social';


/**
 * @file app/page.tsx
 * @description The main landing page / hero experience.
 * Composes the UI primitives to present a premium, professional introduction.
 */
export default function HomePage() {
  // Extract a few representative skills for the hero section
  const representativeSkills = [
    'C', 'C++', 'Python', 'AI', 'Js', 'Html', 'OS', 'Networking'
  ];

  return (
    <>
      <Header />
      
      <main className="flex-grow">
        <Section variant="ambient" className="min-h-[calc(100vh-80px)] flex items-center">
          <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center py-12 lg:py-0">
            
            {/* Left Column: Introduction (Order 2 on Mobile, 1 on Desktop) */}
            <div className="flex flex-col space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  {heroContent.name}
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold gradient-text">
                  {heroContent.title}
                </h2>
                <p className="text-base sm:text-lg text-foreground-muted max-w-lg leading-relaxed">
                  <span className="block mb-2 font-medium text-foreground">{heroContent.tagline}</span>
                  {heroContent.introduction}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" href={heroContent.ctas.primary.href} rightIcon={<ArrowRight className="h-4 w-4" />}>
                  {heroContent.ctas.primary.label}
                </Button>
                <Button variant="secondary" href={heroContent.ctas.secondary.href} external leftIcon={<Download className="h-4 w-4" />}>
                  {heroContent.ctas.secondary.label}
                </Button>
                <div className="flex items-center gap-2 ml-2">
                  <Button variant="tertiary" size="sm" href={socialContent.github.href} external aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="tertiary" size="sm" href={socialContent.linkedin.href} external aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Tech Stack Preview */}
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-4">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {representativeSkills.map((skill) => (
                    <Badge key={skill} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visuals & Focus (Order 1 on Mobile, 2 on Desktop) */}
            <div className="flex flex-col items-center lg:items-end justify-center space-y-10 animate-slide-up order-1 lg:order-2">
              
              {/* Portrait */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-background-elevated shadow-xl ring-1 ring-border/50">
                <Image
                  src="/images/portrait.jpg"
                  alt={`${heroContent.name} Portrait`}
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Current Focus Card */}
              <Card interactive className="w-full max-w-sm backdrop-blur-sm bg-background-elevated/80">
                <CardHeader>
                  <h3 className="text-base font-semibold flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    Current Focus
                  </h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-foreground-subtle uppercase tracking-wider mb-1.5">
                      Building
                    </h4>
                    <div className="flex flex-col gap-1 text-foreground">
                      {heroContent.currentFocus.projects.map((p) => (
                        <span key={p}>• {p}</span>
                      ))}
                    </div>
                  </div>
                  
                  <Divider className="my-3" />
                  
                  <div>
                    <h4 className="text-xs font-semibold text-foreground-subtle uppercase tracking-wider mb-1.5">
                      Learning
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {heroContent.currentFocus.learning.map((l) => (
                        <Tag key={l} active className="text-[10px] px-2 py-0.5 min-h-0 h-auto">
                          {l}
                        </Tag>
                      ))}
                    </div>
                  </div>

                  <Divider className="my-3" />
                  
                  <div className="flex justify-between items-center text-xs font-medium">
                    <span className="text-foreground-subtle">Availability</span>
                    <span className="text-accent text-right max-w-[60%] leading-tight">{heroContent.currentFocus.careerGoal}</span>
                  </div>
                </CardBody>
              </Card>

            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
