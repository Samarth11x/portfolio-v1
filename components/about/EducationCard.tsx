import { educationContent } from '@/content/education';

export function EducationCard() {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border/50 transition-all hover:border-border">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">{educationContent.institution}</h3>
          <p className="text-foreground-muted">{educationContent.degree} in {educationContent.major}</p>
        </div>
        <div className="text-sm font-mono text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
          {educationContent.graduation}
        </div>
      </div>
    </div>
  );
}
