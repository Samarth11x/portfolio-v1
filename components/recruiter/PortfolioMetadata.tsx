import { portfolioMetadata } from '@/content/portfolio-metadata';
import { ShieldCheck } from 'lucide-react';

export function PortfolioMetadata() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {portfolioMetadata.map((meta) => (
        <div key={meta.label} className="p-4 rounded-xl bg-surface/30 border border-border/30 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-medium text-foreground-subtle uppercase tracking-wider mb-1">{meta.label}</p>
            <p className="text-sm font-semibold text-foreground">
              {typeof meta.value === 'boolean' ? (meta.value ? 'Verified' : 'N/A') : meta.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
