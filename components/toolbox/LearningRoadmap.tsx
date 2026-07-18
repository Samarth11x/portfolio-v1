import { learningContent } from '@/content/learning';

export function LearningRoadmap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-10 rounded-2xl bg-surface/50 border border-border/50">
      <div>
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
          Current Focus
        </h3>
        <ul className="space-y-3">
          {learningContent.currentFocus.map((item) => (
            <li key={item} className="text-foreground-muted flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground-subtle" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-6 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
          Future Learning
        </h3>
        <ul className="space-y-3">
          {learningContent.futureLearning.map((item) => (
            <li key={item} className="text-foreground-muted flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-foreground-subtle" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
