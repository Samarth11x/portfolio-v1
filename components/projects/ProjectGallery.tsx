import { ProjectCaseStudy } from '@/content/projects';
import Image from 'next/image';
import { Image as ImageIcon } from 'lucide-react';

interface ProjectGalleryProps {
  project: ProjectCaseStudy;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const hasImages = project.images && project.images.length > 0;

  return (
    <section className="py-12 md:py-16 border-t border-border/30">
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-3">
          Gallery
        </h2>
      </div>

      {hasImages ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images!.map((img, idx) => (
            <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-border/50 bg-surface">
              <Image 
                src={img} 
                alt={`${project.title} screenshot ${idx + 1}`} 
                fill 
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl border border-border/50 bg-surface-hover flex flex-col items-center justify-center text-foreground-muted">
          <ImageIcon className="w-12 h-12 mb-4 opacity-50" />
          <p className="text-sm uppercase tracking-wider font-semibold opacity-70">UI Screenshots Pending</p>
        </div>
      )}
    </section>
  );
}
