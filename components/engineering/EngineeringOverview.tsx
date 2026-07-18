import { ReactNode } from 'react';

interface EngineeringOverviewProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function EngineeringOverview({ title, description, children }: EngineeringOverviewProps) {
  return (
    <section className="py-16 md:py-24 animate-slide-up border-b border-border/30 last:border-0">
      <div className="mb-12 md:mb-16 space-y-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-lg md:text-xl text-foreground-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
