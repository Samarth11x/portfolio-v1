import { developmentWorkflow } from '@/content/workflow-principles';

export function DevelopmentWorkflow() {
  return (
    <div className="relative border-l-2 border-border/50 ml-4 md:ml-6 space-y-12 pb-4">
      {developmentWorkflow.map((step, index) => (
        <div key={step.phase} className="relative pl-8 md:pl-12 group">
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-border group-hover:border-accent group-hover:shadow-[0_0_8px_rgba(var(--accent),0.5)] transition-all duration-300" />
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors flex items-center gap-3">
            <span className="text-sm font-mono text-foreground-subtle">0{index + 1}</span>
            {step.phase}
          </h3>
          <p className="text-foreground-muted leading-relaxed max-w-2xl">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
