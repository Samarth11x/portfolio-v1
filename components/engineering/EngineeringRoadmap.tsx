import { engineeringRoadmap } from '@/content/roadmap';

export function EngineeringRoadmap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12 rounded-3xl bg-surface/30 border border-border/50">
      {engineeringRoadmap.map((category) => (
        <div key={category.category}>
          <h3 className="text-xl font-bold tracking-tight text-foreground mb-6 flex items-center gap-3">
            {category.category === 'Current Focus' ? (
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            ) : (
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
            )}
            {category.category}
          </h3>
          <ul className="space-y-4">
            {category.items.map((item) => (
              <li key={item} className="text-foreground-muted flex items-center gap-3 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground-subtle" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
