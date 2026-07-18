import { socialContent } from '@/content/social';
import { Github, Linkedin } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <a href={socialContent.github.href} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-border bg-surface hover:bg-surface-hover transition-colors flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground group focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
        <Github className="w-4 h-4 group-hover:text-accent transition-colors" />
        GitHub
      </a>
      <a href={socialContent.linkedin.href} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-border bg-surface hover:bg-surface-hover transition-colors flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground group focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
        <Linkedin className="w-4 h-4 group-hover:text-accent transition-colors" />
        LinkedIn
      </a>
    </div>
  );
}
