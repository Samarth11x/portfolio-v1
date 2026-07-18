import { statsContent } from '@/content/stats';

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-8 border-y border-border/30">
      {statsContent.map((stat, index) => (
        <div key={index} className="flex flex-col items-center justify-center text-center space-y-2">
          <span className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">
            {stat.value}
          </span>
          <span className="text-xs md:text-sm text-foreground-muted font-medium uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
