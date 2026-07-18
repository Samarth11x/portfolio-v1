import type { TechItem } from '@/content/techstack';

export function TechCard({ name, proficiency }: TechItem) {
  const getProficiencyColor = (level: string) => {
    switch (level) {
      case 'comfortable':
        return 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]';
      case 'learning':
        return 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]';
      case 'exploring':
        return 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]';
      default:
        return 'bg-border';
    }
  };

  return (
    <div className="px-4 py-2.5 rounded-xl bg-surface border border-border/50 hover:border-border transition-colors flex items-center gap-3">
      <span className={`w-2 h-2 rounded-full ${getProficiencyColor(proficiency)}`} />
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
}
