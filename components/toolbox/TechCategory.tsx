import { TechCard } from './TechCard';
import type { TechCategory as TechCategoryType } from '@/content/techstack';

export function TechCategory({ category, items }: TechCategoryType) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold tracking-tight text-foreground">{category}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <TechCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
