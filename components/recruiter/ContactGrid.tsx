import { contactContent } from '@/content/contact';
import { Mail, MapPin } from 'lucide-react';

export function ContactGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a href={`mailto:${contactContent.email}`} className="p-6 rounded-2xl bg-surface border border-border/50 hover:border-accent/50 transition-colors flex items-center gap-4 group cursor-pointer">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <Mail className="w-5 h-5 text-accent" />
        </div>
        <div>
          <p className="text-sm text-foreground-subtle mb-1">Email</p>
          <p className="text-base font-semibold text-foreground">{contactContent.email}</p>
        </div>
      </a>
      <div className="p-6 rounded-2xl bg-surface border border-border/50 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface-hover flex items-center justify-center shrink-0 border border-border/50">
          <MapPin className="w-5 h-5 text-foreground-muted" />
        </div>
        <div>
          <p className="text-sm text-foreground-subtle mb-1">Location</p>
          <p className="text-base font-semibold text-foreground">{contactContent.location}</p>
        </div>
      </div>
    </div>
  );
}
