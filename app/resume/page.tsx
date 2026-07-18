import { generateMetadata } from '@/lib/metadata';
import { Header, Footer, Section, Container } from '@/components/layout';

export const metadata = generateMetadata({ title: 'Resume' });

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <Container className="text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Resume</h1>
            <p className="text-lg text-foreground-muted max-w-lg mx-auto">
              My resume is currently being updated. Please check back soon or reach out via LinkedIn.
            </p>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
