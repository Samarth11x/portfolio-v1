import { ReactNode } from 'react';

interface TechnicalToolboxProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function TechnicalToolbox({ title, description, children }: TechnicalToolboxProps) {
  return (
    <section className="py-12 md:py-24 animate-slide-up">
      <div className="mb-10 md:mb-16 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-foreground-muted max-w-2xl">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
