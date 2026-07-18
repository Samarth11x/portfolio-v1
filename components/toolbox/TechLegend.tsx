export function TechLegend() {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
        <span className="text-foreground-muted">Comfortable Building With</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
        <span className="text-foreground-muted">Actively Learning</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
        <span className="text-foreground-muted">Exploring Next</span>
      </div>
    </div>
  );
}
