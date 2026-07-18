import { interestsContent } from '@/content/interests';

export function InterestGrid() {
  return (
    <div className="flex flex-wrap gap-3">
      {interestsContent.map((interest, index) => (
        <span 
          key={index}
          className="px-4 py-2 rounded-full bg-surface border border-border/50 text-foreground-muted text-sm font-medium hover:text-foreground hover:border-accent/50 transition-colors cursor-default"
        >
          {interest}
        </span>
      ))}
    </div>
  );
}
