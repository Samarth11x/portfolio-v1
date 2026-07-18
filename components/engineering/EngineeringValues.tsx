import { engineeringValues } from '@/content/values';

export function EngineeringValues() {
  return (
    <div className="flex flex-col gap-6">
      {engineeringValues.map((value) => (
        <div key={value.title} className="border-l-4 border-accent/50 pl-6 py-2">
          <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
          <p className="text-foreground-muted leading-relaxed">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  );
}
