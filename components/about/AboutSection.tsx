import { ReactNode } from 'react';

interface AboutSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function AboutSection({ title, children, className = '' }: AboutSectionProps) {
  return (
    <section className={`py-12 md:py-24 animate-slide-up ${className}`.trim()}>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 md:mb-12 text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
