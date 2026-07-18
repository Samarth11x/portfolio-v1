import { qualityStandards } from '@/content/quality';
import { CheckCircle2 } from 'lucide-react';

export function QualityStandards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {qualityStandards.map((item) => (
        <div key={item.standard} className="flex items-start gap-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
          <div>
            <h3 className="text-base font-bold text-foreground mb-1">{item.standard}</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              {item.why}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
