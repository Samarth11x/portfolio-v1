import { ReactNode } from 'react';

interface RecruiterOverviewProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function RecruiterOverview({ title, description, children }: RecruiterOverviewProps) {
  return (
    <section className="py-12 md:py-16 animate-slide-up border-b border-border/30 last:border-0">
      <div className="mb-10 md:mb-12 space-y-3 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-base md:text-lg text-foreground-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
