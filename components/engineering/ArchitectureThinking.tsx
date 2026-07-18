import { architectureThinking } from '@/content/architecture';
import { Layers } from 'lucide-react';

export function ArchitectureThinking() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {architectureThinking.map((item) => (
        <div key={item.pattern} className="flex gap-4 p-6 rounded-xl hover:bg-surface/30 transition-colors">
          <div className="shrink-0 mt-1">
            <Layers className="w-5 h-5 text-foreground-subtle" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.pattern}</h3>
            <p className="text-foreground-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
