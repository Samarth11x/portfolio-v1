import { certificationsContent } from '@/content/certifications';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function CertificationGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {certificationsContent.map((cert) => {
        const content = (
          <>
            <div className="flex justify-between items-start">
              <h3 className="text-base font-bold text-foreground leading-tight">{cert.title}</h3>
              {cert.url && <ExternalLink className="w-4 h-4 text-foreground-subtle group-hover:text-accent transition-colors shrink-0" />}
            </div>
            <p className="text-sm text-foreground-muted">{cert.issuer}</p>
          </>
        );

        if (cert.url) {
          return (
            <Link 
              key={cert.title} 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-surface border border-border/50 flex flex-col gap-2 hover:border-accent/50 transition-colors cursor-pointer group"
            >
              {content}
            </Link>
          );
        }

        return (
          <div 
            key={cert.title} 
            className="p-6 rounded-2xl bg-surface border border-border/50 flex flex-col gap-2"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
