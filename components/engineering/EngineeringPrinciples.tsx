import { engineeringPrinciples } from '@/content/engineering';
import { Lightbulb } from 'lucide-react';

export function EngineeringPrinciples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {engineeringPrinciples.map((principle) => (
        <div key={principle.title} className="p-8 rounded-2xl bg-surface/40 border border-border/50 flex flex-col gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-2">
            <Lightbulb className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-foreground">{principle.title}</h3>
          <p className="text-foreground-muted leading-relaxed flex-grow">
            {principle.description}
          </p>
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-sm text-foreground-subtle">
              <strong className="text-foreground-muted">Application: </strong>
              {principle.application}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
