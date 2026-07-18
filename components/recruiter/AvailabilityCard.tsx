import { availabilityContent } from '@/content/availability';
import { CheckCircle2, XCircle } from 'lucide-react';

export function AvailabilityCard() {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border/50 h-full">
      <h3 className="text-xl font-bold text-foreground mb-6">Current Availability</h3>
      
      <div className="space-y-4 mb-6">
        {availabilityContent.roles.map((role) => (
          <div key={role.title} className="flex items-center justify-between">
            <span className="text-foreground-muted font-medium">{role.title}</span>
            {role.status === 'Open' ? (
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-500 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" /> Open
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground-subtle uppercase tracking-wider bg-surface-hover px-2 py-0.5 rounded-full">
                <XCircle className="w-3.5 h-3.5" /> Closed
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border/50 space-y-2">
        <p className="text-sm text-foreground-muted flex justify-between">
          <span>Expected Graduation:</span>
          <span className="font-semibold text-foreground">{availabilityContent.expectedGraduation}</span>
        </p>
        <p className="text-sm text-foreground-muted flex justify-between">
          <span>Work Preferences:</span>
          <span className="font-semibold text-foreground">{availabilityContent.preferences.join(' • ')}</span>
        </p>
      </div>
    </div>
  );
}
