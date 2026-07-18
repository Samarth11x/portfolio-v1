import Link from 'next/link';
import { Header, Footer, Container } from '@/components/layout';
import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({ 
  title: 'Page Not Found',
  noIndex: true
});

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center pt-24 md:pt-32 pb-16 min-h-[70vh]">
        <Container className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground mb-6">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-foreground-muted mb-8 max-w-md mx-auto">
            The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
          </p>
          <Link 
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Return Home
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
