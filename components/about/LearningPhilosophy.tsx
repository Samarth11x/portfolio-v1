import { philosophyContent } from '@/content/philosophy';

export function LearningPhilosophy() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {philosophyContent.map((item, index) => (
        <div key={index} className="p-6 rounded-2xl bg-surface/50 border border-border/30 hover:border-border/80 transition-colors">
          <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
          <p className="text-foreground-muted leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
