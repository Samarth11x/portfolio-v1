import { recruiterContent } from '@/content/recruiter';

export function RecruiterSnapshot() {
  return (
    <div className="p-8 md:p-10 rounded-3xl bg-surface/40 border border-border/50">
      <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
        {recruiterContent.snapshot.introduction}
      </p>
    </div>
  );
}
