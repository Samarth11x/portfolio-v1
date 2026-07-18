'use client';

import { useEffect } from 'react';
import { Header, Footer, Container } from '@/components/layout';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center pt-24 md:pt-32 pb-16 min-h-[70vh]">
        <Container className="text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 mx-auto flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
            Something went wrong
          </h1>
          <p className="text-foreground-muted mb-8 max-w-md mx-auto">
            An unexpected error occurred. We have been notified and are looking into it.
          </p>
          <button
            onClick={() => reset()}
            className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Try again
          </button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
