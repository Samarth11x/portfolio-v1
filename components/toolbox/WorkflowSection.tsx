import { workflowContent } from '@/content/workflow';

export function WorkflowSection() {
  return (
    <div className="space-y-8 border-l-2 border-border/50 pl-6 md:pl-8 ml-2 md:ml-4">
      {workflowContent.map((step) => (
        <div key={step.phase} className="relative group">
          <div className="absolute -left-[35px] md:-left-[43px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-border group-hover:border-accent transition-colors duration-300" />
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{step.phase}</h3>
          <p className="text-foreground-muted leading-relaxed">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
