import { timelineContent } from '@/content/timeline';

export function JourneyTimeline() {
  return (
    <div className="space-y-10 border-l-2 border-border/50 pl-6 md:pl-10 ml-2 md:ml-4 py-4">
      {timelineContent.map((item, index) => (
        <div key={index} className="relative group">
          {/* Timeline Dot */}
          <div className="absolute -left-[35px] md:-left-[51px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-accent transition-colors duration-300 group-hover:bg-accent" />
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
          {item.date && <p className="text-sm text-foreground-muted mb-2 font-mono">{item.date}</p>}
          <p className="text-foreground-muted leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
