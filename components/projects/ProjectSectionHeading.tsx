interface ProjectSectionHeadingProps {
  title: string;
  description?: string;
}

export function ProjectSectionHeading({ title, description }: ProjectSectionHeadingProps) {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-foreground-muted leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}
